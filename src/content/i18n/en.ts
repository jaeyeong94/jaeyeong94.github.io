import type { Dictionary } from './ko';

const dict: Dictionary = {
  meta: {
    title: 'Ted Ryu — Full-stack Developer',
    description:
      'A full-stack developer with 11+ years shipping 0→1 products across fintech, blockchain, SaaS, and AI.',
  },
  nav: {
    about: 'About',
    manifesto: 'Manifesto',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    writing: 'Writing',
    contact: 'Contact',
  },
  common: {
    present: 'Present',
    years: 'yr',
    months: 'mo',
    showOlder: 'Show earlier experience',
    hideOlder: 'Hide',
    comingSoon: 'Coming soon',
    readMore: 'Read more',
    theme: 'Theme',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSystem: 'System',
  },
  employment: {
    fulltime: 'Full-time',
    freelance: 'Freelance',
    contract: 'Contract',
  },
  hero: {
    name: 'Ted Ryu',
    altName: 'Jaeyeong You',
    role: 'Full-stack Developer · Backend-focused',
    tagline: 'I build products that drive business growth.',
    ctaContact: 'Get in touch',
    nowLabel: 'Now',
    nowValue: 'Building a Crypto Market Making system and a B2B investment management dashboard.',
    keywordsLabel: 'Currently focused on',
  },
  about: {
    sectionTitle: 'About',
    eyebrow: 'About',
    impact:
      'Full-stack developer shipping and operating 0→1 products across fintech, blockchain, SaaS, and AI. Strong in backend architecture and AWS/Kubernetes infrastructure, with recent focus on LLM · RAG · Web3 applications.',
    stat1Label: 'Years of experience',
    stat1Suffix: 'yr+',
    stat2Label: '0→1 products',
    stat2Value: '6+',
    stat3Label: 'Production infra',
    stat3Value: 'AWS · K8s · Terraform',
    philosophyTitle: 'How I work',
    philosophy1:
      'I believe great engineers understand user needs, UX, and business goals — and solve from there. I value metric-driven decisions and fast feedback loops, with a strong investment in resilient cloud infrastructure and SDLC.',
    philosophy2:
      'I look for teams that embrace diverse perspectives and open new markets with innovative solutions. Rapid decisions and disciplined execution are, to me, the keys to products that truly move the market.',
  },
  manifesto: {
    sectionTitle: 'Building in the AI era',
    eyebrow: 'Manifesto',
    thesis:
      'AI is the tool; a human directs. You can only ask what you understand — and only verify what you know.',
    mindsetTitle: 'Mindset',
    actionsTitle: 'Actions',
    mindset: [
      {
        key: 'agentic',
        title: 'Agentic engineering',
        note:
          'I architect the infrastructure and guardrails that AI agents run inside. Architecture, division of labor, and safety controls remain a human responsibility.',
      },
      {
        key: 'verify',
        title: 'Knowledge as the quality gate',
        note:
          'Eleven years of production and domain knowledge become the verification layer for AI output. You can only ask what you know — and only validate what you understand.',
      },
      {
        key: 'learn',
        title: 'Compound learning',
        note:
          'New stacks, new domains, new problem spaces — absorbed continuously. In the AI era, relentless self-education is the prerequisite, not a bonus.',
      },
    ],
    actions: [
      'Shipping services and tools that cost/time constraints had previously blocked.',
      'Contributing to open source, focused on problems over polish.',
      'Experimenting with business, leadership, and collaboration patterns fit for this era.',
      'Prototyping software that answers those questions.',
    ],
  },
  experience: {
    sectionTitle: 'Experience',
    eyebrow: 'Experience',
    items: {
      masblue: {
        company: 'Masblue (masblue.studio)',
        bullets: [
          'Designing and building the backend and AI-agent orchestration layer for a US-market insurance SaaS.',
          'Decomposing insurance workflows into LLM-driven agents with human-in-the-loop checkpoints and full audit logging.',
        ],
      },
      onto: {
        company: 'Ontoh Vision',
        bullets: [
          'Designed an end-to-end pipeline: CCTV (RTSP) → on-site GPU inference → Cloudflare R2. Implemented local-queue buffering (up to 24h) so upload recovers gracefully after network loss (metric: Cloudflare Analytics upload success rate).',
          'Shipped a presigned-URL upload API and REST surface that scales horizontally across N cameras without backend changes (benchmark: planned with [k6]).',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          'Designed and operated a B2B client-facing trading performance reporting system — daily aggregated returns delivered through a portal and PDF reports.',
          'Built a crypto arbitrage / market-making engine on Electron + Node.js + PostgreSQL + Redis. Reduced order-book strategy execution latency vs. prior baseline (metric: internal p95 latency logs).',
        ],
      },
      dio: {
        company: 'DIO Freelance Platform',
        bullets: [
          '(Woo-Yeon-Hee) Shipped the backend MVP for a location-based meeting app — matching logic plus auto-checkout/settlement — production-ready within 8 weeks.',
          '(Linker) Weekly 1:1 matching full-stack MVP — stabilized payment failure rate to ~1% via Toss PG and Kakao AlimTalk integration.',
          "(Momentir) CRM for insurance agents — LLM-based client-note summarization and auto-scheduling. Pilot agents reported ~30% less daily ops effort (method: pilot interviews, n=12).",
          '(Hidden Gem) Location-based social feed and collection-analytics backend for an iOS/Android collector community app.',
        ],
      },
      dssolve: {
        company: 'DS Solve, Inc.',
        bullets: [
          'Shipped the Randibot backend MVP — RCMS / K-Startup scraping ETL + a multi-tenant architecture (tenancyId = workspaceId) so onboarding a new agency is a config change.',
        ],
      },
      'flfi-exchange': {
        company: 'FLFI · Exchange Team',
        bullets: [
          'Built a crypto derivatives exchange on top of OKX Broker API — market streaming, order execution, and position management modules.',
        ],
      },
      miso: {
        company: 'Miso · Platform Team',
        bullets: [
          'Built an AWS Cognito–based auth system and executed a zero-downtime migration of legacy users. Rolled OTP into the CX CRM (metric: CloudWatch auth-failure rate < 0.5%).',
        ],
      },
      'flfi-lead': {
        company: 'FLFI',
        bullets: [
          'Backend Tech Lead — architected the NestJS backend, Vue 3 frontend, and AWS infra end-to-end, while leading the dev team (sprint throughput and code-review culture).',
          'Delivered a zero-downtime blue-green pipeline on EKS with Karpenter, ArgoCD, and Helm — 0s deploy downtime; rollbacks under 30s (metric: ArgoCD rollout logs).',
          'Shipped a Lambda@Edge + CloudFront image CDN (upload, caching, on-the-fly resize). Image p95 dropped significantly vs. origin-direct baseline (metric: CloudWatch RUM, 7-day avg).',
          'Delivered a Blockchain DApp with web3.js / Ethers.js — MetaMask login, tx signing, token balance lookups — integrated with on-chain event emission from deployed contracts.',
        ],
      },
      aligo: {
        company: 'ALIGO',
        bullets: [
          'Operated a Vanilla PHP 7 messaging dispatch server/API — improved peak-hour throughput and retry-queue fairness (metric: internal dispatch dashboard).',
          'Productized Kakao AlimTalk / FriendTalk Open API features, reducing integration effort for downstream vendors and CX tooling.',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        bullets: [
          'Built a P2P lending solution as a Wordpress plugin, integrated with Paygate Seyfert fintech API (virtual accounts, investing, repayment, status).',
        ],
      },
      ninefive: {
        company: 'Ninefive',
        bullets: ['Built promo page interactions and accessibility (KWAH) compliant frontend.'],
      },
      '4depth': {
        company: '4depth',
        bullets: [
          'Delivered public-sector websites with WCAG accessibility and responsive markup.',
        ],
      },
    },
  },
  projects: {
    sectionTitle: 'Projects',
    eyebrow: 'Selected Work',
    description: 'A curated mix of shipped public products and closed or internal work.',
    viewSite: 'Open site',
    publicGroup: 'Live products',
    internalGroup: 'Closed & internal work',
    status: {
      live: 'Live',
      discontinued: 'Shut down',
      internal: 'Internal',
    },
    items: {
      randibot: {
        title: 'Randibot',
        desc:
          'RCMS · K-Startup research budget management SaaS. ETL pipeline and multi-tenant backend for public-funded project operations.',
      },
      momentir: {
        title: 'Momentir',
        desc:
          'AI-powered CRM for insurance agents. Uses LLMs to summarize client notes and auto-schedule follow-ups, saving operational effort.',
      },
      nursevillage: {
        title: 'Nursevillage',
        desc:
          'iOS/Android community app for nurses — location-based social feed with collection analytics dashboards.',
      },
      'flfi-exchange': {
        title: 'FLFI Derivatives Exchange',
        desc:
          'Crypto derivatives exchange on OKX Broker API — real-time streaming, matching, and position management.',
      },
      'flfi-lending': {
        title: 'FLFI Fintech Platform',
        desc:
          'NestJS + Vue 3 + EKS end-to-end architecture, blue-green delivery, image CDN, and Web3 DApp.',
      },
      'ontoh-vision': {
        title: 'Ontoh Vision',
        desc: 'CCTV (RTSP) → on-site AI event detection → Cloudflare R2 workflow.',
      },
      'rootstone-trading': {
        title: 'Rootstone Trading',
        desc:
          'Electron desktop system for crypto arbitrage and market-making portfolios.',
      },
    },
  },
  skills: {
    sectionTitle: 'Skills',
    eyebrow: 'Craft',
    description:
      "Split between 'signature stacks' I've shipped production on for years, and secondary tools picked up where needed.",
    signaturesTitle: 'Signature stacks',
    othersTitle: 'Other tools I reach for',
    signatures: [
      {
        key: 'backend-ts',
        title: 'Node.js · NestJS · TypeScript',
        note: 'Primary stack for SaaS/fintech backends — REST, event-driven, multi-tenant.',
        years: 11,
      },
      {
        key: 'cloud',
        title: 'AWS · Kubernetes · Terraform',
        note: 'EKS + Karpenter + ArgoCD zero-downtime delivery; IaC-first reproducible infra.',
        years: 6,
      },
      {
        key: 'data',
        title: 'PostgreSQL · Redis · RabbitMQ',
        note: 'Schema design, indexing, caching, and queues to separate read/write paths.',
        years: 8,
      },
      {
        key: 'ai',
        title: 'LLM · RAG · Vector DB',
        note: 'OpenAI API + LangChain + Pinecone for RAG and agent workflows.',
        years: 2,
      },
      {
        key: 'blockchain',
        title: 'web3.js · Solidity · Ethers.js',
        note: 'DApp frontends with on-chain events; MetaMask login and tx signing.',
        years: 3,
      },
    ],
    others: {
      backend: 'Express · Python (FastAPI) · Go · Spring Boot · PHP',
      frontend: 'React · Next.js · Vue.js · Nuxt · Svelte · React Native · Flutter',
      data: 'MySQL · MongoDB · Elasticsearch · InfluxDB',
      infra: 'Docker · GitHub Actions · Nginx',
    },
    othersLabels: {
      backend: 'Backend',
      frontend: 'Frontend',
      data: 'Data',
      infra: 'Infra',
    },
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      db: 'Database',
      infra: 'Infra & DevOps',
      ai: 'AI / LLM',
      blockchain: 'Blockchain',
    },
  },
  writing: {
    sectionTitle: 'Writing',
    eyebrow: 'Writing',
    empty: 'First posts are being drafted.',
    items: {
      'this-site': {
        title: 'Building this site (coming soon)',
        summary:
          'A retrospective on designing a Next.js · 4-locale · GitHub Pages résumé from scratch.',
        date: '2026-04',
      },
      'multi-tenant-saas': {
        title: 'Notes on 0→1 multi-tenant SaaS (coming soon)',
        summary:
          'tenancyId = workspaceId, Postgres RLS considerations, and wiring Stripe subscriptions.',
        date: '2026-05',
      },
    },
  },
  reading: {
    sectionTitle: 'Reading & Tools',
    eyebrow: 'Reading · Tools',
    booksTitle: 'Currently reading',
    toolsTitle: 'Daily tools',
  },
  interests: {
    sectionTitle: 'Interests',
    eyebrow: 'Interests',
    items: {
      infra: {
        title: 'Infrastructure reliability',
        desc: 'SDLC · CI/CD · zero-downtime delivery · observability.',
      },
      ai: {
        title: 'AI / LLM applications',
        desc: 'RAG pipelines, vector DBs, and agent workflows.',
      },
      blockchain: {
        title: 'Blockchain',
        desc: 'DApps, smart contracts, and Web3 frontends.',
      },
      network: {
        title: 'Networking & security',
        desc: 'Real-time (WebSocket / RTSP), authn/authz design.',
      },
    },
  },
  contact: {
    sectionTitle: 'Contact',
    eyebrow: 'Contact',
    headline: "Let's build the next thing together.",
    cta: 'Open to new opportunities and collaborations. Reach out on any channel below.',
    locationLabel: 'Location',
    locationValue: 'Seoul, Korea',
    emailLabel: 'Email',
    freelanceLabel: 'Freelance profile',
  },
  footer: {
    updated: 'Last updated',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
