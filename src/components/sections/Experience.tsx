'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import {
  resume,
  monthsBetween,
  type Experience as ExpType,
  type EmploymentType,
} from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';
import { CareerTimeline } from './CareerTimeline';
import { formatYearMonth, formatDuration } from '@/lib/date';
import { ChevronDown } from 'lucide-react';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

type Group = { type: EmploymentType; items: ExpType[] };

const TEAM_KEY = 'flfi-rootstone';

export function Experience({ locale, dict }: Props) {
  const [showLegacy, setShowLegacy] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [connector, setConnector] = useState<{
    top: number;
    bottom: number;
    height: number;
  } | null>(null);

  const filtered = resume.experiences.filter((e) => (showLegacy ? true : !e.legacy));
  const printExperiences = [...resume.experiences].sort((a, b) =>
    a.start < b.start ? 1 : a.start > b.start ? -1 : 0,
  );

  const freelance = filtered.filter((e) => e.type === 'freelance');
  const fulltime = filtered.filter((e) => e.type === 'fulltime');
  const contract = filtered.filter((e) => e.type === 'contract');

  const groups: Group[] = [];
  if (freelance.length) groups.push({ type: 'freelance', items: freelance });
  if (fulltime.length) groups.push({ type: 'fulltime', items: fulltime });
  if (contract.length) groups.push({ type: 'contract', items: contract });

  useEffect(() => {
    function measure() {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const wrapperRect = wrapper.getBoundingClientRect();
      const nodes = Array.from(
        wrapper.querySelectorAll<HTMLElement>(`[data-team-key="${TEAM_KEY}"]`),
      );
      if (nodes.length < 2) {
        setConnector(null);
        return;
      }
      const centers = nodes
        .map((n) => {
          const r = n.getBoundingClientRect();
          return r.top - wrapperRect.top + 24;
        })
        .sort((a, b) => a - b);
      const top = centers[0];
      const bottom = centers[centers.length - 1];
      setConnector({ top, bottom, height: bottom + 40 });
    }
    measure();
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const ro = new ResizeObserver(measure);
    ro.observe(wrapper);
    wrapper.querySelectorAll('article').forEach((a) => ro.observe(a));
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [showLegacy]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-frame section-pad relative scroll-mt-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-fg-subtle">02</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.experience.eyebrow}
          </span>
        </div>
        <h2
          id="experience-heading"
          className="mt-5 text-3xl font-bold tracking-tight text-fg md:text-4xl"
        >
          {dict.experience.sectionTitle}
        </h2>
      </Reveal>

      <div className="resume-print-hidden">
        <CareerTimeline dict={dict} showLegacy={showLegacy} />
      </div>

      <div data-print-experience-list className="resume-print-only mt-10">
        <ol className="space-y-4">
          {printExperiences.map((exp) => (
            <PrintExperienceRow key={exp.id} exp={exp} locale={locale} dict={dict} />
          ))}
        </ol>
      </div>

      <div ref={wrapperRef} className="relative mt-14 space-y-16 resume-print-hidden">
        {connector && (
          <svg
            aria-label={dict.common.sameTeamLabel}
            role="img"
            className="pointer-events-none absolute hidden md:block"
            style={{
              left: '-1.5rem',
              top: 0,
              width: 24,
              height: connector.height,
            }}
            overflow="visible"
          >
            <defs>
              <marker
                id="team-arrow"
                markerWidth="7"
                markerHeight="7"
                refX="3.5"
                refY="3.5"
                orient="auto"
              >
                <path d="M 0 0 L 7 3.5 L 0 7 z" fill="oklch(var(--accent-1))" />
              </marker>
            </defs>
            <line
              x1={10}
              y1={connector.bottom}
              x2={10}
              y2={connector.top + 8}
              stroke="oklch(var(--accent-1))"
              strokeOpacity={0.55}
              strokeWidth={1.5}
              strokeDasharray="4 4"
              markerEnd="url(#team-arrow)"
            />
            <circle
              cx={10}
              cy={connector.bottom}
              r={4}
              fill="oklch(var(--accent-1))"
            />
          </svg>
        )}

        {groups.map((g, gi) => (
          <div key={g.type}>
            <Reveal>
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-mono text-sm text-fg-subtle">
                  {String(gi + 1).padStart(2, '0')}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-fg">
                  {dict.employment[g.type]}
                </h3>
                <span className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs text-fg-subtle">{g.items.length}</span>
              </div>
            </Reveal>
            <ol reversed className="space-y-10">
              {g.items.map((exp) => (
                <ExperienceRow key={exp.id} exp={exp} locale={locale} dict={dict} />
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="resume-print-hidden mt-14 flex justify-center">
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

function PrintExperienceRow({
  exp,
  locale,
  dict,
}: {
  exp: ExpType;
  locale: Locale;
  dict: Dictionary;
}) {
  const item = dict.experience.items[exp.id];
  const endIso = exp.end === 'present' ? new Date().toISOString().slice(0, 7) : exp.end;
  const months = monthsBetween(exp.start, exp.end);

  return (
    <li className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <div className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-1">
        <div>
          <p className="font-mono text-[0.68rem] tabular-nums text-fg-subtle">
            <time dateTime={exp.start}>
              {formatYearMonth(exp.start, locale, dict.common.present)}
            </time>
            <span className="mx-1">—</span>
            <time dateTime={endIso}>
              {formatYearMonth(exp.end, locale, dict.common.present)}
            </time>
          </p>
          <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.04em] text-fg-subtle/80">
            {formatDuration(months, locale, dict.common.years, dict.common.months)}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-fg">{item.company}</p>
          <p className="text-[0.72rem] text-fg-muted">{exp.role}</p>
          <p className="mt-1 text-[0.82rem] leading-relaxed text-fg">{item.summary}</p>
          <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.04em] text-fg-muted">
            {item.metric}
          </p>
          <div data-print-experience-details={exp.id} className="mt-2">
            <ul className="space-y-1.5 text-[0.76rem] leading-relaxed text-fg-muted">
              {item.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
            {exp.stack.length > 0 && (
              <p className="mt-2 font-mono text-[0.64rem] text-fg-subtle">
                {exp.stack.join(' · ')}
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
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
      <article
        data-team-key={exp.teamKey}
        className={`resume-experience-row resume-print-keep ${exp.id === 'miso' || exp.id === 'aligo' ? 'resume-print-trim' : ''} group grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-[7rem_1fr] lg:grid-cols-[8rem_1fr_minmax(0,32rem)]`}
      >
        {/* Left rail: year span */}
        <div className="md:pt-1">
          <p className="font-mono text-sm tabular-nums text-fg-muted">
            <span>{startYear}</span>
            <span className="mx-1.5 text-fg-subtle">—</span>
            <span>{endYear}</span>
          </p>
          <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] tabular-nums text-fg-subtle">
            <time dateTime={startIso}>
              {formatYearMonth(exp.start, locale, dict.common.present)}
            </time>
            <span className="mx-1">—</span>
            <time dateTime={endIso}>
              {formatYearMonth(exp.end, locale, dict.common.present)}
            </time>
          </p>
          <p className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.25em] tabular-nums text-fg-subtle/80">
            {formatDuration(months, locale, dict.common.years, dict.common.months)}
          </p>
        </div>

        {/* Middle: company + role */}
        <div className="resume-experience-main border-l border-border pl-6 md:pl-8">
          <h4 className="text-lg font-semibold text-fg md:text-xl">
            {exp.url ? (
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                title={new URL(exp.url).host.replace(/^www\./, '')}
                className="inline-flex items-baseline gap-1.5 rounded-sm text-fg transition-colors hover:text-accent-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {item.company}
                <span aria-hidden className="text-sm text-fg-subtle">
                  ↗
                </span>
              </a>
            ) : (
              item.company
            )}
          </h4>
          <p className="mt-1 text-sm text-fg-muted">{exp.role}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {exp.teamKey && (
              <p className="resume-print-hidden inline-flex items-center rounded-full border border-accent-1/20 bg-accent-1/10 px-3 py-1 text-[0.7rem] text-accent-1">
                {dict.common.sameTeamLabel}
              </p>
            )}
          </div>
          <div className="resume-experience-summary mt-4 rounded-2xl border border-border bg-bg-subtle/40 px-4 py-4">
            <p className="text-sm font-medium leading-relaxed text-fg">{item.summary}</p>
            <p className="resume-experience-metric mt-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-accent-1">
              {item.metric}
            </p>
          </div>
          <ul className="resume-print-hidden mt-4 space-y-2 text-sm leading-relaxed text-fg-muted lg:hidden">
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
            <p className="resume-print-hidden mt-4 font-mono text-xs text-fg-subtle lg:hidden">
              {exp.stack.join(' · ')}
            </p>
          )}
        </div>

        {/* Right: bullets + stack on large screens */}
        <div className="resume-print-hidden hidden lg:block">
          <ul className="space-y-2 text-sm leading-relaxed text-fg-muted">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent-1/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {exp.stack.length > 0 && (
            <p className="mt-4 font-mono text-xs text-fg-subtle">{exp.stack.join(' · ')}</p>
          )}
        </div>
      </article>
    </Reveal>
  );
}
