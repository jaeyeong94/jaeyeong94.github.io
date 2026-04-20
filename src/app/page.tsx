'use client';

import { useEffect } from 'react';
import { defaultLocale, isLocale, type Locale } from '@/lib/i18n';

function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return defaultLocale;
  const candidates = navigator.languages ?? [navigator.language];
  for (const lang of candidates) {
    const base = lang.toLowerCase().split('-')[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

export default function RootPage() {
  useEffect(() => {
    const detectedLocale = detectLocale();
    const target = `/${detectedLocale}/`;
    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  }, []);

  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}/`} />
      </noscript>
      <main className="flex min-h-screen items-center justify-center">
        <span
          aria-hidden
          className="size-8 animate-spin rounded-full border-2 border-border border-t-accent-1"
        />
      </main>
    </>
  );
}
