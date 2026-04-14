import type { Dictionary } from '@/content/i18n';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Manifesto({ dict }: Props) {
  const m = dict.manifesto;
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="relative w-full scroll-mt-24 border-y border-border px-6 py-24 md:px-10 md:py-32 lg:px-16 xl:px-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl italic text-fg-subtle">02</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {m.eyebrow}
          </span>
        </div>
        <h2
          id="manifesto-heading"
          className="mt-6 font-display text-4xl italic text-fg md:text-5xl"
        >
          {m.sectionTitle}
        </h2>
      </Reveal>

      {/* Thesis — oversized pull-quote */}
      <Reveal>
        <figure className="mt-14 grid grid-cols-[auto_1fr] items-start gap-5 md:mt-20 md:gap-8">
          <p
            aria-hidden
            className="font-display text-6xl italic leading-none text-accent-1 md:text-7xl"
          >
            “
          </p>
          <blockquote className="max-w-5xl font-display text-3xl italic leading-[1.15] text-fg md:text-5xl lg:text-[3.5rem] xl:text-6xl">
            {m.thesis}
          </blockquote>
        </figure>
      </Reveal>

      {/* Split: Mindset / Actions */}
      <div className="mt-20 grid grid-cols-1 gap-16 border-t border-border pt-16 lg:grid-cols-2 lg:gap-20">
        {/* Mindset */}
        <Reveal>
          <p className="mb-8 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            ❖ {m.mindsetTitle}
          </p>
          <ol className="divide-y divide-border border-y border-border">
            {m.mindset.map((it, i) => (
              <li key={it.key} className="py-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-xl italic text-fg-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-fg md:text-xl">{it.title}</h3>
                </div>
                <p className="mt-3 pl-10 text-sm leading-relaxed text-fg-muted md:text-[0.95rem]">
                  {it.note}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Actions */}
        <Reveal>
          <p className="mb-8 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            → {m.actionsTitle}
          </p>
          <ul className="space-y-5">
            {m.actions.map((a, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="mt-3 h-px w-6 shrink-0 bg-accent-1/70"
                />
                <span className="text-base leading-relaxed text-fg md:text-lg">{a}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
