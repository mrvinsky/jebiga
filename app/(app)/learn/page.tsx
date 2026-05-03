'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useLanguage, UI_TEXT, STREET_TEXT } from '@/hooks/useLanguage';
import { useStreetMode } from '@/context/StreetModeContext';
import { getTopUsers, getUserRank, UserData } from '@/lib/firestore';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardPage() {
  const { user, userData } = useAuth();
  const { streetMode } = useStreetMode();
  const lang = useLanguage();
  const t = streetMode ? { ...UI_TEXT[lang], ...STREET_TEXT } : UI_TEXT[lang];

  const [topUsers, setTopUsers] = useState<UserData[]>([]);
  const [userRank, setUserRank] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const top = await getTopUsers(10);
        setTopUsers(top);

        if (userData) {
          // Check if current user is in top 10
          const inTop10Index = top.findIndex(u => u.email === userData.email);
          if (inTop10Index !== -1) {
            setUserRank(inTop10Index + 1);
          } else {
            const rank = await getUserRank(userData.xp);
            setUserRank(rank);
          }
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [userData]);

  const maskEmail = (email: string) => {
    const [name] = email.split('@');
    if (name.length <= 3) return name + '***';
    return name.substring(0, 3) + '***';
  };

  const getUserDisplayName = (u: UserData) => {
    if (u.displayName && u.displayName !== 'Stranger') return u.displayName;
    return maskEmail(u.email);
  };

  // Mock chart data (we don't have daily progress tracking in firestore yet)
  const chartData = [
    { name: 'Mon', xp: 50 },
    { name: 'Tue', xp: 120 },
    { name: 'Wed', xp: 80 },
    { name: 'Thu', xp: 200 },
    { name: 'Fri', xp: 150 },
    { name: 'Sat', xp: 0 },
    { name: 'Sun', xp: userData?.xp || 0 }, // Just a visual mock up to current xp
  ];

  if (!user) return null;

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', paddingBottom: 40, animation: 'slide-up 0.3s ease' }}>
      
      {/* Big Call to Action to Map */}
      <div style={{ marginBottom: 32 }}>
        <Link href="/map" style={{ textDecoration: 'none' }}>
          <div style={{
            background: streetMode ? 'rgba(57,255,20,0.1)' : 'var(--color-red)',
            border: streetMode ? '2px solid rgba(57,255,20,0.4)' : 'none',
            borderRadius: 20,
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: streetMode ? '0 0 30px rgba(57,255,20,0.2)' : '0 10px 30px rgba(192,57,43,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer'
          }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 900,
              color: streetMode ? '#39ff14' : '#fff',
              margin: '0 0 8px',
            }}>
              {lang === 'en' ? 'Continue Journey' : 'Eğitime Devam Et'}
            </h1>
            <p style={{ color: streetMode ? 'rgba(57,255,20,0.8)' : 'rgba(255,255,255,0.9)', margin: 0, fontWeight: 600 }}>
              {streetMode ? 'Sokaklar seni bekliyor brate!' : 'Sıradaki derse geç ve XP kazanmaya devam et.'}
            </p>
          </div>
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        
        {/* Left Column: Stats & Chart */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Quick Stats */}
          <div className="glass" style={{ padding: 24, borderRadius: 20, border: '1px solid var(--color-border)' }}>
            <h3 style={{ margin: '0 0 20px', fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: '1.2rem' }}>
              {lang === 'en' ? 'Your Stats' : 'İstatistiklerin'}
            </h3>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 100, background: 'var(--color-surface-2)', padding: 16, borderRadius: 16 }}>
                <div style={{ fontSize: '1.5rem' }}>🔥</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-foreground)', marginTop: 8 }}>{userData?.streak || 0}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-muted)', textTransform: 'uppercase' }}>{lang === 'en' ? 'Day Streak' : 'Gün Seri'}</div>
              </div>
              <div style={{ flex: 1, minWidth: 100, background: 'var(--color-surface-2)', padding: 16, borderRadius: 16 }}>
                <div style={{ fontSize: '1.5rem' }}>⚡</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-xp)', marginTop: 8 }}>{userData?.xp || 0}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-muted)', textTransform: 'uppercase' }}>{lang === 'en' ? 'Total XP' : 'Toplam XP'}</div>
              </div>
              <div style={{ flex: 1, minWidth: 100, background: 'var(--color-surface-2)', padding: 16, borderRadius: 16 }}>
                <div style={{ fontSize: '1.5rem' }}>📚</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-blue)', marginTop: 8 }}>{userData?.completedLessons?.length || 0}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-muted)', textTransform: 'uppercase' }}>{lang === 'en' ? 'Lessons' : 'Dersler'}</div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="glass" style={{ padding: 24, borderRadius: 20, border: '1px solid var(--color-border)' }}>
            <h3 style={{ margin: '0 0 20px', fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: '1.2rem' }}>
              {lang === 'en' ? 'Activity' : 'Aktivite'}
            </h3>
            <div style={{ height: 200, width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" stroke="var(--color-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'var(--color-surface-3)' }} 
                    contentStyle={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8 }}
                  />
                  <Bar dataKey="xp" fill={streetMode ? '#39ff14' : 'var(--color-red)'} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Leaderboard */}
        <div className="glass" style={{ padding: 24, borderRadius: 20, border: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: '1.2rem' }}>
              {lang === 'en' ? 'Leaderboard' : 'Liderlik Tablosu'} 🏆
            </h3>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--color-muted)' }}>
              {lang === 'en' ? 'Loading top students...' : 'En iyiler yükleniyor...'}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {topUsers.map((u, i) => {
                const isMe = u.email === userData?.email;
                return (
                  <div key={u.email} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px',
                    background: isMe ? (streetMode ? 'rgba(57,255,20,0.1)' : 'rgba(192,57,43,0.1)') : 'var(--color-surface-2)',
                    border: `1px solid ${isMe ? (streetMode ? 'rgba(57,255,20,0.3)' : 'rgba(192,57,43,0.3)') : 'transparent'}`,
                    borderRadius: 12,
                  }}>
                    <div style={{ width: 24, fontWeight: 800, color: 'var(--color-muted)', textAlign: 'center' }}>
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                    </div>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #c0392b, #003da5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#fff', fontWeight: 700, overflow: 'hidden' }}>
                      {u.photoURL ? <img src={u.photoURL} width="100%" height="100%" style={{ objectFit: 'cover' }} /> : getUserDisplayName(u)[0].toUpperCase()}
                    </div>
                    <div style={{ flex: 1, fontWeight: 700, color: 'var(--color-foreground)' }}>
                      {getUserDisplayName(u)} {isMe && <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>(Sen)</span>}
                    </div>
                    <div style={{ fontWeight: 800, color: 'var(--color-xp)' }}>
                      {u.xp} XP
                    </div>
                  </div>
                );
              })}

              {userRank !== null && userRank > 10 && (
                <>
                  <div style={{ textAlign: 'center', color: 'var(--color-muted)', padding: '4px 0' }}>...</div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px',
                    background: streetMode ? 'rgba(57,255,20,0.1)' : 'rgba(192,57,43,0.1)',
                    border: `1px solid ${streetMode ? 'rgba(57,255,20,0.3)' : 'rgba(192,57,43,0.3)'}`,
                    borderRadius: 12,
                  }}>
                    <div style={{ width: 24, fontWeight: 800, color: 'var(--color-muted)', textAlign: 'center' }}>
                      {userRank}
                    </div>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #c0392b, #003da5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#fff', fontWeight: 700, overflow: 'hidden' }}>
                      {userData?.photoURL ? <img src={userData.photoURL} width="100%" height="100%" style={{ objectFit: 'cover' }} /> : getUserDisplayName(userData as UserData)[0].toUpperCase()}
                    </div>
                    <div style={{ flex: 1, fontWeight: 700, color: 'var(--color-foreground)' }}>
                      {getUserDisplayName(userData as UserData)} <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>(Sen)</span>
                    </div>
                    <div style={{ fontWeight: 800, color: 'var(--color-xp)' }}>
                      {userData?.xp || 0} XP
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
