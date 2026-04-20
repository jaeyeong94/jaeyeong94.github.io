import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/i18n';

interface Props {
  locale: Locale;
  dict: Dictionary;
  title: string;
  summary: string;
  date: string;
  readTimeMin: number;
  children: React.ReactNode;
}

export function PostLayout({ locale, dict, title, summary, date, readTimeMin, children }: Props) {
  return (
    <article className="section-frame relative scroll-mt-24 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="max-w-4xl">
            <Link
              href={`/${locale}/#writing`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-fg-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
              {dict.writing.backToList}
            </Link>
            <header className="mt-8">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-fg-subtle">
                {dict.writing.eyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-fg md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-fg-muted md:text-lg">
                {summary}
              </p>
            </header>
          </div>
          <aside className="rounded-[1.75rem] border border-border bg-surface p-5">
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-bg-subtle/40 px-4 py-3">
              <CalendarDays className="mt-0.5 size-4 shrink-0 text-fg-subtle" aria-hidden />
              <time dateTime={date} className="text-sm font-medium text-fg">
                {date}
              </time>
            </div>
            <div className="mt-3 flex items-start gap-3 rounded-2xl border border-border bg-bg-subtle/40 px-4 py-3">
              <Clock3 className="mt-0.5 size-4 shrink-0 text-fg-subtle" aria-hidden />
              <span className="text-sm font-medium text-fg">
                {dict.writing.readTime.replace('{n}', String(readTimeMin))}
              </span>
            </div>
          </aside>
        </div>
        <div className="mt-12 max-w-readable space-y-6 text-base leading-[1.75] text-fg md:text-[1.05rem]">
          {children}
        </div>
      </div>
    </article>
  );
}
