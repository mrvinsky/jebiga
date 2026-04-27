'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface StreetModeContextType {
  streetMode: boolean;
  toggleStreetMode: () => void;
}

const StreetModeContext = createContext<StreetModeContextType>({
  streetMode: false,
  toggleStreetMode: () => {},
});

export const StreetModeProvider = ({ children }: { children: ReactNode }) => {
  const [streetMode, setStreetMode] = useState(false);
  const toggleStreetMode = () => setStreetMode((prev) => !prev);

  // Sync streetMode with document body class for global theme switching
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (streetMode) {
        document.body.classList.add('street-mode');
      } else {
        document.body.classList.remove('street-mode');
      }
    }
  }, [streetMode]);

  return (
    <StreetModeContext.Provider value={{ streetMode, toggleStreetMode }}>
      {children}
    </StreetModeContext.Provider>
  );
};

export const useStreetMode = () => useContext(StreetModeContext);
