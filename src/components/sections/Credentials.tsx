import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

type EducationId = keyof Dictionary['credentials']['education'];
type CertificationId = keyof Dictionary['credentials']['certifications'];

export function Credentials({ dict }: Props) {
  const c = dict.credentials;
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="section-frame relative scroll-mt-24 py-12 md:py-16"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {c.eyebrow}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </Reveal>

      <h2 id="credentials-heading" className="sr-only">
        {c.sectionTitle}
      </h2>

      <Reveal>
        <div className="mt-8 grid grid-cols-1 gap-10 text-xs md:grid-cols-2 md:gap-16 md:text-sm">
          <div>
            <p className="mb-3 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-fg-subtle">
              {c.educationTitle}
            </p>
            <ul className="space-y-3">
              {resume.education.map((edu) => {
                const info = c.education[edu.id as EducationId];
                if (!info) return null;
                const endLabel = edu.end === 'present' ? dict.common.present : edu.end.slice(0, 4);
                return (
                  <li key={edu.id}>
                    <p className="text-fg">{info.school}</p>
                    <p className="text-fg-subtle">
                      {info.degree}{' '}
                      <span className="font-mono tabular-nums">
                        · {edu.start.slice(0, 4)} – {endLabel}
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-fg-subtle">
              {c.certificationsTitle}
            </p>
            <ul className="space-y-2">
              {resume.certifications.map((cert) => {
                const name = c.certifications[cert.id as CertificationId];
                if (!name) return null;
                return (
                  <li key={cert.id} className="flex items-baseline justify-between gap-4">
                    <span className="text-fg">{name}</span>
                    <span className="font-mono text-[0.65rem] tabular-nums text-fg-subtle">
                      {cert.date}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
