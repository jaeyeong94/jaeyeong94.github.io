import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Globe } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import { resume, totalCareerMonths, yearsFromMonths } from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: Props) {
  const availability = resume.availability;
  const years = yearsFromMonths(totalCareerMonths(resume.profile.careerStart));
  const proofItems = [
    {
      label: dict.about.stat1Label,
      value: `${years} ${dict.about.stat1Suffix}`,
    },
    {
      label: dict.about.stat2Label,
      value: dict.about.stat2Value,
    },
    {
      label: dict.about.stat3Label,
      value: dict.about.stat3Value,
    },
  ];
  const printContacts = [
    {
      label: `${resume.profile.emailUser}@${resume.profile.emailDomain}`,
      href: `mailto:${resume.profile.emailUser}@${resume.profile.emailDomain}`,
    },
    {
      label: dict.contact.locationValue,
    },
    {
      label: formatContactUrl(resume.profile.freelanceSite),
      href: resume.profile.freelanceSite,
    },
    {
      label: formatContactUrl(resume.profile.github),
      href: resume.profile.github,
    },
    {
      label: formatContactUrl(resume.profile.linkedin),
      href: resume.profile.linkedin,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden">
      <div className="section-frame pb-16 pt-24 md:pb-20 md:pt-28">
        {/* Masthead rule */}
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {dict.hero.mastheadLabel} · {new Date().getFullYear()}
            </p>
            <p className="hidden text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle md:block">
              {dict.contact.locationValue}
            </p>
          </div>
        </Reveal>

        {/* Name block */}
        <Reveal>
          <div className="mt-10 md:mt-14">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-fg-subtle">
              {dict.hero.altName}
            </p>
            <h1 className="leading-[1] tracking-tight">
              <span className="name-shimmer block text-5xl font-bold md:text-6xl lg:text-7xl">
                {dict.hero.name}
              </span>
              <span className="mt-2 block text-2xl font-medium text-fg-muted md:text-3xl lg:text-4xl">
                {dict.hero.altName}
              </span>
            </h1>
          </div>
        </Reveal>

        {/* Availability — editorial byline */}
        <Reveal>
          <div className="mt-6 flex items-center gap-3 text-sm" role="status">
            <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.35em] text-accent-1">
              {dict.hero.availabilityBadge[availability]}
            </span>
            <span aria-hidden className="h-px w-8 bg-accent-1/40" />
            <span className="text-fg">{dict.hero.availability[availability]}</span>
          </div>
        </Reveal>

        {/* Role + tagline */}
        <Reveal>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg md:mt-8 md:text-lg">
            <span className="block">{dict.hero.role}</span>
            <span className="mt-1.5 block text-fg-muted">{dict.hero.tagline}</span>
          </p>
        </Reveal>

        <div className="resume-print-only mt-6 border-y border-border py-3">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.68rem] text-fg">
            {printContacts.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} className="underline-offset-2">
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="mt-10 border-y border-border py-6 md:mt-12">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
                {dict.hero.proofLabel}
              </p>
              <dl className="grid flex-1 gap-4 sm:grid-cols-3">
                {proofItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-surface px-4 py-4">
                    <dt className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-fg-subtle">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-base font-semibold text-fg md:text-lg">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>

        {/* Now */}
        <Reveal>
          <div className="resume-print-hidden mt-12 border-t border-border pt-8 md:mt-14">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {dict.hero.nowLabel}
            </p>
            <ul className="mt-3 max-w-3xl space-y-2">
              {dict.hero.nowItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-1"
                  />
                  <span className="text-lg font-medium leading-snug text-fg md:text-xl">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Keywords */}
        <Reveal>
          <div className="resume-print-hidden mt-10 flex flex-col items-start gap-3 border-t border-border pt-6 md:flex-row md:items-center md:gap-6">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {dict.hero.keywordsLabel}
            </p>
            <ul role="list" className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-fg-muted">
              {resume.keywords.map((k, i) => (
                <li key={k} className="inline-flex items-center gap-3">
                  <span className="font-mono">{k}</span>
                  {i < resume.keywords.length - 1 && (
                    <span aria-hidden className="text-fg-subtle">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="resume-print-hidden mt-10 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}/#projects`}
              className={cn(
                'group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg',
                'transition-transform hover:-translate-y-0.5',
              )}
            >
              {dict.hero.ctaProjects}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href={`/${locale}/#contact`}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg',
                'transition-colors hover:border-accent-1 hover:text-accent-1',
              )}
            >
              {dict.hero.ctaContact}
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <div className="resume-print-hidden mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fg-muted">
            <QuickLink href={resume.profile.freelanceSite} label="heyted.dev">
              <Globe className="size-4" aria-hidden />
            </QuickLink>
            <QuickLink href={resume.profile.github} label="GitHub">
              <Github className="size-4" aria-hidden />
            </QuickLink>
            <QuickLink href={resume.profile.linkedin} label="LinkedIn">
              <Linkedin className="size-4" aria-hidden />
            </QuickLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function formatContactUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function QuickLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-sm text-fg-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
    >
      {children}
      <span>{label}</span>
      <ArrowUpRight className="size-3.5" aria-hidden />
    </a>
  );
}
