import { Github, Linkedin, Globe, ArrowUpRight } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { ObfuscatedEmail } from '@/components/ui/ObfuscatedEmail';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Contact({ dict }: Props) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-frame section-pad relative scroll-mt-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-fg-subtle">09</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.contact.eyebrow}
          </span>
        </div>
      </Reveal>

      <h2 id="contact-heading" className="sr-only">
        {dict.contact.sectionTitle}
      </h2>

      <Reveal>
        <p className="mt-10 max-w-3xl text-2xl font-bold tracking-tight text-fg md:text-4xl">
          {dict.contact.headline}
        </p>
        <p className="mt-4 max-w-2xl text-base text-fg-muted md:text-lg">{dict.contact.cta}</p>
      </Reveal>

      <Reveal>
        <address className="mt-12 grid grid-cols-1 gap-y-0 not-italic md:grid-cols-2">
          <ContactLine label={dict.contact.emailLabel}>
            <ObfuscatedEmail
              user={resume.profile.emailUser}
              domain={resume.profile.emailDomain}
              revealLabel={dict.common.revealEmail}
              className="group inline-flex items-center gap-1 rounded-sm text-fg transition-colors hover:text-accent-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            />
          </ContactLine>
          <ContactLine label={dict.contact.locationLabel}>
            <span className="text-fg">{dict.contact.locationValue}</span>
          </ContactLine>
          <ContactLine label={dict.contact.freelanceLabel}>
            <a
              href={resume.profile.freelanceSite}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 rounded-sm text-fg transition-colors hover:text-accent-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              heyted.dev
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </ContactLine>
          <ContactLine label="GitHub">
            <a
              href={resume.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 rounded-sm text-fg transition-colors hover:text-accent-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              github.com/jaeyeong94
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </ContactLine>
          <ContactLine label="LinkedIn">
            <a
              href={resume.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 rounded-sm text-fg transition-colors hover:text-accent-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              linkedin.com/in/jae-yeong-you
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </ContactLine>
        </address>
      </Reveal>

      <Reveal>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <IconLink href={resume.profile.freelanceSite} label="heyted.dev">
            <Globe className="size-4" aria-hidden />
          </IconLink>
          <IconLink href={resume.profile.github} label="GitHub">
            <Github className="size-4" aria-hidden />
          </IconLink>
          <IconLink href={resume.profile.linkedin} label="LinkedIn">
            <Linkedin className="size-4" aria-hidden />
          </IconLink>
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-8 text-xs text-fg-subtle">≀ {dict.contact.testimonials}</p>
      </Reveal>
    </section>
  );
}

function ContactLine({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-border py-4">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-fg-subtle">{label}</p>
      <div className="text-sm md:text-base">{children}</div>
    </div>
  );
}

function IconLink({
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
      aria-label={label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-fg hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
    >
      {children}
    </a>
  );
}
