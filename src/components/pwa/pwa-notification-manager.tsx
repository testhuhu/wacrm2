"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Capacitor } from "@capacitor/core";
import { PushNotifications } from "@capacitor/push-notifications";
import { createClient } from "@/lib/supabase/client";
import { playChimeSound, triggerAlert } from "@/lib/notifications";

export function PwaNotificationManager() {
  const router = useRouter();
  const lastAlertTimeRef = useRef<number>(0);
  const handledMessageIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    // 1. Prime / Unlock audio on user touch or click
    const unlockAudio = () => {
      playChimeSound();
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
    window.addEventListener("click", unlockAudio, { passive: true });
    window.addEventListener("touchstart", unlockAudio, { passive: true });

    // 2. Native Capacitor Push Notifications initialization
    if (Capacitor.isNativePlatform()) {
      try {
        // Initialize Notification Channels on Android
        PushNotifications.createChannel({
          id: "wacrm_messages",
          name: "رسائل واتساب الواردة",
          description: "إشعارات الرسائل الجديدة مع الصوت والاهتزاز",
          importance: 5,
          visibility: 1,
          sound: "notification.wav",
          vibration: true,
        }).catch(() => {});

        PushNotifications.createChannel({
          id: "default",
          name: "عام",
          description: "إشعارات عامة",
          importance: 5,
          visibility: 1,
          vibration: true,
        }).catch(() => {});

        // Request FCM Push permissions
        PushNotifications.checkPermissions()
          .then((status) => {
            if (status.receive !== "granted") {
              return PushNotifications.requestPermissions();
            }
            return status;
          })
          .then((res) => {
            if (res.receive === "granted") {
              PushNotifications.register();
            }
          })
          .catch((err) => {
            console.warn("[fcm] Push permission error:", err);
          });

        PushNotifications.addListener("registration", (token) => {
          console.log("[fcm] Device registered token:", token.value);
          fetch("/api/notifications/fcm-token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: token.value }),
          }).catch(() => {});
        });

        PushNotifications.addListener("pushNotificationReceived", (notification) => {
          // If the app is active in foreground when push arrives, play sound and haptics
          const now = Date.now();
          if (now - lastAlertTimeRef.current > 2000) {
            lastAlertTimeRef.current = now;
            triggerAlert(
              notification.title || "رسالة واتساب جديدة 💬",
              notification.body || "",
              notification.data?.conversationId
            );
          }
        });

        PushNotifications.addListener("pushNotificationActionPerformed", () => {
          router.push("/inbox");
        });
      } catch (err) {
        console.warn("[native] Push setup error:", err);
      }
    } else {
      // 3. Web Service Worker & Browser Notifications
      if (typeof window !== "undefined" && "serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => {
            reg.update().catch(() => {});
          })
          .catch((err) => {
            console.warn("[pwa] SW registration failed:", err);
          });
      }

      if (typeof window !== "undefined" && "Notification" in window) {
        if (Notification.permission === "default") {
          Notification.requestPermission().catch(() => {});
        }
      }
    }

    const fireNotification = (messageId: string, bodyText: string, conversationId?: string) => {
      // Check if this exact message was already alerted
      if (handledMessageIdsRef.current.has(messageId)) {
        return;
      }
      handledMessageIdsRef.current.add(messageId);

      // Clean up old set entries if it grows large
      if (handledMessageIdsRef.current.size > 100) {
        const arr = Array.from(handledMessageIdsRef.current);
        handledMessageIdsRef.current = new Set(arr.slice(arr.length - 50));
      }

      const now = Date.now();
      if (now - lastAlertTimeRef.current < 1500) {
        return; // debounce rapid bursts within 1.5s
      }
      lastAlertTimeRef.current = now;

      const title = "رسالة واتساب جديدة 💬";

      // Show interactive in-app toast
      toast.info(title, {
        description: bodyText,
        duration: 6000,
        action: {
          label: "فتح المحادثة",
          onClick: () => {
            router.push("/inbox");
          },
        },
      });

      // Trigger Chime Sound and Vibration
      triggerAlert(title, bodyText, conversationId);
    };

    // 4. Supabase Realtime Listener (ONLY for new customer messages)
    const supabase = createClient();
    const channelName = `pwa-inbound-alerts-${Date.now()}`;
    const channel = supabase.channel(channelName);

    channel
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          const msg = payload.new as {
            id: string;
            conversation_id: string;
            sender_type: string;
            content_text?: string;
            content_type?: string;
          };

          // ONLY trigger alert for inbound customer messages (not bot, not agent, not system)
          if (!msg || msg.sender_type !== "customer") return;

          const preview =
            msg.content_text ||
            (msg.content_type === "image"
              ? "📷 أرسل العميل صورة"
              : msg.content_type === "audio"
                ? "🎙️ أرسل العميل تسجيل صوتي"
                : msg.content_type === "video"
                  ? "🎥 أرسل العميل فيديو"
                  : msg.content_type === "document"
                    ? "📄 أرسل العميل مستند"
                    : "💬 رسالة جديدة واردة");

          fireNotification(msg.id, preview, msg.conversation_id);
        }
      )
      .subscribe((status) => {
        if (status === "TIMED_OUT" || status === "CLOSED") {
          setTimeout(() => {
            channel.subscribe();
          }, 2000);
        }
      });

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      supabase.removeChannel(channel);
    };
  }, [router]);

  return null;
}
