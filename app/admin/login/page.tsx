'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function AdminLogin() {
  const { user, userData, signInWithGoogle, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && userData?.role === 'admin') {
      router.push('/admin');
    }
  }, [user, userData, loading, router]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <div style={{ padding: '40px', background: '#111', borderRadius: '16px', border: '1px solid #333', textAlign: 'center', maxWidth: 400, width: '100%' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: 8, color: 'var(--color-neon)', fontFamily: 'var(--font-display)', fontWeight: 900 }}>JEBIGA ADMIN</h1>
        <p style={{ color: '#888', marginBottom: 32 }}>Giriş yapmak için admin yetkisine sahip bir hesap kullanın.</p>
        
        <button 
          onClick={signInWithGoogle}
          style={{
            width: '100%',
            padding: '16px',
            background: '#fff',
            color: '#000',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12
          }}
        >
          <Image src="/google.svg" alt="Google" width={24} height={24} />
          Google ile Admin Girişi
        </button>

        {user && userData?.role !== 'admin' && (
          <div style={{ marginTop: 24, padding: '16px', background: 'rgba(255, 71, 87, 0.1)', color: '#ff4757', borderRadius: '8px', border: '1px solid rgba(255, 71, 87, 0.3)' }}>
            Bu hesabın admin yetkisi yok.
          </div>
        )}
      </div>
    </div>
  );
}
