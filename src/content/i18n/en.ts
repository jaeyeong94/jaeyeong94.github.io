import type { Dictionary } from './ko';

const dict: Dictionary = {
  meta: {
    title: 'Ted Ryu — Full-stack Developer',
    description:
      'A full-stack developer with 11+ years shipping 0→1 products across fintech, blockchain, SaaS, and AI.',
  },
  nav: {
    about: 'About',
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
    nowValue: 'Architecting a CCTV AI vision backend at Ontoh Vision.',
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
  experience: {
    sectionTitle: 'Experience',
    eyebrow: 'Experience',
    items: {
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
    eyebrow: 'Projects',
    viewSite: 'Open site',
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
    },
  },
  skills: {
    sectionTitle: 'Skills',
    eyebrow: 'Skills',
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
  github: {
    sectionTitle: 'Open Source · GitHub',
    eyebrow: 'Open Source',
    description: 'Recently updated public repositories (captured at build time)',
    viewAll: 'View all',
    failure: 'Unable to load GitHub data.',
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
    cta: 'Open to new opportunities and collaboration — feel free to reach out.',
    locationLabel: 'Location',
    locationValue: 'Seoul, Korea',
    emailLabel: 'Email',
  },
  footer: {
    updated: 'Last updated',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
