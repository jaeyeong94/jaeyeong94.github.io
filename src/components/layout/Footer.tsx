import type { Dictionary } from '@/content/i18n';

interface Props {
  dict: Dictionary;
}

export function Footer({ dict }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="no-print mt-24 border-t border-border">
      <div className="section-frame flex items-center py-10 text-sm text-fg-subtle">
        <p>© {year} {dict.footer.credit}</p>
      </div>
    </footer>
  );
}
