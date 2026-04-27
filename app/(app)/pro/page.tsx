'use client';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useStreetMode } from '@/context/StreetModeContext';
import { useLanguage, UI_TEXT } from '@/hooks/useLanguage';

const FEATURES_FREE = ['5 lesson sets (Greetings, Numbers, Food, Directions, Slang)', 'Jebiga Streak tracking', 'XP & levels', 'Street Mode (basic)'];
const FEATURES_PRO = ['Everything in Free', '⚡ Unlimited AI-generated lessons', '🔥 Advanced Street Mode (more slang)', '💬 AI mistake corrections with personality', '🏆 Exclusive Pro badge', '📊 Detailed progress analytics', '🎯 Daily AI challenges'];

export default function ProPage() {
  const { userData } = useAuth();
  const { streetMode } = useStreetMode();
  const lang = useLanguage();
  const t = UI_TEXT[lang];
  const [loading, setLoading] = useState(false);
  const isPro = userData?.subscription === 'pro';

  const handleCheckout = () => {
    window.location.href = "YOUR_PAYMENT_LINK_HERE";
  };

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>⚡</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', letterSpacing: '-0.03em', margin: 0 }}>
          {streetMode ? <><span className="neon-text">Jebiga Pro</span></> : <><span className="gradient-text-red">Jebiga</span> Pro</>}
        </h1>
        <p style={{ color: 'var(--color-muted)', marginTop: 10, fontSize: '0.9rem' }}>
          {streetMode ? (lang === 'en' ? 'For the real ones who want more, mate.' : 'Za prave likove koji hoće više, brate.') : (lang === 'en' ? 'For serious learners. No more holding back.' : 'For serious learners. No more holding back.')}
        </p>
      </div>

      {isPro ? (
        <div className="glass-strong" style={{ padding: 32, textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎉</div>
          <h2 style={{ fontWeight: 900, fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', marginBottom: 8 }}>{lang === 'en' ? 'You are Pro!' : 'Artık Pro\'sun!'}</h2>
          <p style={{ color: 'var(--color-muted)' }}>{lang === 'en' ? 'Kapiram — you have full access, mate. Keep learning!' : 'Kapiram — her şeye erişimin var kanka. Öğrenmeye devam!'}</p>
          <span className="pro-badge" style={{ marginTop: 16, display: 'inline-flex', fontSize: '0.9rem', padding: '8px 20px' }}>⚡ JEBIGA PRO</span>
        </div>
      ) : (
        <>
          {/* Pricing card */}
          <div style={{ background: 'rgba(192,57,43,0.05)', border: '2px solid var(--color-red)', borderRadius: 20, padding: 32, marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 16, right: 16, background: 'var(--color-red)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '4px 10px', borderRadius: 20, letterSpacing: '0.1em' }}>{lang === 'en' ? 'MOST POPULAR' : 'EN POPÜLER'}</div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>€12.00<span style={{ fontSize: '1rem', color: 'var(--color-muted)', fontWeight: 400 }}>/{lang === 'en' ? 'month' : 'ay'}</span></div>
              <div style={{ color: 'var(--color-red)', fontWeight: 600, fontSize: '0.85rem', marginTop: 4 }}>{t.salesClosed}</div>
            </div>
            <div className="flag-bar" style={{ marginBottom: 24, borderRadius: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {FEATURES_PRO.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ color: 'var(--color-foreground)' }}>{f}</span>
                </div>
              ))}
            </div>
            <button id="stripe-checkout-btn" onClick={handleCheckout} disabled={true} className="btn-primary" style={{ width: '100%', fontSize: '1.05rem', padding: '16px 28px', opacity: 0.5, cursor: 'not-allowed' }}>
              {t.purchasesDisabled}
            </button>
          </div>

          {/* Free tier comparison */}
          <div className="card">
            <h3 style={{ fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: 14, fontSize: '0.9rem', color: 'var(--color-muted)' }}>{lang === 'en' ? 'Free plan includes:' : 'Ücretsiz plan içeriği:'}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {FEATURES_FREE.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: '0.84rem', color: 'var(--color-muted)' }}>
                  <span style={{ flexShrink: 0 }}>•</span><span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
