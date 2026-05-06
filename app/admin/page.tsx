'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { UserData } from '@/lib/firestore';
import { curriculum } from '@/data/curriculum';

export default function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [proUsers, setProUsers] = useState<number>(0);
  const [dailyActive, setDailyActive] = useState<number>(0);
  const [avgLevel, setAvgLevel] = useState<number>(0);
  const [langSplit, setLangSplit] = useState({ tr: 0, en: 0, other: 0 });
  const [avgCompleted, setAvgCompleted] = useState<number>(0);
  const [topStreakUser, setTopStreakUser] = useState({ name: '-', streak: 0 });
  const [loading, setLoading] = useState(true);

  // Calculate curriculum stats
  let totalLessonsCurriculum = 0;
  let totalQuestionsCount = 0; // "Cümleler"
  const seenWords = new Set<string>();

  // Helper to check if text is Turkish
  const isTurkish = (text: string) => /[ıİğĞ]/.test(text) || /^\d+$/.test(text);
  
  // Helper to extract quoted part
  const extractQuoted = (text: string) => {
    const m = text.match(/["""«»]([^"""«»]+)["""«»]/);
    return m ? m[1].trim() : null;
  };

  curriculum.forEach(set => {
    totalLessonsCurriculum += set.lessons.length;
    set.lessons.forEach(lesson => {
      totalQuestionsCount += lesson.questions.length;
      lesson.questions.forEach(q => {
        let serbian = '';
        if (q.type === 'translate' || q.type === 'fill-blank') {
          if (!isTurkish(q.answer) && q.answer.length > 1) serbian = q.answer.trim();
        } else if (q.type === 'multiple-choice') {
          const isMeaningQ = /ne anlama gelir|what does.*mean|nedir\?/i.test((q.prompt || '') + (q.promptEn || ''));
          const isHowToSayQ = /nasıl denir|how do you say|how do you ask/i.test((q.prompt || '') + (q.promptEn || ''));
          if (isMeaningQ) {
            const quoted = extractQuoted(q.prompt || '') || extractQuoted(q.promptEn || '');
            if (quoted && !isTurkish(quoted) && quoted.length > 1) serbian = quoted;
          } else if (isHowToSayQ) {
            if (!isTurkish(q.answer) && q.answer.length > 1) serbian = q.answer.trim();
          }
        }
        if (serbian) {
          const key = serbian.toLowerCase().replace(/[^a-zšđčćžа-я0-9]/gi, '');
          if (key.length >= 2) seenWords.add(key);
        }
      });
    });
  });

  const totalWordsCount = seenWords.size;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const usersRef = collection(db, 'users');
        const snap = await getDocs(usersRef);
        
        let proCount = 0;
        let activeCount = 0;
        let sumLevel = 0;
        let trCount = 0, enCount = 0, otherCount = 0;
        let sumCompleted = 0;
        let maxStreak = 0;
        let maxStreakName = '-';

        const now = new Date().getTime();
        const oneDayMs = 24 * 60 * 60 * 1000;

        snap.forEach((doc) => {
          const data = doc.data() as UserData;
          
          if (data.subscription === 'pro') proCount++;
          
          // Daily Active Users
          if (data.lastActive) {
            const lastActiveDate = (data.lastActive as any).toDate ? (data.lastActive as any).toDate() : new Date((data.lastActive as any).seconds * 1000);
            if (now - lastActiveDate.getTime() < oneDayMs) {
              activeCount++;
            }
          }

          sumLevel += (data.level || 1);
          
          if (data.lang === 'tr') trCount++;
          else if (data.lang === 'en') enCount++;
          else otherCount++;

          sumCompleted += (data.completedLessons?.length || 0);

          if ((data.streak || 0) > maxStreak) {
            maxStreak = data.streak;
            maxStreakName = data.displayName || data.email || 'Bilinmeyen Kullanıcı';
          }
        });

        const total = snap.size || 1; // Prevent division by zero

        setTotalUsers(snap.size);
        setProUsers(proCount);
        setDailyActive(activeCount);
        setAvgLevel(sumLevel / total);
        setLangSplit({ tr: trCount, en: enCount, other: otherCount });
        setAvgCompleted(sumCompleted / total);
        setTopStreakUser({ name: maxStreakName, streak: maxStreak });

      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 32, fontFamily: 'var(--font-display)', fontWeight: 900 }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Total Users</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-display)' }}>{totalUsers}</div>
        </div>
        
        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Daily Active (24h)</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-neon)', fontFamily: 'var(--font-display)' }}>{dailyActive}</div>
        </div>

        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Pro Subscribers</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#f1c40f', fontFamily: 'var(--font-display)' }}>{proUsers}</div>
        </div>

        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Total Lessons</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#1abc9c', fontFamily: 'var(--font-display)' }}>{totalLessonsCurriculum}</div>
        </div>

        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Total Unique Words</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#1abc9c', fontFamily: 'var(--font-display)' }}>{totalWordsCount}</div>
        </div>

        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Total Sentences / Exercises</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#1abc9c', fontFamily: 'var(--font-display)' }}>{totalQuestionsCount}</div>
        </div>

        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Avg Level</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#e056fd', fontFamily: 'var(--font-display)' }}>{avgLevel.toFixed(1)}</div>
        </div>

        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Avg Lessons Done</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#3498db', fontFamily: 'var(--font-display)' }}>{avgCompleted.toFixed(1)}</div>
        </div>

        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Top Streak: {topStreakUser.name}</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#e67e22', fontFamily: 'var(--font-display)' }}>{topStreakUser.streak} 🔥</div>
        </div>

        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333', gridColumn: '1 / -1' }}>
          <div style={{ color: '#888', marginBottom: 16, fontWeight: 600 }}>Language Split</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1, background: '#222', padding: 16, borderRadius: 12 }}>
              <div style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: 4 }}>TR (Turkish)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{langSplit.tr}</div>
            </div>
            <div style={{ flex: 1, background: '#222', padding: 16, borderRadius: 12 }}>
              <div style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: 4 }}>EN (English)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{langSplit.en}</div>
            </div>
            <div style={{ flex: 1, background: '#222', padding: 16, borderRadius: 12 }}>
              <div style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: 4 }}>Other / Not Set</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{langSplit.other}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
