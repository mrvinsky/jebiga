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
    <div className={`animate-slide-up ${status === 'correct' ? 'toast-success' : 'toast-error'}`} style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: 4 }}>{message}</div>
        {status === 'wrong' && correctAnswer && (
          <div style={{ fontSize: '0.82rem', color: 'var(--color-foreground)', opacity: 0.7 }}>
            {t.correctAnswer} <strong style={{ color: 'var(--color-foreground)' }}>{correctAnswer}</strong>
          </div>
        )}
      </div>
      <button
        className={status === 'correct' ? 'btn-primary' : 'btn-ghost'}
        onClick={onNext}
        id="next-btn"
        style={{ flexShrink: 0 }}
      >
        {isLastQuestion ? t.finish : t.next}
      </button>
    </div>
  );
}
