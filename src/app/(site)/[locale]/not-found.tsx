import Link from 'next/link';
import { getDictionary } from '@/content/i18n';
import { defaultLocale } from '@/lib/i18n';

export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <main
      id="main-content"
      className="section-frame flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center"
    >
      <p className="text-sm uppercase tracking-widest text-fg-subtle">404</p>
      <h1 className="text-3xl font-bold">{dict.common.notFoundTitle}</h1>
      <p className="max-w-prose text-fg-muted">{dict.common.notFoundDescription}</p>
      <Link
        href={`/${defaultLocale}/`}
        className="text-accent-1 underline underline-offset-4"
      >
        {dict.common.backHome}
      </Link>
    </main>
  );
}
