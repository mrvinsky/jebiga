'use client';
import { useAuth } from '@/context/AuthContext';

export type Lang = 'tr' | 'en';

/**
 * Kullanıcının seçtiği arayüz dilini döner.
 * Belirtilmemişse varsayılan olarak 'tr' kullanılır.
 */
export function useLanguage(): Lang {
  const { userData } = useAuth();
  return userData?.lang ?? 'tr';
}

// ─── UI metin sabitleri ───────────────────────────────────────────────────────
export const UI_TEXT = {
  tr: {
    startLesson: 'Derse Başla 🔥',
    checkAnswer: 'Cevapla ✓',
    backToMap: '← Haritaya Dön',
    lessonDone: 'Ders Bitti!',
    tryAgain: 'Tekrar Dene 🔄',
    correct: 'Doğru! Bravo! 🎉',
    wrong: 'Yanlış, tekrar dene 💀',
    loading: 'Yükleniyor...',
    yourAnswer: 'Cevabını yaz...',
    hint: 'İpucu',
    proContent: 'PRO İçerik ⚡',
    completed: '✓ Tamamlandı',
  },
  en: {
    startLesson: 'Start Lesson 🔥',
    checkAnswer: 'Check ✓',
    backToMap: '← Back to Map',
    lessonDone: 'Lesson Complete!',
    tryAgain: 'Try Again 🔄',
    correct: 'Correct! Well done! 🎉',
    wrong: 'Wrong, try again 💀',
    loading: 'Loading...',
    yourAnswer: 'Type your answer...',
    hint: 'Hint',
    proContent: 'PRO Content ⚡',
    completed: '✓ Completed',
  },
} as const;
