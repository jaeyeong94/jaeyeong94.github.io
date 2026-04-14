import { ArrowUpRight } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import { resume, type Project } from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface Props {
  dict: Dictionary;
}

export function Projects({ dict }: Props) {
  const live = resume.projects.filter((p) => p.status === 'live');
  const others = resume.projects.filter((p) => p.status !== 'live');
  const hero = live.find((p) => p.featured) ?? live[0];
  const rest = live.filter((p) => p.id !== hero?.id);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full scroll-mt-24 px-6 py-24 md:px-10 md:py-32 lg:px-16 xl:px-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl italic text-fg-subtle">04</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.projects.eyebrow}
          </span>
        </div>
        <h2 id="projects-heading" className="mt-6 font-display text-4xl italic text-fg md:text-5xl">
          {dict.projects.sectionTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-fg-muted">{dict.projects.description}</p>
      </Reveal>

      {/* Public group */}
      <div className="mt-14">
        <Reveal>
          <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            ❖ {dict.projects.publicGroup}
          </p>
        </Reveal>

        {/* Featured — large editorial block */}
        {hero && (
          <Reveal>
            <FeaturedProject project={hero} dict={dict} />
          </Reveal>
        )}

        {/* Other live projects — inline rows */}
        {rest.length > 0 && (
          <ul className="mt-14 divide-y divide-border border-t border-border">
            {rest.map((p) => (
              <Reveal key={p.id} as="li">
                <LiveProjectRow project={p} dict={dict} />
              </Reveal>
            ))}
          </ul>
        )}
      </div>

      {/* Internal / discontinued */}
      {others.length > 0 && (
        <div className="mt-20">
          <Reveal>
            <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
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

function FeaturedProject({ project, dict }: { project: Project; dict: Dictionary }) {
  const item = dict.projects.items[project.id];
  const host = project.url ? new URL(project.url).host.replace(/^www\./, '') : null;

  return (
    <article className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto]">
      <div>
        <h3 className="font-display text-4xl italic text-fg md:text-6xl">{item.title}</h3>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-fg md:text-lg">{item.desc}</p>
        <p className="mt-5 font-mono text-xs text-fg-subtle">{project.stack.join(' · ')}</p>
      </div>
      {project.url && host && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-fit items-center gap-2 self-start rounded-full border border-border bg-bg-subtle/50 px-5 py-2.5 text-sm text-fg-muted transition-colors hover:border-fg hover:text-fg"
        >
          <span className="font-mono text-xs tracking-wide">{host}</span>
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </a>
      )}
    </article>
  );
}

function LiveProjectRow({ project, dict }: { project: Project; dict: Dictionary }) {
  const item = dict.projects.items[project.id];
  const host = project.url ? new URL(project.url).host.replace(/^www\./, '') : null;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 gap-3 py-6 md:grid-cols-[12rem_1fr_auto] md:items-center md:gap-6"
    >
      <h4 className="text-lg font-semibold text-fg transition-colors group-hover:text-accent-1 md:text-xl">
        {item.title}
      </h4>
      <p className="text-sm text-fg-muted md:text-base">{item.desc}</p>
      <span className="inline-flex items-center gap-1 font-mono text-xs text-fg-subtle md:justify-self-end">
        {host}
        <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </a>
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
      <p className="mt-4 font-mono text-xs text-fg-subtle">{project.stack.join(' · ')}</p>
    </article>
  );
}
