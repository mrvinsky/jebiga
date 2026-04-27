'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useStreetMode } from '@/context/StreetModeContext';
import { useLanguage, UI_TEXT } from '@/hooks/useLanguage';
import { useLanguageContext } from '@/context/LanguageContext';
import { signOut } from '@/lib/auth';
import StreakBadge from './StreakBadge';

import { calculateLevel, getXPForLevel } from '@/lib/firestore';

export default function Navbar() {
  const { user, userData } = useAuth();
  const { streetMode, toggleStreetMode } = useStreetMode();
  const pathname = usePathname();
  const router = useRouter();
  const { toggleLang } = useLanguageContext();
  const lang = useLanguage();
  const t = UI_TEXT[lang];

  const xp = userData?.xp || 0;
  const currentLevel = calculateLevel(xp);
  const xpStart = getXPForLevel(currentLevel);
  const xpEnd = getXPForLevel(currentLevel + 1);
  const xpProgress = ((xp - xpStart) / (xpEnd - xpStart)) * 100;

  return (
    <>
      {/* Top bar */}
      <nav style={{ 
        background: 'rgba(253,252,248,0.85)', 
        borderBottom: '1px solid var(--color-border)', 
        position: 'fixed', 
        top: 0, left: 0, right: 0, 
        zIndex: 100, 
        backdropFilter: 'blur(20px)',
        paddingTop: 'var(--sat)' // Notches for iOS
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 12px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          {/* Logo */}
          <Link href={user ? "/learn" : "/"} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#c0392b' }}>Jebiga</span>
              {streetMode && <span style={{ color: '#39ff14', fontSize: '0.6rem', marginLeft: 6, padding: '2px 6px', border: '1px solid #39ff14', borderRadius: 4, verticalAlign: 'middle', animation: 'neon-pulse 2s ease-in-out infinite' }}>STREET</span>}
            </span>
          </Link>

          {/* Center: XP + Streak */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
            {/* Streak */}
            <StreakBadge streak={userData?.streak || 0} />
            {/* XP bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-xp)', whiteSpace: 'nowrap' }}>
                Lv.{currentLevel} · {xp} XP
              </span>
              <div className="progress-bar hide-mobile" style={{ width: 60, background: 'var(--color-surface-3)' }}>
                <div className={streetMode ? 'progress-fill-neon' : 'progress-fill'} style={{ width: `${xpProgress}%` }} />
              </div>
            </div>
          </div>

          {/* Right: Street toggle + avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Street Mode Toggle */}
            <button
              onClick={toggleStreetMode}
              style={{
                background: streetMode ? 'rgba(39,174,96,0.1)' : 'var(--color-surface-2)',
                border: `1.5px solid ${streetMode ? 'var(--color-neon)' : 'var(--color-border)'}`,
                borderRadius: '8px',
                padding: '4px 8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.2s',
                boxShadow: streetMode ? '0 0 10px rgba(57,255,20,0.3)' : 'none',
              }}
              title={streetMode ? 'Standard Mod' : 'Street Mode 🔥'}
            >
              <span style={{ fontSize: '1rem', filter: streetMode ? 'none' : 'grayscale(1)' }}>🔥</span>
              <span className="hide-xsmall" style={{ 
                fontSize: '0.65rem', 
                fontWeight: 800, 
                color: streetMode ? '#39ff14' : '#888',
                letterSpacing: '0.05em'
              }}>
                STREET
              </span>
            </button>

            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '4px 8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                transition: 'all 0.2s'
              }}
              title={lang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}
            >
              <span style={{ fontSize: '1rem' }}>{lang === 'tr' ? '🇹🇷' : '🇬🇧'}</span>
              <span className="hide-xsmall" style={{ fontSize: '0.65rem', fontWeight: 800, color: '#888' }}>{lang.toUpperCase()}</span>
            </button>

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
      <nav className="mobile-nav-only" style={{ 
        position: 'fixed', 
        bottom: 0, left: 0, right: 0, 
        zIndex: 100, 
        background: 'rgba(253,252,248,0.97)', 
        borderTop: '1px solid var(--color-border)', 
        backdropFilter: 'blur(20px)', 
        display: 'flex', 
        justifyContent: 'space-around', 
        padding: '8px 0',
        paddingBottom: 'calc(8px + var(--sab))' // Bottom safe area (home indicator)
      }}>
        {[
          { href: '/learn', icon: '🗺️', label: t.learn },
          { href: '/profile', icon: '👤', label: t.profile },
          { href: '/pro', icon: '⚡', label: t.pro },
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
