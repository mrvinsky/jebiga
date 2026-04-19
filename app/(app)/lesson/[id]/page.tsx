'use client';
import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useStreetMode } from '@/context/StreetModeContext';
import { getAllLessons, Question } from '@/data/curriculum';
import { completeLesson, updateStreak } from '@/lib/firestore';
import QuizCard from '@/components/lesson/QuizCard';
import FeedbackToast from '@/components/lesson/FeedbackToast';
import LessonIntro from '@/components/lesson/LessonIntro';
import { getLessonContent } from '@/data/lessonContent';

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { user, userData, refreshUserData } = useAuth();
  const { streetMode } = useStreetMode();

  const allLessons = getAllLessons();
  const lesson = allLessons.find((l) => l.id === id);

  const [phase, setPhase] = useState<'intro' | 'quiz'>('intro');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [inputVal, setInputVal] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [finished, setFinished] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => { setCurrent(0); setFinished(false); setMistakes(0); setXpEarned(0); setPhase('intro'); }, [id]);

  const content = getLessonContent(lesson?.id ?? '');
  const isPro = userData?.subscription === 'pro';

  if (!lesson) return (
    <div style={{ textAlign: 'center', paddingTop: 60 }}>
      <p style={{ color: '#888' }}>Lesson not found. Jebiga 💀</p>
      <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => router.push('/learn')}>Back to map</button>
    </div>
  );

  // Pro Protection Redirect
  if ((lesson as unknown as { isPro: boolean }).isPro && !isPro) {
    if (typeof window !== 'undefined') window.location.href = "YOUR_PAYMENT_LINK_HERE";
    return null; // Return null while redirecting
  }

  const questions = lesson.questions;
  const q: Question = questions[current];
  const progress = ((current) / questions.length) * 100;

  const wrongPhrases = streetMode
    ? ['Jebiga, try again! 💀', 'Vopi, not quite brate! 🔥', 'Pazi! That\'s wrong 😤', 'Kapiram — almost, but no! 😅']
    : ['Jebiga, try again! 💀', 'Not quite — give it another shot!', 'Wrong! But you\'ll get it 💪', 'Nope! Try once more'];
  const correctPhrases = streetMode
    ? ['Bravo, brate! 🔥', 'Kapiram, savršeno! ✨', 'To je to, majstore! 💪', 'Odlično! Full send! ⚡']
    : ['Correct! Bravo! 🎉', 'Nice one! 🔥', 'Odlično! That\'s right! ✅', 'Perfect! Keep going! ⚡'];

  const randomFrom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  /**
   * Normalise an answer string so users are never penalised for:
   *  1. Case        — "Zdravo" = "zdravo" = "ZDRAVO"
   *  2. Diacritics  — "s" = "š",  "c" = "č/ć",  "z" = "ž"
   *                   đ/Đ mapped manually (NFD won't decompose it)
   *  3. Punctuation — . , ! ? ; : ' " ( ) are ignored
   *  4. Whitespace  — leading/trailing stripped, multiple spaces collapsed
   */
  const normalise = (s: string) =>
    s
      .toLowerCase()
      .replace(/[đÐ]/gi, 'd')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[.,!?;:'"()\-]/g, '')
      .trim()
      .replace(/\s+/g, ' ');

  const checkAnswer = () => {
    const userAnswer = q.type === 'multiple-choice' ? selected : inputVal;
    if (!userAnswer) return;
    const correct = normalise(userAnswer) === normalise(q.answer);
    setStatus(correct ? 'correct' : 'wrong');
    if (!correct) setMistakes(m => m + 1);
  };

  const next = () => {
    setSelected(null); setInputVal(''); setStatus('idle');
    if (current + 1 >= questions.length) {
      const earned = Math.max(lesson.xpReward - mistakes * 5, 5);
      setXpEarned(earned);
      setFinished(true);
      if (user) { completeLesson(user.uid, lesson.id, earned); updateStreak(user.uid); refreshUserData(); }
    } else {
      setCurrent(c => c + 1);
    }
  };

  // ── Intro phase ──
  if (phase === 'intro' && lesson) {
    if (content) {
      return (
        <LessonIntro
          lessonTitle={lesson.title}
          streetTitle={lesson.streetTitle}
          emoji={lesson.emoji}
          color={(lesson as unknown as { color?: string }).color ?? '#c0392b'}
          xpReward={lesson.xpReward}
          content={content}
          streetMode={streetMode}
          onStart={() => setPhase('quiz')}
        />
      );
    } else {
      // No content yet — skip straight to quiz
      setPhase('quiz');
    }
  }

  if (finished) return (
    <div style={{ textAlign: 'center', paddingTop: 40 }}>
      <div style={{ fontSize: '4rem', marginBottom: 16, animation: 'pop-in 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>🎉</div>
      <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>
        {streetMode ? 'Jebiga, to je to!' : 'Lesson Complete!'}
      </h2>
      <p style={{ color: '#888', marginBottom: 32 }}>
        {streetMode ? `Bravo brate — ${mistakes} greška${mistakes !== 1 ? 'ke' : ''}!` : `You made ${mistakes} mistake${mistakes !== 1 ? 's' : ''}.`}
      </p>
      <div className={`glass ${streetMode ? 'neon-border' : ''}`} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '24px 48px', marginBottom: 32 }}>
        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f5c518', fontFamily: 'Space Grotesk, sans-serif' }}>+{xpEarned} XP</div>
        <div style={{ color: '#666', fontSize: '0.85rem' }}>earned this lesson</div>
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn-ghost" onClick={() => { setCurrent(0); setFinished(false); setMistakes(0); setXpEarned(0); setStatus('idle'); }}>Try again 🔄</button>
        <button className="btn-primary" onClick={() => router.push('/learn')}>Back to map 🗺️</button>
      </div>
    </div>
  );

  const feedbackMsg = status !== 'idle' ? randomFrom(status === 'correct' ? correctPhrases : wrongPhrases) : '';

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <button onClick={() => router.push('/learn')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1.2rem', padding: 4 }}>✕</button>
        <div className="progress-bar" style={{ flex: 1 }}>
          <div className={streetMode ? 'progress-fill-neon' : 'progress-fill'} style={{ width: `${progress}%` }} />
        </div>
        <span style={{ color: '#555', fontSize: '0.8rem', fontWeight: 700 }}>{current + 1}/{questions.length}</span>
      </div>

      {/* Question card */}
      <QuizCard
        question={q}
        selected={selected}
        inputVal={inputVal}
        status={status}
        streetMode={streetMode}
        onSelect={setSelected}
        onInputChange={setInputVal}
        onCheck={checkAnswer}
      />

      {/* Feedback toast */}
      {status !== 'idle' && (
        <FeedbackToast
          status={status as 'correct' | 'wrong'}
          message={feedbackMsg}
          correctAnswer={q.answer}
          isLastQuestion={current + 1 >= questions.length}
          onNext={next}
        />
      )}

      {/* Check button */}
      {status === 'idle' && (
        <button
          id="check-btn"
          className="btn-primary"
          style={{ width: '100%', marginTop: 20, opacity: (selected || inputVal.trim()) ? 1 : 0.4 }}
          onClick={checkAnswer}
          disabled={!selected && !inputVal.trim()}
        >
          Check answer
        </button>
      )}
    </div>
  );
}
