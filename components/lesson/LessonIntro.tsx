'use client';
import { useState } from 'react';
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

type Tab = 'vocab' | 'dialogue' | 'grammar' | 'culture';

const TAB_CONFIG: { id: Tab; icon: string; label: string; streetLabel: string }[] = [
  { id: 'vocab',    icon: '📚', label: 'Kelimeler',    streetLabel: 'Reči' },
  { id: 'dialogue', icon: '💬', label: 'Diyalog',      streetLabel: 'Dijalog' },
  { id: 'grammar',  icon: '🧠', label: 'Dilbilgisi',   streetLabel: 'Gramatika' },
  { id: 'culture',  icon: '🇷🇸', label: 'Kültür Notu', streetLabel: 'Balkanska Mudrost' },
];

export default function LessonIntro({
  lessonTitle, streetTitle, emoji, color, xpReward,
  content, streetMode, onStart,
}: Props) {
  const title = streetMode ? streetTitle : lessonTitle;

  // Determine available tabs
  const availableTabs = TAB_CONFIG.filter(t => {
    if (t.id === 'dialogue') return !!content.dialogue;
    if (t.id === 'grammar')  return !!content.grammarNote;
    if (t.id === 'culture')  return !!content.culturalTip;
    return true; // vocab always present
  });

  const [activeTab, setActiveTab] = useState<Tab>(availableTabs[0]?.id ?? 'vocab');

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', animation: 'slide-up 0.35s ease' }}>

      {/* ── Hero Header ── */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: `linear-gradient(135deg, ${color}1a 0%, rgba(8,8,8,0.8) 100%)`,
        border: `1.5px solid ${color}35`,
        borderRadius: 22,
        padding: '36px 28px 28px',
        marginBottom: 20,
        textAlign: 'center',
      }}>
        {/* Top color bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
        }} />

        {/* Glow blob */}
        <div style={{
          position: 'absolute', top: -40, left: '50%',
          transform: 'translateX(-50%)',
          width: 200, height: 200, borderRadius: '50%',
          background: `${color}1a`,
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: 12, display: 'inline-block', animation: 'float 3s ease-in-out infinite' }}>
            {emoji}
          </div>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '1.7rem', fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#f5f5f5', margin: '0 0 10px',
          }}>
            {title}
          </h1>
          <p style={{
            color: '#888', fontSize: '0.93rem',
            lineHeight: 1.65, maxWidth: 480,
            margin: '0 auto 18px',
          }}>
            {content.scenario}
          </p>

          {/* XP badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(245,197,24,0.1)',
            border: '1px solid rgba(245,197,24,0.25)',
            borderRadius: 20, padding: '6px 16px',
          }}>
            <span style={{ color: '#f5c518', fontWeight: 700, fontSize: '0.82rem' }}>
              ⚡ Bu derste +{xpReward} XP kazanacaksın
            </span>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div style={{
        display: 'flex', gap: 4,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 14, padding: 5,
        marginBottom: 16,
      }}>
        {availableTabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 6, padding: '10px 8px',
              borderRadius: 10, border: 'none', cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700, fontSize: '0.78rem',
              transition: 'all 0.2s ease',
              background: activeTab === t.id
                ? `${color}22`
                : 'transparent',
              color: activeTab === t.id ? color : '#555',
              outline: activeTab === t.id ? `1.5px solid ${color}44` : '1.5px solid transparent',
            }}
          >
            <span>{t.icon}</span>
            <span style={{ display: 'block' }}>
              {streetMode ? t.streetLabel : t.label}
            </span>
          </button>
        ))}
      </div>

      {/* ── Tab Content ── */}
      <div style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 18, padding: '24px',
        minHeight: 240,
        animation: 'slide-up 0.2s ease',
        marginBottom: 20,
      }} key={activeTab}>

        {/* VOCAB */}
        {activeTab === 'vocab' && (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {content.vocabulary.map((item, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
                  gap: 8, padding: '14px 18px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  transition: 'border-color 0.15s',
                }}>
                  <div>
                    <div style={{
                      fontWeight: 800, fontSize: '1rem',
                      color: color, fontFamily: 'Space Grotesk, sans-serif',
                    }}>
                      {item.word}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#555', fontStyle: 'italic', marginTop: 3 }}>
                      /{item.pronunciation}/
                    </div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#d0d0d0' }}>
                      {item.translation}
                    </div>
                    {item.example && (
                      <div style={{ fontSize: '0.74rem', color: '#4a4a4a', marginTop: 3, fontStyle: 'italic' }}>
                        &ldquo;{item.example}&rdquo;
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DIALOGUE */}
        {activeTab === 'dialogue' && content.dialogue && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {content.dialogue.map((line, i) => {
              const isA = line.speaker === 'A';
              return (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isA ? 'flex-start' : 'flex-end',
                }}>
                  <div style={{
                    maxWidth: '82%',
                    padding: '12px 18px',
                    borderRadius: isA ? '4px 18px 18px 18px' : '18px 4px 18px 18px',
                    background: isA
                      ? 'rgba(192,57,43,0.1)'
                      : 'rgba(0,61,165,0.1)',
                    border: `1.5px solid ${isA ? 'rgba(192,57,43,0.22)' : 'rgba(0,61,165,0.22)'}`,
                  }}>
                    <div style={{
                      fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em',
                      color: isA ? '#c0392b' : '#3498db', marginBottom: 5,
                      textTransform: 'uppercase',
                    }}>
                      {isA ? '🔴 A' : '🔵 B'}
                    </div>
                    <div style={{
                      fontWeight: 700, fontSize: '0.97rem',
                      color: '#f0f0f0', marginBottom: 4,
                      lineHeight: 1.4,
                    }}>
                      {line.serbian}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#666', fontStyle: 'italic' }}>
                      {line.translation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* GRAMMAR */}
        {activeTab === 'grammar' && content.grammarNote && (
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 14,
              padding: '12px 16px',
              background: 'rgba(0,61,165,0.08)',
              borderRadius: 10,
              border: '1px solid rgba(0,61,165,0.15)',
            }}>
              <span style={{ fontSize: '1.2rem' }}>🧠</span>
              <span style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800, fontSize: '0.95rem',
                color: '#5b9cff',
              }}>
                {content.grammarNote.title}
              </span>
            </div>
            <p style={{
              fontSize: '0.92rem', color: '#aaa',
              lineHeight: 1.75,
              padding: '0 4px',
            }}>
              {content.grammarNote.body}
            </p>
          </div>
        )}

        {/* CULTURE */}
        {activeTab === 'culture' && content.culturalTip && (
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 14,
              padding: '12px 16px',
              background: streetMode ? 'rgba(57,255,20,0.06)' : 'rgba(245,197,24,0.07)',
              borderRadius: 10,
              border: `1px solid ${streetMode ? 'rgba(57,255,20,0.2)' : 'rgba(245,197,24,0.2)'}`,
            }}>
              <span style={{ fontSize: '1.2rem' }}>🇷🇸</span>
              <span style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800, fontSize: '0.95rem',
                color: streetMode ? '#39ff14' : '#f5c518',
              }}>
                {streetMode ? 'Balkanska Mudrost' : 'Kültür Notu'}
              </span>
            </div>
            <p style={{
              fontSize: '0.92rem', color: '#aaa',
              lineHeight: 1.75,
              padding: '0 4px',
            }}>
              {content.culturalTip}
            </p>
          </div>
        )}
      </div>

      {/* ── Tab navigation hints ── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 6, marginBottom: 20,
      }}>
        {availableTabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              width: activeTab === t.id ? 24 : 8,
              height: 8, borderRadius: 4,
              border: 'none', cursor: 'pointer',
              background: activeTab === t.id ? color : '#2a2a2a',
              transition: 'all 0.25s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Start Button ── */}
      <button
        id="start-quiz-btn"
        onClick={onStart}
        style={{
          width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          padding: '18px 24px',
          borderRadius: 14, cursor: 'pointer',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800, fontSize: '1.05rem',
          letterSpacing: '-0.01em',
          background: streetMode
            ? 'transparent'
            : `linear-gradient(135deg, ${color}, ${color}bb)`,
          color: streetMode ? '#39ff14' : '#fff',
          border: streetMode ? '2px solid rgba(57,255,20,0.4)' : 'none',
          boxShadow: streetMode
            ? '0 0 20px rgba(57,255,20,0.15)'
            : `0 6px 24px ${color}44`,
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = streetMode
            ? '0 0 30px rgba(57,255,20,0.3)'
            : `0 10px 32px ${color}55`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = streetMode
            ? '0 0 20px rgba(57,255,20,0.15)'
            : `0 6px 24px ${color}44`;
        }}
      >
        {streetMode ? '💀 Kreni na kviz, brate!' : '🚀 Teste Başla'}
        <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>→</span>
      </button>
    </div>
  );
}
