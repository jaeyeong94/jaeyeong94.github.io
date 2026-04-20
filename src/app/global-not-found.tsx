import Link from 'next/link';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { getDictionary } from '@/content/i18n';
import { defaultLocale } from '@/lib/i18n';

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: dict.common.notFoundTitle,
  description: dict.common.notFoundDescription,
};

export default function GlobalNotFound() {
  return (
    <html lang={defaultLocale}>
      <body>
        <main className="section-frame flex min-h-screen flex-col items-center justify-center gap-4 py-24 text-center">
          <p className="text-sm uppercase tracking-widest text-fg-subtle">404</p>
          <h1 className="text-3xl font-bold text-fg">{dict.common.notFoundTitle}</h1>
          <p className="max-w-prose text-fg-muted">{dict.common.notFoundDescription}</p>
          <Link
            href={`/${defaultLocale}/`}
            className="text-accent-1 underline underline-offset-4"
          >
            {dict.common.backHome}
          </Link>
        </main>
      </body>
    </html>
  );
}
