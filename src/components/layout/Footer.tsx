import type { Dictionary } from '@/content/i18n';

interface Props {
  dict: Dictionary;
  buildTime: string;
}

export function Footer({ dict, buildTime }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="no-print mt-24 border-t border-border">
      <div className="flex w-full flex-col items-start justify-between gap-3 px-6 py-10 text-sm text-fg-subtle md:flex-row md:items-center md:px-10 lg:px-16 xl:px-24">
        <p>© {year} Ted Ryu · Jaeyeong You</p>
        <p>
          {dict.footer.updated}: <time dateTime={buildTime}>{buildTime.slice(0, 10)}</time>
        </p>
      </div>
    </footer>
  );
}
