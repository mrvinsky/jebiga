'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

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
  return (
    <StreetModeContext.Provider value={{ streetMode, toggleStreetMode }}>
      {children}
    </StreetModeContext.Provider>
  );
};

export const useStreetMode = () => useContext(StreetModeContext);
