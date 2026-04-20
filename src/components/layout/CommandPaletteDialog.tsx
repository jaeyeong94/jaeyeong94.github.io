'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';
import { Search } from 'lucide-react';

interface CommandPaletteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: Array<{ href: string; label: string }>;
  title: string;
  searchPlaceholder: string;
  emptyLabel: string;
  heading: string;
  onSelect: (href: string) => void;
}

export function CommandPaletteDialog({
  open,
  onOpenChange,
  items,
  title,
  searchPlaceholder,
  emptyLabel,
  heading,
  onSelect,
}: CommandPaletteDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="cmdk-overlay fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content
          className="cmdk-content fixed left-1/2 top-[20vh] z-50 w-[92vw] max-w-lg -translate-x-1/2 rounded-xl border border-border bg-surface p-2 shadow-2xl"
          onOpenAutoFocus={(event) => {
            const input = (event.currentTarget as HTMLElement).querySelector('input');
            if (!input) return;
            event.preventDefault();
            input.focus();
          }}
        >
          <Dialog.Title className="sr-only">{title}</Dialog.Title>
          <Command
            className="flex flex-col"
            filter={(value, search) => {
              if (!search) return 1;
              return value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
            }}
          >
            <div className="flex items-center gap-2 border-b border-border px-3 py-2">
              <Search className="size-4 shrink-0 text-fg-subtle" aria-hidden />
              <Command.Input
                placeholder={searchPlaceholder}
                className="flex-1 bg-transparent text-sm text-fg placeholder:text-fg-subtle focus:outline-none"
              />
              <kbd className="font-mono text-[0.6rem] text-fg-subtle">ESC</kbd>
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-1.5">
              <Command.Empty className="px-3 py-6 text-center text-sm text-fg-muted">
                {emptyLabel}
              </Command.Empty>
              <Command.Group
                heading={heading}
                className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[0.65rem] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:text-fg-subtle"
              >
                {items.map((item) => (
                  <Command.Item
                    key={item.href}
                    value={item.label}
                    onSelect={() => onSelect(item.href)}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-fg aria-selected:bg-accent-1/15 aria-selected:text-accent-1"
                  >
                    <span aria-hidden className="font-mono text-[0.65rem] text-fg-subtle">
                      #
                    </span>
                    {item.label}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

