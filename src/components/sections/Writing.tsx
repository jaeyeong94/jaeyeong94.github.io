import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Writing({ dict }: Props) {
  const posts = resume.writingIds.map((id) => ({ id, ...dict.writing.items[id] }));
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="relative mx-auto max-w-content scroll-mt-24 px-6 py-24 md:py-32"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl italic text-fg-subtle">05</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.writing.eyebrow}
          </span>
        </div>
        <h2 id="writing-heading" className="mt-6 font-display text-4xl italic text-fg md:text-5xl">
          {dict.writing.sectionTitle}
        </h2>
      </Reveal>

      <ol className="mt-12 divide-y divide-border border-t border-border">
        {posts.map((p) => (
          <Reveal key={p.id} as="li">
            <article className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[8rem_1fr_auto] md:items-baseline md:gap-8">
              <time
                dateTime={p.date}
                className="font-mono text-xs uppercase tracking-widest text-fg-subtle"
              >
                {p.date}
              </time>
              <div>
                <h3 className="font-display text-2xl italic leading-snug text-fg">{p.title}</h3>
                <p className="mt-2 text-sm text-fg-muted md:text-base">{p.summary}</p>
              </div>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-fg-subtle md:justify-self-end">
                {dict.common.comingSoon}
              </span>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
