'use client';

import { useState } from 'react';
import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import { resume, monthsBetween, type Experience as ExpType } from '@/content/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';
import { formatYearMonth, formatDuration } from '@/lib/date';
import { ChevronDown } from 'lucide-react';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Experience({ locale, dict }: Props) {
  const [showLegacy, setShowLegacy] = useState(false);
  const current = resume.experiences.filter((e) => !e.legacy);
  const legacy = resume.experiences.filter((e) => e.legacy);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-content scroll-mt-24 px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="experience-heading"
        eyebrow={dict.experience.eyebrow}
        title={dict.experience.sectionTitle}
      />

      <ol reversed className="relative space-y-6 border-l border-border pl-6 md:pl-8">
        {current.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} locale={locale} dict={dict} />
        ))}
      </ol>

      <div className="mt-10 flex flex-col items-center gap-6">
        <button
          type="button"
          onClick={() => setShowLegacy((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
          aria-expanded={showLegacy}
        >
          {showLegacy ? dict.common.hideOlder : dict.common.showOlder}
          <ChevronDown
            className={`size-4 transition-transform ${showLegacy ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
        {showLegacy && (
          <ol
            reversed
            className="w-full space-y-6 border-l border-border pl-6 md:pl-8"
          >
            {legacy.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} locale={locale} dict={dict} />
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  locale,
  dict,
}: {
  exp: ExpType;
  locale: Locale;
  dict: Dictionary;
}) {
  const item = dict.experience.items[exp.id];
  const startIso = exp.start;
  const endIso = exp.end === 'present' ? new Date().toISOString().slice(0, 7) : exp.end;
  const months = monthsBetween(exp.start, exp.end);
  return (
    <li className="relative">
      <span
        aria-hidden
        className="absolute -left-[33px] top-6 size-3 rounded-full border-2 border-bg bg-accent-1 md:-left-[41px]"
      />
      <Reveal>
        <Card as="article">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold text-fg">{item.company}</h3>
            <div className="flex items-center gap-2 text-xs text-fg-subtle">
              <time dateTime={startIso}>
                {formatYearMonth(exp.start, locale, dict.common.present)}
              </time>
              <span>—</span>
              <time dateTime={endIso}>
                {formatYearMonth(exp.end, locale, dict.common.present)}
              </time>
              <span className="text-fg-subtle">·</span>
              <span>
                {formatDuration(months, locale, dict.common.years, dict.common.months)}
              </span>
            </div>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-fg-muted">
            <span>{exp.role}</span>
            <Chip variant="ghost">{dict.employment[exp.type]}</Chip>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-fg-muted">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 leading-relaxed">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-fg-subtle" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {exp.stack.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {exp.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          )}
        </Card>
      </Reveal>
    </li>
  );
}
