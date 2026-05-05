import {
  doc, getDoc, setDoc, updateDoc, deleteDoc, serverTimestamp, increment, onSnapshot,
  query, collection, orderBy, limit, getDocs, where, getCountFromServer
} from 'firebase/firestore';
import { User } from 'firebase/auth';
import { db } from './firebase';

export interface UserData {
  displayName: string;
  email: string;
  photoURL: string;
  xp: number;
  level: number;
  streak: number;
  lastActive: unknown;
  lastStreakUpdate?: unknown; // 📅 Son streak artış tarihi
  completedLessons: string[];
  subscription: 'free' | 'pro';
  role?: 'user' | 'admin';
  lang?: 'tr' | 'en'; // 🌐 Kullanıcı arayüz dili — seçilmemişse undefined
}

export const createUserDoc = async (user: User, nameOverride?: string) => {
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      displayName: nameOverride || user.displayName || 'Stranger',
      email: user.email || '',
      photoURL: user.photoURL || '',
      xp: 0, level: 1, streak: 0,
      lastActive: serverTimestamp(),
      lastStreakUpdate: serverTimestamp(),
      completedLessons: [],
      subscription: user.email === 'besiralkya@gmail.com' ? 'pro' : 'free',
      role: user.email === 'besiralkya@gmail.com' ? 'admin' : 'user',
    });
  } else {
    // Check if existing user is the admin but doesn't have the role yet
    const data = snap.data() as UserData;
    if (data.email === 'besiralkya@gmail.com' && (data.role !== 'admin' || data.subscription !== 'pro')) {
      await updateDoc(ref, { role: 'admin', subscription: 'pro' });
    }
  }
};

export const getUserData = async (uid: string): Promise<UserData | null> => {
  const snap = await getDoc(doc(db, 'users', uid));
  if (!snap.exists()) return null;
  const data = snap.data() as UserData;
  
  // Hardcoded fallback override just in case DB update lags
  if (data.email === 'besiralkya@gmail.com') {
    data.role = 'admin';
    data.subscription = 'pro';
  }
  
  return data;
};

/**
 * Quadratic Level Formula:
 * Total XP for Level L = 125 * L * (L-1)
 * Level 1: 0 XP
 * Level 2: 250 XP
 * Level 3: 750 XP
 * Level 4: 1500 XP
 * Level 5: 2500 XP
 */
export const calculateLevel = (xp: number) => {
  // Solving 125 * L^2 - 125 * L - xp = 0 for L
  // L = (125 + sqrt(125^2 + 4 * 125 * xp)) / (2 * 125)
  if (xp <= 0) return 1;
  const L = (125 + Math.sqrt(15625 + 500 * xp)) / 250;
  return Math.floor(L);
};

/**
 * Returns the total XP required to reach a specific level
 */
export const getXPForLevel = (level: number) => {
  return 125 * level * (level - 1);
};

export const addXP = async (uid: string, amount: number) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const data = snap.data() as UserData;
  const newXP = (data.xp || 0) + amount;
  const newLevel = calculateLevel(newXP);
  
  await updateDoc(ref, { 
    xp: newXP,
    level: newLevel 
  });
};

export const setUserLanguage = async (uid: string, lang: 'tr' | 'en') => {
  await updateDoc(doc(db, 'users', uid), { lang });
};


export const completeLesson = async (uid: string, lessonId: string, baseXP: number) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const data = snap.data() as UserData;
  const completed = data.completedLessons || [];
  
  // Streak Bonus: 5% per day, capped at 50%
  const streak = data.streak || 0;
  const bonusMultiplier = 1 + Math.min(streak * 0.05, 0.5);
  const earnedXP = Math.round(baseXP * bonusMultiplier);

  if (!completed.includes(lessonId)) {
    const newXP = (data.xp || 0) + earnedXP;
    const newLevel = calculateLevel(newXP);
    
    await updateDoc(ref, {
      completedLessons: [...completed, lessonId],
      xp: newXP,
      level: newLevel,
      lastActive: serverTimestamp(),
    });
  }
};

