'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import KafanaBot from '@/components/KafanaBot';
import LanguagePicker from '@/components/LanguagePicker';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, userData, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push('/');
  }, [user, loading, router]);

  if (loading) return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#080808' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: 16, animation: 'fire 0.8s ease-in-out infinite' }}>💀</div>
        <p style={{ color: '#555', fontFamily: 'Space Grotesk, sans-serif' }}>Loading...</p>
      </div>
    </div>
  );

  if (!user) return null;

  const isPro = userData?.subscription === 'pro' || userData?.role === 'admin';

  // userData yüklendi ama lang seçilmemiş → dil seçim modalı göster
  const needsLangSelection = userData !== null && !userData.lang;

  return (
    <div style={{ minHeight: '100dvh', paddingTop: 60, paddingBottom: 80, background: '#080808' }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
        {children}
      </main>
      {isPro && <KafanaBot />}

      {/* Dil seçimi yapılmamışsa modal göster (arka plana render devam eder) */}
      {needsLangSelection && <LanguagePicker />}
    </div>
  );
}
