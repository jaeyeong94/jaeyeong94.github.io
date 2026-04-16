import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locales, isLocale } from '@/lib/i18n';
import { resume } from '@/content/resume';
import ThisSite, { meta as thisSiteMeta } from '@/content/writing/posts/this-site';
import MultiTenantSaas, {
  meta as multiTenantMeta,
} from '@/content/writing/posts/multi-tenant-saas';
import AgentOrchestration, {
  meta as agentMeta,
} from '@/content/writing/posts/agent-orchestration';
import BlueGreen, { meta as blueGreenMeta } from '@/content/writing/posts/blue-green';

const posts = {
  'this-site': { Component: ThisSite, meta: thisSiteMeta },
  'multi-tenant-saas': { Component: MultiTenantSaas, meta: multiTenantMeta },
  'agent-orchestration': { Component: AgentOrchestration, meta: agentMeta },
  'blue-green': { Component: BlueGreen, meta: blueGreenMeta },
} as const;

type Slug = keyof typeof posts;

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const slug of resume.writingIds) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !(slug in posts)) return {};
  return {
    alternates: {
      canonical: `/${locale}/writing/${slug}/`,
    },
  };
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!(slug in posts)) notFound();
  const { Component } = posts[slug as Slug];
  return (
    <main id="main-content">
      <Component locale={locale} />
    </main>
  );
}
