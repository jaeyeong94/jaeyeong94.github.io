export type DateString = `${number}-${number}`;

export type EmploymentType = 'fulltime' | 'freelance' | 'contract';

export type ExperienceId =
  | 'masblue'
  | 'onto'
  | 'rootstone'
  | 'dio'
  | 'dssolve'
  | 'miso'
  | 'flfi'
  | 'aligo'
  | 'studio-bloom'
  | 'ninefive'
  | '4depth';

export type ProjectId =
  | 'randibot'
  | 'momentir'
  | 'nursevillage'
  | 'flfi-exchange'
  | 'flfi-lending'
  | 'ontoh-vision'
  | 'rootstone-trading';

export type ProjectStatus = 'live' | 'discontinued' | 'internal';

export type SkillCategoryId = 'backend' | 'frontend' | 'db' | 'infra' | 'ai' | 'blockchain';

export type InterestId = 'infra' | 'ai' | 'blockchain' | 'network';

export interface Experience {
  id: ExperienceId;
  type: EmploymentType;
  role: string;
  start: DateString;
  end: DateString | 'present';
  stack: string[];
  url?: string;
  teamKey?: string;
  legacy?: boolean;
}

export interface Project {
  id: ProjectId;
  stack: string[];
  url?: string;
  status: ProjectStatus;
  featured?: boolean;
}

export interface SkillCategory {
  id: SkillCategoryId;
  items: string[];
}

export type AvailabilityStatus = 'open' | 'limited' | 'closed';

export type DomainId = 'fullstack' | 'fintech' | 'blockchain' | 'saas' | 'ai';

export type WritingId =
  | 'this-site'
  | 'multi-tenant-saas'
  | 'agent-orchestration'
  | 'blue-green';

export interface ResumeData {
  profile: {
    emailUser: string;
    emailDomain: string;
    careerStart: DateString;
    github: string;
    linkedin: string;
    dio: string;
    freelanceSite: string;
  };
  availability: AvailabilityStatus;
  domains: Array<{ id: DomainId; years: number }>;
  keywords: string[];
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  interests: InterestId[];
  writingIds: WritingId[];
  books: Array<{ title: string; author: string }>;
  tools: string[];
}

