import { ArrowUpRight } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Projects({ dict }: Props) {
  const featured = resume.projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-content scroll-mt-24 px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="projects-heading"
        eyebrow={dict.projects.eyebrow}
        title={dict.projects.sectionTitle}
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => {
          const item = dict.projects.items[p.id];
          const host = new URL(p.url).host.replace(/^www\./, '');
          return (
            <Reveal key={p.id}>
              <Card as="article" className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-fg">{item.title}</h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} ${dict.projects.viewSite}`}
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg"
                  >
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                  {item.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                <p className="mt-4 text-xs font-mono text-fg-subtle">{host}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
