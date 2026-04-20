'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

const TYPING_WORDS = ['Zdravo!', 'Šta ima?', 'Brate!', 'Ajde!', 'Jebiga.'];

const FEATURES = [
  {
    emoji: '🔥',
    title: 'Sokak Sırpçası',
    desc: 'Ders kitabı değil, gerçek kafana argolarıyla öğren. "Šta ima brate?" diyebilmek için.',
  },
  {
    emoji: '🎮',
    title: 'Oyun Mantığıyla',
    desc: 'XP kazan, seri tut, ders düğümleri arasında ilerle. Sıkılmak yok.',
  },
  {
    emoji: '🧔🏻‍♂️',
    title: 'Kafana Dayısı AI',
    desc: 'Pipo içen Sırp dayın her an hazır. Sorularını sorabilir, argo öğrenebilirsin.',
  },
  {
    emoji: '🍺',
    title: '18+ Kategori',
    desc: 'Selamlaşma, sokak argonu, gece hayatı, Belgrad, sağlık — her konu Türkçe anlatımla.',
  },
  {
    emoji: '⚡',
    title: 'Pro Street Mode',
    desc: 'Küfürler, flört, Balkan draması ve kafana kültürü sadece Pro\'ya özel.',
  },
  {
    emoji: '🎯',
    title: 'Konu Anlatımlı Dersler',
    desc: 'Her derste senaryo, kelime listesi, diyalog ve kültürel ipuçları var.',
  },
];

const STATS = [
  { value: '18+', label: 'Kategori' },
  { value: '56+', label: 'Ders' },
  { value: '500+', label: 'Kelime' },
  { value: '100%', label: 'Türkçe Anlatım' },
];

const TESTIMONIALS = [
  { text: '"Kafanaya girdim, garson Sırpçama bayıldı. Jebiga dedim ve kahraman oldum."', author: 'Mert, 24' },
  { text: '"Kafana Dayısı benim rakija içmeden konuşmayacağımı söyledi. Haklı."', author: 'Zeynep, 28' },
  { text: '"Bir haftada ćevap siparişi verebiliyorum. Bu uygulama beni kurtardı."', author: 'Burak, 31' },
];

