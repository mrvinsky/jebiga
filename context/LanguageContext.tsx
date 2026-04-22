'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuth } from '@/context/AuthContext';
import { setUserLanguage } from '@/lib/firestore';

type Lang = 'tr' | 'en';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => Promise<void>;
  toggleLang: () => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'tr',
  setLang: async () => {},
  toggleLang: async () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { user, userData } = useAuth();
  const [guestLang, setGuestLang] = useState<Lang>('tr');

  // Load guest lang from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('jebiga_lang') as Lang;
    if (saved && (saved === 'tr' || saved === 'en')) {
      setGuestLang(saved);
    }
  }, []);

  const lang = userData?.lang || guestLang;

  const setLang = async (l: Lang) => {
    if (user) {
      await setUserLanguage(user.uid, l);
    } else {
      setGuestLang(l);
      localStorage.setItem('jebiga_lang', l);
    }
  };

  const toggleLang = async () => {
    const next = lang === 'tr' ? 'en' : 'tr';
    await setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
