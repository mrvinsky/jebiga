import {
  doc, getDoc, setDoc, updateDoc, serverTimestamp, increment
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
  completedLessons: string[];
  subscription: 'free' | 'pro';
  role?: 'user' | 'admin';
}

export const createUserDoc = async (user: User) => {
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      displayName: user.displayName || 'Stranger',
      email: user.email || '',
      photoURL: user.photoURL || '',
      xp: 0, level: 1, streak: 0,
      lastActive: serverTimestamp(),
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

export const addXP = async (uid: string, amount: number) => {
  await updateDoc(doc(db, 'users', uid), { xp: increment(amount) });
};

export const completeLesson = async (uid: string, lessonId: string, xp: number) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const data = snap.data() as UserData;
  const completed = data.completedLessons || [];
  if (!completed.includes(lessonId)) {
    await updateDoc(ref, {
      completedLessons: [...completed, lessonId],
      xp: increment(xp),
      lastActive: serverTimestamp(),
    });
  }
};

export const updateStreak = async (uid: string) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const data = snap.data() as UserData;
  const last = data.lastActive as { toDate?: () => Date } | null;
  const lastDate = last?.toDate ? last.toDate() : null;
  const now = new Date();
  let newStreak = data.streak || 0;
  if (lastDate) {
    const diff = Math.floor((now.getTime() - lastDate.getTime()) / 86400000);
    if (diff === 1) newStreak += 1;
    else if (diff > 1) newStreak = 1;
  } else {
    newStreak = 1;
  }
  await updateDoc(ref, { streak: newStreak, lastActive: serverTimestamp() });
  return newStreak;
};