export default function LandingPage() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = TYPING_WORDS[typingIndex];
    const delay = isDeleting ? 60 : charIndex === current.length ? 1800 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setTypingIndex((i) => (i + 1) % TYPING_WORDS.length);
        setCharIndex(0);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingIndex]);

  return (
    <div style={{ minHeight: '100dvh', background: '#080808', color: '#f5f5f5', fontFamily: '"Space Grotesk", sans-serif', overflowX: 'hidden' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(8,8,8,0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.5rem' }}>🇷🇸</span>
          <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#e74c3c' }}>Jebiga</span>
            <span style={{ color: '#888', fontWeight: 400, fontSize: '0.85rem', marginLeft: 6 }}>Sırpça Öğren</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/login" style={{
            color: '#888', fontWeight: 600, fontSize: '0.9rem',
            textDecoration: 'none', padding: '8px 16px',
            transition: 'color 0.2s',
          }}>Giriş Yap</Link>
          <Link href="/login" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'linear-gradient(135deg, #c0392b, #e74c3c)',
            color: '#fff', fontWeight: 700, fontSize: '0.9rem',
            textDecoration: 'none', padding: '10px 20px',
            borderRadius: '10px',
            boxShadow: '0 4px 16px rgba(192,57,43,0.35)',
            transition: 'all 0.2s',
          }}>Başla →</Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100dvh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '120px 24px 80px',
        position: 'relative',
        background: `
          radial-gradient(ellipse at 20% 40%, rgba(192,57,43,0.18) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 20%, rgba(0,61,165,0.15) 0%, transparent 55%),
          radial-gradient(ellipse at 60% 80%, rgba(57,255,20,0.06) 0%, transparent 50%)
        `,
      }}>
        {/* Flag stripe */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: 'linear-gradient(90deg, #c0392b 33.3%, #f5f5f5 33.3% 66.6%, #003da5 66.6%)',
        }} />

        {/* Floating badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(57,255,20,0.08)',
          border: '1px solid rgba(57,255,20,0.25)',
          borderRadius: 40, padding: '8px 18px',
          fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em',
          color: '#39ff14', marginBottom: 32,
          animation: 'pulse 3s ease-in-out infinite',
        }}>
          <span>⚡</span> Türkiye&apos;nin İlk Sırpça Sokak Modu Uygulaması
        </div>

        {/* Main headline */}
        <h1 style={{
          fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          marginBottom: 16,
          maxWidth: 800,
        }}>
          Sırpçayı{' '}
          <span style={{
            background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Sokak Ağzıyla
          </span>{' '}
          Öğren. <br />
          <span style={{
            background: 'linear-gradient(135deg, #39ff14, #ffe600)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {displayed}
            <span style={{ opacity: 0.5, animation: 'blink 1s step-end infinite' }}>|</span>
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: '#999', lineHeight: 1.7,
          maxWidth: 560, marginBottom: 48,
        }}>
          Ders kitabı değil, kafana argolarıyla öğren. Duolingo&apos;dan farklı —{' '}
          <strong style={{ color: '#f5f5f5' }}>çok daha havalı, çok daha gerçek.</strong>
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 64 }}>
          <Link href="/login" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'linear-gradient(135deg, #c0392b, #e74c3c)',
            color: '#fff', fontWeight: 800, fontSize: '1.05rem',
            textDecoration: 'none', padding: '16px 36px',
            borderRadius: '14px',
            boxShadow: '0 8px 32px rgba(192,57,43,0.45), 0 2px 8px rgba(0,0,0,0.3)',
            letterSpacing: '-0.01em',
          }}>
            🚀 Ücretsiz Başla
          </Link>
          <Link href="#features" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'transparent',
            color: '#39ff14', fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none', padding: '15px 32px',
            borderRadius: '14px',
            border: '2px solid rgba(57,255,20,0.35)',
          }}>
            Nasıl Çalışır? ↓
          </Link>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: 0, flexWrap: 'wrap', justifyContent: 'center',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16, padding: '4px',
          backdropFilter: 'blur(10px)',
        }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{
              padding: '20px 32px', textAlign: 'center',
              borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#f5f5f5', letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#666', fontWeight: 500, marginTop: 2 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s ease-in-out infinite', opacity: 0.4 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: '#c0392b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
            Neden Jebiga?
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Duolingo&apos;nun yapmadığını biz yapıyoruz
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 18,
              padding: '28px 24px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(192,57,43,0.3)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg, #c0392b, #003da5)',
                opacity: 0.5,
              }} />
              <div style={{ fontSize: '2rem', marginBottom: 14 }}>{f.emoji}</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: 8, letterSpacing: '-0.01em' }}>{f.title}</h3>
              <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{
        padding: '80px 24px',
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#c0392b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
            Nasıl Çalışır?
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 60 }}>
            Üç adımda Sırpça
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {[
              { step: '01', emoji: '📖', title: 'Konu Anlatımı', desc: 'Her ders senaryoyla başlar. Kelime, diyalog, kültür ipuçları — hiçbir şey eksik değil.' },
              { step: '02', emoji: '🎯', title: 'Sorularla Pekiştir', desc: 'Çoktan seçmeli, çeviri, boşluk doldurma. Öğrendiklerini hemen test edersin.' },
              { step: '03', emoji: '🏆', title: 'XP Kazan, İlerle', desc: 'Her derste XP kazanırsın. Seri tutarsın. Sonraki kategoriler açılır. Dur yok.' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(192,57,43,0.2), rgba(0,61,165,0.2))',
                  border: '2px solid rgba(192,57,43,0.3)',
                  fontSize: '1.6rem', marginBottom: 20,
                }}>
                  {item.emoji}
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#c0392b', letterSpacing: '0.1em', marginBottom: 8 }}>
                  ADIM {item.step}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: '#777', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '100px 24px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Onlar ne dedi?
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 18, padding: '28px 24px',
            }}>
              <div style={{ color: '#e74c3c', fontSize: '1.5rem', marginBottom: 12 }}>❝</div>
              <p style={{ color: '#ccc', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 16, fontStyle: 'italic' }}>
                {t.text}
              </p>
              <p style={{ color: '#555', fontSize: '0.82rem', fontWeight: 700 }}>— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        background: `
          radial-gradient(ellipse at 50% 50%, rgba(192,57,43,0.2) 0%, transparent 65%),
          rgba(8,8,8,0.5)
        `,
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: 20 }}>🇷🇸</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, letterSpacing: '-0.03em',
            lineHeight: 1.1, marginBottom: 16,
          }}>
            Hazır mısın,{' '}
            <span style={{
              background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>brate?</span>
          </h2>
          <p style={{ color: '#888', fontSize: '1.05rem', marginBottom: 40, lineHeight: 1.6 }}>
            Kaydol, birinci dersi aç, Kafana Dayısı ile muhabbet et.{' '}
            <strong style={{ color: '#f5f5f5' }}>Ücretsiz başla, istersen Pro&apos;ya geç.</strong>
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/login" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #c0392b, #e74c3c)',
              color: '#fff', fontWeight: 800, fontSize: '1.1rem',
              textDecoration: 'none', padding: '18px 44px',
              borderRadius: '14px',
              boxShadow: '0 8px 40px rgba(192,57,43,0.5)',
              letterSpacing: '-0.01em',
            }}>
              Hemen Kaydol — Ücretsiz 🚀
            </Link>
          </div>
          <p style={{ color: '#444', fontSize: '0.8rem', marginTop: 16 }}>
            Kredi kartı gerekmez. 5 saniyede kaydol.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: '32px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
      }}>
        {/* Flag stripe */}
        <div style={{
          height: 3, marginBottom: 24,
          background: 'linear-gradient(90deg, #c0392b 33.3%, #f5f5f5 33.3% 66.6%, #003da5 66.6%)',
          borderRadius: 2,
          maxWidth: 200, margin: '0 auto 24px',
        }} />
        <p style={{ color: '#555', fontSize: '0.85rem' }}>
          🇷🇸 <strong style={{ color: '#888' }}>Jebiga</strong> — Sırpçayı sokak ağzıyla öğren.
          <span style={{ margin: '0 8px' }}>·</span>
          <Link href="/login" style={{ color: '#666', textDecoration: 'none' }}>Giriş</Link>
          <span style={{ margin: '0 8px' }}>·</span>
          <Link href="/login" style={{ color: '#666', textDecoration: 'none' }}>Kayıt Ol</Link>
        </p>
        <p style={{ color: '#383838', fontSize: '0.75rem', marginTop: 12 }}>
          Design by{' '}
          <a
            href="https://www.instagram.com/mr.vinsky/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#555',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e1306c')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
          >
            mr.vinsky
          </a>
        </p>
      </footer>

      <WhatsAppButton />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </div>
  );
}
