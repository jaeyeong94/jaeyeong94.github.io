import { cn } from '@/lib/utils';

interface Props {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ id, eyebrow, title, description, align = 'left', className }: Props) {
  return (
    <header className={cn('mb-10 md:mb-14', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-fg-subtle">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-fg md:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base text-fg-muted">{description}</p>
      )}
    </header>
  );
}