export const resume: ResumeData = {
  profile: {
    emailUser: 'fksak80',
    emailDomain: 'gmail.com',
    careerStart: '2012-12',
    github: 'https://github.com/jaeyeong94',
    linkedin: 'https://linkedin.com/in/jae-yeong-you',
    dio: 'https://crew.dio.so',
    freelanceSite: 'https://heyted.dev',
  },
  availability: 'open',
  domains: [
    { id: 'fullstack', years: 11 },
    { id: 'fintech', years: 6 },
    { id: 'saas', years: 5 },
    { id: 'blockchain', years: 3 },
    { id: 'ai', years: 2 },
  ],
  keywords: ['RAG', 'Multi-tenancy', 'Kubernetes', 'Web3', 'NestJS', 'Event-driven'],
  writingIds: ['this-site', 'multi-tenant-saas', 'agent-orchestration', 'blue-green'],
  books: [
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
    { title: 'Domain-Driven Design Distilled', author: 'Vaughn Vernon' },
  ],
  tools: [
    'Claude Code',
    'VS Code',
    'JetBrains',
    'tmux',
    'Raycast',
    'Linear',
    '1Password',
    'Notion',
  ],
  experiences: [
    {
      id: 'dio',
      type: 'freelance',
      role: 'Full-stack Developer',
      start: '2023-11',
      end: 'present',
      stack: ['Node.js', 'NestJS', 'Next.js', 'PostgreSQL', 'Toss PG', 'LLM'],
      url: 'https://dio.so',
    },
    {
      id: 'masblue',
      type: 'freelance',
      role: 'Backend Engineer · AI Orchestration',
      start: '2026-02',
      end: 'present',
      stack: ['Node.js', 'TypeScript', 'AI Agents', 'LangChain', 'AWS', 'PostgreSQL'],
      url: 'https://www.masblue.studio/',
    },
    {
      id: 'rootstone',
      type: 'freelance',
      role: 'Software Engineer',
      start: '2023-11',
      end: 'present',
      stack: ['Node.js', 'Electron', 'PostgreSQL', 'Redis', 'WebSocket'],
      url: 'https://rootstone.io',
      teamKey: 'flfi-rootstone',
    },
    {
      id: 'onto',
      type: 'freelance',
      role: 'Backend Engineer',
      start: '2026-01',
      end: '2026-04',
      stack: ['Node.js', 'AWS', 'Cloudflare R2', 'RTSP', 'AI/Vision'],
      url: 'https://ontoh.co.kr/',
    },
    {
      id: 'dssolve',
      type: 'freelance',
      role: 'Backend Engineer',
      start: '2024-02',
      end: '2024-09',
      stack: ['NestJS', 'PostgreSQL', 'Multi-tenancy', 'ETL'],
      url: 'https://randibot.com/',
    },
    {
      id: 'miso',
      type: 'fulltime',
      role: 'Backend Engineer',
      start: '2023-06',
      end: '2023-09',
      stack: ['AWS Cognito', 'Node.js'],
      url: 'https://miso.kr/',
    },
    {
      id: 'flfi',
      type: 'fulltime',
      role: 'Tech Lead · Backend',
      start: '2021-04',
      end: '2023-11',
      stack: [
        'Node.js',
        'NestJS',
        'TypeScript',
        'AWS',
        'Kubernetes',
        'Vue 3',
        'SvelteKit',
        'web3.js',
        'Ethers.js',
        'OKX Broker API',
      ],
      teamKey: 'flfi-rootstone',
    },
    {
      id: 'aligo',
      type: 'fulltime',
      role: 'Backend Engineer',
      start: '2019-08',
      end: '2021-04',
      stack: ['PHP 7', 'Node.js', 'MySQL', 'CodeIgniter'],
      url: 'https://smartsms.aligo.in/',
    },
    {
      id: 'studio-bloom',
      type: 'fulltime',
      role: 'Backend Engineer',
      start: '2017-02',
      end: '2019-04',
      stack: ['PHP', 'Wordpress', 'MySQL', 'Paygate API'],
      legacy: true,
    },
    {
      id: 'ninefive',
      type: 'fulltime',
      role: 'Frontend Engineer',
      start: '2016-09',
      end: '2016-11',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3'],
      url: 'https://www.ninefive.com/',
      legacy: true,
    },
    {
      id: '4depth',
      type: 'fulltime',
      role: 'Frontend Engineer',
      start: '2012-12',
      end: '2014-10',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'SCSS', 'PHP'],
      url: 'https://4depth.com/',
      legacy: true,
    },
  ],
  projects: [
    {
      id: 'momentir',
      stack: ['Next.js', 'NestJS', 'OpenAI/LLM', 'Toss PG', 'PostgreSQL'],
      url: 'https://momentir.com',
      status: 'live',
      featured: true,
    },
    {
      id: 'randibot',
      stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Multi-tenancy'],
      url: 'https://randibot.com',
      status: 'live',
      featured: true,
    },
    {
      id: 'nursevillage',
      stack: ['Next.js', 'React Native', 'PostgreSQL'],
      url: 'https://nursevillage.com',
      status: 'live',
    },
    {
      id: 'flfi-exchange',
      stack: ['Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OKX Broker API'],
      status: 'discontinued',
    },
    {
      id: 'flfi-lending',
      stack: ['NestJS', 'Vue 3', 'AWS', 'Kubernetes', 'web3.js'],
      status: 'internal',
    },
    {
      id: 'ontoh-vision',
      stack: ['Node.js', 'RTSP', 'AI/Vision', 'Cloudflare R2'],
      status: 'internal',
    },
    {
      id: 'rootstone-trading',
      stack: ['Electron', 'Node.js', 'PostgreSQL', 'Redis'],
      status: 'internal',
    },
  ],
  skills: [
    {
      id: 'backend',
      items: [
        'Node.js',
        'NestJS',
        'Express',
        'TypeScript',
        'Python',
        'FastAPI',
        'Go',
        'Java / Spring Boot',
        'PHP',
      ],
    },
    {
      id: 'frontend',
      items: [
        'React',
        'Next.js',
        'Vue.js',
        'Nuxt.js',
        'Svelte',
        'SvelteKit',
        'TailwindCSS',
        'React Native',
        'Flutter',
      ],
    },
    {
      id: 'db',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'InfluxDB'],
    },
    {
      id: 'infra',
      items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Nginx', 'RabbitMQ'],
    },
    {
      id: 'ai',
      items: ['OpenAI API', 'LangChain', 'RAG', 'Vector DB (Pinecone)'],
    },
    {
      id: 'blockchain',
      items: ['Ethereum', 'Solidity', 'Solana', 'web3.js', 'Ethers.js', 'Hardhat'],
    },
  ],
  interests: ['infra', 'ai', 'blockchain', 'network'],
};

export function monthsBetween(start: DateString, end: DateString | 'present', now = new Date()) {
  const [sy, sm] = start.split('-').map(Number);
  const endDate =
    end === 'present'
      ? now
      : (() => {
          const [ey, em] = end.split('-').map(Number);
          return new Date(ey, em - 1, 1);
        })();
  const startDate = new Date(sy, sm - 1, 1);
  return (
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())
  );
}

export function totalCareerMonths(careerStart: DateString, now = new Date()) {
  return monthsBetween(careerStart, 'present', now);
}

export function yearsFromMonths(months: number) {
  return Math.floor(months / 12);
}
