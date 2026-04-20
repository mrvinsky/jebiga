'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
    try { setLoading(true); await signInWithGoogle(); router.push('/learn'); }
    catch (e: unknown) { setError((e as Error).message); }
    finally { setLoading(false); }
  };

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      if (mode === 'login') await signInWithEmail(email, password);
      else await signUpWithEmail(email, password, name);
      router.push('/learn');
    } catch (e: unknown) { setError((e as Error).message); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'radial-gradient(ellipse at 20% 50%, rgba(192,57,43,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,61,165,0.12) 0%, transparent 60%), #080808' }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: '4rem', marginBottom: 8 }}>💀</div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', margin: 0 }}>
            <span className="gradient-text-red">Jebiga</span>
          </h1>
          <p style={{ color: '#888', marginTop: 8, fontSize: '0.95rem' }}>
            Gerçek Sırpçayı öğren. Sıkıcı kitaplara yer yok.
          </p>
          <div className="flag-bar" style={{ marginTop: 20, borderRadius: 2 }} />
        </div>

        {/* Card */}
        <div className="glass-strong" style={{ padding: 32 }}>
          {/* Google Button */}
          <button id="google-signin-btn" onClick={handleGoogle} disabled={loading} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: '#fff', color: '#000', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '14px 24px', borderRadius: 12, border: 'none', cursor: 'pointer', transition: 'all 0.2s', marginBottom: 20, opacity: loading ? 0.7 : 1 }}>
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google ile Devam Et
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div className="divider" style={{ flex: 1 }} />
            <span style={{ color: '#555', fontSize: '0.8rem' }}>veya</span>
            <div className="divider" style={{ flex: 1 }} />
          </div>

          {/* Tab switcher */}
          <div style={{ display: 'flex', background: '#111', borderRadius: 10, padding: 4, marginBottom: 20 }}>
            {(['login', 'signup'] as const).map((m) => (
              <button key={m} onClick={() => { setMode(m); setError(''); }} style={{ flex: 1, padding: '8px 0', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.2s', background: mode === m ? '#1a1a1a' : 'transparent', color: mode === m ? '#f5f5f5' : '#555' }}>
                {m === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
              </button>
            ))}
          </div>

          <form onSubmit={handleEmail} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {mode === 'signup' && (
              <input id="signup-name" type="text" placeholder="Adın" value={name} onChange={(e) => setName(e.target.value)} required />
            )}
            <input id="email-input" type="email" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input id="password-input" type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />

            {error && (
              <div style={{ background: 'rgba(255,23,68,0.1)', border: '1px solid rgba(255,23,68,0.3)', borderRadius: 8, padding: '10px 14px', color: '#ff1744', fontSize: '0.85rem' }}>
                ⚠️ {error}
              </div>
            )}

            <button id="email-submit-btn" type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', marginTop: 4, opacity: loading ? 0.7 : 1 }}>
              {loading ? '...' : mode === 'login' ? 'Ajde, giriş yap! 🇷🇸' : 'Hesabı oluştur brate! 💀'}
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', color: '#444', fontSize: '0.75rem', marginTop: 24 }}>
          Devam ederek gerçek Sırpçayı öğrenmeyi kabul ediyorsun. Jebiga.
        </p>
      </div>
    </div>
  );
}
