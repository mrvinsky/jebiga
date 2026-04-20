'use client';

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
  return (
    <div className={`animate-slide-up ${status === 'correct' ? 'toast-success' : 'toast-error'}`} style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>{message}</div>
        {status === 'wrong' && correctAnswer && (
          <div style={{ fontSize: '0.82rem', color: '#aaa' }}>
            Doğrusu: <strong style={{ color: '#f5f5f5' }}>{correctAnswer}</strong>
          </div>
        )}
      </div>
      <button
        className={status === 'correct' ? 'btn-primary' : 'btn-ghost'}
        onClick={onNext}
        id="next-btn"
        style={{ flexShrink: 0 }}
      >
        {isLastQuestion ? 'Bitir 🎉' : 'İleri →'}
      </button>
    </div>
  );
}
