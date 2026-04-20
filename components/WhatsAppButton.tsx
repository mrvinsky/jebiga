'use client';

import { useState, useEffect } from 'react';

const WA_NUMBER = '381641468776';
const WA_MESSAGE = 'Merhaba! Jebiga uygulaması hakkında bilgi almak istiyorum.';
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowTooltip(true), 2500);
    const hideTimer = setTimeout(() => setShowTooltip(false), 7000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const tooltipVisible = hovered || showTooltip;

  return (
    <div style={{
      position: 'fixed',
      bottom: 28,
      left: 28,
      zIndex: 999,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12,
    }}>
      {/* Speech bubble tooltip */}
      {tooltipVisible && (
        <div style={{
          position: 'relative',
          background: 'rgba(15,15,15,0.96)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12,
          padding: '10px 14px',
          fontSize: '0.82rem',
          fontFamily: '"Space Grotesk", sans-serif',
          color: '#ccc',
          lineHeight: 1.55,
          backdropFilter: 'blur(16px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
          whiteSpace: 'nowrap',
          animation: 'waFadeIn 0.2s ease',
          marginBottom: 4,
        }}>
          <span style={{ fontWeight: 700, color: '#25D366' }}>WhatsApp&apos;tan yaz!</span>
          <br />
          <span style={{ color: '#666', fontSize: '0.76rem' }}>Sana hemen dönelim 🇷🇸</span>
          {/* Right arrow pointing to button */}
          <div style={{
            position: 'absolute',
            right: -7,
            bottom: 18,
            width: 0,
            height: 0,
            borderTop: '7px solid transparent',
            borderBottom: '7px solid transparent',
            borderLeft: '7px solid rgba(15,15,15,0.96)',
          }} />
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim kur"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: hovered
            ? 'linear-gradient(135deg, #20ba5a, #25D366)'
            : 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: hovered
            ? '0 0 0 6px rgba(37,211,102,0.2), 0 8px 32px rgba(37,211,102,0.5)'
            : '0 0 0 3px rgba(37,211,102,0.12), 0 4px 20px rgba(37,211,102,0.3)',
          transform: hovered ? 'scale(1.12) translateY(-3px)' : 'scale(1)',
          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        {/* Pulse ring */}
        <div style={{
          position: 'absolute',
          inset: -4,
          borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.4)',
          animation: 'waPulse 2.5s ease-out infinite',
          pointerEvents: 'none',
        }} />

        {/* WhatsApp icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white" aria-hidden="true">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.47.66 4.84 1.84 6.9L2 30l7.36-1.82A13.9 13.9 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.6 19.6c-.32.9-1.86 1.72-2.56 1.82-.66.1-1.48.14-2.38-.48a21.4 21.4 0 01-2.28-1.12C13.6 20.1 11.5 17.3 11.1 16.7c-.4-.6-1.44-1.9-1.44-3.62 0-1.72.9-2.56 1.22-2.9a1.3 1.3 0 01.94-.44c.24 0 .46 0 .66.02.22.02.5-.08.78.6.3.7 1.02 2.44 1.1 2.62.1.18.16.4.04.64-.12.24-.18.38-.36.58-.18.2-.38.44-.54.6-.18.18-.38.38-.16.74.22.36.98 1.62 2.1 2.62 1.44 1.28 2.66 1.68 3.04 1.86.38.18.6.16.82-.1.22-.26.94-1.1 1.2-1.48.26-.38.5-.3.84-.18.34.12 2.16 1.02 2.54 1.2.38.18.62.28.7.44.1.16.1.9-.22 1.8z" />
        </svg>
      </a>

      <style>{`
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        @keyframes waFadeIn {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
