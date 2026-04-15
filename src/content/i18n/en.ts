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
          "Designing the backend that decomposes a US insurance carrier's back-office workflows into LLM agents. Each step carries domain guardrails, human-in-the-loop checkpoints, and audit logs so automation and regulatory fit advance together (metric: pilot processing-time dashboard).",
          'Every agent call — input, output, intermediate state, cost, latency — is persisted as a structured event traced through OpenTelemetry, so failures can be audited, reproduced, and rolled back to satisfy compliance review.',
        ],
      },
      onto: {
        company: 'Ontoh Vision',
        bullets: [
          'Designed an end-to-end CCTV (RTSP) → on-site GPU inference → Cloudflare R2 pipeline. Local buffering (up to 24h) plus replay uploads target 0% data loss on network recovery (metric: Cloudflare Analytics, 7-day avg).',
          'Presigned-URL upload API + callback flow makes adding N more camera nodes a secret-provisioning task — 0 backend deploys per camera addition (metric: internal deploy log).',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          'Designed and operated a B2B trading performance reporting system. A separate reporting ledger, daily/monthly snapshot batches, and checksum-verified PDF pipeline deliver both accuracy and audit readiness (metric: batch success rate [CloudWatch]).',
          'Built a crypto arbitrage / market-making engine on Electron + Node.js + PostgreSQL + Redis + WebSocket. Separating the intake, strategy, and order event loops cut p95 strategy-execution latency vs. baseline (metric: internal latency log).',
        ],
      },
      dio: {
        company: 'DIO Freelance Platform',
        bullets: [
          '(Woo-Yeon-Hee) Modeled the matching, checkout, and auto-settlement flow as a state machine with event sourcing; landed in production in 8 weeks with zero critical-path defects at launch (metric: Sentry).',
          '(Linker) Combined Toss PG and Kakao AlimTalk via an outbox pattern with retry and DLQ handling, stabilizing payment failure to ~1% (metric: PG webhook logs, 30-day avg).',
          '(Momentir) Designed an LLM pipeline that summarizes client notes and extracts follow-up schedules. Structured outputs flow through an agent-approval UI so nothing slips past CRM; pilot agents (n=12) reported ~30% less daily ops effort (method: user interviews).',
          '(Hidden Gem) Built a PostGIS + Redis location / category feed backend; index and cache strategy keep the main feed p95 within target (metric: APM p95, 7-day avg).',
        ],
      },
      dssolve: {
        company: 'DS Solve, Inc.',
        bullets: [
          'Shipped the Randibot backend MVP — RCMS / K-Startup scraping ETL + multi-tenant (tenancyId = workspaceId) architecture so onboarding a new agency is a config change. Agency expansion needs zero code changes (metric: per-agency config management log).',
        ],
      },
      'flfi-exchange': {
        company: 'FLFI · Exchange Team',
        bullets: [
          'Built a crypto derivatives exchange on OKX Broker API. Separating the WebSocket market stream, REST order API, and Redis-backed position snapshots stabilized execution latency at API RTT (metric: internal latency log).',
        ],
      },
      miso: {
        company: 'Miso · Platform Team',
        bullets: [
          'Built an AWS Cognito authentication system. A Cognito Lambda Trigger migrated legacy users transparently on first login while OTP flows were introduced to the CX CRM; auth failure stays below 0.5% (metric: CloudWatch).',
        ],
      },
      'flfi-lead': {
        company: 'FLFI',
        bullets: [
          'Backend Tech Lead — re-cut the NestJS backend, Vue 3 frontend, and AWS infra along coherent domain boundaries. Led sprint-velocity and deploy-frequency improvements alongside code-review culture (metric: Jira cycle time, GitOps history).',
          'Built a zero-downtime blue-green pipeline on EKS with Karpenter, ArgoCD, and Helm — 0s deploy downtime and rollbacks under 30s (metric: ArgoCD rollout logs, full audit).',
          'Designed a Lambda@Edge + CloudFront image CDN; on-the-fly resize plus regional caching dropped image p95 dramatically vs. origin-direct baseline (metric: CloudWatch RUM, 7-day avg).',
          'Delivered an end-to-end Blockchain DApp in ethers.js — MetaMask login, tx signing, token balance lookups. A wallet-abstraction layer and a dedicated event indexer keep wallet-connection failures and on-chain sync lag stable (metric: frontend error log, indexer lag).',
        ],
      },
      aligo: {
        company: 'ALIGO',
        bullets: [
          'Operated a Vanilla PHP 7 business-messaging dispatch API and server. Per-customer queues and a weighted round-robin improved peak-hour fairness; retries use exponential backoff on isolated queues to spread load (metric: internal dispatch dashboard).',
          'Productized Kakao AlimTalk / FriendTalk Open APIs. A shared template and approval-status dashboard cut integration effort for downstream vendors and lightened CX back-office work.',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        bullets: [
          'Built a P2P lending solution as a Wordpress plugin, integrated with Paygate Seyfert fintech API (virtual accounts, investing, repayment, status). Transaction isolation and idempotent response storage sustained 0 financial-consistency incidents in operation (metric: daily reconciliation batch).',
        ],
      },
      ninefive: {
        company: 'Ninefive',
        bullets: [
          "Shipped product promo-page interactions with prefers-reduced-motion handling, paired with a KWAH accessibility checklist. Dwell-time and scroll-depth KPIs hit targets alongside accessibility compliance.",
        ],
      },
      '4depth': {
        company: '4depth',
        bullets: [
          'Delivered public-sector websites with WCAG accessibility and responsive markup. Semantic HTML, ARIA design, and a shift-left accessibility checklist carried multiple projects through accessibility certification.',
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
