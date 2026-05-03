'use client';

import { useLanguage, UI_TEXT, STREET_TEXT } from '@/hooks/useLanguage';

interface VocabItem {
  word: string;
  translation: string;
  translationEn?: string;
  streetTranslation?: string;
  pronunciation: string;
}

interface Props {
  words: VocabItem[];
  streetMode: boolean;
  onContinue: () => void;
}

export default function LessonRecap({ words, streetMode, onContinue }: Props) {
  const lang = useLanguage();
  const t = streetMode ? { ...UI_TEXT[lang], ...STREET_TEXT } : UI_TEXT[lang];

  const getTranslation = (v: VocabItem) => {
    if (streetMode && v.streetTranslation) return v.streetTranslation;
    if (lang === 'en' && v.translationEn) return v.translationEn;
    return v.translation;
  };

  const title = streetMode
    ? (lang === 'en' ? 'Previously on Jebiga...' : "Geçen derste bunları öğrenmiştin, unutmadın umarım brate!")
    : (lang === 'en' ? "Let's review what you learned:" : "Sıradaki derse geçmeden önce kısa bir hatırlatma:");

  return (
    <div style={{
      maxWidth: 600,
      margin: '0 auto',
      animation: 'slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      paddingTop: 40,
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: '3rem', marginBottom: 16, animation: 'pop-in 0.5s ease' }}>
          {streetMode ? '🧠' : '📚'}
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 800,
          color: 'var(--color-foreground)',
          lineHeight: 1.4,
          margin: 0,
        }}>
          {title}
        </h2>
      </div>

      {/* Words List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {words.map((v, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 16,
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
            animation: `slide-up 0.4s ease forwards`,
            animationDelay: `${i * 0.1}s`,
            opacity: 0,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-foreground)', marginBottom: 4 }}>
                {v.word}
              </div>
              <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                {v.pronunciation}
              </div>
            </div>
            
            <div style={{ 
              flex: 1, 
              textAlign: 'right',
              fontWeight: 600,
              fontSize: '1rem',
              color: streetMode ? '#39ff14' : 'var(--color-red)',
            }}>
              {getTranslation(v)}
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        style={{
          marginTop: 16,
          width: '100%',
          padding: '16px 24px',
          borderRadius: 14,
          border: 'none',
          background: streetMode ? 'rgba(57,255,20,0.1)' : 'var(--color-red)',
          color: streetMode ? '#39ff14' : '#fff',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.05rem',
          cursor: 'pointer',
          transition: 'all 0.2s',
          borderStyle: 'solid',
          borderWidth: streetMode ? 2 : 0,
          borderColor: streetMode ? 'rgba(57,255,20,0.4)' : 'transparent',
          animation: 'pop-in 0.4s ease forwards',
          animationDelay: '0.5s',
          opacity: 0,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          if (streetMode) e.currentTarget.style.boxShadow = '0 0 20px rgba(57,255,20,0.2)';
          else e.currentTarget.style.boxShadow = '0 8px 20px rgba(192,57,43,0.3)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {streetMode ? (lang === 'en' ? "Ready, Let's Go!" : "Hazırım, Başla!") : (lang === 'en' ? "I'm ready, Start" : "Hazırım, Başla")}
        <span style={{ marginLeft: 8 }}>→</span>
      </button>
    </div>
  );
}
