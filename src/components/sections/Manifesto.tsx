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
      className="relative border-y border-border"
    >
      <div className="section-frame section-pad scroll-mt-24">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-fg-subtle">02</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {m.eyebrow}
            </span>
          </div>
          <h2
            id="manifesto-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-fg md:text-4xl"
          >
            {m.sectionTitle}
          </h2>
        </Reveal>

        {/* Thesis */}
        <Reveal>
          <p className="mt-10 max-w-5xl text-xl leading-snug text-fg md:mt-12 md:text-2xl lg:text-3xl">
            {m.thesis}
          </p>
        </Reveal>

        {/* Mindset / Actions */}
        <div className="mt-14 grid grid-cols-1 gap-14 border-t border-border pt-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              ❖ {m.mindsetTitle}
            </p>
            <ol className="divide-y divide-border border-y border-border">
              {m.mindset.map((it, i) => (
                <li key={it.key} className="py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-fg-subtle">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base font-semibold text-fg md:text-lg">{it.title}</h3>
                  </div>
                  <p className="mt-3 pl-10 text-sm leading-relaxed text-fg-muted">{it.note}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              → {m.actionsTitle}
            </p>
            <ul className="space-y-4">
              {m.actions.map((a, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span aria-hidden className="mt-3 h-px w-6 shrink-0 bg-accent-1/70" />
                  <span className="text-sm leading-relaxed text-fg md:text-base">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
