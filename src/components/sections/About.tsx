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

      {/* Impact + stats — asymmetric full-wide split */}
      <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-8">
          <p className="font-display text-3xl leading-[1.15] text-fg md:text-5xl lg:text-[3.5rem] xl:text-6xl">
            {dict.about.impact}
          </p>
        </Reveal>

        <Reveal className="lg:col-span-4">
          <dl className="flex flex-col gap-10 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
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
      </div>

      {/* Philosophy — editorial footnote */}
      <Reveal>
        <div className="mt-24 grid grid-cols-1 gap-8 border-t border-border pt-12 md:grid-cols-12 md:gap-12">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle md:col-span-3">
            ≀ {dict.about.philosophyTitle}
          </p>
          <div className="max-w-readable space-y-5 text-base leading-relaxed text-fg-muted md:col-span-9 md:text-lg">
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
