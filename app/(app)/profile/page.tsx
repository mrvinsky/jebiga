'use client';
import { useAuth } from '@/context/AuthContext';
import { useStreetMode } from '@/context/StreetModeContext';
import { curriculum, getAllLessons } from '@/data/curriculum';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/auth';

export default function ProfilePage() {
  const { user, userData } = useAuth();
  const { streetMode } = useStreetMode();
  const router = useRouter();
  const allLessons = getAllLessons();
  const completed = userData?.completedLessons || [];
  const xp = userData?.xp || 0;
  const level = userData?.level || 1;
  const xpToNext = level * 200;
  const xpProgress = (xp % xpToNext) / xpToNext * 100;
  const isPro = userData?.subscription === 'pro';

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', marginBottom: 28 }}>
        {streetMode ? 'Tvoj Profil, brate 👤' : 'Senin Profilin'}
      </h1>

      {/* User card */}
      <div className="glass-strong" style={{ padding: 28, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#c0392b,#003da5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 900, color: '#fff', flexShrink: 0, overflow: 'hidden' }}>
          {user?.photoURL ? <img src={user.photoURL} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} /> : (user?.displayName?.[0] || '?').toUpperCase()}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', fontFamily: 'Space Grotesk, sans-serif' }}>{userData?.displayName || user?.email || 'Stranger'}</span>
            {isPro && <span className="pro-badge">⚡ PRO</span>}
          </div>
          <div style={{ color: '#666', fontSize: '0.82rem', marginBottom: 12 }}>{user?.email}</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: '#f5c518', fontSize: '1.1rem' }}>{xp}</div>
              <div style={{ fontSize: '0.7rem', color: '#555' }}>XP</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: '#c0392b', fontSize: '1.1rem' }}>Lv.{level}</div>
              <div style={{ fontSize: '0.7rem', color: '#555' }}>Seviye</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: '#ff6b00', fontSize: '1.1rem' }}>{userData?.streak || 0}🔥</div>
              <div style={{ fontSize: '0.7rem', color: '#555' }}>Seri</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: '#00e676', fontSize: '1.1rem' }}>{completed.length}</div>
              <div style={{ fontSize: '0.7rem', color: '#555' }}>Bitti</div>
            </div>
          </div>
        </div>
      </div>

      {/* XP to next level */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>Seviye {level} → {level + 1}</span>
          <span style={{ fontSize: '0.8rem', color: '#666' }}>{xp % xpToNext} / {xpToNext} XP</span>
        </div>
        <div className="progress-bar">
          <div className={streetMode ? 'progress-fill-neon' : 'progress-fill'} style={{ width: `${xpProgress}%` }} />
        </div>
      </div>

      {/* Progress by section */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 16, fontSize: '0.95rem' }}>
          {streetMode ? 'Tvoj napredak, brate' : 'Bölümlere göre ilerlemen'}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {curriculum.map((set) => {
            const total = set.lessons.length;
            const done = set.lessons.filter(l => completed.includes(l.id)).length;
            const pct = total > 0 ? (done / total) * 100 : 0;
            return (
              <div key={set.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{set.emoji} {streetMode ? set.streetTitle : set.title}</span>
                  <span style={{ fontSize: '0.78rem', color: '#666' }}>{done}/{total}</span>
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
        <div style={{ background: 'linear-gradient(135deg, rgba(245,197,24,0.1), rgba(255,140,0,0.05))', border: '1px solid rgba(245,197,24,0.25)', borderRadius: 16, padding: 24, textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>⚡</div>
          <h3 style={{ fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>Jebiga Pro'ya Geç</h3>
          <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: 16 }}>Yapay Zeka botu, daha fazla küfür, sokak jargonu ve fazlası.</p>
          <Link href="/pro" className="btn-primary">Pro Ol ⚡</Link>
        </div>
      )}

      {/* Logout button */}
      <button onClick={handleSignOut} className="btn-primary" style={{ width: '100%', background: '#1c1c1c', border: '1px solid #333', color: '#ff4757', padding: '16px' }}>
        Çıkış Yap 🚪
      </button>
    </div>
  );
}
