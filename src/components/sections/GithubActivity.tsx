import { ExternalLink, Star } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import type { GithubRepo } from '@/lib/github';
import { resume } from '@/content/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
  repos: GithubRepo[];
}

export function GithubActivity({ dict, repos }: Props) {
  if (repos.length === 0) return null;
  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="w-full scroll-mt-24 px-6 py-20 md:px-10 md:py-28 lg:px-16 xl:px-24"
    >
      <SectionHeading
        id="github-heading"
        eyebrow={dict.github.eyebrow}
        title={dict.github.sectionTitle}
        description={dict.github.description}
      />
      <ul className="grid gap-4 md:grid-cols-2">
        {repos.map((r) => (
          <Reveal key={r.name} as="li">
            <Card as="article" className="h-full">
              <div className="flex items-start justify-between gap-3">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-base font-semibold text-fg hover:text-accent-1"
                >
                  {r.name}
                  <ExternalLink className="size-3.5 text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
                {r.stars > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-fg-subtle">
                    <Star className="size-3" aria-hidden /> {r.stars}
                  </span>
                )}
              </div>
              {r.description && (
                <p className="mt-2 text-sm text-fg-muted">{r.description}</p>
              )}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-fg-subtle">
                {r.language && <Chip variant="ghost">{r.language}</Chip>}
                <time dateTime={r.pushedAt}>{r.pushedAt.slice(0, 10)}</time>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
      <div className="mt-6">
        <a
          href={resume.profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent-1 underline-offset-4 hover:underline"
        >
          {dict.github.viewAll} →
        </a>
      </div>
    </section>
  );
}
