import { Github, Linkedin, MapPin, Mail, ExternalLink } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
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
      className="mx-auto max-w-content scroll-mt-24 px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="contact-heading"
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.sectionTitle}
      />
      <Reveal>
        <Card>
          <p className="mb-6 text-lg text-fg">{dict.contact.cta}</p>
          <address className="grid gap-4 not-italic md:grid-cols-2">
            <ContactRow icon={<MapPin className="size-4" aria-hidden />} label={dict.contact.locationLabel}>
              {dict.contact.locationValue}
            </ContactRow>
            <ContactRow icon={<Mail className="size-4" aria-hidden />} label={dict.contact.emailLabel}>
              <ObfuscatedEmail
                user={resume.profile.emailUser}
                domain={resume.profile.emailDomain}
                className="text-accent-1 underline-offset-4 hover:underline"
              />
            </ContactRow>
            <ContactRow icon={<Github className="size-4" aria-hidden />} label="GitHub">
              <ExternalLinkText href={resume.profile.github}>
                github.com/jaeyeong94
              </ExternalLinkText>
            </ContactRow>
            <ContactRow icon={<Linkedin className="size-4" aria-hidden />} label="LinkedIn">
              <ExternalLinkText href={resume.profile.linkedin}>
                linkedin.com/in/jae-yeong-you
              </ExternalLinkText>
            </ContactRow>
          </address>
        </Card>
      </Reveal>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-bg-subtle text-fg-muted">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-fg-subtle">{label}</p>
        <div className="mt-0.5 text-sm text-fg">{children}</div>
      </div>
    </div>
  );
}

function ExternalLinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-accent-1 underline-offset-4 hover:underline"
    >
      {children}
      <ExternalLink className="size-3" aria-hidden />
    </a>
  );
}
