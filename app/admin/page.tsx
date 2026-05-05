'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, getCountFromServer } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { UserData } from '@/lib/firestore';

export default function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [proUsers, setProUsers] = useState<number>(0);
  const [totalXP, setTotalXP] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const usersRef = collection(db, 'users');
        const snap = await getDocs(usersRef);
        
        let xpCount = 0;
        let proCount = 0;
        
        snap.forEach((doc) => {
          const data = doc.data() as UserData;
          xpCount += (data.xp || 0);
          if (data.subscription === 'pro') proCount++;
        });

        setTotalUsers(snap.size);
        setTotalXP(xpCount);
        setProUsers(proCount);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 32, fontFamily: 'var(--font-display)', fontWeight: 900 }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Total Users</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-neon)', fontFamily: 'var(--font-display)' }}>{totalUsers}</div>
        </div>
        
        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Pro Subscribers</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#f1c40f', fontFamily: 'var(--font-display)' }}>{proUsers}</div>
        </div>
        
        <div style={{ background: '#111', padding: 24, borderRadius: 16, border: '1px solid #333' }}>
          <div style={{ color: '#888', marginBottom: 8, fontWeight: 600 }}>Total XP Earned</div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#3498db', fontFamily: 'var(--font-display)' }}>{totalXP}</div>
        </div>
      </div>
    </div>
  );
}
