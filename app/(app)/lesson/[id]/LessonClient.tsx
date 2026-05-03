'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useLanguage, UI_TEXT, STREET_TEXT } from '@/hooks/useLanguage';
import { useStreetMode } from '@/context/StreetModeContext';
import { getAllLessons, Question } from '@/data/curriculum';
import { completeLesson, updateStreak, calculateLevel } from '@/lib/firestore';
import QuizCard from '@/components/lesson/QuizCard';
import FeedbackToast from '@/components/lesson/FeedbackToast';
import LessonIntro from '@/components/lesson/LessonIntro';
import LessonSplash from '@/components/lesson/LessonSplash';
import LessonRecap from '@/components/lesson/LessonRecap';
import { getLessonContent } from '@/data/lessonContent';

export default function LessonClient({ id }: { id: string }) {
  const router = useRouter();
  const { user, userData, refreshUserData } = useAuth();
  const { streetMode } = useStreetMode();
  const lang = useLanguage();
  const t = streetMode ? { ...UI_TEXT[lang], ...STREET_TEXT } : UI_TEXT[lang];

  const allLessons = getAllLessons();
  const lesson = allLessons.find((l) => l.id === id);

  const [phase, setPhase] = useState<'recap' | 'splash' | 'intro' | 'quiz'>('splash');
  const [recapWords, setRecapWords] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [inputVal, setInputVal] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [finished, setFinished] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [leveledUp, setLeveledUp] = useState(false);

  useEffect(() => { 
    setCurrent(0); 
    setFinished(false); 
    setMistakes(0); 
    setXpEarned(0); 
    
    // Recap Logic
    const completed = userData?.completedLessons || [];
    if (!completed.includes(id) && completed.length > 0) {
      const randomLessonId = completed[Math.floor(Math.random() * completed.length)];
      const oldContent = getLessonContent(randomLessonId);
      
      if (oldContent?.vocabulary && oldContent.vocabulary.length > 0) {
        const shuffled = [...oldContent.vocabulary].sort(() => 0.5 - Math.random());
        setRecapWords(shuffled.slice(0, 3));
        setPhase('recap');
        return;
      }
    }
    
    setPhase('splash'); 
  }, [id, userData?.completedLessons]);

  const content = getLessonContent(lesson?.id ?? '');
  const isPro = userData?.subscription === 'pro';

  if (!lesson) return (
    <div style={{ textAlign: 'center', paddingTop: 60 }}>
      <p style={{ color: 'var(--color-muted)' }}>{t.lessonNotFound}</p>
      <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => router.push('/map')}>{t.backToMap}</button>
    </div>
  );

  // Pro Protection Redirect
  if ((lesson as unknown as { isPro: boolean }).isPro && !isPro) {
    if (typeof window !== 'undefined') router.push('/pro');
    return null; // Return null while redirecting
  }

  const questions = lesson.questions;
  const q: Question = questions[current];

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

  const normalise = (s: string) =>
    s
      .toLowerCase()
      // Serbian specific replacements (before NFD normalize)
      .replace(/[đĐ]/g, 'd')
      .replace(/[ćĆ]/g, 'c')
      .replace(/[čČ]/g, 'c')
      .replace(/[šŠ]/g, 's')
      .replace(/[žŽ]/g, 'z')
      // Turkish specific replacements
      .replace(/[üÜ]/g, 'u')
      .replace(/[öÖ]/g, 'o')
      .replace(/[ğĞ]/g, 'g')
      .replace(/[çÇ]/g, 'c')
      .replace(/[ıİ]/g, 'i')
      // NFD normalize remaining accented chars
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      // Strip punctuation and normalize whitespace
      .replace(/[.,!?;:'"()\-]/g, '')
      .trim()
      .replace(/\s+/g, ' ');

  const checkAnswer = () => {
    const userAnswer = q.type === 'multiple-choice' ? selected : inputVal;
    if (!userAnswer) return;
    const correctAnswer = (lang === 'en' && q.answerEn) ? q.answerEn : q.answer;
    // Use normalise for both types — prevents mismatches from whitespace, case, diacritics
    const correct = normalise(userAnswer) === normalise(correctAnswer);
    setStatus(correct ? 'correct' : 'wrong');
    if (!correct) setMistakes(m => m + 1);
  };

  const next = () => {
    setSelected(null); setInputVal(''); setStatus('idle');
    if (current + 1 >= questions.length) {
      const earned = Math.max(lesson.xpReward - mistakes * 5, 5);
      setFinished(true);
      if (user) { 
        (async () => {
          const streak = userData?.streak || 0;
          const bonusMultiplier = 1 + Math.min(streak * 0.05, 0.5);
          const finalEarned = Math.round(earned * bonusMultiplier);
          setXpEarned(finalEarned);

          const oldLevel = calculateLevel(userData?.xp || 0);
          const newLevel = calculateLevel((userData?.xp || 0) + finalEarned);
          
          if (newLevel > oldLevel) {
            setLeveledUp(true);
          }
          
          await completeLesson(user.uid, lesson.id, earned); 
          await updateStreak(user.uid); 
          await refreshUserData(); 
        })();
      }
    } else {
      setCurrent(c => c + 1);
    }
  };

  if (phase === 'recap') {
    return (
      <LessonRecap
        words={recapWords}
        streetMode={streetMode}
        onContinue={() => setPhase('splash')}
      />
    );
  }

  if (phase === 'splash' && lesson) {
    return (
      <LessonSplash
        title={streetMode ? lesson.streetTitle : (lang === 'en' && lesson.titleEn ? lesson.titleEn : lesson.title)}
        emoji={lesson.emoji}
        color={(lesson as unknown as { color?: string }).color ?? '#c0392b'}
        streetMode={streetMode}
        lang={lang}
        onComplete={() => setPhase(content ? 'intro' : 'quiz')}
      />
    );
  }

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
      setPhase('quiz');
    }
  }

  if (finished) return (
    <div style={{ textAlign: 'center', paddingTop: 40 }}>
      <div style={{ fontSize: '4rem', marginBottom: 16, animation: 'pop-in 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>🎉</div>
      <h2 style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', marginBottom: 8 }}>
        {streetMode ? 'Jebiga, to je to!' : t.lessonDone}
      </h2>
      <p style={{ color: 'var(--color-muted)', marginBottom: 32 }}>
        {streetMode 
          ? `Bravo brate — ${mistakes} greška${mistakes !== 1 ? 'ke' : ''}!` 
          : t.mistakesMade.replace('{n}', mistakes.toString())}
      </p>
      <div className={`glass ${streetMode ? 'neon-border' : ''}`} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '24px 48px', marginBottom: 32, position: 'relative', background: 'var(--color-surface)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        {leveledUp && (
          <div style={{
            position: 'absolute', top: -12, right: -12,
            background: 'var(--color-neon)', color: '#fff',
            padding: '4px 10px', borderRadius: 8,
            fontSize: '0.7rem', fontWeight: 900,
            transform: 'rotate(12deg)',
            animation: 'pop-in 0.3s ease forwards',
            boxShadow: '0 0 15px rgba(39,174,96,0.3)',
          }}>
            LEVEL UP! 🚀
          </div>
        )}
        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-xp)', fontFamily: 'var(--font-display)' }}>
          +{xpEarned} XP
        </div>
        {userData?.streak && userData.streak > 0 && (
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#e67e22', marginTop: -4 }}>
            {lang === 'en' ? 'STREAK BONUS: ' : 'SERİ BONUSU: '} 
            +{Math.min(userData.streak * 5, 50)}% 🔥
          </div>
        )}
        <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>{t.xpEarned}</div>
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn-ghost" onClick={() => { setCurrent(0); setFinished(false); setMistakes(0); setXpEarned(0); setStatus('idle'); }}>{t.tryAgain}</button>
        <button className="btn-primary" onClick={() => router.push('/map')}>{t.backToMap}</button>
      </div>
    </div>
  );

  const feedbackMsg = status !== 'idle' ? randomFrom(status === 'correct' ? correctPhrases : wrongPhrases) : '';

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <div style={{ marginBottom: 8 }}>
        <button
          onClick={() => router.push('/map')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--color-muted)', fontSize: '0.82rem', fontWeight: 600,
            padding: '6px 0', display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--font-display)',
          }}
        >
          {t.backToMap}
        </button>
      </div>

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

      {status !== 'idle' && (
        <FeedbackToast
          status={status as 'correct' | 'wrong'}
          message={feedbackMsg}
          correctAnswer={(lang === 'en' && q.answerEn) ? q.answerEn : q.answer}
          isLastQuestion={current + 1 >= questions.length}
          onNext={next}
        />
      )}

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
