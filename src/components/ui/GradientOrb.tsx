import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export function GradientOrb({ className }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute rounded-full bg-gradient-to-br from-accent-1 to-accent-2 opacity-20 blur-3xl',
        className,
      )}
    />
  );
}
