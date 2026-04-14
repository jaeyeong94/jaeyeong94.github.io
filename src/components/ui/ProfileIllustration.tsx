import { cn } from '@/lib/utils';

export function ProfileIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Abstract portrait illustration"
      className={cn('text-fg-muted', className)}
    >
      <defs>
        <linearGradient id="orb-a" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(var(--accent-1))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="oklch(var(--accent-2))" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="orb-b" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="oklch(var(--accent-2))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(var(--accent-2))" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="160" fill="url(#orb-b)" />
      <circle
        cx="200"
        cy="200"
        r="120"
        fill="none"
        stroke="url(#orb-a)"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <circle
        cx="200"
        cy="200"
        r="80"
        fill="none"
        stroke="url(#orb-a)"
        strokeWidth="1"
        opacity="0.5"
      />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 200 + Math.cos(angle) * 90;
        const y1 = 200 + Math.sin(angle) * 90;
        const x2 = 200 + Math.cos(angle) * 160;
        const y2 = 200 + Math.sin(angle) * 160;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="oklch(var(--border))"
            strokeWidth="1"
            opacity="0.6"
          />
        );
      })}
      <text
        x="200"
        y="210"
        textAnchor="middle"
        fontSize="64"
        fontFamily="ui-monospace, monospace"
        fill="oklch(var(--text-muted))"
        opacity="0.5"
      >
        {'{ }'}
      </text>
    </svg>
  );
}
