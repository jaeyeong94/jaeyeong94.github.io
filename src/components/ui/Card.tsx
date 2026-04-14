import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'article' | 'section';
}

export function Card({ as: As = 'div', className, ...rest }: Props) {
  return (
    <As
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all md:p-8',
        'hover:-translate-y-0.5 hover:shadow-md',
        className,
      )}
      {...rest}
    />
  );
}
