'use client';

import { useState } from 'react';
import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import {
  resume,
  monthsBetween,
  type Experience as ExpType,
  type EmploymentType,
} from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';
import { formatYearMonth, formatDuration } from '@/lib/date';
import { ChevronDown } from 'lucide-react';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

type Group = { type: EmploymentType; items: ExpType[] };

export function Experience({ locale, dict }: Props) {
  const [showLegacy, setShowLegacy] = useState(false);

  const filtered = resume.experiences.filter((e) => (showLegacy ? true : !e.legacy));

  const freelance = filtered.filter((e) => e.type === 'freelance');
  const fulltime = filtered.filter((e) => e.type === 'fulltime');
  const contract = filtered.filter((e) => e.type === 'contract');

  const groups: Group[] = [];
  if (freelance.length) groups.push({ type: 'freelance', items: freelance });
  if (fulltime.length) groups.push({ type: 'fulltime', items: fulltime });
  if (contract.length) groups.push({ type: 'contract', items: contract });

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative w-full scroll-mt-24 px-6 py-24 md:px-10 md:py-32 lg:px-16 xl:px-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl italic text-fg-subtle">02</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.experience.eyebrow}
          </span>
        </div>
        <h2 id="experience-heading" className="mt-6 font-display text-4xl italic text-fg md:text-5xl">
          {dict.experience.sectionTitle}
        </h2>
      </Reveal>

      <div className="mt-16 space-y-20">
        {groups.map((g, gi) => (
          <div key={g.type}>
            <Reveal>
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-display text-xl italic text-fg-subtle">
                  {String(gi + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-fg">
                  {dict.employment[g.type]}
                </h3>
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs text-fg-subtle">{g.items.length}</span>
              </div>
            </Reveal>
            <ol reversed className="space-y-12">
              {g.items.map((exp) => (
                <ExperienceRow key={exp.id} exp={exp} locale={locale} dict={dict} />
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button
          type="button"
          onClick={() => setShowLegacy((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle/50 px-5 py-2.5 text-sm text-fg-muted transition-colors hover:text-fg"
          aria-expanded={showLegacy}
        >
          {showLegacy ? dict.common.hideOlder : dict.common.showOlder}
          <ChevronDown
            className={`size-4 transition-transform ${showLegacy ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
      </div>
    </section>
  );
}

function ExperienceRow({
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
  const startYear = exp.start.slice(0, 4);
  const endYear = exp.end === 'present' ? dict.common.present : exp.end.slice(0, 4);

  return (
    <Reveal as="li">
      <article className="group grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-[11rem_1fr] lg:grid-cols-[14rem_1fr_minmax(0,28rem)] xl:grid-cols-[16rem_1fr_minmax(0,32rem)]">
        {/* Left rail: giant year span */}
        <div className="md:pt-1">
          <p className="font-display text-2xl italic leading-none text-fg-subtle md:text-3xl">
            <span>{startYear}</span>
            <span className="mx-2 text-fg-subtle/60">/</span>
            <span>{endYear}</span>
          </p>
          <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-fg-subtle">
            <time dateTime={startIso}>
              {formatYearMonth(exp.start, locale, dict.common.present)}
            </time>
            <span className="mx-1">—</span>
            <time dateTime={endIso}>
              {formatYearMonth(exp.end, locale, dict.common.present)}
            </time>
          </p>
          <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-fg-subtle/80">
            {formatDuration(months, locale, dict.common.years, dict.common.months)}
          </p>
        </div>

        {/* Middle: content */}
        <div className="border-l border-border pl-6 md:pl-8">
          <h4 className="text-xl font-semibold text-fg md:text-2xl">{item.company}</h4>
          <p className="mt-1 text-sm text-fg-muted">{exp.role}</p>
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-fg-muted md:text-[0.95rem] lg:hidden">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 size-1 shrink-0 rounded-full bg-accent-1/60"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {exp.stack.length > 0 && (
            <p className="mt-5 font-mono text-xs text-fg-subtle lg:hidden">
              {exp.stack.join(' · ')}
            </p>
          )}
        </div>

        {/* Right: bullets + stack on large screens (uses full-wide real estate) */}
        <div className="hidden lg:block">
          <ul className="space-y-2.5 text-sm leading-relaxed text-fg-muted lg:text-[0.95rem]">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent-1/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {exp.stack.length > 0 && (
            <p className="mt-5 font-mono text-xs text-fg-subtle">{exp.stack.join(' · ')}</p>
          )}
        </div>
      </article>
    </Reveal>
  );
}
