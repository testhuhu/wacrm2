import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'
import { BUILTIN_FIREBASE_SERVICE_ACCOUNT } from './firebase-credentials'

interface FcmMessagePayload {
  title: string
  body: string
  conversationId?: string
  topic?: string
  token?: string
}

interface ServiceAccount {
  project_id: string
  client_email: string
  private_key: string
}

let cachedAccessToken: { token: string; expiresAt: number } | null = null

let _adminClient: any = null
function getSupabaseAdmin() {
  if (!_adminClient) {
    _adminClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
  }
  return _adminClient
}

/**
 * Generate Google OAuth2 Access Token for Firebase Cloud Messaging v1 API
 */
async function getGoogleAccessToken(sa: ServiceAccount): Promise<string | null> {
  const now = Math.floor(Date.now() / 1000)

  if (cachedAccessToken && cachedAccessToken.expiresAt > now + 60) {
    return cachedAccessToken.token
  }

  try {
    const header = { alg: 'RS256', typ: 'JWT' }
    const claimSet = {
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/firebase.messaging',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    }

    const encode = (obj: Record<string, unknown>) =>
      Buffer.from(JSON.stringify(obj))
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')

    const unsignedToken = `${encode(header)}.${encode(claimSet)}`

    // Normalize private key to handle literal \n escape sequences from env vars
    const privateKey = sa.private_key.includes('\\n')
      ? sa.private_key.replace(/\\n/g, '\n')
      : sa.private_key

    const signer = crypto.createSign('RSA-SHA256')
    signer.update(unsignedToken)
    const signature = signer
      .sign(privateKey, 'base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')

    const jwt = `${unsignedToken}.${signature}`

    const res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('[fcm] OAuth2 token exchange error:', errText)
      return null
    }

    const data = (await res.json()) as { access_token: string; expires_in: number }
    cachedAccessToken = {
      token: data.access_token,
      expiresAt: now + (data.expires_in || 3600),
    }

    return data.access_token
  } catch (err) {
    console.error('[fcm] Failed to generate Google Access Token:', err)
    return null
  }
}

export function parseServiceAccount(envVal: unknown): ServiceAccount | null {
  if (!envVal) return null
  let cur: any = envVal
  for (let i = 0; i < 4; i++) {
    if (typeof cur === 'object' && cur !== null) {
      const pid = cur.project_id || cur.projectId
      const email = cur.client_email || cur.clientEmail
      const key = cur.private_key || cur.privateKey
      if (pid && email && key) {
        return { project_id: pid, client_email: email, private_key: key }
      }
    }
    if (typeof cur === 'string') {
      let trimmed = cur.trim()
      if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
        trimmed = trimmed.slice(1, -1).trim()
      }
      if (!trimmed.startsWith('{') && trimmed.includes('project_id')) {
        trimmed = '{' + trimmed + '}'
      }
      try {
        if (trimmed.startsWith('{') || trimmed.startsWith('[') || trimmed.startsWith('"') || trimmed.startsWith('\\"')) {
          cur = JSON.parse(trimmed)
          continue
        }
      } catch {}
      try {
        const decoded = Buffer.from(trimmed, 'base64').toString('utf8')
        let decTrimmed = decoded.trim()
        if (!decTrimmed.startsWith('{') && decTrimmed.includes('project_id')) {
          decTrimmed = '{' + decTrimmed + '}'
        }
        if (decTrimmed.startsWith('{')) {
          cur = JSON.parse(decTrimmed)
          continue
        }
      } catch {}
    }
    break
  }

  if (typeof cur === 'object' && cur !== null) {
    const pid = cur.project_id || cur.projectId
    const email = cur.client_email || cur.clientEmail
    const key = cur.private_key || cur.privateKey
    if (pid && email && key) {
      return { project_id: pid, client_email: email, private_key: key }
    }
  }

  return null
}

