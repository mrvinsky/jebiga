'use client';
import { useLanguage, UI_TEXT } from '@/hooks/useLanguage';

interface FeedbackToastProps {
  status: 'correct' | 'wrong';
  message: string;
  correctAnswer?: string;
  isLastQuestion: boolean;
  onNext: () => void;
}

export default function FeedbackToast({
  status,
  message,
  correctAnswer,
  isLastQuestion,
  onNext
}: FeedbackToastProps) {
  const lang = useLanguage();
  const t = UI_TEXT[lang];

  return (
    <div
      className={`animate-slide-up ${status === 'correct' ? 'toast-success' : 'toast-error'}`}
      style={{
        marginTop: 16,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <div style={{ flex: '1 1 180px', minWidth: 0 }}>
        <div style={{
          fontWeight: 800,
          fontFamily: 'var(--font-display)',
          marginBottom: 4,
          fontSize: 'clamp(0.82rem, 3vw, 0.95rem)',
          wordBreak: 'break-word',
        }}>
          {message}
        </div>
        {status === 'wrong' && correctAnswer && (
          <div style={{ fontSize: '0.8rem', color: 'var(--color-foreground)', opacity: 0.75, wordBreak: 'break-word' }}>
            {t.correctAnswer} <strong style={{ color: 'var(--color-foreground)' }}>{correctAnswer}</strong>
          </div>
        )}
      </div>
      <button
        className={status === 'correct' ? 'btn-primary' : 'btn-ghost'}
        onClick={onNext}
        id="next-btn"
        style={{
          flexShrink: 0,
          minWidth: 'min(100%, 120px)',
          padding: '12px 20px',
          fontSize: '0.9rem',
        }}
      >
        {isLastQuestion ? t.finish : t.next}
      </button>
    </div>
  );
}
