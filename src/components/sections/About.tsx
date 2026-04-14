import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import {
  resume,
  totalCareerMonths,
  yearsFromMonths,
} from '@/content/resume';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function About({ dict }: Props) {
  const totalMonths = totalCareerMonths(resume.profile.careerStart);
  const years = yearsFromMonths(totalMonths);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-content scroll-mt-24 px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="about-heading"
        eyebrow={dict.about.eyebrow}
        title={dict.about.sectionTitle}
      />
      <Reveal>
        <p className="max-w-3xl text-lg leading-relaxed text-fg">
          {dict.about.impact}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { value: `${years}${dict.about.stat1Suffix}`, label: dict.about.stat1Label },
          { value: dict.about.stat2Value, label: dict.about.stat2Label },
          { value: dict.about.stat3Value, label: dict.about.stat3Label },
        ].map((s, i) => (
          <Reveal key={i}>
            <Card className="h-full">
              <p className="text-3xl font-bold tracking-tight text-fg">{s.value}</p>
              <p className="mt-2 text-sm text-fg-muted">{s.label}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-fg-subtle">
          {dict.about.philosophyTitle}
        </h3>
        <Reveal>
          <blockquote className="border-l-2 border-accent-1/40 pl-5 text-fg-muted">
            <p className="text-base leading-relaxed md:text-lg">
              {dict.about.philosophy1}
            </p>
            <p className="mt-4 text-base leading-relaxed md:text-lg">
              {dict.about.philosophy2}
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
