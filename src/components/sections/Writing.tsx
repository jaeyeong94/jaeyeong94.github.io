import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Writing({ dict }: Props) {
  const posts = resume.writingIds.map((id) => ({ id, ...dict.writing.items[id] }));
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="mx-auto max-w-content scroll-mt-24 px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="writing-heading"
        eyebrow={dict.writing.eyebrow}
        title={dict.writing.sectionTitle}
      />
      <ul className="space-y-3">
        {posts.map((p) => (
          <Reveal key={p.id} as="li">
            <Card as="article">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-fg">{p.title}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{p.summary}</p>
                </div>
                <Chip variant="ghost">
                  <time dateTime={p.date}>{p.date}</time>
                </Chip>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
