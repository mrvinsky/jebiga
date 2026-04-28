'use client';
import { useState } from 'react';
import { LessonContent } from '@/data/contentTypes';
import { useLanguage, UI_TEXT, STREET_TEXT } from '@/hooks/useLanguage';

interface Props {
  lessonTitle: string;
  titleEn?: string;
  streetTitle: string;
  emoji: string;
  color: string;
  xpReward: number;
  content: LessonContent;
  streetMode: boolean;
  onStart: () => void;
}

type Tab = 'vocab' | 'dialogue' | 'grammar' | 'culture';

const TAB_CONFIG: { id: Tab; icon: string; label: string; labelEn: string; streetLabel: string }[] = [
  { id: 'vocab',    icon: '📚', label: 'Kelimeler', labelEn: 'Words',    streetLabel: 'Reči' },
  { id: 'dialogue', icon: '💬', label: 'Diyalog',   labelEn: 'Chat',     streetLabel: 'Razgovor' },
  { id: 'grammar',  icon: '🧠', label: 'Gramer',    labelEn: 'Grammar',  streetLabel: 'Gramatika' },
  { id: 'culture',  icon: '🇷🇸', label: 'Kültür',    labelEn: 'Culture',  streetLabel: 'Balkan' },
];

export default function LessonIntro({
  lessonTitle, titleEn, streetTitle, emoji, color, xpReward,
  content, streetMode, onStart,
}: Props) {
  const lang = useLanguage();
  const t = streetMode ? { ...UI_TEXT[lang], ...STREET_TEXT } : UI_TEXT[lang];
  const title = streetMode ? streetTitle : (lang === 'en' && titleEn ? titleEn : lessonTitle);

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
        background: `linear-gradient(135deg, ${color}0d 0%, var(--color-surface) 100%)`,
        border: `1.5px solid ${color}20`,
        borderRadius: 22,
        padding: '36px 28px 28px',
        marginBottom: 20,
        textAlign: 'center',
        boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
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
            fontFamily: 'var(--font-display)',
            fontSize: '1.7rem', fontWeight: 900,
            letterSpacing: '-0.02em',
            color: 'var(--color-foreground)', margin: '0 0 10px',
          }}>
            {title}
          </h1>
          <p style={{
            color: 'var(--color-muted)', fontSize: '0.93rem',
            lineHeight: 1.65, maxWidth: 480,
            margin: '0 auto 18px',
          }}>
            {streetMode && content.streetScenario 
              ? content.streetScenario 
              : (lang === 'en' && content.scenarioEn ? content.scenarioEn : content.scenario)}
          </p>

          {/* XP badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(245,197,24,0.1)',
            border: '1px solid rgba(245,197,24,0.25)',
            borderRadius: 20, padding: '6px 16px',
          }}>
            <span style={{ color: '#f5c518', fontWeight: 700, fontSize: '0.82rem' }}>
              ⚡ {lang === 'en' ? `You will earn +${xpReward} XP in this lesson` : `Bu derste +${xpReward} XP kazanacaksın`}
            </span>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div style={{
        display: 'flex', gap: 4,
        background: 'var(--color-surface-2)',
        border: '1px solid var(--color-border)',
        borderRadius: 14, padding: 5,
        marginBottom: 16,
        overflowX: 'auto',
      }}>
        {availableTabs.map(t => {
          const label = streetMode ? t.streetLabel : (lang === 'en' ? t.labelEn : t.label);
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: '1 0 auto',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 5, padding: '10px 6px',
                borderRadius: 10, border: 'none', cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === t.id
                  ? `${color}22`
                  : 'transparent',
                color: activeTab === t.id ? color : 'var(--color-muted)',
                outline: activeTab === t.id ? `1.5px solid ${color}44` : '1.5px solid transparent',
                minWidth: 44,
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{t.icon}</span>
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }} className="tab-label">
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Tab Content ── */}
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 18, padding: '24px',
        minHeight: 240,
        animation: 'slide-up 0.2s ease',
        marginBottom: 20,
        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
      }} key={activeTab}>

        {/* VOCAB */}
        {activeTab === 'vocab' && (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {content.vocabulary.map((v, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
                  gap: 8, padding: '14px 18px',
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12,
                  transition: 'border-color 0.15s',
                }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-foreground)', marginBottom: 2 }}>{v.word}</div>
                    <div style={{ color: color, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.02em', marginBottom: 6 }}>{v.pronunciation}</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-foreground)', opacity: 0.9, fontSize: '0.88rem' }}>
                      {streetMode && v.streetTranslation 
                        ? v.streetTranslation 
                        : (lang === 'en' && v.translationEn ? v.translationEn : v.translation)}
                    </div>
                    {(v.example || v.streetExample) && (
                      <div style={{ 
                        marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--color-border)',
                        fontSize: '0.8rem', color: 'var(--color-muted)', fontStyle: 'italic'
                      }}>
                        "{streetMode && v.streetExample ? v.streetExample : v.example}"
                        {v.exampleEn && lang === 'en' && !streetMode && (
                          <div style={{ marginTop: 4, color: 'var(--color-muted)' }}>- {v.exampleEn}</div>
                        )}
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
                      color: 'var(--color-foreground)', marginBottom: 4,
                      lineHeight: 1.4,
                    }}>
                      {line.serbian}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)', fontStyle: 'italic' }}>
                      {streetMode && line.streetTranslation 
                        ? line.streetTranslation 
                        : (lang === 'en' && line.translationEn ? line.translationEn : line.translation)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* GRAMMAR */}
        {activeTab === 'grammar' && (content.grammarNote || content.grammarRules) && (
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
                fontFamily: 'var(--font-display)',
                fontWeight: 800, fontSize: '0.95rem',
                color: 'var(--color-blue)',
              }}>
                {lang === 'en' ? 'Grammar Note' : 'Dilbilgisi Notu'}
              </span>
            </div>
            
            {content.grammarRules ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {content.grammarRules.map((rule, ri) => (
                  <div key={ri}>
                    <h4 style={{ margin: '0 0 8px', fontSize: '1rem', color: 'var(--color-foreground)', fontWeight: 700 }}>
                      {streetMode && rule.streetTitle 
                        ? rule.streetTitle 
                        : (lang === 'en' && rule.titleEn ? rule.titleEn : rule.title)}
                    </h4>
                    <p style={{ margin: '0 0 12px', fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                      {streetMode && rule.streetBody 
                        ? rule.streetBody 
                        : (lang === 'en' && rule.bodyEn ? rule.bodyEn : rule.body)}
                    </p>
                    {rule.examples && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {rule.examples.map((ex, ei) => (
                          <div key={ei} style={{ padding: '8px 12px', background: 'var(--color-surface-2)', borderRadius: 8, border: '1px solid var(--color-border)' }}>
                            <div style={{ fontWeight: 600, color: 'var(--color-foreground)', fontSize: '0.85rem' }}>{ex.serbian}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                              {streetMode && ex.streetTranslation 
                                ? ex.streetTranslation 
                                : (lang === 'en' && ex.translationEn ? ex.translationEn : ex.translation)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : content.grammarNote ? (
              <div>
                <h4 style={{ margin: '0 0 8px', fontSize: '1rem', color: 'var(--color-foreground)', fontWeight: 700 }}>
                  {streetMode && content.grammarNote.streetTitle 
                    ? content.grammarNote.streetTitle 
                    : (lang === 'en' && content.grammarNote.titleEn ? content.grammarNote.titleEn : content.grammarNote.title)}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-muted)', lineHeight: 1.75 }}>
                  {streetMode && content.grammarNote.streetBody 
                    ? content.grammarNote.streetBody 
                    : (lang === 'en' && content.grammarNote.bodyEn ? content.grammarNote.bodyEn : content.grammarNote.body)}
                </p>
              </div>
            ) : null}
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
                {streetMode ? 'Balkanska Mudrost' : (lang === 'en' ? 'Cultural Insight' : 'Kültür Notu')}
              </span>
            </div>
            <p style={{
              fontSize: '0.92rem', color: 'var(--color-foreground)', opacity: 0.8,
              lineHeight: 1.75,
              padding: '0 4px',
            }}>
              {streetMode && content.streetCulturalTip 
                ? content.streetCulturalTip 
                : (lang === 'en' && content.culturalTipEn ? content.culturalTipEn : content.culturalTip)}
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
              background: activeTab === t.id ? color : 'var(--color-surface-3)',
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
          fontFamily: 'var(--font-display)',
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
        {streetMode ? (lang === 'en' ? '💀 Start the quiz, mate!' : '💀 Kreni na kviz, brate!') : t.startQuiz}
        <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>→</span>
      </button>
    </div>
  );
}
