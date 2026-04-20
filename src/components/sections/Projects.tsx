import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import { hasProjectCaseStudy } from '@/content/projects';
import { resume, type Project } from '@/content/resume';
import type { Locale } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function Projects({ dict, locale }: Props) {
  const live = resume.projects.filter((p) => p.status === 'live');
  const others = resume.projects.filter((p) => p.status !== 'live');

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-frame section-pad relative scroll-mt-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-fg-subtle">03</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.projects.eyebrow}
          </span>
        </div>
        <h2
          id="projects-heading"
          className="mt-5 text-3xl font-bold tracking-tight text-fg md:text-4xl"
        >
          {dict.projects.sectionTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-fg-muted md:text-base">
          {dict.projects.description}
        </p>
      </Reveal>

      {/* Live — equal grid */}
      <div className="mt-12">
        <Reveal>
          <div className="mb-5">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              ❖ {dict.projects.publicGroup}
            </p>
            <p className="mt-1.5 text-sm text-fg-muted">
              {dict.projects.publicGroupDesc}
            </p>
          </div>
        </Reveal>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {live.map((p) => (
            <Reveal key={p.id} as="li">
              <LiveProjectCard project={p} dict={dict} locale={locale} />
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Internal / discontinued */}
      {others.length > 0 && (
        <div className="mt-16">
          <Reveal>
            <p className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              ✕ {dict.projects.internalGroup}
            </p>
          </Reveal>
          <ul className="grid gap-4 md:grid-cols-2">
            {others.map((p) => (
              <Reveal key={p.id} as="li">
                <InternalProjectCard project={p} dict={dict} />
              </Reveal>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function LiveProjectCard({
  project,
  dict,
  locale,
}: {
  project: Project;
  dict: Dictionary;
  locale: Locale;
}) {
  const item = dict.projects.items[project.id];
  const host = project.url ? new URL(project.url).host.replace(/^www\./, '') : null;
  const caseStudyHref = hasProjectCaseStudy(project.id) ? `/${locale}/projects/${project.id}/` : null;

  return (
    <article
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all',
        'hover:-translate-y-0.5 hover:border-accent-1/40 hover:shadow-md',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        {caseStudyHref ? (
          <Link
            href={caseStudyHref}
            className="text-lg font-semibold text-fg transition-colors hover:text-accent-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
          >
            {item.title}
          </Link>
        ) : (
          <h3 className="text-lg font-semibold text-fg">{item.title}</h3>
        )}
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.title} ${dict.projects.viewSite}`}
            className="rounded-sm text-fg-subtle transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
          >
            <ArrowUpRight className="size-4 shrink-0" aria-hidden />
          </a>
        ) : null}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{item.desc}</p>
      <p className="mt-4 text-sm font-medium leading-relaxed text-fg">{item.proof}</p>
      <p className="mt-5 font-mono text-xs text-fg-subtle">{project.stack.join(' · ')}</p>
      {host && (
        <p className="mt-4 border-t border-border pt-3 font-mono text-xs text-fg-subtle">
          {host}
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {caseStudyHref ? (
          <Link
            href={caseStudyHref}
            className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs text-fg transition-colors hover:border-accent-1 hover:text-accent-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
          >
            {dict.projects.viewCaseStudy}
          </Link>
        ) : null}
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs text-fg transition-colors hover:border-accent-1 hover:text-accent-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
          >
            {dict.projects.viewSite}
          </a>
        ) : null}
      </div>
    </article>
  );
}

function InternalProjectCard({ project, dict }: { project: Project; dict: Dictionary }) {
  const item = dict.projects.items[project.id];
  const statusLabel = dict.projects.status[project.status];
  return (
    <article
      className={cn(
        'h-full rounded-2xl border border-dashed border-border bg-bg-subtle/40 p-6',
        'transition-colors hover:border-border hover:bg-bg-subtle/70',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-base font-semibold text-fg-muted">{item.title}</h4>
        <span className="whitespace-nowrap rounded-full border border-border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-fg-subtle">
          {statusLabel}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.desc}</p>
      <p className="mt-4 text-sm font-medium leading-relaxed text-fg">{item.proof}</p>
      <p className="mt-4 font-mono text-xs text-fg-subtle">{project.stack.join(' · ')}</p>
    </article>
  );
}
