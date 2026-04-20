import { resume, type EmploymentType, type ExperienceId } from '@/content/resume';
import type { Dictionary } from '@/content/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { TimelineScroller } from '@/components/sections/TimelineScroller';
import { cn } from '@/lib/utils';

interface Props {
  dict: Dictionary;
  showLegacy?: boolean;
}

const INLINE_LABEL_MIN_PERCENT = 5;
const LEGACY_AGGREGATE_ID = 'legacy-era';
const RECENT_EMPHASIS_MONTHS = 24;

type BarItem = {
  id: string;
  type: EmploymentType;
  start: string;
  end: string;
  teamKey?: string;
  startOffset: number;
  duration: number;
  isAggregate: boolean;
  aggregatedCompanies?: string[];
};

export function CareerTimeline({ dict, showLegacy = false }: Props) {
  const now = new Date();
  const startYear = 2012;
  const endYear = now.getFullYear();
  const endMonth = now.getMonth() + 1;
  const spanMonths = (endYear - startYear) * 12 + endMonth;

  const visibleExps = showLegacy
    ? resume.experiences
    : resume.experiences.filter((e) => !e.legacy);

  const items: BarItem[] = visibleExps.map((exp) => {
    const [sy, sm] = exp.start.split('-').map(Number);
    const startOffset = (sy - startYear) * 12 + (sm - 1);
    let duration: number;
    if (exp.end === 'present') {
      duration = spanMonths - startOffset;
    } else {
      const [ey, em] = exp.end.split('-').map(Number);
      duration = (ey - startYear) * 12 + em - startOffset;
    }
    return {
      id: exp.id,
      type: exp.type,
      start: exp.start,
      end: exp.end,
      teamKey: exp.teamKey,
      startOffset,
      duration: Math.max(duration, 1),
      isAggregate: false,
    };
  });

  if (!showLegacy) {
    const legacyExps = resume.experiences.filter((e) => e.legacy);
    if (legacyExps.length > 0) {
      const legacyStartOffsets = legacyExps.map((e) => {
        const [y, m] = e.start.split('-').map(Number);
        return (y - startYear) * 12 + (m - 1);
      });
      const legacyEndOffsets = legacyExps.map((e) => {
        if (e.end === 'present') return spanMonths;
        const [y, m] = e.end.split('-').map(Number);
        return (y - startYear) * 12 + m;
      });
      const legacyStart = Math.min(...legacyStartOffsets);
      const legacyEnd = Math.max(...legacyEndOffsets);
      const earliestStart = legacyExps.reduce((a, b) => (a.start < b.start ? a : b)).start;
      const latestEnd = legacyExps.reduce((a, b) => (a.end > b.end ? a : b)).end;
      items.push({
        id: LEGACY_AGGREGATE_ID,
        type: 'fulltime',
        start: earliestStart,
        end: latestEnd,
        startOffset: legacyStart,
        duration: Math.max(legacyEnd - legacyStart, 1),
        isAggregate: true,
        aggregatedCompanies: legacyExps.map((e) => dict.experience.items[e.id].company),
      });
    }
  }

  // Greedy lane packing: no overlap between bars in a lane.
  const sorted = [...items].sort((a, b) => a.startOffset - b.startOffset);
  const lanes: number[] = [];
  const withLanes = sorted.map((item) => {
    const end = item.startOffset + item.duration;
    let lane = lanes.findIndex((laneEnd) => laneEnd <= item.startOffset);
    if (lane === -1) lane = lanes.length;
    lanes[lane] = end;
    return { ...item, lane };
  });
  const laneCount = lanes.length;

  const yearTicks: number[] = [];
  for (let y = startYear; y <= endYear; y += 2) yearTicks.push(y);
  if (yearTicks[yearTicks.length - 1] !== endYear) yearTicks.push(endYear);

  const rowHeight = 22;
  const rowGap = 4;
  const timelineHeight = laneCount * rowHeight + (laneCount - 1) * rowGap;

  const mobileSorted = [...visibleExps].sort((a, b) =>
    a.start < b.start ? 1 : a.start > b.start ? -1 : 0,
  );

  return (
    <Reveal>
      <div>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            ⌯ {dict.experience.timelineLabel}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-fg-subtle">
            <LegendDot variant="fulltime" label={dict.employment.fulltime} />
            <LegendDot variant="freelance" label={dict.employment.freelance} />
            <LegendDot variant="current" label={dict.common.present} />
          </div>
        </div>

        {/* Desktop: full-viewport-width timeline with horizontal scroll */}
        <div className="relative left-1/2 hidden w-screen -translate-x-1/2 border-y border-border bg-bg-subtle/30 md:block">
          <TimelineScroller ariaLabel={dict.experience.timelineAriaLabel}>
            <div className="min-w-[1600px] px-6 pb-6 pt-4 md:px-10 lg:px-14">
              <div className="relative" style={{ height: timelineHeight }}>
                {/* Subtle tint on recent 2 years to draw the eye to current work */}
                <div
                  aria-hidden
                  className="absolute inset-y-0 rounded-sm bg-accent-1/[0.05]"
                  style={{
                    left: `${((spanMonths - RECENT_EMPHASIS_MONTHS) / spanMonths) * 100}%`,
                    right: 0,
                  }}
                />
                {withLanes.map((item) => {
                  const left = (item.startOffset / spanMonths) * 100;
                  const width = Math.max((item.duration / spanMonths) * 100, 2.8);
                  const top = item.lane * (rowHeight + rowGap);
                  const isRemote = item.type === 'freelance';
                  const isPresent = item.end === 'present';
                  const isAggregate = item.isAggregate;
                  const fullName = isAggregate
                    ? dict.experience.earlyCareerLabel.replace(
                        '{n}',
                        String(item.aggregatedCompanies?.length ?? 0),
                      )
                    : dict.experience.items[item.id as ExperienceId].company;
                  const inlineLabel = width >= INLINE_LABEL_MIN_PERCENT;
                  const rangeLabel = isPresent
                    ? `${item.start} — ${dict.common.present}`
                    : `${item.start} — ${item.end}`;
                  const tooltipDescription = isAggregate
                    ? item.aggregatedCompanies?.join(' · ') ?? ''
                    : `${rangeLabel}${item.teamKey ? ` · ${dict.common.sameTeamLabel}` : ''}`;
                  return (
                    <div
                      key={item.id}
                      className="group/bar absolute"
                      style={{
                        left: `${left}%`,
                        width: `${width}%`,
                        top,
                        height: rowHeight,
                      }}
                    >
                      <div
                        title={
                          isAggregate
                            ? `${fullName} · ${item.aggregatedCompanies?.join(', ') ?? ''} · ${rangeLabel}`
                            : `${fullName} · ${rangeLabel}`
                        }
                        className={cn(
                          'flex h-full items-center overflow-hidden rounded-md px-2 transition-colors',
                          isAggregate
                            ? 'border border-dashed border-fg-subtle/40 bg-bg-subtle/60 text-fg-muted'
                            : isPresent
                              ? 'bg-fg text-bg shadow-[0_0_0_1px_oklch(var(--accent-1)),0_0_14px_-2px_oklch(var(--accent-1)/0.55)]'
                              : isRemote
                                ? 'border border-dashed border-accent-2/60 bg-accent-2/20 text-accent-2 hover:bg-accent-2/35'
                                : 'bg-accent-1/25 text-accent-1 hover:bg-accent-1/35',
                        )}
                      >
                        <span aria-hidden className="mr-1 font-mono text-[0.6rem]">
                          {isAggregate ? '⋯' : isRemote ? '◇' : '◆'}
                        </span>
                        {inlineLabel && (
                          <span
                            className={cn(
                              'min-w-0 truncate font-mono text-[0.65rem] tracking-wide',
                              isPresent ? 'font-semibold' : 'font-medium',
                            )}
                          >
                            {fullName}
                          </span>
                        )}
                        {item.teamKey && (
                          <span
                            aria-hidden
                            title={dict.common.sameTeamLabel}
                            className={cn(
                              'ml-1 font-mono text-[0.6rem]',
                              isPresent ? 'text-bg/70' : 'text-fg',
                            )}
                          >
                            ⧖
                          </span>
                        )}
                        {isPresent && (
                          <span
                            aria-hidden
                            className="ml-auto font-mono text-[0.6rem] text-bg/80"
                          >
                            →
                          </span>
                        )}
                      </div>
                      <div
                        aria-hidden
                        className={cn(
                          'pointer-events-none absolute bottom-[calc(100%+0.55rem)] left-1/2 z-20 w-max max-w-[18rem] -translate-x-1/2 transition-all duration-150',
                          'opacity-0 translate-y-1 group-hover/bar:translate-y-0 group-hover/bar:opacity-100',
                        )}
                      >
                        <div className="rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-sm">
                          <p className="text-xs font-semibold text-fg">{fullName}</p>
                          <p className="mt-1 text-[0.7rem] leading-relaxed text-fg-muted">
                            {tooltipDescription}
                          </p>
                        </div>
                        <div className="absolute left-1/2 top-full size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-border bg-surface/95" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="relative mt-3 h-4">
                <div className="absolute inset-x-0 top-0 h-px bg-border" />
                {yearTicks.map((y) => {
                  const offset = ((y - startYear) * 12) / spanMonths * 100;
                  return (
                    <div key={y} className="absolute top-0" style={{ left: `${offset}%` }}>
                      <div className="h-1.5 w-px bg-border" />
                      <span className="absolute top-2 -translate-x-1/2 font-mono text-[0.6rem] tabular-nums text-fg-subtle">
                        &apos;{String(y).slice(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </TimelineScroller>
        </div>

        {/* Mobile: compact vertical list */}
        <ol className="space-y-2 md:hidden">
          {mobileSorted.map((exp) => {
            const isRemote = exp.type === 'freelance';
            const isPresent = exp.end === 'present';
            const end = isPresent ? dict.common.present : exp.end;
            const fullName = dict.experience.items[exp.id].company;
            return (
              <li
                key={exp.id}
                className={cn(
                  'flex items-center gap-3 rounded-lg border px-3 py-2',
                  isPresent
                    ? 'border-fg bg-fg text-bg'
                    : isRemote
                      ? 'border-dashed border-accent-2/50 bg-accent-2/10'
                      : 'border-border bg-accent-1/10',
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'font-mono text-xs',
                    isPresent
                      ? 'text-bg/80'
                      : isRemote
                        ? 'text-accent-2'
                        : 'text-accent-1',
                  )}
                >
                  {isRemote ? '◇' : '◆'}
                </span>
                <span
                  className={cn(
                    'flex-1 truncate text-sm font-medium',
                    isPresent ? 'text-bg' : 'text-fg',
                  )}
                >
                  {fullName}
                </span>
                <span
                  className={cn(
                    'font-mono text-[0.65rem] tabular-nums',
                    isPresent ? 'text-bg/80' : 'text-fg-subtle',
                  )}
                >
                  {exp.start.slice(2)} —{' '}
                  {end === dict.common.present ? dict.common.present : end.slice(2)}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </Reveal>
  );
}

function LegendDot({
  variant,
  label,
}: {
  variant: 'fulltime' | 'freelance' | 'current';
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        aria-hidden
        className={cn(
          'inline-flex size-3 items-center justify-center rounded-sm text-[8px]',
          variant === 'freelance' &&
            'border border-dashed border-accent-2/60 bg-accent-2/30 text-accent-2',
          variant === 'fulltime' && 'bg-accent-1/40 text-accent-1',
          variant === 'current' &&
            'bg-fg text-bg shadow-[0_0_0_1px_oklch(var(--accent-1))]',
        )}
      >
        {variant === 'freelance' ? '◇' : variant === 'current' ? '→' : '◆'}
      </span>
      <span>{label}</span>
    </span>
  );
}
