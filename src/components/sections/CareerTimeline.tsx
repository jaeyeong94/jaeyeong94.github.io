import { resume } from '@/content/resume';
import type { Dictionary } from '@/content/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface Props {
  dict: Dictionary;
}

const INLINE_LABEL_MIN_PERCENT = 5;

export function CareerTimeline({ dict }: Props) {
  const now = new Date();
  const startYear = 2012;
  const endYear = now.getFullYear();
  const endMonth = now.getMonth() + 1;
  const spanMonths = (endYear - startYear) * 12 + endMonth;

  const items = resume.experiences.map((exp) => {
    const [sy, sm] = exp.start.split('-').map(Number);
    const startOffset = (sy - startYear) * 12 + (sm - 1);
    let duration: number;
    if (exp.end === 'present') {
      duration = spanMonths - startOffset;
    } else {
      const [ey, em] = exp.end.split('-').map(Number);
      duration = (ey - startYear) * 12 + em - startOffset;
    }
    return { ...exp, startOffset, duration: Math.max(duration, 1) };
  });

  // Greedy lane assignment
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

  // For each item, determine how far its label can extend (until next item in same lane)
  const nextStartByItem = new Map<string, number>();
  const byLane = new Map<number, typeof withLanes>();
  for (const w of withLanes) {
    const arr = byLane.get(w.lane) ?? [];
    arr.push(w);
    byLane.set(w.lane, arr);
  }
  for (const arr of byLane.values()) {
    arr.sort((a, b) => a.startOffset - b.startOffset);
    for (let i = 0; i < arr.length; i++) {
      const next = arr[i + 1];
      nextStartByItem.set(arr[i].id, next ? next.startOffset : spanMonths);
    }
  }

  const yearTicks: number[] = [];
  for (let y = startYear; y <= endYear; y += 2) yearTicks.push(y);
  if (yearTicks[yearTicks.length - 1] !== endYear) yearTicks.push(endYear);

  const rowHeight = 22;
  const rowGap = 4;
  const timelineHeight = laneCount * rowHeight + (laneCount - 1) * rowGap;

  const mobileSorted = [...resume.experiences].sort((a, b) =>
    a.start < b.start ? 1 : a.start > b.start ? -1 : 0,
  );

  return (
    <Reveal>
      <div>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            ⌯ Career Timeline
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-fg-subtle">
            <LegendDot variant="fulltime" label={dict.employment.fulltime} />
            <LegendDot variant="freelance" label={dict.employment.freelance} />
            <LegendDot variant="current" label={dict.common.present} />
          </div>
        </div>

        {/* Desktop: full-viewport-width timeline with horizontal scroll */}
        <div className="relative left-1/2 hidden w-screen -translate-x-1/2 border-y border-border bg-bg-subtle/30 md:block">
          <div className="overflow-x-auto">
            <div className="min-w-[1024px] px-6 pb-6 pt-4 md:px-10 lg:px-14">
              <div className="relative" style={{ height: timelineHeight }}>
                {withLanes.map((item) => {
                  const left = (item.startOffset / spanMonths) * 100;
                  const width = Math.max((item.duration / spanMonths) * 100, 2.8);
                  const top = item.lane * (rowHeight + rowGap);
                  const isRemote = item.type === 'freelance';
                  const isPresent = item.end === 'present';
                  const fullName = dict.experience.items[item.id].company;
                  const inlineLabel = width >= INLINE_LABEL_MIN_PERCENT;
                  const barEnd = left + width;
                  const nextStartPercent =
                    ((nextStartByItem.get(item.id) ?? spanMonths) / spanMonths) * 100;
                  const labelMaxWidth = Math.max(nextStartPercent - barEnd, 0);
                  const rangeLabel = isPresent
                    ? `${item.start} — ${dict.common.present}`
                    : `${item.start} — ${item.end}`;
                  return (
                    <div key={item.id}>
                      <div
                        title={`${fullName} · ${rangeLabel}`}
                        style={{
                          left: `${left}%`,
                          width: `${width}%`,
                          top,
                          height: rowHeight,
                        }}
                        className={cn(
                          'absolute flex items-center overflow-hidden rounded-md px-2 transition-colors',
                          isPresent
                            ? 'bg-fg text-bg shadow-[0_0_0_1px_oklch(var(--accent-1))]'
                            : isRemote
                              ? 'border border-dashed border-accent-2/60 bg-accent-2/20 text-accent-2 hover:bg-accent-2/35'
                              : 'bg-accent-1/25 text-accent-1 hover:bg-accent-1/35',
                        )}
                      >
                        <span aria-hidden className="mr-1 font-mono text-[0.6rem]">
                          {isRemote ? '◇' : '◆'}
                        </span>
                        {inlineLabel && (
                          <span className="truncate font-mono text-[0.65rem] font-medium tracking-wide">
                            {fullName}
                          </span>
                        )}
                        {item.teamKey && (
                          <span
                            aria-hidden
                            title="Same team"
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
                      {!inlineLabel && (
                        <div
                          style={{
                            left: `${barEnd}%`,
                            top,
                            height: rowHeight,
                            maxWidth: `${labelMaxWidth}%`,
                          }}
                          className={cn(
                            'pointer-events-none absolute flex items-center overflow-hidden pl-1.5',
                            'font-mono text-[0.65rem] font-medium tracking-wide',
                            isPresent
                              ? 'text-fg'
                              : isRemote
                                ? 'text-accent-2'
                                : 'text-accent-1',
                          )}
                        >
                          <span className="truncate">{fullName}</span>
                        </div>
                      )}
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
          </div>
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
