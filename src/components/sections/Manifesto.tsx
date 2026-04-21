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
      className="resume-print-hidden relative scroll-mt-24 border-y border-border"
    >
      <div className="section-frame py-16 md:py-20">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-fg-subtle">06</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {m.eyebrow}
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-10">
          <Reveal>
            <div className="max-w-xl">
              <h2
                id="manifesto-heading"
                className="text-2xl font-bold tracking-tight text-fg md:text-3xl"
              >
                {m.sectionTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted md:text-lg">
                {m.thesis}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
                  ❖ {m.mindsetTitle}
                </p>
                <ul className="mt-4 space-y-4">
                  {m.mindset.map((item) => (
                    <li key={item.key}>
                      <h3 className="text-sm font-semibold text-fg md:text-base">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{item.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
                  → {m.actionsTitle}
                </p>
                <ul className="mt-4 space-y-3">
                  {m.actions.map((action, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-1"
                      />
                      <span className="text-sm leading-relaxed text-fg-muted">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
