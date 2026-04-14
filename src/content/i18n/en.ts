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
    contact: 'Contact',
  },
  common: {
    present: 'Present',
    years: 'yr',
    months: 'mo',
    showOlder: 'Show earlier experience',
    hideOlder: 'Hide',
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
          'Designed and built an end-to-end workflow: CCTV (RTSP) → on-site AI inference → Cloudflare R2 upload.',
          'Implemented presigned URL–based video upload pipeline and RESTful APIs on on-premise edge servers.',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          'Designed and built a B2B client-facing trading performance reporting system.',
          'Built an Electron + Node.js + PostgreSQL + Redis crypto arbitrage / market-making portfolio system.',
        ],
      },
      dio: {
        company: 'DIO Freelance Platform',
        bullets: [
          '(Woo-Yeon-Hee) Meeting app backend MVP — local restaurant check-in, chat matching, auto-checkout/settlement.',
          '(Linker) Weekly 1:1 matching full-stack MVP — Toss PG and Kakao AlimTalk integration.',
          '(Momentir) Insurance-GA CRM — LLM-based customer note summarization and auto scheduling workflow.',
          '(Hidden Gem) iOS/Android collector community app — location-based social feed backend.',
        ],
      },
      dssolve: {
        company: 'DS Solve, Inc.',
        bullets: [
          'Built Randibot backend MVP — ETL pipeline scraping RCMS / K-Startup + multi-tenant architecture.',
        ],
      },
      'flfi-exchange': {
        company: 'FLFI · Exchange Team',
        bullets: ['Built a crypto derivatives exchange system on top of OKX Broker API.'],
      },
      miso: {
        company: 'Miso · Platform Team',
        bullets: [
          'Built an authentication system on AWS Cognito; delivered OTP and user migration for CX CRM.',
        ],
      },
      'flfi-lead': {
        company: 'FLFI',
        bullets: [
          'Backend Tech Lead — architected the NestJS backend, Vue 3 frontend, and AWS infra end-to-end.',
          'Built a zero-downtime blue-green delivery pipeline on EKS with Karpenter, ArgoCD, and Helm.',
          'Shipped a Lambda@Edge + CloudFront image CDN (upload, caching, on-the-fly resize).',
          'Delivered a Blockchain DApp using web3.js / Ethers.js — MetaMask login, signing, token balance queries.',
        ],
      },
      aligo: {
        company: 'ALIGO',
        bullets: [
          'Built and operated vanilla PHP 7 messaging dispatch servers and APIs.',
          'Shipped Kakao AlimTalk / FriendTalk Open API features and maintained CX back-office tools.',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        bullets: [
          'Shipped a P2P lending solution as a Wordpress plugin with Paygate Seyfert fintech API (virtual accounts, investing, repayment).',
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
    cta: "Open to new opportunities and collaboration — feel free to reach out.",
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
