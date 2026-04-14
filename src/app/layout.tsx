import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import '@/styles/globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jaeyeong94.github.io'),
  title: 'Ted Ryu · 유재영',
  description: 'Full-stack Developer — Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className={instrumentSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
