'use client';
import { LessonContent } from '@/data/contentTypes';

interface Props {
  lessonTitle: string;
  streetTitle: string;
  emoji: string;
  color: string;
  xpReward: number;
  content: LessonContent;
  streetMode: boolean;
  onStart: () => void;
}

export default function LessonIntro({
  lessonTitle, streetTitle, emoji, color, xpReward,
  content, streetMode, onStart,
}: Props) {
  const title = streetMode ? streetTitle : lessonTitle;

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20, animation: 'slide-up 0.4s ease' }}>

      {/* ── Header Card ── */}
      <div className={`card-lesson ${streetMode ? 'neon-border' : ''}`} style={{ borderColor: color + '55', textAlign: 'center', padding: '36px 32px' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 12, animation: 'float 3s ease-in-out infinite' }}>{emoji}</div>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.6rem', fontWeight: 900, marginBottom: 10, color: '#f5f5f5' }}>
          {title}
        </h1>
        <p style={{ color: '#999', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: 480, margin: '0 auto 16px' }}>
          {content.scenario}
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.3)', borderRadius: 20, padding: '6px 16px' }}>
          <span style={{ color: '#f5c518', fontWeight: 700, fontSize: '0.85rem' }}>⚡ bu derste +{xpReward} XP</span>
        </div>
      </div>

      {/* ── Vocabulary ── */}
      <div className="glass" style={{ padding: '24px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ fontSize: '1.1rem' }}>📚</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#f5f5f5' }}>
            {streetMode ? 'Reči koje moraš da znaš' : 'Önemli Kelimeler'}
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {content.vocabulary.map((item, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 8, padding: '12px 16px',
              background: 'rgba(255,255,255,0.03)', borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: color || '#f5f5f5', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {item.word}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#666', fontStyle: 'italic', marginTop: 2 }}>
                  /{item.pronunciation}/
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#ccc' }}>
                  {item.translation}
                </div>
                {item.example && (
                  <div style={{ fontSize: '0.75rem', color: '#555', marginTop: 2 }}>
                    "{item.example}"
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dialogue ── */}
      {content.dialogue && (
        <div className="glass" style={{ padding: '24px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: '1.1rem' }}>💬</span>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#f5f5f5' }}>
              {streetMode ? 'Kako zvuči uživo' : 'Örnek Diyalog'}
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {content.dialogue.map((line, i) => {
              const isA = line.speaker === 'A';
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: isA ? 'flex-start' : 'flex-end' }}>
                  <div style={{
                    maxWidth: '85%', padding: '10px 16px',
                    background: isA ? 'rgba(192,57,43,0.12)' : 'rgba(0,61,165,0.12)',
                    border: `1px solid ${isA ? 'rgba(192,57,43,0.25)' : 'rgba(0,61,165,0.25)'}`,
                    borderRadius: isA ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                  }}>
                    <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#555', marginBottom: 4, letterSpacing: '0.08em' }}>
                      {isA ? '🔴 A' : '🔵 B'}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#f0f0f0', marginBottom: 4 }}>
                      {line.serbian}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#777', fontStyle: 'italic' }}>
                      {line.translation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Grammar Note ── */}
      {content.grammarNote && (
        <div style={{
          padding: '20px 24px', borderRadius: 14,
          background: 'rgba(0,61,165,0.08)',
          border: '1px solid rgba(0,61,165,0.2)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: '1rem' }}>🧠</span>
            <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#5b9cff', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.04em' }}>
              {content.grammarNote.title}
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#aaa', lineHeight: 1.65 }}>
            {content.grammarNote.body}
          </p>
        </div>
      )}

      {/* ── Cultural Tip ── */}
      {content.culturalTip && (
        <div style={{
          padding: '20px 24px', borderRadius: 14,
          background: streetMode ? 'rgba(57,255,20,0.05)' : 'rgba(245,197,24,0.06)',
          border: `1px solid ${streetMode ? 'rgba(57,255,20,0.2)' : 'rgba(245,197,24,0.2)'}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: '1rem' }}>🇷🇸</span>
            <span style={{ fontWeight: 800, fontSize: '0.85rem', color: streetMode ? '#39ff14' : '#f5c518', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.04em' }}>
              {streetMode ? 'Balkanska Mudrost' : 'Kültür Notu'}
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#aaa', lineHeight: 1.65 }}>
            {content.culturalTip}
          </p>
        </div>
      )}

      {/* ── Start Button ── */}
      <button
        id="start-quiz-btn"
        className={streetMode ? 'btn-neon' : 'btn-primary'}
        style={{ width: '100%', fontSize: '1.05rem', padding: '18px', marginTop: 4 }}
        onClick={onStart}
      >
        {streetMode ? '💀 Kreni na kviz, brate!' : '🚀 Teste Başla'}
      </button>
    </div>
  );
}
