'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useStreetMode } from '@/context/StreetModeContext';
import { signOut } from '@/lib/auth';
import StreakBadge from './StreakBadge';

export default function Navbar() {
  const { user, userData } = useAuth();
  const { streetMode, toggleStreetMode } = useStreetMode();
  const pathname = usePathname();
  const router = useRouter();



  const xpToNextLevel = (userData?.level || 1) * 200;
  const xpProgress = ((userData?.xp || 0) % xpToNextLevel) / xpToNextLevel * 100;

  return (
    <>
      {/* Top bar */}
      <nav style={{ background: 'rgba(8,8,8,0.95)', borderBottom: '1px solid #1a1a1a', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          {/* Logo */}
          <Link href="/learn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#c0392b' }}>Jebiga</span>
              {streetMode && <span style={{ color: '#39ff14', fontSize: '0.6rem', marginLeft: 6, padding: '2px 6px', border: '1px solid #39ff14', borderRadius: 4, verticalAlign: 'middle', animation: 'neon-pulse 2s ease-in-out infinite' }}>STREET</span>}
            </span>
          </Link>

          {/* Center: XP + Streak */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, justifyContent: 'center' }}>
            {/* Streak */}
            <StreakBadge streak={userData?.streak || 0} />
            {/* XP bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 120 }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f5c518', whiteSpace: 'nowrap' }}>
                Lv.{userData?.level || 1} · {userData?.xp || 0} XP
              </span>
              <div className="progress-bar" style={{ flex: 1, minWidth: 60 }}>
                <div className={streetMode ? 'progress-fill-neon' : 'progress-fill'} style={{ width: `${xpProgress}%` }} />
              </div>
            </div>
          </div>

          {/* Right: Street toggle + avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Street Mode toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} title="Toggle Street Mode">
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: streetMode ? '#39ff14' : '#888', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>STREET</span>
              <button id="street-mode-toggle" onClick={toggleStreetMode} className={`street-toggle ${streetMode ? 'active' : ''}`} aria-label="Toggle Street Mode">
                <div className="street-toggle-thumb" />
              </button>
            </div>
            {/* User avatar */}
            {user && (
              <Link href="/profile" title="Profile" style={{ textDecoration: 'none' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#c0392b,#003da5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#fff', overflow: 'hidden' }}>
                  {user.photoURL
                    ? <img src={user.photoURL} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : (user.displayName?.[0] || user.email?.[0] || '?').toUpperCase()
                  }
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Bottom mobile nav */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(8,8,8,0.97)', borderTop: '1px solid #1a1a1a', backdropFilter: 'blur(20px)', display: 'flex', justifyContent: 'space-around', padding: '8px 0 16px' }}>
        {[
          { href: '/learn', icon: '🗺️', label: 'ÖĞREN' },
          { href: '/profile', icon: '👤', label: 'PROFİL' },
          { href: '/pro', icon: '⚡', label: 'PRO' },
        ].map(({ href, icon, label }) => (
          <Link key={href} href={href} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, textDecoration: 'none',
            color: pathname === href ? (streetMode ? '#39ff14' : '#c0392b') : '#555',
            transition: 'color 0.2s', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
          }}>
            <span style={{ fontSize: '1.3rem' }}>{icon}</span>
            <span>{label.toUpperCase()}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
