'use client';
import { Question } from '@/data/curriculum';
import { useEffect, useState } from 'react';
import { useLanguage, UI_TEXT, STREET_TEXT } from '@/hooks/useLanguage';
import { getAudioUrlForQuestion } from '@/lib/audioManager';

interface QuizCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selected: string | null;
  inputVal: string;
  status: 'idle' | 'correct' | 'wrong';
  onSelect: (opt: string) => void;
  onInputChange: (val: string) => void;
  onCheck: () => void;
  streetMode: boolean;
  color?: string;
}

export default function QuizCard({
  question,
  questionIndex,
  totalQuestions,
  selected,
  inputVal,
  status,
  onSelect,
  onInputChange,
  onCheck,
  streetMode,
  color = '#c0392b',
}: QuizCardProps) {
  const lang = useLanguage();
  const t = streetMode ? { ...UI_TEXT[lang], ...STREET_TEXT } : UI_TEXT[lang];

  // Logic: Priority -> StreetPrompt (if mode on) -> EnglishPrompt (if lang en) -> Prompt
  const prompt = (streetMode && question.streetPrompt) 
    ? question.streetPrompt 
    : (lang === 'en' && question.promptEn)
      ? question.promptEn
      : question.prompt;

  const hint = (lang === 'en' && question.hintEn) ? question.hintEn : question.hint;

  const progress = ((questionIndex) / totalQuestions) * 100;
  const [shake, setShake] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudio = async () => {
      const url = await getAudioUrlForQuestion(question.id);
      setAudioUrl(url);
    };
    fetchAudio();
  }, [question.id]);

  useEffect(() => {
    if (status === 'wrong') {
      setShake(true);
      const t = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(t);
    }
  }, [status]);

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>

      {/* ── Progress Header ── */}
      <div style={{ marginBottom: 24 }}>
        {/* Bar */}
        <div style={{
          height: 6, background: 'var(--color-surface-2)',
          borderRadius: 3, overflow: 'hidden',
          marginBottom: 10,
        }}>
          <div style={{
            height: '100%', borderRadius: 3,
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${color}, ${color}bb)`,
            transition: 'width 0.4s cubic-bezier(0.34,1.2,0.64,1)',
            boxShadow: `0 0 10px ${color}55`,
          }} />
        </div>

        {/* Step indicators */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div key={i} style={{
              width: i === questionIndex ? 20 : 8,
              height: 8, borderRadius: 4,
              background: i < questionIndex
                ? 'var(--color-success)'
                : i === questionIndex
                  ? color
                  : 'var(--color-surface-3)',
              transition: 'all 0.3s ease',
              boxShadow: i === questionIndex ? `0 0 8px ${color}88` : i < questionIndex ? '0 0 6px rgba(46,204,113,0.3)' : 'none',
            }} />
          ))}
        </div>

        <div style={{
          textAlign: 'center', marginTop: 8,
          fontSize: '0.72rem', color: 'var(--color-muted)',
          fontWeight: 600, letterSpacing: '0.04em',
        }}>
          {questionIndex + 1} / {totalQuestions}
        </div>
      </div>

      {/* ── Question Card ── */}
      <div
        className="card-lesson"
        style={{
          borderColor: status === 'correct'
            ? 'var(--color-success)'
            : status === 'wrong'
              ? 'var(--color-error)'
              : 'var(--color-border)',
          background: status === 'correct'
            ? 'rgba(46,204,113,0.06)'
            : status === 'wrong'
              ? 'rgba(231,76,60,0.06)'
              : 'var(--color-surface)',
          animation: shake ? 'shake 0.45s ease-in-out' : 'slide-up 0.3s ease',
          transition: 'border-color 0.2s, background 0.2s',
        }}
      >
        {/* Question type badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: '0.68rem', fontWeight: 800,
          color: 'var(--color-muted)', letterSpacing: '0.1em',
          textTransform: 'uppercase',
          background: 'var(--color-surface-2)',
          border: '1px solid var(--color-border)',
          borderRadius: 20, padding: '4px 12px',
          marginBottom: 20,
        }}>
          {question.type === 'multiple-choice'
            ? t.chooseAnswer
            : question.type === 'fill-blank'
              ? (lang === 'en' ? 'Fill in the Blank' : 'Boşluğu Doldur')
              : t.translate}
        </div>

        {/* Question text */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 28 }}>
          <p 
            onClick={() => audioUrl && new Audio(audioUrl).play()}
            style={{
              fontSize: 'clamp(1rem, 3.5vw, 1.15rem)', fontWeight: 700,
              fontFamily: 'var(--font-display)',
              color: 'var(--color-foreground)', lineHeight: 1.45,
              wordBreak: 'break-word', margin: 0,
              cursor: audioUrl ? 'pointer' : 'default'
            }}
            title={audioUrl ? "Click to hear pronunciation" : undefined}
          >
            {prompt}
          </p>
          {audioUrl && (
            <button 
              onClick={() => new Audio(audioUrl).play()}
              style={{
                background: 'var(--color-surface-2)', border: '1px solid var(--color-border)',
                borderRadius: '50%', width: 44, height: 44, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', fontSize: '1.2rem', transition: 'all 0.2s',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              title="Play Pronunciation"
            >
              🔊
            </button>
          )}
        </div>

        {/* ── Multiple Choice ── */}
        {question.type === 'multiple-choice' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {((lang === 'en' && question.optionsEn) ? question.optionsEn : (question.options || [])).map((opt, idx) => {
              const baseAnswer = (lang === 'en' && question.answerEn) ? question.answerEn : question.answer;
              const normOpt = (s: string) => s.toLowerCase()
                .replace(/[đĐ]/g, 'd').replace(/[ćĆ]/g, 'c').replace(/[čČ]/g, 'c')
                .replace(/[šŠ]/g, 's').replace(/[žŽ]/g, 'z')
                .replace(/[üÜ]/g, 'u').replace(/[öÖ]/g, 'o').replace(/[ğĞ]/g, 'g')
                .replace(/[çÇ]/g, 'c').replace(/[ıİ]/g, 'i')
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                .replace(/[.,!?;:'"()\-]/g, '').trim().replace(/\s+/g, ' ');
              const isThisCorrect = normOpt(opt) === normOpt(baseAnswer);
              let bg = 'var(--color-surface)';
              let borderCol = 'var(--color-border)';
              let textColor = 'var(--color-foreground)';
              let iconBg = 'var(--color-surface-2)';
              let iconColor = 'var(--color-muted)';

              if (status !== 'idle') {
                if (isThisCorrect) {
                  bg = 'rgba(46,204,113,0.1)';
                  borderCol = 'var(--color-success)';
                  textColor = 'var(--color-foreground)';
                  iconBg = 'var(--color-success)';
                  iconColor = '#fff';
                } else if (normOpt(opt) === normOpt(selected ?? '') && status === 'wrong') {
                  bg = 'rgba(231,76,60,0.1)';
                  borderCol = 'var(--color-error)';
                  textColor = 'var(--color-error)';
                  iconBg = 'var(--color-error)';
                  iconColor = '#fff';
                }
              } else if (opt === selected) {
                bg = `${color}08`;
                borderCol = color;
                textColor = 'var(--color-foreground)';
                iconBg = color;
                iconColor = '#fff';
              }

              const isCorrectAnswer = status !== 'idle' && isThisCorrect;
              const isWrongAnswer = status === 'wrong' && normOpt(opt) === normOpt(selected ?? '');

              return (
                <button
                  key={opt}
                  id={`option-${opt.replace(/\s+/g, '-')}`}
                  onClick={() => status === 'idle' && onSelect(opt)}
                  disabled={status !== 'idle'}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: 'clamp(10px, 2.5vw, 14px) clamp(12px, 3vw, 18px)',
                    borderRadius: 12,
                    border: `1.5px solid ${borderCol}`,
                    background: bg,
                    cursor: status !== 'idle' ? 'default' : 'pointer',
                    color: textColor,
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                    transform: isCorrectAnswer ? 'scale(1.01)' : 'scale(1)',
                    wordBreak: 'break-word',
                  }}
                  onMouseEnter={e => {
                    if (status === 'idle' && opt !== selected) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = `${color}44`;
                      (e.currentTarget as HTMLButtonElement).style.background = `${color}0a`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (status === 'idle' && opt !== selected) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface)';
                    }
                  }}
                >
                  {/* Letter badge */}
                  <span style={{
                    width: 30, height: 30, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 800,
                    background: iconBg, color: iconColor,
                    flexShrink: 0, transition: 'all 0.15s',
                  }}>
                    {isCorrectAnswer ? '✓' : isWrongAnswer ? '✗' : optionLetters[idx]}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {/* ── Translate Input ── */}
        {question.type === 'translate' && (
          <div>
            {hint && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.78rem', color: 'var(--color-muted)',
                marginBottom: 12,
                padding: '8px 12px',
                background: 'var(--color-surface-2)',
                borderRadius: 8,
              }}>
                <span>💡</span>
                <span>{t.hint}: <em style={{ color: '#666' }}>{hint}</em></span>
              </div>
            )}
            <input
              id="translate-input"
              type="text"
              placeholder={t.typeHere}
              value={inputVal}
              onChange={e => status === 'idle' && onInputChange(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && status === 'idle' && onCheck()}
              disabled={status !== 'idle'}
              style={{
                borderColor: status === 'correct'
                  ? 'var(--color-success)'
                  : status === 'wrong'
                    ? 'var(--color-error)'
                    : selected
                      ? color
                      : 'var(--color-border)',
                boxShadow: status === 'correct'
                  ? '0 0 0 3px rgba(0,230,118,0.12)'
                  : status === 'wrong'
                    ? '0 0 0 3px rgba(255,23,68,0.12)'
                    : 'none',
              }}
            />
          </div>
        )}

        {/* ── Fill in the Blank ── */}
        {question.type === 'fill-blank' && (() => {
          const displayPrompt = (lang === 'en' && question.promptEn) ? question.promptEn : question.prompt;
          const parts = displayPrompt.split('___');
          return (
            <div>
              {hint && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: '0.78rem', color: 'var(--color-muted)',
                  marginBottom: 12,
                  padding: '8px 12px',
                  background: 'var(--color-surface-2)',
                  borderRadius: 8,
                }}>
                  <span>💡</span>
                  <span>{t.hint}: <em style={{ color: '#666' }}>{hint}</em></span>
                </div>
              )}
              <div style={{
                display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6,
                fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', fontWeight: 600,
                lineHeight: 1.8,
              }}>
                {parts.map((part, i) => (
                  <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span>{part}</span>
                    {i < parts.length - 1 && (
                      <input
                        id="fill-blank-input"
                        type="text"
                        placeholder="..."
                        value={inputVal}
                        onChange={e => status === 'idle' && onInputChange(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && status === 'idle' && onCheck()}
                        disabled={status !== 'idle'}
                        style={{
                          display: 'inline-block',
                          width: 'clamp(80px, 20vw, 140px)',
                          padding: '4px 10px',
                          borderRadius: 8,
                          border: `2px solid ${
                            status === 'correct' ? 'var(--color-success)'
                            : status === 'wrong' ? 'var(--color-error)'
                            : inputVal ? color : 'var(--color-border)'
                          }`,
                          background: 'var(--color-surface-2)',
                          color: 'var(--color-foreground)',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                          textAlign: 'center',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          boxShadow: status === 'correct' ? '0 0 0 3px rgba(0,230,118,0.12)'
                            : status === 'wrong' ? '0 0 0 3px rgba(255,23,68,0.12)' : 'none',
                        }}
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}

        {/* ── Result feedback inline ── */}
        {status !== 'idle' && (
          <div style={{
            marginTop: 16, padding: '10px 16px',
            borderRadius: 10,
            background: status === 'correct' ? 'rgba(0,230,118,0.06)' : 'rgba(255,23,68,0.06)',
            border: `1px solid ${status === 'correct' ? 'rgba(0,230,118,0.2)' : 'rgba(255,23,68,0.2)'}`,
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem',
            color: status === 'correct' ? '#00e676' : '#ff6b6b',
            fontWeight: 600,
            animation: 'slide-up 0.2s ease',
          }}>
            <span style={{ fontSize: '1.1rem' }}>{status === 'correct' ? '🎉' : '💡'}</span>
            {status === 'correct'
              ? streetMode && lang === 'tr' ? 'Bravo, brate! Savrešno!' : t.correctAnswerFeedback
              : <span>{t.correctAnswer} <strong style={{ color: '#fff' }}>{(lang === 'en' && question.answerEn) ? question.answerEn : question.answer}</strong></span>
            }
          </div>
        )}
      </div>
    </div>
  );
}
