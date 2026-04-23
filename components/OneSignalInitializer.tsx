'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

declare global {
  interface Window {
    OneSignal: any;
    OneSignalDeferred: any[];
  }
}

export default function OneSignalInitializer() {
  const { user, userData } = useAuth();

  useEffect(() => {
    // Sadece tarayıcıda çalıştır
    if (typeof window === 'undefined') return;

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async (OneSignal: any) => {
      try {
        await OneSignal.init({
          appId: '6b5579f3-e47c-4bc9-bb98-a1cadc28ae73',
          safari_web_id: 'web.onesignal.auto.662c778c-4ab6-4517-8ad0-9e9a32a53670',
          allowLocalhostAsSecureOrigin: true,
          welcomeNotification: {
            title: "Jebiga",
            message: "Dobrodošao brate! Sokağın nabzını tutmaya hazırsın. 🦅",
          },
          notifyButton: {
            enable: true,
            position: 'bottom-left',
            colors: {
              'circle.background': '#c0392b',
              'circle.foreground': 'white',
              'badge.background': '#c0392b',
              'badge.foreground': 'white',
              'pulse.color': '#ffffff',
              'dialog.button.background.hover': '#e74c3c',
              'dialog.button.background.active': '#e74c3c',
              'dialog.button.background': '#c0392b',
              'dialog.button.foreground': 'white',
              'dialog.container.background': '#1a1a1a',
              'dialog.container.foreground': 'white',
            }
          }
        });

        console.log("OneSignal Initialized via window");
        
        if (user && typeof OneSignal.login === 'function') {
          OneSignal.login(user.uid);
        }
      } catch (error) {
        console.error("OneSignal Init Error:", error);
      }
    });
  }, [user]);

  useEffect(() => {
    if (userData && window.OneSignal) {
      const isProUser = userData.subscription === 'pro' || userData.role === 'admin';
      
      // window.OneSignal.push kullanımı OneSignal komutlarını güvenli bir şekilde sıraya koyar
      window.OneSignal.push(() => {
        if (typeof window.OneSignal.sendTags === 'function') {
          window.OneSignal.sendTags({
            isPro: isProUser,
            level: userData.level || 1,
            language: userData.lang || 'tr',
            xp: userData.xp || 0
          }).then(() => {
            console.log("OneSignal Tags Updated via window:", { isPro: isProUser });
          }).catch((err: any) => {
            console.warn("OneSignal sendTags error:", err);
          });
        } else {
          console.warn("OneSignal sendTags is not available yet.");
        }
      });
    }
  }, [userData]);

  return null;
}
