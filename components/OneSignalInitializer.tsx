'use client';

import { useEffect } from 'react';
import OneSignal from 'react-onesignal';
import { useAuth } from '@/context/AuthContext';

export default function OneSignalInitializer() {
  const { user, userData } = useAuth();

  useEffect(() => {
    // Initialize OneSignal
    OneSignal.init({
      appId: '6b5579f3-e47c-4bc9-bb98-a1cadc28ae73', 
      safari_web_id: 'web.onesignal.auto.662c778c-4ab6-4517-8ad0-9e9a32a53670',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        title: "Jebiga",
        message: "Dobrodošao brate! Sokağın nabzını tutmaya hazırsın. 🦅",
        url: "https://jebiga.app" // Kendi URL'ini ekleyebilirsin
      },
      notifyButton: {
        enable: true, // Sağ altta bildirim butonu çıkarır
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
    }).then(() => {
      console.log("OneSignal Initialized");
      // Giriş yapmış kullanıcıyı OneSignal ile eşleştir
      if (user) {
        OneSignal.login(user.uid);
      }
    });
  }, [user]);

  useEffect(() => {
    // Kullanıcı verileri değiştikçe OneSignal etiketlerini (Tags) güncelle
    if (userData) {
      OneSignal.sendTags({
        isPro: userData.isPro || false,
        level: userData.level || 1,
        language: userData.language || 'tr',
        xp: userData.xp || 0
      }).then(() => {
        console.log("OneSignal Tags Updated:", { isPro: userData.isPro });
      });
    }
  }, [userData]);

  return null;
}
