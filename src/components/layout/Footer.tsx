import type { Dictionary } from '@/content/i18n';

interface Props {
  dict: Dictionary;
  buildTime: string;
}

export function Footer({ dict, buildTime }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="no-print mt-24 border-t border-border">
      <div className="section-frame flex flex-col items-start justify-between gap-3 py-10 text-sm text-fg-subtle md:flex-row md:items-center">
        <p>© {year} Ted Ryu · Jaeyeong You</p>
        <p>
          {dict.footer.updated}: <time dateTime={buildTime}>{buildTime.slice(0, 10)}</time>
        </p>
      </div>
    </footer>
  );
}
