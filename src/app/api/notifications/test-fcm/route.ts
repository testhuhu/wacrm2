import { NextResponse } from 'next/server'
import { sendFcmNotification, parseServiceAccount } from '@/lib/notifications/fcm'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

export async function GET() {
  const saEnv = process.env.FIREBASE_SERVICE_ACCOUNT
  const hasSa = !!saEnv
  const saType = typeof saEnv
  const saLen = typeof saEnv === 'string' ? saEnv.length : 0

  const saParsed = parseServiceAccount(saEnv)
  const saInfo = {
    project_id: saParsed?.project_id,
    client_email: saParsed?.client_email,
    has_private_key: !!saParsed?.private_key,
    private_key_len: saParsed?.private_key ? saParsed.private_key.length : 0,
  }

  // Fetch device tokens
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { data: tokens, error: tokensErr } = await supabase
    .from('fcm_device_tokens')
    .select('*')

  // Attempt send
  const sendResult = await sendFcmNotification({
    title: '🔔 اختبار تشخيصي مباشر',
    body: 'هذا إشعار تجريبي مباشر من خادم Netlify للتحقق من وصول الإشعارات والتطبيق مغلق!',
  })

  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env_check: {
      has_FIREBASE_SERVICE_ACCOUNT: hasSa,
      sa_length: saLen,
      sa_type: saType,
      is_valid_sa: !!saParsed,
      sa_info: saInfo,
    },
    tokens_in_db: tokens,
    tokens_error: tokensErr ? tokensErr.message : null,
    send_fcm_success: sendResult,
  })
}
