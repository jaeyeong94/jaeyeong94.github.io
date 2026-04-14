export type DateString = `${number}-${number}`;

export type EmploymentType = 'fulltime' | 'freelance' | 'contract';

export type ExperienceId =
  | 'onto'
  | 'rootstone'
  | 'dio'
  | 'dssolve'
  | 'flfi-exchange'
  | 'miso'
  | 'flfi-lead'
  | 'aligo'
  | 'studio-bloom'
  | 'ninefive'
  | '4depth';

export type ProjectId = 'randibot' | 'momentir' | 'nursevillage';

export type SkillCategoryId = 'backend' | 'frontend' | 'db' | 'infra' | 'ai' | 'blockchain';

export type InterestId = 'infra' | 'ai' | 'blockchain' | 'network';

export interface Experience {
  id: ExperienceId;
  type: EmploymentType;
  role: string;
  start: DateString;
  end: DateString | 'present';
  stack: string[];
  legacy?: boolean;
}

export interface Project {
  id: ProjectId;
  stack: string[];
  url: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: SkillCategoryId;
  items: string[];
}

export interface ResumeData {
  profile: {
    emailUser: string;
    emailDomain: string;
    careerStart: DateString;
    github: string;
    githubHandle: string;
    linkedin: string;
    dio: string;
  };
  keywords: string[];
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  interests: InterestId[];
  writingIds: Array<'this-site' | 'multi-tenant-saas'>;
  books: Array<{ title: string; author: string }>;
  tools: string[];
}

export const resume: ResumeData = {
  profile: {
    emailUser: 'fksak80',
    emailDomain: 'gmail.com',
    careerStart: '2012-12',
    github: 'https://github.com/jaeyeong94',
    githubHandle: 'jaeyeong94',
    linkedin: 'https://linkedin.com/in/jae-yeong-you',
    dio: 'https://crew.dio.so',
  },
  keywords: ['RAG', 'Multi-tenancy', 'Kubernetes', 'Web3', 'NestJS', 'Event-driven'],
  writingIds: ['this-site', 'multi-tenant-saas'],
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
      id: 'onto',
      type: 'freelance',
      role: 'Backend Engineer',
      start: '2026-01',
      end: 'present',
      stack: ['Node.js', 'AWS', 'Cloudflare R2', 'RTSP', 'AI/Vision'],
    },
    {
      id: 'rootstone',
      type: 'freelance',
      role: 'Software Engineer',
      start: '2023-11',
      end: 'present',
      stack: ['Node.js', 'Electron', 'PostgreSQL', 'Redis', 'WebSocket'],
    },
    {
      id: 'dio',
      type: 'freelance',
      role: 'Full-stack Developer',
      start: '2023-11',
      end: 'present',
      stack: ['Node.js', 'NestJS', 'Next.js', 'PostgreSQL', 'Toss PG', 'LLM'],
    },
    {
      id: 'dssolve',
      type: 'freelance',
      role: 'Backend Engineer',
      start: '2024-02',
      end: '2024-04',
      stack: ['NestJS', 'PostgreSQL', 'Multi-tenancy', 'ETL'],
    },
    {
      id: 'flfi-exchange',
      type: 'fulltime',
      role: 'Backend Engineer',
      start: '2023-09',
      end: '2023-11',
      stack: ['Node.js', 'OKX Broker API', 'PostgreSQL'],
    },
    {
      id: 'miso',
      type: 'fulltime',
      role: 'Backend Engineer',
      start: '2023-06',
      end: '2023-09',
      stack: ['AWS Cognito', 'Node.js'],
    },
    {
      id: 'flfi-lead',
      type: 'fulltime',
      role: 'Tech Lead · Backend',
      start: '2021-04',
      end: '2023-04',
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
      ],
    },
    {
      id: 'aligo',
      type: 'fulltime',
      role: 'Backend Engineer',
      start: '2019-08',
      end: '2021-04',
      stack: ['PHP 7', 'Node.js', 'MySQL', 'CodeIgniter'],
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
      legacy: true,
    },
    {
      id: '4depth',
      type: 'fulltime',
      role: 'Frontend Engineer',
      start: '2012-12',
      end: '2014-10',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'SCSS', 'PHP'],
      legacy: true,
    },
  ],
  projects: [
    {
      id: 'randibot',
      stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Multi-tenancy'],
      url: 'https://randibot.com',
      featured: true,
    },
    {
      id: 'momentir',
      stack: ['Framer', 'OpenAI/LLM', 'Toss PG', 'REST'],
      url: 'https://momentir.com',
      featured: true,
    },
    {
      id: 'nursevillage',
      stack: ['Next.js', 'React Native', 'PostgreSQL'],
      url: 'https://nursevillage.com',
      featured: true,
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
