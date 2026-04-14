'use client';

import { cn } from '@/lib/utils';
import { useReveal } from '@/hooks/useReveal';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'li';
  stagger?: boolean;
}

export function Reveal({ as: As = 'div', stagger, className, children, ...rest }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const Tag = As as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={cn('reveal', stagger && 'reveal-stagger', className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
