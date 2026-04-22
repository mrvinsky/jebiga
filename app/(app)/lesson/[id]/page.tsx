'use client';
import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useLanguage, UI_TEXT } from '@/hooks/useLanguage';
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
  const lang = useLanguage();
  const t = UI_TEXT[lang];

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
      <p style={{ color: '#888' }}>{t.lessonNotFound}</p>
      <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => router.push('/learn')}>{t.backToMap}</button>
    </div>
  );

  // Pro Protection Redirect
  if ((lesson as unknown as { isPro: boolean }).isPro && !isPro) {
    if (typeof window !== 'undefined') router.push('/pro');
    return null; // Return null while redirecting
  }

  const questions = lesson.questions;
  const q: Question = questions[current];
  const progress = ((current) / questions.length) * 100;

  const wrongPhrases = (streetMode && lang === 'tr')
    ? ['Jebiga, tekrar dene! 💀', 'Vopi, tam değil brate! 🔥', 'Pazi! Yanlış oldu 😤', 'Kapiram — az kalsın ama ı-ıh! 😅']
    : lang === 'en'
      ? ['Jebiga, try again! 💀', 'Not quite, brother! 🔥', 'Watch out! That was wrong 😤', 'I get it — almost, but no! 😅']
      : ['Jebiga, tekrar dene! 💀', 'Tam değil — bir şans daha ver!', 'Yanlış! Ama yaparsın 💪', 'Maalesef! Tekrar dene'];

  const correctPhrases = (streetMode && lang === 'tr')
    ? ['Bravo, brate! 🔥', 'Kapiram, savršeno! ✨', 'To je to, majstore! 💪', 'Odlično! Full send! ⚡']
    : lang === 'en'
      ? ['Bravo, brother! 🔥', 'I get it, perfect! ✨', 'That is it, master! 💪', 'Excellent! Full send! ⚡']
      : ['Doğru! Bravo! 🎉', 'Çok iyi! 🔥', 'Odlično! Aynen öyle! ✅', 'Mükemmel! Aynen devam! ⚡'];

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
          titleEn={lesson.titleEn}
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
        {streetMode ? 'Jebiga, to je to!' : t.lessonDone}
      </h2>
      <p style={{ color: '#888', marginBottom: 32 }}>
        {streetMode 
          ? `Bravo brate — ${mistakes} greška${mistakes !== 1 ? 'ke' : ''}!` 
          : t.mistakesMade.replace('{n}', mistakes.toString())}
      </p>
      <div className={`glass ${streetMode ? 'neon-border' : ''}`} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '24px 48px', marginBottom: 32 }}>
        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f5c518', fontFamily: 'Space Grotesk, sans-serif' }}>+{xpEarned} XP</div>
        <div style={{ color: '#666', fontSize: '0.85rem' }}>{t.xpEarned}</div>
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn-ghost" onClick={() => { setCurrent(0); setFinished(false); setMistakes(0); setXpEarned(0); setStatus('idle'); }}>{t.tryAgain}</button>
        <button className="btn-primary" onClick={() => router.push('/learn')}>{t.backToMap}</button>
      </div>
    </div>
  );

  const feedbackMsg = status !== 'idle' ? randomFrom(status === 'correct' ? correctPhrases : wrongPhrases) : '';

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      {/* Back button */}
      <div style={{ marginBottom: 8 }}>
        <button
          onClick={() => router.push('/learn')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#444', fontSize: '0.82rem', fontWeight: 600,
            padding: '6px 0', display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          {t.backToMap}
        </button>
      </div>

      {/* Question card */}
      <QuizCard
        question={q}
        questionIndex={current}
        totalQuestions={questions.length}
        selected={selected}
        inputVal={inputVal}
        status={status}
        streetMode={streetMode}
        color={(lesson as unknown as { color?: string }).color ?? '#c0392b'}
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
          style={{
            width: '100%', marginTop: 20,
            opacity: (selected || inputVal.trim()) ? 1 : 0.4,
            fontSize: '1rem', padding: '16px',
          }}
          onClick={checkAnswer}
          disabled={!selected && !inputVal.trim()}
        >
          {t.checkAnswer}
        </button>
      )}
    </div>
  );
}

