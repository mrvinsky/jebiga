'use client';
import { useStreetMode } from '@/context/StreetModeContext';
import { useAuth } from '@/context/AuthContext';
import { curriculum } from '@/data/curriculum';
import Link from 'next/link';

export default function LearnPage() {
  const { streetMode } = useStreetMode();
  const { userData } = useAuth();
  const completed = userData?.completedLessons || [];
  const isPro = userData?.subscription === 'pro';
  const isAdmin = userData?.role === 'admin';

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 32, textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', margin: 0 }}>
          {streetMode ? <span className="neon-text">Ulični Rečnik 💀</span> : <><span className="gradient-text-red">Learning</span> Path</>}
        </h1>
        <p style={{ color: '#666', marginTop: 8, fontSize: '0.9rem' }}>
          {streetMode ? 'Pazi, brate — svaka lekcija te bliže vodi pravom srpskom.' : 'Complete lessons to unlock the next level. Jebiga if you skip!'}
        </p>
      </div>

      {/* Lesson Sets */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {curriculum.map((set, setIndex) => {
          const isSetUnlocked = isAdmin || setIndex === 0 || curriculum.slice(0, setIndex).every(s => s.lessons.every(l => completed.includes(l.id)));
          return (
            <div key={set.id}>
              {/* Section Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${set.color}22`, border: `2px solid ${set.color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                  {set.emoji}
                </div>
                <div>
                  <h2 style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', margin: 0, color: isSetUnlocked ? '#f5f5f5' : '#444' }}>
                    {streetMode ? set.streetTitle : set.title}
                  </h2>
                  <p style={{ fontSize: '0.75rem', color: '#555', margin: 0 }}>
                    {streetMode ? set.streetDescription : set.description}
                  </p>
                </div>
                {set.isPro && !isPro ? (
                  <span style={{ marginLeft: 'auto', fontSize: '1.2rem' }}>⭐</span>
                ) : !isSetUnlocked && (
                  <span style={{ marginLeft: 'auto', fontSize: '1.2rem' }}>🔒</span>
                )}
              </div>

              {/* Lesson nodes */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, paddingLeft: 16 }}>
                {set.lessons.map((lesson, lessonIndex) => {
                  const isCompleted = completed.includes(lesson.id);
                  const prevCompleted = lessonIndex === 0 ? isSetUnlocked : completed.includes(set.lessons[lessonIndex - 1].id);
                  const isActive = isAdmin ? !isCompleted : (isSetUnlocked && prevCompleted && !isCompleted);
                  const isLocked = isAdmin ? false : (!isSetUnlocked || (!isCompleted && !isActive && !prevCompleted));
                  const isProLocked = set.isPro && !isPro;

                  let nodeClass = 'lesson-node lesson-node-locked';
                  if (isCompleted) nodeClass = 'lesson-node lesson-node-completed';
                  else if (isActive) nodeClass = streetMode && set.id === 'street-slang' ? 'lesson-node lesson-node-street' : 'lesson-node lesson-node-active';
                  if (isProLocked) nodeClass = 'lesson-node'; // Custom inline styles for pro

                  const borderCol = isProLocked ? '#f1c40f88' : isCompleted ? '#00e67622' : isActive ? `${set.color}44` : '#1a1a1a';
                  const bgCol = isProLocked ? '#1a1a0f' : isCompleted ? '#0a1a0a' : isActive ? `${set.color}11` : '#111';
                  const opacityVal = (isLocked && !isProLocked) ? 0.4 : 1;
                  const cursorVal = (isLocked && !isProLocked) ? 'not-allowed' : 'pointer';

                  const content = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderRadius: 14, border: `2px solid ${borderCol}`, background: bgCol, transition: 'all 0.2s', cursor: cursorVal, opacity: opacityVal }}>
                      <div className={nodeClass} style={{ width: 48, height: 48, fontSize: '1.2rem', flexShrink: 0, border: `2px solid ${isProLocked ? '#f1c40f' : isCompleted ? '#00e676' : isActive ? set.color : '#333'}`, boxShadow: isProLocked ? '0 0 16px #f1c40f44' : isActive ? `0 0 16px ${set.color}44` : 'none' }}>
                        {isProLocked ? '⭐' : isCompleted ? '✅' : isLocked ? '🔒' : lesson.emoji}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: (isLocked && !isProLocked) ? '#444' : isProLocked ? '#f1c40f' : '#f5f5f5', fontFamily: 'Space Grotesk, sans-serif' }}>
                          {streetMode ? lesson.streetTitle : lesson.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#555', marginTop: 2 }}>
                          {isProLocked ? 'PRO Content' : isCompleted ? '✓ Completed' : `+${lesson.xpReward} XP`}
                        </div>
                      </div>
                      {(isActive || isProLocked) && (
                        <div style={{ marginLeft: 'auto' }}>
                          <div style={{ background: isProLocked ? '#f1c40f' : set.color, color: isProLocked ? '#000' : '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '4px 10px', borderRadius: 20, letterSpacing: '0.05em' }}>
                            {isProLocked ? 'PRO' : 'START'}
                          </div>
                        </div>
                      )}
                    </div>
                  );

                  return isProLocked ? (
                    <div key={lesson.id} onClick={() => window.location.href = "YOUR_PAYMENT_LINK_HERE"} style={{ width: '100%', cursor: 'pointer' }}>{content}</div>
                  ) : isLocked ? (
                    <div key={lesson.id} style={{ width: '100%' }}>{content}</div>
                  ) : (
                    <Link key={lesson.id} href={`/lesson/${lesson.id}`} style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                      {content}
                    </Link>
                  );
                })}
              </div>

              {setIndex < curriculum.length - 1 && (
                <div style={{ margin: '24px 0 0 36px', height: 24, width: 2, background: 'linear-gradient(180deg, #2a2a2a, transparent)' }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom padding for mobile nav */}
      <div style={{ height: 24 }} />
    </div>
  );
}
