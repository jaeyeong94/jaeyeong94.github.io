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
      className="relative mx-auto max-w-content scroll-mt-24 px-6 py-24 md:py-32"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl italic text-fg-subtle">01</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.about.eyebrow}
          </span>
        </div>
      </Reveal>

      <h2 id="about-heading" className="sr-only">
        {dict.about.sectionTitle}
      </h2>

      {/* Impact sentence — large serif display */}
      <Reveal>
        <p className="mt-10 max-w-3xl font-display text-3xl leading-[1.25] text-fg md:text-[2.75rem]">
          {dict.about.impact}
        </p>
      </Reveal>

      {/* Stats — editorial three-column */}
      <Reveal>
        <dl className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-3">
          <StatBlock
            kicker={dict.about.stat1Label}
            value={
              <>
                <span className="font-display italic">{years}</span>
                <span className="ml-1 text-fg-muted">{dict.about.stat1Suffix}</span>
              </>
            }
          />
          <StatBlock kicker={dict.about.stat2Label} value={dict.about.stat2Value} />
          <StatBlock kicker={dict.about.stat3Label} value={dict.about.stat3Value} small />
        </dl>
      </Reveal>

      {/* Philosophy as editorial footnote */}
      <Reveal>
        <div className="mt-20 grid grid-cols-[auto_1fr] gap-8 md:grid-cols-[14rem_1fr]">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            ≀ {dict.about.philosophyTitle}
          </p>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-fg-muted md:text-lg">
            <p>{dict.about.philosophy1}</p>
            <p>{dict.about.philosophy2}</p>
          </div>
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
            ? 'mt-3 font-sans text-lg font-semibold tracking-tight text-fg'
            : 'mt-3 text-6xl font-bold tracking-tight text-fg md:text-7xl'
        }
      >
        {value}
      </dd>
    </div>
  );
}
