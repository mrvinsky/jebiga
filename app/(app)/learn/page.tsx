'use client';
import { useStreetMode } from '@/context/StreetModeContext';
import { useAuth } from '@/context/AuthContext';
import { curriculum } from '@/data/curriculum';
import Link from 'next/link';
import { useState } from 'react';

export default function LearnPage() {
  const { streetMode } = useStreetMode();
  const { userData } = useAuth();
  const completed = userData?.completedLessons || [];
  const isPro = userData?.subscription === 'pro';
  const isAdmin = userData?.role === 'admin';
  const [expandedSet, setExpandedSet] = useState<string | null>(null);

  const totalLessons = curriculum.flatMap(s => s.lessons).length;
  const completedCount = completed.length;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  return (
    <div style={{ maxWidth: 860, margin: '0 auto' }}>

      {/* ── Hero Header ── */}
      <div style={{
        textAlign: 'center', marginBottom: 36,
        padding: '32px 24px 28px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: 20,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Subtle radial glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(192,57,43,0.12) 0%, transparent 65%)',
        }} />
        <div style={{ position: 'relative' }}>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 900, letterSpacing: '-0.03em',
            margin: '0 0 8px',
          }}>
            {streetMode
              ? <><span style={{ color: '#39ff14', textShadow: '0 0 20px rgba(57,255,20,0.4)' }}>Ulični Rečnik</span> 💀</>
              : <><span style={{ background: 'linear-gradient(135deg, #e74c3c, #c0392b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Öğrenme</span> Yolu 🇷🇸</>
            }
          </h1>
          <p style={{ color: '#666', fontSize: '0.88rem', margin: '0 0 20px' }}>
            {streetMode
              ? 'Pazi, brate — svaka lekcija te bliže vodi pravom srpskom.'
              : 'Kategorileri aç, dersleri tamamla, XP kazan. Atlarsan jebiga!'}
          </p>

          {/* Progress bar */}
          <div style={{ maxWidth: 380, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.75rem', color: '#555' }}>
              <span>Genel İlerleme</span>
              <span style={{ color: '#f5c518', fontWeight: 700 }}>{completedCount}/{totalLessons} ders · {progressPct}%</span>
            </div>
            <div style={{ height: 8, background: '#1a1a1a', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 4,
                width: `${progressPct}%`,
                background: 'linear-gradient(90deg, #c0392b, #e74c3c)',
                transition: 'width 0.6s ease',
                boxShadow: progressPct > 0 ? '0 0 12px rgba(192,57,43,0.4)' : 'none',
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Category Grid ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {curriculum.map((set, setIndex) => {
          const isSetUnlocked = isAdmin || setIndex === 0 ||
            curriculum.slice(0, setIndex).every(s => s.lessons.every(l => completed.includes(l.id)));
          const isProLocked = set.isPro && !isPro && !isAdmin;
          const setCompleted = set.lessons.filter(l => completed.includes(l.id)).length;
          const setTotal = set.lessons.length;
          const setProgress = Math.round((setCompleted / setTotal) * 100);
          const isExpanded = expandedSet === set.id;
          const isFullyDone = setCompleted === setTotal;

          return (
            <div key={set.id} style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>

              {/* Category Header — clickable */}
              <button
                onClick={() => {
                  if (!isSetUnlocked && !isProLocked) return;
                  setExpandedSet(isExpanded ? null : set.id);
                }}
                style={{
                  width: '100%', textAlign: 'left', cursor: (isSetUnlocked || isProLocked) ? 'pointer' : 'not-allowed',
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '20px 24px',
                  background: isFullyDone
                    ? 'rgba(0,230,118,0.04)'
                    : isExpanded
                      ? `linear-gradient(135deg, ${set.color}14, rgba(8,8,8,0.9))`
                      : 'rgba(255,255,255,0.025)',
                  border: 'none',
                  borderBottom: isExpanded ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  transition: 'background 0.25s ease',
                  opacity: (!isSetUnlocked && !isProLocked) ? 0.45 : 1,
                }}
              >
                {/* Emoji icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  background: `${set.color}18`,
                  border: `2px solid ${isFullyDone ? '#00e676' : set.color}44`,
                  boxShadow: isExpanded ? `0 0 20px ${set.color}22` : 'none',
                  transition: 'all 0.25s',
                }}>
                  {isFullyDone ? '✅' : set.emoji}
                </div>

                {/* Title + progress */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 800, fontSize: '0.98rem',
                      color: isFullyDone ? '#00e676' : (!isSetUnlocked && !isProLocked) ? '#444' : '#f5f5f5',
                    }}>
                      {streetMode ? set.streetTitle : set.title}
                    </span>
                    {isProLocked && (
                      <span style={{
                        background: 'linear-gradient(135deg, #f5c518, #ff8c00)',
                        color: '#000', fontSize: '0.62rem', fontWeight: 800,
                        padding: '2px 7px', borderRadius: 6, letterSpacing: '0.06em',
                      }}>PRO</span>
                    )}
                    {!isSetUnlocked && !isProLocked && (
                      <span style={{ fontSize: '0.75rem' }}>🔒</span>
                    )}
                  </div>
                  {/* Mini progress bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 4, background: '#1a1a1a', borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', borderRadius: 2,
                        width: `${setProgress}%`,
                        background: isFullyDone ? '#00e676' : `linear-gradient(90deg, ${set.color}, ${set.color}bb)`,
                        transition: 'width 0.4s ease',
                      }} />
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#555', flexShrink: 0 }}>
                      {setCompleted}/{setTotal}
                    </span>
                  </div>
                </div>

                {/* Chevron */}
                <div style={{
                  fontSize: '0.8rem',
                  transition: 'transform 0.2s, color 0.2s',
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: isExpanded ? set.color : '#444',
                }}>
                  ▼
                </div>
              </button>

              {/* Lesson list — expanded */}
              {isExpanded && (
                <div style={{
                  padding: '12px 16px 16px',
                  background: 'rgba(0,0,0,0.3)',
                  display: 'flex', flexDirection: 'column', gap: 8,
                  animation: 'slide-up 0.2s ease',
                }}>
                  {set.lessons.map((lesson, lessonIndex) => {
                    const isCompleted = completed.includes(lesson.id);
                    const prevCompleted = lessonIndex === 0 ? isSetUnlocked : completed.includes(set.lessons[lessonIndex - 1].id);
                    const isActive = isAdmin ? !isCompleted : (isSetUnlocked && prevCompleted && !isCompleted);
                    const isLocked = isAdmin ? false : (!isSetUnlocked || (!isCompleted && !isActive && !prevCompleted));

                    let bg = 'rgba(255,255,255,0.02)';
                    let borderCol = 'rgba(255,255,255,0.05)';
                    if (isCompleted) { bg = 'rgba(0,230,118,0.05)'; borderCol = 'rgba(0,230,118,0.15)'; }
                    if (isActive) { bg = `${set.color}0d`; borderCol = `${set.color}40`; }
                    if (isProLocked) { bg = 'rgba(245,197,24,0.04)'; borderCol = 'rgba(245,197,24,0.2)'; }

                    const lessonContent = (
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        padding: '14px 18px', borderRadius: 12,
                        border: `1.5px solid ${borderCol}`,
                        background: bg,
                        opacity: (isLocked && !isProLocked) ? 0.4 : 1,
                        cursor: (isLocked && !isProLocked) ? 'not-allowed' : 'pointer',
                        transition: 'all 0.15s ease',
                      }}>
                        {/* Icon */}
                        <div style={{
                          width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '1.15rem',
                          background: isCompleted ? 'rgba(0,230,118,0.1)' : isActive ? `${set.color}1a` : '#111',
                          border: `1.5px solid ${isCompleted ? '#00e67633' : isActive ? `${set.color}44` : '#222'}`,
                        }}>
                          {isProLocked ? '⭐' : isCompleted ? '✓' : isLocked ? '🔒' : lesson.emoji}
                        </div>

                        {/* Info */}
                        <div style={{ flex: 1 }}>
                          <div style={{
                            fontWeight: 700, fontSize: '0.88rem',
                            fontFamily: 'Space Grotesk, sans-serif',
                            color: isCompleted ? '#00e676' : (isLocked && !isProLocked) ? '#444' : isProLocked ? '#f5c518' : '#f5f5f5',
                          }}>
                            {streetMode ? lesson.streetTitle : lesson.title}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: '#555', marginTop: 2 }}>
                            {isProLocked ? 'PRO içerik — yükselt' : isCompleted ? '✓ Tamamlandı' : `+${lesson.xpReward} XP`}
                          </div>
                        </div>

                        {/* Action badge */}
                        {(isActive || isCompleted) && (
                          <div style={{
                            padding: '4px 12px', borderRadius: 20,
                            fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.05em',
                            background: isCompleted ? 'rgba(0,230,118,0.1)' : set.color,
                            color: isCompleted ? '#00e676' : '#fff',
                            border: isCompleted ? '1px solid rgba(0,230,118,0.2)' : 'none',
                            whiteSpace: 'nowrap',
                          }}>
                            {isCompleted ? 'TEKRAR' : 'BAŞLA →'}
                          </div>
                        )}
                      </div>
                    );

                    return isProLocked ? (
                      <div key={lesson.id} onClick={() => window.location.href = '/pro'} style={{ cursor: 'pointer' }}>
                        {lessonContent}
                      </div>
                    ) : isLocked ? (
                      <div key={lesson.id}>{lessonContent}</div>
                    ) : (
                      <Link key={lesson.id} href={`/lesson/${lesson.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                        {lessonContent}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ height: 32 }} />
    </div>
  );
}
