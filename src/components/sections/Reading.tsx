import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Reading({ dict }: Props) {
  return (
    <section
      id="reading"
      aria-labelledby="reading-heading"
      className="mx-auto max-w-content scroll-mt-24 px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="reading-heading"
        eyebrow={dict.reading.eyebrow}
        title={dict.reading.sectionTitle}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-fg-subtle">
              {dict.reading.booksTitle}
            </h3>
            <ul className="space-y-2">
              {resume.books.map((b) => (
                <li key={b.title}>
                  <p className="text-sm font-medium text-fg">{b.title}</p>
                  <p className="text-xs text-fg-subtle">{b.author}</p>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
        <Reveal>
          <Card className="h-full">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-fg-subtle">
              {dict.reading.toolsTitle}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {resume.tools.map((t) => (
                <li key={t}>
                  <Chip>{t}</Chip>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
