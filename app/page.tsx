'use client';

import { useState, useEffect } from 'react';

export default function MaintenancePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{
      minHeight: '100dvh',
      background: '#050505',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glows - subtle and premium */}
      <div style={{
        position: 'absolute', top: '15%', left: '5%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(0,61,165,0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Serbian Flag Accent (Top Stripe) */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'linear-gradient(90deg, #c0392b 33.3%, #f5f5f5 33.3% 66.6%, #003da5 66.6%)',
        zIndex: 10
      }} />

      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: 500,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Animated Icon */}
        <div style={{
          fontSize: 'clamp(3.5rem, 15vw, 5rem)', 
          marginBottom: 20,
          animation: 'float 4s ease-in-out infinite',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
        }}>
          🇷🇸
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 9vw, 3.8rem)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 0.95,
          marginBottom: 16,
          fontFamily: 'var(--font-display)',
          textTransform: 'uppercase'
        }}>
          <span style={{ color: '#e74c3c' }}>Jebiga</span> <br />
          <span style={{ 
            background: 'linear-gradient(135deg, #ffffff, #888888)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>WE ARE</span> <br />
          <span style={{ 
            background: 'linear-gradient(135deg, #ffffff, #666666)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '0.6em',
            letterSpacing: '0.2em',
            opacity: 0.8
          }}>COMING BACK</span>
        </h1>

        <div style={{
          height: 2,
          width: 60,
          background: 'linear-gradient(90deg, transparent, #c0392b, transparent)',
          marginBottom: 24
        }} />

        <p style={{
          fontSize: 'clamp(0.95rem, 4vw, 1.1rem)',
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.6,
          marginBottom: 40,
          fontWeight: 500,
          padding: '0 10px'
        }}>
          Brate, we're currently updating the system and adding new lessons. <br />
          We've taken a short break to take your Serbian learning experience to the next level. <br />
          <span style={{ color: '#fff', fontWeight: 800, marginTop: 12, display: 'block' }}>
            We'll be back very soon! 🥙
          </span>
        </p>

        {/* Stats / Teaser Card */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 24,
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          backdropFilter: 'blur(16px)',
          width: '100%',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#f1c40f',
              boxShadow: '0 0 12px #f1c40f',
              animation: 'pulse-glow 2s infinite'
            }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f1c40f', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Preparation in Progress
            </span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff' }}>368+</div>
              <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 800, letterSpacing: '0.05em' }}>QUESTIONS</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff' }}>18+</div>
              <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 800, letterSpacing: '0.05em' }}>CATEGORIES</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff' }}>100%</div>
              <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 800, letterSpacing: '0.05em' }}>STREET SLANG</div>
            </div>
          </div>
        </div>

        {/* Small Footer Text */}
        <div style={{ marginTop: 48, opacity: 0.3, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em' }}>
          JEBIGA © 2026
        </div>
      </div>

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        body { margin: 0; background: #050505; }
      `}</style>
    </div>
  );
}
