import { resume } from '@/content/resume';

export function JsonLdPerson() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jaeyeong You',
    alternateName: ['유재영', 'Ted Ryu'],
    jobTitle: 'Full-stack Developer',
    url: 'https://jaeyeong94.github.io',
    sameAs: [resume.profile.github, resume.profile.linkedin, resume.profile.dio],
    knowsAbout: resume.skills.flatMap((c) => c.items),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
