import { resume, type ExperienceId } from '@/content/resume';
import type { Dictionary } from '@/content/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const SHORT_NAMES: Record<ExperienceId, string> = {
  onto: 'Onto',
  rootstone: 'Rootstone',
  dio: 'DIO',
  dssolve: 'DS Solve',
  'flfi-exchange': 'FLFI·Ex',
  miso: 'Miso',
  'flfi-lead': 'FLFI·Lead',
  aligo: 'ALIGO',
  'studio-bloom': 'Studio Bloom',
  ninefive: 'Ninefive',
  '4depth': '4depth',
};

interface Props {
  dict: Dictionary;
}

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

  // Year ticks every 2 years, plus final year
  const yearTicks: number[] = [];
  for (let y = startYear; y <= endYear; y += 2) yearTicks.push(y);
  if (yearTicks[yearTicks.length - 1] !== endYear) yearTicks.push(endYear);

  const rowHeight = 22;
  const rowGap = 4;
  const timelineHeight = laneCount * rowHeight + (laneCount - 1) * rowGap;

  return (
    <Reveal>
      <div className="mt-8 hidden md:block">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            ⌯ Career Timeline
          </p>
          <div className="flex items-center gap-4 text-xs text-fg-subtle">
            <LegendDot className="bg-accent-1/40" label={dict.employment.fulltime} />
            <LegendDot className="bg-accent-2/40" label={dict.employment.freelance} />
          </div>
        </div>
        <div className="rounded-xl border border-border bg-bg-subtle/30 px-4 pb-6 pt-4">
          <div className="relative" style={{ height: timelineHeight }}>
            {withLanes.map((item) => {
              const left = (item.startOffset / spanMonths) * 100;
              const width = Math.max((item.duration / spanMonths) * 100, 1.2);
              const top = item.lane * (rowHeight + rowGap);
              const isRemote = item.type === 'freelance';
              const shortName = SHORT_NAMES[item.id];
              const rangeLabel =
                item.end === 'present'
                  ? `${item.start} — ${dict.common.present}`
                  : `${item.start} — ${item.end}`;
              return (
                <div
                  key={item.id}
                  title={`${dict.experience.items[item.id].company} · ${rangeLabel}`}
                  style={{ left: `${left}%`, width: `${width}%`, top, height: rowHeight }}
                  className={cn(
                    'absolute flex items-center overflow-hidden rounded-md px-2 transition-colors',
                    isRemote
                      ? 'bg-accent-2/25 text-accent-2 hover:bg-accent-2/35'
                      : 'bg-accent-1/25 text-accent-1 hover:bg-accent-1/35',
                  )}
                >
                  <span className="truncate font-mono text-[0.65rem] font-medium tracking-wide">
                    {shortName}
                  </span>
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
                  <span className="absolute top-2 -translate-x-1/2 font-mono text-[0.6rem] text-fg-subtle">
                    &apos;{String(y).slice(2)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function LegendDot({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn('size-2.5 rounded-sm', className)} />
      <span>{label}</span>
    </span>
  );
}
