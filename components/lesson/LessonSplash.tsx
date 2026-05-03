'use client';
import { useEffect, useState } from 'react';

interface Props {
  title: string;
  emoji: string;
  color: string;
  streetMode: boolean;
  lang: string;
  onComplete: () => void;
}

export default function LessonSplash({ title, emoji, color, streetMode, lang, onComplete }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 2 saniyelik bir animasyon
    const duration = 2000;
    const interval = 20; // 50 steps
    let current = 0;

    const timer = setInterval(() => {
      current += interval;
      setProgress(Math.min((current / duration) * 100, 100));
      if (current >= duration) {
        clearInterval(timer);
        onComplete();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Rastgele havalı/komik sözler
  const [quote] = useState(() => {
    if (streetMode) {
      const quotes = [
        "Spremi se, brate...",
        "Rakija doluyor...",
        "Kafana Dayısı bekliyor...",
        "Sokak kuralları yükleniyor...",
        "Hajdemo! (Let's go!)"
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    if (lang === 'en') {
      const quotes = [
        "Get Ready!",
        "Loading lesson...",
        "Preparing the challenge...",
        "Let's do this!",
        "Almost there..."
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    const quotes = [
      "Hazırlanıyor...",
      "Ders yükleniyor...",
      "Derin bir nefes al...",
      "Başlıyoruz!",
      "Odaklanma vakti..."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      animation: 'pop-in 0.3s ease forwards',
    }}>
      <div style={{
        position: 'relative',
        width: 140,
        height: 140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${color}22, ${color}05)`,
        boxShadow: streetMode ? `0 0 40px ${color}33` : `0 15px 35px ${color}15`,
        marginBottom: 32,
      }}>
        {/* Pulsing rings */}
        <div style={{
          position: 'absolute', inset: -10, borderRadius: '50%',
          border: `2px solid ${color}44`,
          animation: 'pulse 1.5s ease-out infinite',
        }} />
        <div style={{
          position: 'absolute', inset: -20, borderRadius: '50%',
          border: `1px solid ${color}22`,
          animation: 'pulse 1.5s ease-out infinite',
          animationDelay: '0.2s',
        }} />
        <span style={{ fontSize: '4.5rem', animation: 'float 2.5s ease-in-out infinite' }}>
          {emoji}
        </span>
      </div>

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '2rem',
        fontWeight: 900,
        color: 'var(--color-foreground)',
        marginBottom: 12,
        textAlign: 'center',
        letterSpacing: '-0.02em',
      }}>
        {title}
      </h1>
      
      <p style={{
        fontSize: '1rem',
        color: 'var(--color-muted)',
        marginBottom: 48,
        fontWeight: 600,
        opacity: 0.8,
        letterSpacing: '0.01em',
      }}>
        {quote}
      </p>

      {/* Progress Bar */}
      <div style={{
        width: '280px',
        height: 6,
        background: 'var(--color-surface-2)',
        borderRadius: 6,
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: streetMode ? '#39ff14' : `linear-gradient(90deg, ${color}, ${color}cc)`,
          boxShadow: streetMode ? '0 0 12px #39ff14' : `0 0 12px ${color}66`,
          transition: 'width 0.05s linear',
          borderRadius: 6,
        }} />
      </div>
    </div>
  );
}
