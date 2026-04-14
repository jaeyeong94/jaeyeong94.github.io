import type { Dictionary } from '@/content/i18n';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Skills({ dict }: Props) {
  const others = dict.skills.others;
  const labels = dict.skills.othersLabels;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative mx-auto max-w-content scroll-mt-24 px-6 py-24 md:py-32"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl italic text-fg-subtle">04</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.skills.eyebrow}
          </span>
        </div>
        <h2 id="skills-heading" className="mt-6 font-display text-4xl italic text-fg md:text-5xl">
          {dict.skills.sectionTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-fg-muted">{dict.skills.description}</p>
      </Reveal>

      {/* Signature stacks — editorial list */}
      <div className="mt-14">
        <Reveal>
          <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            ❖ {dict.skills.signaturesTitle}
          </p>
        </Reveal>
        <ol className="divide-y divide-border border-y border-border">
          {dict.skills.signatures.map((s, i) => (
            <Reveal key={s.key} as="li">
              <div className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 gap-y-2 py-6 md:grid-cols-[3rem_auto_1fr_auto] md:gap-x-8">
                <span className="font-display text-xl italic text-fg-subtle md:text-2xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-2 text-xl font-semibold text-fg transition-colors group-hover:text-accent-1 md:col-span-1 md:text-2xl">
                  {s.title}
                </h3>
                <p className="col-span-3 text-sm leading-relaxed text-fg-muted md:col-span-1 md:text-[0.95rem]">
                  {s.note}
                </p>
                <span className="col-span-3 text-right font-mono text-[0.65rem] uppercase tracking-widest text-fg-subtle md:col-span-1">
                  {s.years} {dict.common.years}+
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Others — compact rows */}
      <div className="mt-16">
        <Reveal>
          <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            + {dict.skills.othersTitle}
          </p>
        </Reveal>
        <dl className="grid gap-y-4 md:grid-cols-[8rem_1fr] md:gap-x-6">
          {(['backend', 'frontend', 'data', 'infra'] as const).map((key) => (
            <Reveal key={key} className="contents">
              <dt className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                {labels[key]}
              </dt>
              <dd className="mb-3 border-b border-border pb-3 font-mono text-sm text-fg-muted md:mb-0">
                {others[key]}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
