import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { StreetModeProvider } from '@/context/StreetModeContext';

import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Jebiga — Learn Real Serbian',
  description: 'The edgy, authentic way to learn Serbian. Street slang, real culture, real language. Jebiga!',
  keywords: ['Serbian', 'language learning', 'Belgrade', 'slang', 'Learn Serbian'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      </head>
      <body>
        <AuthProvider>
          <LanguageProvider>
            <StreetModeProvider>

              {children}
            </StreetModeProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
