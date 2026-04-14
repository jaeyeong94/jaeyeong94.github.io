import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'ghost';
}

export function Chip({ variant = 'default', className, ...rest }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 font-mono text-xs',
        variant === 'default' && 'bg-bg-subtle text-fg-muted',
        variant === 'accent' && 'bg-accent-1/10 text-accent-1',
        variant === 'ghost' && 'border border-border text-fg-subtle',
        className,
      )}
      {...rest}
    />
  );
}