export function resolveServiceAccount(): ServiceAccount | null {
  const envVal = process.env.FIREBASE_SERVICE_ACCOUNT
  const parsed = parseServiceAccount(envVal)
  if (parsed && parsed.project_id && parsed.client_email && parsed.private_key) {
    return parsed
  }
  // Fallback to built-in credentials
  if (BUILTIN_FIREBASE_SERVICE_ACCOUNT && BUILTIN_FIREBASE_SERVICE_ACCOUNT.project_id) {
    return BUILTIN_FIREBASE_SERVICE_ACCOUNT as unknown as ServiceAccount
  }
  return null
}

/**
 * Send Firebase Cloud Messaging (FCM) v1 Push Notification to Android devices
 */
export async function sendFcmNotification(payload: FcmMessagePayload): Promise<boolean> {
  const sa = resolveServiceAccount()
  if (!sa || !sa.project_id || !sa.client_email || !sa.private_key) {
    console.warn('[fcm] No valid Firebase service account found')
    return false
  }

  const accessToken = await getGoogleAccessToken(sa)
  if (!accessToken) {
    console.error('[fcm] Could not obtain Google OAuth2 access token')
    return false
  }

  // Collect target tokens: direct token param OR tokens stored in Supabase database
  const targetTokens: string[] = []
  if (payload.token) {
    targetTokens.push(payload.token)
  } else {
    try {
      const { data: rows } = await getSupabaseAdmin()
        .from('fcm_device_tokens')
        .select('token')
        .limit(50)

      if (rows && rows.length > 0) {
        for (const row of rows) {
          if (row.token && !targetTokens.includes(row.token)) {
            targetTokens.push(row.token)
          }
        }
      }
    } catch {
      // Ignore database lookup error
    }
  }

  // If we have registered device tokens, send directly to each token
  if (targetTokens.length > 0) {
    let sentAny = false
    for (const token of targetTokens) {
      const fcmBody = {
        message: {
          token,
          notification: {
            title: payload.title,
            body: payload.body,
          },
          data: {
            title: payload.title,
            body: payload.body,
            conversationId: payload.conversationId || '',
            url: '/inbox',
          },
          android: {
            priority: 'high',
            notification: {
              title: payload.title,
              body: payload.body,
              sound: 'default',
              channel_id: 'wacrm_messages',
              notification_priority: 'PRIORITY_MAX',
              default_vibrate_timings: true,
              default_sound: true,
              click_action: 'FCM_PLUGIN_ACTIVITY',
            },
          },
        },
      }

      try {
        const res = await fetch(
          `https://fcm.googleapis.com/v1/projects/${sa.project_id}/messages:send`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fcmBody),
          }
        )

        if (res.ok) {
          sentAny = true
        } else {
          const err = await res.text()
          console.error(`[fcm] Token send failed for ${token.slice(0, 10)}...:`, err)
          if (res.status === 404 || err.includes('UNREGISTERED')) {
            // Delete unregistered/stale token from Supabase
            await getSupabaseAdmin()
              .from('fcm_device_tokens')
              .delete()
              .eq('token', token)
              .catch(() => {})
          }
        }
      } catch (err) {
        console.error('[fcm] Error sending to token:', err)
      }
    }
    return sentAny
  }

  // Fallback to topic broadcast if no specific device tokens registered
  const topicBody = {
    message: {
      topic: payload.topic || 'wacrm_alerts',
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: {
        conversationId: payload.conversationId || '',
        url: '/inbox',
      },
      android: {
        priority: 'high',
        notification: {
          sound: 'notification',
          channel_id: 'wacrm_messages',
          notification_priority: 'PRIORITY_MAX',
          default_vibrate_timings: true,
          click_action: 'FCM_PLUGIN_ACTIVITY',
        },
      },
    },
  }

  try {
    const res = await fetch(
      `https://fcm.googleapis.com/v1/projects/${sa.project_id}/messages:send`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(topicBody),
      }
    )
    return res.ok
  } catch (err) {
    console.error('[fcm] Topic send error:', err)
    return false
  }
}
