import type { Metadata } from 'next';
import '@/styles/globals.css';
import { getDictionary } from '@/content/i18n';
import { defaultLocale } from '@/lib/i18n';
import { siteUrl } from '@/lib/seo';

const defaultDict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultDict.meta.title,
  description: defaultDict.meta.description,
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
