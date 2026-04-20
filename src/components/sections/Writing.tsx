import Link from 'next/link';
import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import { resume } from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function Writing({ dict, locale }: Props) {
  const posts = resume.writingIds.map((id) => ({ id, ...dict.writing.items[id] }));
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="section-frame section-pad relative scroll-mt-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-fg-subtle">05</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.writing.eyebrow}
          </span>
        </div>
        <h2
          id="writing-heading"
          className="mt-5 text-3xl font-bold tracking-tight text-fg md:text-4xl"
        >
          {dict.writing.sectionTitle}
        </h2>
      </Reveal>

      <ol className="mt-10 divide-y divide-border border-y border-border">
        {posts.map((p) => (
          <Reveal key={p.id} as="li">
            <Link
              href={`/${locale}/writing/${p.id}/`}
              className="group block transition-colors hover:bg-bg-subtle/40"
            >
              <article className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[7rem_1fr_auto] md:items-baseline md:gap-8">
                <time
                  dateTime={p.date}
                  className="font-mono text-xs uppercase tracking-widest text-fg-subtle"
                >
                  {p.date}
                </time>
                <div>
                  <h3 className="text-lg font-semibold text-fg group-hover:text-accent-1">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-fg-muted">{p.summary}</p>
                </div>
                <span
                  aria-hidden
                  className="font-mono text-sm text-fg-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent-1 md:justify-self-end"
                >
                  →
                </span>
              </article>
            </Link>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
