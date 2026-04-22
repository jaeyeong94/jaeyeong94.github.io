import type { Dictionary } from './ko';

const dict: Dictionary = {
  meta: {
    brandName: 'Ted Ryu',
    title: 'Ted Ryu — Full-stack Developer',
    siteName: 'Ted Ryu · Portfolio',
    description:
      'Full-stack developer designing and operating 0→1 SaaS, AI orchestration, and fintech systems with strengths in backend architecture and AWS/Kubernetes infrastructure.',
  },
  nav: {
    about: 'About',
    manifesto: 'Approach',
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
    skipToContent: 'Skip to content',
    redirecting: 'Redirecting...',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryNavigation: 'Primary navigation',
    mobileNavigation: 'Mobile navigation',
    notFoundTitle: 'Page not found',
    notFoundDescription: 'The page you requested does not exist or has moved.',
    backHome: 'Go home',
    revealEmail: 'Reveal email address',
    printPage: 'Print / PDF',
    sameTeamLabel: 'Same team · continued with the same CEO/CTO',
    commandPaletteOpen: 'Open section search',
    commandPaletteTitle: 'Jump to section',
    commandPaletteSearch: 'Search sections...',
    commandPaletteEmpty: 'No matching sections',
    commandPaletteHeading: 'Navigate',
  },
  employment: {
    fulltime: 'Full-time',
    freelance: 'Freelance',
    contract: 'Contract',
  },
  hero: {
    name: 'Ted Ryu',
    altName: 'Jaeyeong You',
    role: 'Full-stack developer building 0→1 SaaS, AI orchestration, and fintech systems',
    mastheadLabel: 'Portfolio · Vol. 01',
    tagline: 'I take 0→1 products from first architecture to production-grade operations.',
    proofLabel: 'Quick proof',
    ctaProjects: 'View selected work',
    ctaContact: 'Get in touch',
    nowLabel: 'Now',
    nowItems: [
      'Crypto market-making system and B2B investment dashboard',
      'AI orchestration backend for US insurance carriers',
    ],
    keywordsLabel: 'Currently focused on',
    availability: {
      open: 'Freelance available · Open to full-time roles',
      limited: 'Selective engagements only',
      closed: 'Not taking new inquiries',
    },
    availabilityBadge: {
      open: 'Open',
      limited: 'Limited',
      closed: 'Closed',
    },
  },
  about: {
    sectionTitle: 'About',
    eyebrow: 'About',
    impact:
      'I have spent most of my career turning rough product ideas into systems people can actually use and teams can keep operating. Across fintech, blockchain, SaaS, and AI, the pattern has been the same: reduce complexity, shorten the distance from prototype to production, and leave the system steadier than I found it.',
    stat1Label: 'Years of experience',
    stat1Suffix: 'yr+',
    stat2Label: '0→1 products',
    stat2Value: '6+',
    stat3Label: 'Production infra',
    stat3Value: 'AWS · K8s · Terraform',
    philosophyTitle: 'What I care about',
    philosophy1:
      'The resume carries the numbers, but I care more about the structure underneath them. I keep returning to release pipelines that can be rolled back without panic, payment and settlement flows that stay consistent under failure, and operator-facing tools that still leave room for human judgment when the stakes are real.',
    philosophy2:
      'LinkedIn and a resume usually preserve titles and outcomes. GitHub and writing preserve how you think. I try to leave both behind: evidence that something shipped, and a clear trail of why the system took this shape. New tools matter, but clear ownership, observability, and boring reliability matter longer.',
    philosophy3:
      'Recently that has meant wiring LLMs and agents into product and back-office workflows. I like automation, but I do not romanticize it. I prefer to be explicit about what the system can safely repeat and what a person still needs to decide. More than shipping fast, I care about leaving a system that still runs well after the excitement wears off.',
    domainsTitle: 'Domains',
    domains: {
      fullstack: 'Fullstack / Backend',
      fintech: 'Fintech',
      blockchain: 'Blockchain',
      saas: 'SaaS',
      ai: 'AI / LLM',
    },
    outcomesTitle: 'Selected outcomes',
    outcomes: [
      {
        label: 'Deployment reliability',
        value: '500+ zero-downtime deploys',
        note:
          'Built EKS + ArgoCD blue-green pipelines with 0s deploy downtime and rollbacks under 30s.',
      },
      {
        label: 'Production scale',
        value: '5M messages/day',
        note:
          'Ran business-messaging APIs at a 3,000 RPS peak, stabilizing queue fairness and retry behavior.',
      },
      {
        label: 'Ops efficiency',
        value: '20 min → 4 min',
        note:
          'Cut pilot insurance back-office handling time by about 80% through LLM orchestration.',
      },
    ],
    yearsShort: 'yr+',
  },
  manifesto: {
    sectionTitle: 'Working with AI',
    eyebrow: 'Approach',
    thesis:
      'I move fast with AI, but I keep architecture, guardrails, and final verification in human hands.',
    mindsetTitle: 'Principles',
    actionsTitle: 'In practice',
    mindset: [
      {
        key: 'structure',
        title: 'I design the structure first',
        note:
          'For agentic systems and automation, architecture, guardrails, and auditability come before prompt iteration.',
      },
      {
        key: 'verify',
        title: 'I verify through domain knowledge',
        note:
          'The more I understand the domain, the better I can ask, review, and reject low-quality output.',
      },
    ],
    actions: [
      'I turn repetitive work and ops bottlenecks into automatable workflows.',
      'I prototype small, then let metrics and user feedback decide the next move.',
      'I adopt new tools quickly, but I hold production quality to a stricter bar.',
    ],
    lookingForTitle: 'What I look for',
    lookingFor: [
      'An engineering culture that welcomes diverse perspectives',
      'An organization that respects rapid decisions and execution',
      'Metric-driven feedback loops',
      'Products that open new markets for the AI era',
    ],
  },
  experience: {
    sectionTitle: 'Experience',
    eyebrow: 'Experience',
    timelineLabel: 'Career Timeline',
    timelineAriaLabel: 'Career timeline',
    earlyCareerLabel: 'Early career · {n} roles',
    items: {
      masblue: {
        company: 'Masblue (masblue.studio)',
        summary: 'Reframed insurance back-office work into an agent orchestration flow',
        metric: '50 pilot cases · 20 min → 4 min',
        bullets: [
          "Designing the backend that decomposes a US insurance carrier's back-office workflows into LLM agents. Each step carries domain guardrails, human-in-the-loop checkpoints, and audit logs so automation and regulatory fit advance together. Across 50 pilot cases, average handling time dropped from 20 min to 4 min (~80% reduction) (metric: pilot processing-time dashboard).",
          'Every agent call — input, output, intermediate state, cost, latency — is persisted as a structured event traced through OpenTelemetry, so failures can be audited, reproduced, and rolled back to satisfy compliance review.',
        ],
      },
      onto: {
        company: 'Ontoh Vision',
        summary: 'Designed the vision pipeline from on-site inference to cloud delivery',
        metric: '99.7% upload success · 8 camera nodes',
        bullets: [
          'Designed an end-to-end CCTV (RTSP) → on-site GPU inference → Cloudflare R2 pipeline. Local buffering (up to 24h) plus replay uploads hold upload success at 99.7% on network recovery (metric: Cloudflare Analytics, 7-day avg).',
          'Presigned-URL upload API + callback flow scaled to 8 camera nodes with 0 backend deploys per addition; nodes extend horizontally with secret-based auth alone (metric: internal deploy log).',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        summary: 'Ran trading reporting and market-making infrastructure for institutional clients',
        metric: '99.9% batch success · ~3,000 daily fills',
        bullets: [
          'Designed and operated a B2B trading performance reporting system. Separate reporting ledger + daily/monthly snapshot batches + checksum-verified PDF pipeline sustain 99.9% batch success across 15 institutional clients (metric: CloudWatch batch logs, 30-day avg).',
          'Built a crypto arbitrage / market-making engine on Electron + Node.js + PostgreSQL + Redis + WebSocket. Separating the intake, strategy, and order event loops cut p95 strategy-execution latency from 120 ms to 45 ms (~63%); averages 3,000 daily fills (metric: internal latency log).',
        ],
      },
      dio: {
        company: 'DIO Freelance Platform',
        summary: 'Built payment, settlement, and LLM workflows across several 0→1 products',
        metric: '8-week launch · 2,500 check-ins · 12-agent pilot',
        bullets: [
          '(Woo-Yeon-Hee) Modeled the matching, checkout, and auto-settlement flow as a state machine with event sourcing; landed in production in 8 weeks and logged 2,500 check-ins in the first two weeks with zero critical-path defects at launch (metric: Sentry).',
          '(Linker) Combined Toss PG and Kakao AlimTalk via an outbox pattern with retry and DLQ handling; across ~250 weekly matches, payment failure stays near 1% (metric: PG webhook logs, 30-day avg).',
          '(Momentir) Designed an LLM pipeline that summarizes client notes and extracts follow-up schedules. Structured outputs flow through an agent-approval UI so nothing slips past CRM; pilot agents (n=12) reported ~30% less daily ops effort (method: user interviews).',
          '(Hidden Gem) Built a PostGIS + Redis location / category feed backend; index and cache strategy keep the main feed p95 under 180 ms (metric: APM p95, 7-day avg).',
        ],
      },
      dssolve: {
        company: 'DS Solve, Inc.',
        summary: "Built Randibot's multi-tenant backend around configuration-driven onboarding",
        metric: '5 workspaces · ~1,200 ETL runs/month',
        bullets: [
          'Shipped the Randibot backend MVP — RCMS / K-Startup scraping ETL + multi-tenant (tenancyId = workspaceId) architecture so onboarding a new agency is a config change. Onboarded 5 workspaces with zero code changes and sustained ~1,200 ETL runs per month (metric: per-agency config management log).',
        ],
      },
      miso: {
        company: 'Miso Inc.',
        summary: 'Built Cognito auth with seamless legacy-user migration',
        metric: '120K migrated users · auth failures <0.5%',
        bullets: [
          'Built an AWS Cognito authentication system. A Cognito Lambda Trigger migrated 120K legacy users transparently on first login while OTP flows were introduced to the CX CRM; auth failure stays below 0.5% (metric: CloudWatch).',
        ],
      },
      flfi: {
        company: 'FLFI',
        summary: 'Led the backend and deployment redesign of a fintech platform',
        metric: '500+ zero-downtime deploys · 3 deploys/day',
        bullets: [
          'Backend Tech Lead — led a 6-person full-stack engineering team and mentored 2 junior engineers while re-cutting the NestJS backend, Vue 3 frontend, and AWS infra along coherent domain boundaries. Drove sprint-velocity and deploy-frequency improvements alongside code-review culture (metric: Jira cycle time, GitOps history).',
          'Built a zero-downtime blue-green pipeline on EKS with Karpenter, ArgoCD, and Helm. Deploy cadence moved from weekly to 3×/day with 500+ zero-downtime deploys over two years — 0s deploy downtime and rollbacks under 30s (metric: ArgoCD rollout logs, full audit).',
          'Designed a Lambda@Edge + CloudFront image CDN. On-the-fly resize + regional caching cut image p95 from 420 ms to 120 ms (~71%) while serving ~500K images/day (metric: CloudWatch RUM, 7-day avg).',
          'Delivered an end-to-end Blockchain DApp in ethers.js — MetaMask login, tx signing, token balance lookups. A wallet-abstraction layer and a dedicated event indexer dropped wallet-connection failure from 8% to 0.5% and stabilized on-chain sync lag (metric: frontend error log, indexer lag).',
          'Built a crypto derivatives exchange on OKX Broker API — separating the WebSocket market stream, REST order API, and Redis-backed position snapshots held execution latency at ~80 ms (API RTT) across 120+ supported pairs (metric: internal latency log). Engagement continued with the same CEO/CTO team as a Rootstone freelance contract.',
        ],
      },
      aligo: {
        company: 'ALIGO',
        summary: 'Operated large-scale business messaging APIs and queue infrastructure',
        metric: '5M messages/day · 3,000 RPS peak',
        bullets: [
          'Operated a Vanilla PHP 7 business-messaging dispatch API and server — 5M daily messages at a 3,000 RPS peak. Per-customer queues + weighted round-robin improved peak-hour fairness; retries use exponential backoff on isolated queues to spread load (metric: internal dispatch dashboard).',
          'Productized Kakao AlimTalk / FriendTalk Open APIs. A shared template and approval-status dashboard cut integration effort for downstream vendors and lightened CX back-office work.',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        summary: 'Built a P2P lending product and fintech reconciliation flow',
        metric: '~120K transactions · 0 consistency incidents',
        bullets: [
          'Built a P2P lending solution as a Wordpress plugin, integrated with Paygate Seyfert fintech API (virtual accounts, investing, repayment, status). Transaction isolation and idempotent response storage processed ~120K cumulative transactions over 2 years with 0 financial-consistency incidents (metric: daily reconciliation batch).',
        ],
      },
      ninefive: {
        company: 'Ninefive',
        summary: 'Delivered promo interactions without dropping accessibility quality',
        metric: 'Dwell/scroll KPIs · accessibility compliance',
        bullets: [
          "Shipped product promo-page interactions with prefers-reduced-motion handling, paired with a KWAH accessibility checklist. Dwell-time and scroll-depth KPIs hit targets alongside accessibility compliance.",
        ],
      },
      '4depth': {
        company: '4depth',
        summary: 'Built public-sector sites with accessibility-first frontends',
        metric: '14 public projects · K-WCAG certification',
        bullets: [
          'Delivered public-sector websites with WCAG accessibility and responsive markup. Semantic HTML, ARIA design, and a shift-left accessibility checklist carried 14 government/municipal projects through K-WCAG certification.',
        ],
      },
    },
  },
  projects: {
    sectionTitle: 'Projects',
    eyebrow: 'Selected Work',
    description: 'A curated mix of shipped public products and closed or internal work.',
    viewSite: 'Open site',
    viewCaseStudy: 'Case study',
    backToProjects: 'Back to projects',
    publicGroup: 'Live products',
    publicGroupDesc: 'Services delivered through freelance engagements',
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
        proof: '5 agency workspaces · ~1,200 ETL runs/month',
      },
      momentir: {
        title: 'Momentir',
        desc:
          'AI-powered CRM for insurance agents. Uses LLMs to summarize client notes and auto-schedule follow-ups, saving operational effort.',
        proof: '12-agent pilot · ~30% less ops effort',
      },
      nursevillage: {
        title: 'Nursevillage',
        desc:
          'iOS/Android community app for nurses — location-based social feed with collection analytics dashboards.',
        proof: 'Community app in production',
      },
      'flfi-exchange': {
        title: 'FLFI Derivatives Exchange',
        desc:
          'Crypto derivatives exchange on OKX Broker API — real-time streaming, matching, and position management.',
        proof: '120+ pairs · execution latency near 80 ms',
      },
      'flfi-lending': {
        title: 'FLFI Fintech Platform',
        desc:
          'NestJS + Vue 3 + EKS end-to-end architecture, blue-green delivery, image CDN, and Web3 DApp.',
        proof: '500+ zero-downtime deploys · image p95 cut from 420 ms to 120 ms',
      },
      'ontoh-vision': {
        title: 'Ontoh Vision',
        desc: 'CCTV (RTSP) → on-site AI event detection → Cloudflare R2 workflow.',
        proof: '99.7% upload success · 0 backend deploys for camera expansion',
      },
      'rootstone-trading': {
        title: 'Rootstone Trading',
        desc:
          'Electron desktop system for crypto arbitrage and market-making portfolios.',
        proof: 'Strategy p95 120 ms → 45 ms · ~3,000 daily fills',
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
    backToList: 'All writing',
    readTime: '{n} min read',
    items: {
      'this-site': {
        title: 'Building this site',
        summary:
          'A retrospective on designing a Next.js · 4-locale · GitHub Pages résumé from scratch.',
        date: '2026-04',
      },
      'multi-tenant-saas': {
        title: 'Notes on 0→1 multi-tenant SaaS',
        summary:
          'tenancyId = workspaceId, Postgres RLS considerations, and wiring Stripe subscriptions.',
        date: '2026-05',
      },
      'agent-orchestration': {
        title: 'LLM Agent Orchestration: HIL · Audit · Rollback',
        summary:
          'Lessons from decomposing an insurance domain into LLM agents — observability and failure design patterns.',
        date: '2026-06',
      },
      'blue-green': {
        title: 'Zero-Downtime Blue-Green: 0s downtime · 30s rollback',
        summary:
          'Deployment staging and regression safety nets on EKS + Karpenter + ArgoCD + Helm.',
        date: '2026-07',
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
    freelanceValue: 'heyted.dev',
    githubLabel: 'GitHub',
    githubValue: 'github.com/jaeyeong94',
    linkedinLabel: 'LinkedIn',
    linkedinValue: 'linkedin.com/in/jae-yeong-you',
    testimonials: 'References and testimonials available upon request.',
  },
  footer: {
    credit: 'Ted Ryu · Jaeyeong You',
    updated: 'Last updated',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
