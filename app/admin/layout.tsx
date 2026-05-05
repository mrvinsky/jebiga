'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && (!user || userData?.role !== 'admin')) {
      if (pathname !== '/admin/login') {
        router.push('/admin/login');
      }
    }
  }, [user, userData, loading, pathname, router]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--color-background)' }}>
        <div style={{ color: 'var(--color-primary)' }}>Loading Admin...</div>
      </div>
    );
  }

  // If on login page, don't show the admin sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (userData?.role !== 'admin') {
    return null; // Will redirect in useEffect
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', background: '#111', padding: '24px', borderRight: '1px solid #333' }}>
        <h2 style={{ color: 'var(--color-neon)', marginBottom: 32, fontFamily: 'var(--font-display)', fontWeight: 900 }}>JEBIGA ADMIN</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Link href="/admin" style={{ color: pathname === '/admin' ? '#fff' : '#888', textDecoration: 'none', fontWeight: 600 }}>📊 Dashboard</Link>
          <Link href="/admin/users" style={{ color: pathname === '/admin/users' ? '#fff' : '#888', textDecoration: 'none', fontWeight: 600 }}>👥 Users</Link>
          <Link href="/admin/audio" style={{ color: pathname === '/admin/audio' ? '#fff' : '#888', textDecoration: 'none', fontWeight: 600 }}>🔊 Audio Management</Link>
          <div style={{ marginTop: 40, borderTop: '1px solid #333', paddingTop: 20 }}>
            <Link href="/map" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to App</Link>
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {children}
      </div>
    </div>
  );
}
