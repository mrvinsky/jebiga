'use client';
import { Question } from '@/data/curriculum';
import { useEffect, useState } from 'react';
import { useLanguage, UI_TEXT, STREET_TEXT } from '@/hooks/useLanguage';

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
          height: 6, background: '#1a1a1a',
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
                ? '#00e676'
                : i === questionIndex
                  ? color
                  : '#1e1e1e',
              transition: 'all 0.3s ease',
              boxShadow: i === questionIndex ? `0 0 8px ${color}88` : i < questionIndex ? '0 0 6px rgba(0,230,118,0.3)' : 'none',
            }} />
          ))}
        </div>

        <div style={{
          textAlign: 'center', marginTop: 8,
          fontSize: '0.72rem', color: '#444',
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
            ? '#00e67655'
            : status === 'wrong'
              ? '#ff174455'
              : '#2a2a2a',
          background: status === 'correct'
            ? 'rgba(0,230,118,0.04)'
            : status === 'wrong'
              ? 'rgba(255,23,68,0.04)'
              : undefined,
          animation: shake ? 'shake 0.45s ease-in-out' : 'slide-up 0.3s ease',
          transition: 'border-color 0.2s, background 0.2s',
        }}
      >
        {/* Question type badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: '0.68rem', fontWeight: 800,
          color: '#555', letterSpacing: '0.1em',
          textTransform: 'uppercase',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20, padding: '4px 12px',
          marginBottom: 20,
        }}>
          {question.type === 'multiple-choice' ? t.chooseAnswer : t.translate}
        </div>

        {/* Question text */}
        <p style={{
          fontSize: '1.15rem', fontWeight: 700,
          fontFamily: 'Space Grotesk, sans-serif',
          color: '#f5f5f5', lineHeight: 1.45,
          marginBottom: 28,
        }}>
          {prompt}
        </p>

        {/* ── Multiple Choice ── */}
        {question.type === 'multiple-choice' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {((lang === 'en' && question.optionsEn) ? question.optionsEn : (question.options || [])).map((opt, idx) => {
              const baseAnswer = (lang === 'en' && question.answerEn) ? question.answerEn : question.answer;
              let bg = 'rgba(255,255,255,0.025)';
              let borderCol = 'rgba(255,255,255,0.08)';
              let textColor = '#ccc';
              let iconBg = '#1a1a1a';
              let iconColor = '#555';

              if (status !== 'idle') {
                if (opt === baseAnswer) {
                  bg = 'rgba(0,230,118,0.08)';
                  borderCol = '#00e67644';
                  textColor = '#f0f0f0';
                  iconBg = 'rgba(0,230,118,0.2)';
                  iconColor = '#00e676';
                } else if (opt === selected && status === 'wrong') {
                  bg = 'rgba(255,23,68,0.08)';
                  borderCol = '#ff174444';
                  textColor = '#ff8a8a';
                  iconBg = 'rgba(255,23,68,0.2)';
                  iconColor = '#ff1744';
                }
              } else if (opt === selected) {
                bg = `${color}12`;
                borderCol = `${color}55`;
                textColor = '#f5f5f5';
                iconBg = `${color}22`;
                iconColor = color;
              }

              const isCorrectAnswer = status !== 'idle' && opt === baseAnswer;
              const isWrongAnswer = status === 'wrong' && opt === selected;

              return (
                <button
                  key={opt}
                  id={`option-${opt.replace(/\s+/g, '-')}`}
                  onClick={() => status === 'idle' && onSelect(opt)}
                  disabled={status !== 'idle'}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px',
                    borderRadius: 12,
                    border: `1.5px solid ${borderCol}`,
                    background: bg,
                    cursor: status !== 'idle' ? 'default' : 'pointer',
                    color: textColor,
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                    transform: isCorrectAnswer ? 'scale(1.01)' : 'scale(1)',
                  }}
                  onMouseEnter={e => {
                    if (status === 'idle' && opt !== selected) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = `${color}44`;
                      (e.currentTarget as HTMLButtonElement).style.background = `${color}0a`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (status === 'idle' && opt !== selected) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.025)';
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
                fontSize: '0.78rem', color: '#555',
                marginBottom: 12,
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.03)',
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
                  ? '#00e676'
                  : status === 'wrong'
                    ? '#ff1744'
                    : selected
                      ? `${color}66`
                      : '#2a2a2a',
                boxShadow: status === 'correct'
                  ? '0 0 0 3px rgba(0,230,118,0.12)'
                  : status === 'wrong'
                    ? '0 0 0 3px rgba(255,23,68,0.12)'
                    : 'none',
              }}
            />
          </div>
        )}

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
