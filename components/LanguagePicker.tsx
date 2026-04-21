'use client';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { setUserLanguage } from '@/lib/firestore';

export default function LanguagePicker() {
  const { user, refreshUserData } = useAuth();
  const [saving, setSaving] = useState(false);
  const [hovered, setHovered] = useState<'tr' | 'en' | null>(null);

  const choose = async (lang: 'tr' | 'en') => {
    if (!user || saving) return;
    setSaving(true);
    await setUserLanguage(user.uid, lang);
    await refreshUserData();
    setSaving(false);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: 'rgba(0,0,0,0.85)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
      backdropFilter: 'blur(6px)',
    }}>
      <div style={{
        background: '#111', borderRadius: 24,
        border: '1px solid #222',
        maxWidth: 480, width: '100%',
        padding: '48px 32px',
        textAlign: 'center',
        boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
        animation: 'slide-up 0.35s cubic-bezier(0.34,1.56,0.64,1)',
      }}>

        {/* Logo / Icon */}
        <div style={{ fontSize: '3.5rem', marginBottom: 8, lineHeight: 1 }}>💀</div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '1.6rem', fontWeight: 900,
          letterSpacing: '-0.03em', marginBottom: 8,
          background: 'linear-gradient(135deg, #fff 40%, #888)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          Choose Your Language
          <br />
          <span style={{ fontSize: '1.1rem', fontWeight: 700, opacity: 0.6 }}>Dilini Seç</span>
        </h1>

        <p style={{
          color: '#555', fontSize: '0.85rem',
          marginBottom: 36, lineHeight: 1.5,
        }}>
          Pick the language you want to learn Serbian in.<br />
          Sırpçayı hangi dilde öğrenmek istiyorsun?
        </p>

        {/* Language Cards */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
          
          {/* Turkish */}
          <button
            onClick={() => choose('tr')}
            disabled={saving}
            onMouseEnter={() => setHovered('tr')}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: 1, padding: '24px 16px',
              background: hovered === 'tr' ? 'rgba(229,57,53,0.12)' : '#161616',
              border: hovered === 'tr' ? '2px solid rgba(229,57,53,0.6)' : '2px solid #222',
              borderRadius: 16, cursor: saving ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              transform: hovered === 'tr' ? 'translateY(-3px)' : 'translateY(0)',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🇹🇷</div>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.1rem', fontWeight: 800, color: '#f0f0f0',
              marginBottom: 4,
            }}>Türkçe</div>
            <div style={{ fontSize: '0.75rem', color: '#555' }}>
              Türkçe → Sırpça
            </div>
          </button>

          {/* English */}
          <button
            onClick={() => choose('en')}
            disabled={saving}
            onMouseEnter={() => setHovered('en')}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: 1, padding: '24px 16px',
              background: hovered === 'en' ? 'rgba(25,118,210,0.12)' : '#161616',
              border: hovered === 'en' ? '2px solid rgba(25,118,210,0.6)' : '2px solid #222',
              borderRadius: 16, cursor: saving ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              transform: hovered === 'en' ? 'translateY(-3px)' : 'translateY(0)',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🇬🇧</div>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.1rem', fontWeight: 800, color: '#f0f0f0',
              marginBottom: 4,
            }}>English</div>
            <div style={{ fontSize: '0.75rem', color: '#555' }}>
              English → Serbian
            </div>
          </button>

        </div>

        {saving && (
          <p style={{ color: '#555', fontSize: '0.8rem', marginTop: 8 }}>
            Saving...
          </p>
        )}

        <p style={{ color: '#333', fontSize: '0.75rem', marginTop: 16 }}>
          You can change this later in your profile settings.
          <br />
          Bunu daha sonra profil ayarlarından değiştirebilirsin.
        </p>
      </div>
    </div>
  );
}
