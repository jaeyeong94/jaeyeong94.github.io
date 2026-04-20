import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/i18n';

interface Props {
  locale: Locale;
  dict: Dictionary;
  title: string;
  date: string;
  readTimeMin: number;
  children: React.ReactNode;
}

export function PostLayout({ locale, dict, title, date, readTimeMin, children }: Props) {
  return (
    <article className="section-frame relative scroll-mt-24 py-24 md:py-28">
      <div className="max-w-readable">
        <Link
          href={`/${locale}/#writing`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-fg-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          {dict.writing.backToList}
        </Link>
        <header className="mt-8 border-b border-border pb-8">
          <div className="flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-fg-subtle">
            <time dateTime={date} className="tabular-nums">
              {date}
            </time>
            <span>·</span>
            <span>{dict.writing.readTime.replace('{n}', String(readTimeMin))}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-fg md:text-4xl">{title}</h1>
        </header>
        <div className="mt-10 space-y-6 text-base leading-[1.75] text-fg md:text-[1.05rem]">
          {children}
        </div>
      </div>
    </article>
  );
}
