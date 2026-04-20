import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { resume, totalCareerMonths, yearsFromMonths } from '@/content/resume';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function About({ dict }: Props) {
  const years = yearsFromMonths(totalCareerMonths(resume.profile.careerStart));

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-frame section-pad relative scroll-mt-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-fg-subtle">01</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.about.eyebrow}
          </span>
        </div>
      </Reveal>

      <h2 id="about-heading" className="sr-only">
        {dict.about.sectionTitle}
      </h2>

      {/* Impact + stats — 8/4 split */}
      <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-8">
          <p className="max-w-3xl text-lg leading-relaxed text-fg md:text-xl lg:text-2xl">
            {dict.about.impact}
          </p>
        </Reveal>

        <Reveal className="lg:col-span-4">
          <dl className="flex flex-col gap-8 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <StatBlock
              kicker={dict.about.stat1Label}
              value={
                <>
                  <span>{years}</span>
                  <span className="ml-1 text-fg-muted">{dict.about.stat1Suffix}</span>
                </>
              }
            />
            <StatBlock kicker={dict.about.stat2Label} value={dict.about.stat2Value} />
            <StatBlock kicker={dict.about.stat3Label} value={dict.about.stat3Value} small />
          </dl>
        </Reveal>
      </div>

      {/* Domain breakdown */}
      <Reveal>
        <div className="mt-14 border-t border-border pt-8">
          <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            ◈ {dict.about.domainsTitle}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm md:text-base">
            {resume.domains.map((d) => (
              <li key={d.id} className="inline-flex items-baseline gap-2">
                <span className="font-semibold text-fg">{dict.about.domains[d.id]}</span>
                <span className="font-mono tabular-nums text-fg-muted">
                  {d.years}
                  {dict.about.yearsShort}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-12 md:gap-12">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle md:col-span-3">
            ⟡ {dict.about.outcomesTitle}
          </p>
          <dl className="grid gap-4 md:col-span-9 lg:grid-cols-3">
            {dict.about.outcomes.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-surface p-5">
                <dt className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-fg-subtle">
                  {item.label}
                </dt>
                <dd className="mt-3 text-lg font-semibold tracking-tight text-fg">{item.value}</dd>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.note}</p>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      {/* Philosophy */}
      <Reveal>
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-12 md:gap-12">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle md:col-span-3">
            ≀ {dict.about.philosophyTitle}
          </p>
          <ul className="max-w-readable space-y-4 md:col-span-9">
            {[dict.about.philosophy1, dict.about.philosophy2].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-1"
                />
                <p className="text-base leading-relaxed text-fg-muted md:text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function StatBlock({
  kicker,
  value,
  small,
}: {
  kicker: string;
  value: React.ReactNode;
  small?: boolean;
}) {
  return (
    <div>
      <dt className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
        {kicker}
      </dt>
      <dd
        className={
          small
            ? 'mt-3 text-base font-semibold text-fg'
            : 'mt-2 text-4xl font-bold tracking-tight text-fg md:text-5xl'
        }
      >
        {value}
      </dd>
    </div>
  );
}
