'use client';

import { useEffect } from 'react';
import { defaultLocale, isLocale } from '@/lib/i18n';

function detectLocale(): string {
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
    const target = `/${detectLocale()}/`;
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
        <p className="text-fg-muted">Redirecting…</p>
      </main>
    </>
  );
}
