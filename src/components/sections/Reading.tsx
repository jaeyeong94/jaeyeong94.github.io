import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Reading({ dict }: Props) {
  return (
    <section
      id="reading"
      aria-labelledby="reading-heading"
      className="relative mx-auto max-w-content scroll-mt-24 px-6 py-24 md:py-32"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl italic text-fg-subtle">06</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.reading.eyebrow}
          </span>
        </div>
      </Reveal>

      <h2 id="reading-heading" className="sr-only">
        {dict.reading.sectionTitle}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {dict.reading.booksTitle}
            </p>
            <ul className="mt-4 space-y-3">
              {resume.books.map((b) => (
                <li key={b.title} className="border-l border-border pl-4">
                  <p className="font-display text-xl italic text-fg">{b.title}</p>
                  <p className="mt-1 text-xs text-fg-subtle">— {b.author}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {dict.reading.toolsTitle}
            </p>
            <p className="mt-4 font-mono text-sm leading-loose text-fg-muted">
              {resume.tools.map((t, i) => (
                <span key={t}>
                  {t}
                  {i < resume.tools.length - 1 && (
                    <span className="mx-2 text-fg-subtle">·</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
