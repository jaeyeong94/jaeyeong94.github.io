import type { ComponentType } from 'react';
import type { Locale } from '@/lib/i18n';
import type { WritingId } from '@/content/resume';
import ThisSite, { meta as thisSiteMeta } from '@/content/writing/posts/this-site';
import MultiTenantSaas, {
  meta as multiTenantMeta,
} from '@/content/writing/posts/multi-tenant-saas';
import AgentOrchestration, {
  meta as agentMeta,
} from '@/content/writing/posts/agent-orchestration';
import BlueGreen, { meta as blueGreenMeta } from '@/content/writing/posts/blue-green';

export interface WritingPostMeta {
  slug: WritingId;
  date: string;
  readTimeMin: number;
}

export interface WritingPostDefinition {
  Component: ComponentType<{ locale: Locale }>;
  meta: WritingPostMeta;
}

export const writingPosts: Record<WritingId, WritingPostDefinition> = {
  'this-site': { Component: ThisSite, meta: thisSiteMeta as WritingPostMeta },
  'multi-tenant-saas': {
    Component: MultiTenantSaas,
    meta: multiTenantMeta as WritingPostMeta,
  },
  'agent-orchestration': {
    Component: AgentOrchestration,
    meta: agentMeta as WritingPostMeta,
  },
  'blue-green': { Component: BlueGreen, meta: blueGreenMeta as WritingPostMeta },
};

export function isWritingSlug(slug: string): slug is WritingId {
  return slug in writingPosts;
}
