'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { UserData, updateUserRole } from '@/lib/firestore';

interface UserWithId extends UserData {
  id: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<UserWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, orderBy('xp', 'desc'));
        const snap = await getDocs(q);
        
        const fetchedUsers = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as UserWithId[];

        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (userId: string, currentRole: string | undefined, newRole: 'admin' | 'user') => {
    if (currentRole === newRole || (currentRole === undefined && newRole === 'user')) return;
    if (!window.confirm(`Bu kullanıcının rolünü "${newRole.toUpperCase()}" olarak değiştirmek istediğine emin misin?`)) return;
    
    try {
      await updateUserRole(userId, newRole);
      setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u));
    } catch (e) {
      alert("Rol güncellenirken hata oluştu. Lütfen yetkiniz olduğundan emin olun.");
    }
  };

  if (loading) return <div>Loading users...</div>;

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 32, fontFamily: 'var(--font-display)', fontWeight: 900 }}>User Management</h1>
      
      <div style={{ background: '#111', borderRadius: 16, border: '1px solid #333', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#222', borderBottom: '1px solid #333' }}>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Name</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Email</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Role</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Sub</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Level</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>XP</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Streak</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} style={{ borderBottom: '1px solid #222' }}>
                <td style={{ padding: '16px 24px', fontWeight: 600 }}>{u.displayName || 'Stranger'}</td>
                <td style={{ padding: '16px 24px', color: '#aaa' }}>{u.email}</td>
                <td style={{ padding: '16px 24px' }}>
                  <select 
                    value={u.role || 'user'}
                    onChange={(e) => handleRoleChange(u.id, u.role, e.target.value as 'admin' | 'user')}
                    style={{ 
                      background: u.role === 'admin' ? 'rgba(255, 71, 87, 0.1)' : 'rgba(255, 255, 255, 0.1)', 
                      color: u.role === 'admin' ? '#ff4757' : '#aaa', 
                      padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700,
                      border: `1px solid ${u.role === 'admin' ? 'rgba(255, 71, 87, 0.3)' : 'rgba(255, 255, 255, 0.2)'}`,
                      cursor: 'pointer', outline: 'none'
                    }}
                  >
                    <option value="user" style={{ background: '#222', color: '#fff' }}>USER</option>
                    <option value="admin" style={{ background: '#222', color: '#fff' }}>ADMIN</option>
                  </select>
                </td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ 
                    background: u.subscription === 'pro' ? 'rgba(241, 196, 15, 0.1)' : 'transparent', 
                    color: u.subscription === 'pro' ? '#f1c40f' : '#666', 
                    padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 
                  }}>
                    {u.subscription?.toUpperCase()}
                  </span>
                </td>
                <td style={{ padding: '16px 24px', fontWeight: 700 }}>{u.level}</td>
                <td style={{ padding: '16px 24px', color: 'var(--color-neon)', fontWeight: 700 }}>{u.xp}</td>
                <td style={{ padding: '16px 24px', color: '#e67e22', fontWeight: 700 }}>{u.streak} 🔥</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