export const updateStreak = async (uid: string) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const data = snap.data() as UserData;
  
  const last = data.lastStreakUpdate as { toDate?: () => Date } | null;
  const lastDate = last?.toDate ? last.toDate() : null;
  const now = new Date();
  
  if (!lastDate) {
    await updateDoc(ref, { streak: 1, lastStreakUpdate: serverTimestamp(), lastActive: serverTimestamp() });
    return 1;
  }

  const isSameDay = (d1: Date, d2: Date) => 
    d1.getUTCDate() === d2.getUTCDate() &&
    d1.getUTCMonth() === d2.getUTCMonth() &&
    d1.getUTCFullYear() === d2.getUTCFullYear();

  const isYesterday = (d1: Date, d2: Date) => {
    const yesterday = new Date(d1);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);
    return isSameDay(yesterday, d2);
  };

  let newStreak = data.streak || 0;
  let shouldUpdateDate = false;

  if (isSameDay(now, lastDate)) {
    // Bugün zaten güncellenmiş. Bir şey yapma.
    if (newStreak === 0) {
      newStreak = 1;
      shouldUpdateDate = true;
    }
  } else if (isYesterday(now, lastDate)) {
    // En son dün güncellenmiş. Bugün ilk ders. Artır.
    newStreak += 1;
    shouldUpdateDate = true;
  } else {
    // Arada gün kaçmış (2 gün veya daha fazla). 1'den başlat.
    newStreak = 1;
    shouldUpdateDate = true;
  }

  const updateObj: any = { streak: newStreak, lastActive: serverTimestamp() };
  if (shouldUpdateDate) {
    updateObj.lastStreakUpdate = serverTimestamp();
  }

  await updateDoc(ref, updateObj);
  return newStreak;
};

export const subscribeToUserData = (uid: string, callback: (data: UserData | null) => void) => {
  const ref = doc(db, 'users', uid);
  return onSnapshot(ref, (snap) => {
    if (snap.exists()) {
      const data = snap.data() as UserData;
      // Hardcoded fallback override just in case DB update lags
      if (data.email === 'besiralkya@gmail.com') {
        data.role = 'admin';
        data.subscription = 'pro';
      }
      callback(data);
    } else {
      callback(null);
    }
  });
};

export const getTopUsers = async (limitCount: number = 10): Promise<UserData[]> => {
  const usersRef = collection(db, 'users');
  // Fetch a bit more to ensure we have enough after filtering out admins
  const q = query(usersRef, orderBy('xp', 'desc'), limit(limitCount + 10));
  const snap = await getDocs(q);
  const users = snap.docs.map(doc => doc.data() as UserData);
  
  // Adminleri filtrele ve istenen sayı kadarını döndür
  return users
    .filter(u => u.role !== 'admin' && u.email !== 'besiralkya@gmail.com')
    .slice(0, limitCount);
};

export const getUserRank = async (xp: number): Promise<number> => {
  const usersRef = collection(db, 'users');
  // Bu sorgu teknik olarak adminleri de sayar ama performans için en iyisi budur.
  // Çok az admin olduğu için sıra numarasındaki 1-2 kişilik sapma genelde kabul edilebilir.
  const q = query(usersRef, where('xp', '>', xp));
  const snap = await getCountFromServer(q);
  
  // Eğer adminin (örn: besiralkya) xp'si yüksekse, sayıyı 1 azaltabiliriz
  // Şimdilik sadece ana sayıyı döndürüyoruz.
  return Number(snap.data().count) + 1;
};

export const updateUserRole = async (uid: string, role: 'admin' | 'user') => {
  const ref = doc(db, 'users', uid);
  await updateDoc(ref, { role });
};

export const updateUserSubscription = async (uid: string, subscription: 'free' | 'pro') => {
  const ref = doc(db, 'users', uid);
  await updateDoc(ref, { subscription });
};

export const deleteUserDoc = async (uid: string) => {
  const ref = doc(db, 'users', uid);
  await deleteDoc(ref);
};

