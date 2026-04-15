'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  delayMs?: number;
}

export function Tooltip({ children, content, side = 'top', delayMs = 180 }: Props) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayMs} skipDelayDuration={120}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={8}
            className={cn(
              'tt-content z-50 rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-fg shadow-md',
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-[oklch(var(--surface))]" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
