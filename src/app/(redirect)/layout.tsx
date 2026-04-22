import type { Metadata } from 'next';
import '@/styles/globals.css';
import { defaultLocale } from '@/lib/i18n';
import { getDictionary } from '@/content/i18n';
import { siteUrl } from '@/lib/seo';

const defaultDict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultDict.meta.title,
  description: defaultDict.meta.description,
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: [{ url: '/favicon-32x32.png', type: 'image/png' }],
  },
};

export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
