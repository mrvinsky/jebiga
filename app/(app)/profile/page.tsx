'use client';
import { useAuth } from '@/context/AuthContext';
import { useStreetMode } from '@/context/StreetModeContext';
import { curriculum, getAllLessons } from '@/data/curriculum';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/auth';
import { setUserLanguage } from '@/lib/firestore';
import { calculateLevel, getXPForLevel } from '@/lib/firestore';
import { useLanguage, UI_TEXT } from '@/hooks/useLanguage';

export default function ProfilePage() {
  const { user, userData, refreshUserData } = useAuth();
  const { streetMode } = useStreetMode();
  const router = useRouter();
  const lang = useLanguage();
  const t = UI_TEXT[lang];
  const allLessons = getAllLessons();
  const completed = userData?.completedLessons || [];
  const xp = userData?.xp || 0;
  const currentLevel = calculateLevel(xp);
  const xpStart = getXPForLevel(currentLevel);
  const xpEnd = getXPForLevel(currentLevel + 1);
  const xpProgress = ((xp - xpStart) / (xpEnd - xpStart)) * 100;
  const level = currentLevel; 
  const isPro = userData?.subscription === 'pro';

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', letterSpacing: '-0.02em', marginBottom: 28 }}>
        {streetMode ? (lang === 'en' ? 'Your Profile, mate 👤' : 'Tvoj Profil, brate 👤') : t.profileTitle}
      </h1>

      {/* User card */}
      <div className="glass-strong" style={{ padding: 28, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#c0392b,#003da5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 900, color: '#fff', flexShrink: 0, overflow: 'hidden' }}>
          {user?.photoURL ? <img src={user.photoURL} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} /> : (user?.displayName?.[0] || '?').toUpperCase()}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>{userData?.displayName || user?.email || 'Stranger'}</span>
            {isPro && <span className="pro-badge">⚡ PRO</span>}
          </div>
          <div style={{ color: 'var(--color-muted)', fontSize: '0.82rem', marginBottom: 12 }}>{user?.email}</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: 'var(--color-xp)', fontSize: '1.1rem' }}>{xp}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>XP</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: 'var(--color-red)', fontSize: '1.1rem' }}>Lv.{level}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>{t.levelLabel}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: '#e67e22', fontSize: '1.1rem' }}>{userData?.streak || 0}🔥</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>{t.streakLabel}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: 'var(--color-success)', fontSize: '1.1rem' }}>{completed.length}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>{t.completedLabel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* XP to next level */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-foreground)' }}>{t.levelLabel} {currentLevel} → {currentLevel + 1}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>{xp - getXPForLevel(currentLevel)} / {getXPForLevel(currentLevel + 1) - getXPForLevel(currentLevel)} XP</span>
        </div>
        <div className="progress-bar">
          <div className={streetMode ? 'progress-fill-neon' : 'progress-fill'} style={{ width: `${xpProgress}%` }} />
        </div>
      </div>

      {/* Progress by section */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: 16, fontSize: '0.95rem', color: 'var(--color-foreground)' }}>
          {streetMode ? (lang === 'en' ? 'Your progress, mate' : 'Tvoj napredak, brate') : t.sectionProgress}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {curriculum.map((set) => {
            const total = set.lessons.length;
            const done = set.lessons.filter(l => completed.includes(l.id)).length;
            const pct = total > 0 ? (done / total) * 100 : 0;
            return (
              <div key={set.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-foreground)' }}>{set.emoji} {streetMode ? set.streetTitle : (lang === 'en' && set.titleEn ? set.titleEn : set.title)}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>{done}/{total}</span>
                </div>
                <div className="progress-bar">
                  <div style={{ height: '100%', borderRadius: 4, background: set.color, width: `${pct}%`, transition: 'width 0.4s ease', boxShadow: pct > 0 ? `0 0 8px ${set.color}66` : 'none' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upgrade CTA if free */}
      {!isPro && (
        <div style={{ background: 'rgba(241,196,15,0.08)', border: '1px solid rgba(241,196,15,0.3)', borderRadius: 16, padding: 24, textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>⚡</div>
          <h3 style={{ fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: 8, color: 'var(--color-foreground)' }}>{t.upgradeToPro}</h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', marginBottom: 16 }}>{t.upgradeDesc}</p>
          <Link href="/pro" className="btn-primary">{t.becomePro}</Link>
        </div>
      )}

      {/* Language selector */}
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 16, padding: 20, marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div>
            <div style={{ fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: '0.95rem', marginBottom: 2, color: 'var(--color-foreground)' }}>
              {t.interfaceLanguage}
            </div>
            <div style={{ color: 'var(--color-muted)', fontSize: '0.78rem' }}>{lang === 'en' ? 'UI Language' : 'Arayüz Dili'}</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {(['tr', 'en'] as const).map(l => (
              <button
                key={l}
                onClick={async () => {
                  if (user && userData?.lang !== l) {
                    await setUserLanguage(user.uid, l);
                    await refreshUserData();
                  }
                }}
                style={{
                  padding: '8px 16px', borderRadius: 10,
                  border: userData?.lang === l ? '1.5px solid var(--color-red)' : '1.5px solid var(--color-border)',
                  background: userData?.lang === l ? 'rgba(192,57,43,0.1)' : 'var(--color-surface-2)',
                  color: userData?.lang === l ? 'var(--color-red)' : 'var(--color-muted)',
                  fontWeight: 700, fontSize: '0.82rem',
                  cursor: userData?.lang === l ? 'default' : 'pointer',
                  fontFamily: 'var(--font-display)',
                  transition: 'all 0.15s',
                }}
              >
                {l === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN'}
              </button>
            ))}
          </div>
        </div>
        <p style={{ color: '#444', fontSize: '0.75rem', margin: 0 }}>
          {userData?.lang === 'en'
            ? t.interfaceDescEn
            : t.interfaceDescTr}
        </p>
      </div>

      {/* Logout button */}
      <button onClick={handleSignOut} className="btn-ghost" style={{ width: '100%', color: 'var(--color-red)', padding: '16px', border: '1px solid var(--color-border)' }}>
        {t.logout}
      </button>
    </div>
  );
}
