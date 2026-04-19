'use client';
import { Question } from '@/data/curriculum';

interface QuizCardProps {
  question: Question;
  selected: string | null;
  inputVal: string;
  status: 'idle' | 'correct' | 'wrong';
  onSelect: (opt: string) => void;
  onInputChange: (val: string) => void;
  onCheck: () => void;
  streetMode: boolean;
}

export default function QuizCard({
  question,
  selected,
  inputVal,
  status,
  onSelect,
  onInputChange,
  onCheck,
  streetMode
}: QuizCardProps) {
  const prompt = (streetMode && question.streetPrompt) ? question.streetPrompt : question.prompt;

  return (
    <div className="card-lesson" style={{ animation: 'slide-up 0.3s ease', borderColor: status === 'correct' ? '#00e67633' : status === 'wrong' ? '#ff174433' : '#2a2a2a' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#555', letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>
        {question.type === 'multiple-choice' ? '🧠 Choose the answer' : '✍️ Translate'}
      </div>
      <p style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 28, lineHeight: 1.4, color: '#f5f5f5' }}>
        {prompt}
      </p>

      {/* MCQ options */}
      {question.type === 'multiple-choice' && question.options && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {question.options.map((opt) => {
            let cls = 'answer-option';
            if (status !== 'idle') {
              if (opt === question.answer) cls += ' correct';
              else if (opt === selected && status === 'wrong') cls += ' wrong';
            } else if (opt === selected) cls += ' selected';
            return (
              <button
                key={opt}
                id={`option-${opt.replace(/\s+/g,'-')}`}
                className={cls}
                onClick={() => status === 'idle' && onSelect(opt)}
                disabled={status !== 'idle'}
              >
                <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>
                  {['A','B','C','D'][question.options!.indexOf(opt)]}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {/* Translate input */}
      {question.type === 'translate' && (
        <div>
          {question.hint && <p style={{ fontSize: '0.78rem', color: '#555', marginBottom: 10 }}>💡 Hint: {question.hint}</p>}
          <input
            id="translate-input"
            type="text"
            placeholder="Type your answer..."
            value={inputVal}
            onChange={(e) => status === 'idle' && onInputChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && status === 'idle' && onCheck()}
            disabled={status !== 'idle'}
            style={{ borderColor: status === 'correct' ? '#00e676' : status === 'wrong' ? '#ff1744' : '#2a2a2a' }}
          />
        </div>
      )}
    </div>
  );
}
