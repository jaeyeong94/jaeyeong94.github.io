# 03 · Content Model

원본 자료(LinkedIn · dio.so · Wanted)에서 공통 구조를 추출한 데이터 스키마.

## 설계 원칙

- **ID 기반**: 모든 Experience/Project는 고유 slug ID를 가짐 → 번역 파일이 ID를 참조
- **Locale-free structural data**: 날짜, URL, 기술 태그는 언어 중립 (resume.ts)
- **Locale-specific text**: 회사 소개, 역할 설명, 성과 문장은 딕셔너리 (i18n/*.ts)

## 타입 정의

```ts
// src/content/resume.ts

export type DateString = `${number}-${number}`;  // "2023-11"

export interface Profile {
  name: { ko: string; en: string; zh: string; ja: string };
  handle: string;                 // "jaeyeong94"
  email: string;                  // 공개 (JS 난독화 렌더)
  phone?: string;                 // 비공개 (UI 미노출, 데이터에만 보존)
  location: { city: string; country: string };  // 예: Seoul, Korea
  social: {
    github?: string;
    linkedin?: string;
    dio?: string;
  };
  careerStart: DateString;        // '2012-12' — 현재 시점 기준 자동 계산
}

export type EmploymentType = 'fulltime' | 'freelance' | 'contract';

export interface Experience {
  id: string;                     // 'flfi', 'rootstone', 'dio-*', ...
  companyKey: string;             // i18n 딕셔너리 키
  type: EmploymentType;
  role: string;                   // 'Backend Developer' / 'Tech Lead' (영어 고정)
  start: DateString;
  end: DateString | 'present';
  stack: string[];                // ['Node.js', 'NestJS', ...]
  projects?: SubProject[];
  companyUrl?: string;
  hidden?: boolean;
}

export interface SubProject {
  id: string;                     // 'flfi-cdn', 'flfi-dapp', ...
  titleKey: string;
  stack: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  id: string;                     // 'randibot', 'momentir', 'nursevillage', ...
  titleKey: string;
  descKey: string;
  stack: string[];
  links: { label: string; url: string }[];
  visibility: 'public' | 'private';
  featured?: boolean;
  thumbnail?: string;
}

export interface SkillCategory {
  id: 'backend' | 'frontend' | 'db' | 'infra' | 'ai' | 'blockchain';
  titleKey: string;
  items: Skill[];
}

export interface Skill {
  name: string;                   // 'Node.js'
  level?: 'expert' | 'proficient' | 'familiar';
}

export interface Education {
  id: string;
  schoolKey: string;
  degreeKey?: string;
  start: DateString;
  end: DateString | 'present';
}

export interface Certification {
  id: string;
  nameKey: string;
  issuerKey: string;
  date: DateString;
}

export interface ResumeData {
  profile: Profile;
  summaryKey: string;             // hero/about 소개문 키
  experiences: Experience[];      // 최신순
  projects: Project[];            // featured 먼저
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
  interests: string[];            // i18n 키 배열
}
```

## 실제 데이터 매핑 (원본 → ID)

### Experiences (최신 → 과거)

| ID | 회사 | 기간 | 타입 |
|----|------|------|------|
| `onto` | 주식회사 온토 (Ontoh Vision) | 2026-01 ~ present | freelance |
| `dssolve` | 주식회사디에스솔브 (Randibot) | 2024-09 ~ 2024-12 | freelance |
| `rootstone` | Rootstone (Crypto Trading) | 2023-11 ~ present | freelance |
| `dio-freelance` | DIO 플랫폼 활동 (링커·히든젬·Momentir 등) | 2023-11 ~ present | freelance |
| `flfi-exchange` | 주식회사 플피 (거래소 개발) | 2023-09 ~ 2023-11 | fulltime |
| `miso` | 유한회사 미소 (플랫폼팀) | 2023-06 ~ 2023-09 | fulltime |
| `flfi-lead` | 주식회사 플피 (Tech Lead) | 2021-04 ~ 2023-04 | fulltime |
| `aligo` | (주)알리는사람들 | 2019-08 ~ 2021-04 | fulltime |
| `studio-bloom` | 주식회사 스튜디오블룸 | 2017-02 ~ 2019-04 | fulltime |
| `ninefive` | 나인파이브주식회사 | 2016-09 ~ 2016-11 | fulltime |
| `4depth` | (주)포뎁스 | 2012-12 ~ 2014-10 | fulltime |

### Projects (공개 가능)

| ID | 제품 | URL | 스택 |
|----|------|-----|------|
| `randibot` | Randibot (RCMS/K-Startup) | randibot.com | Next.js, React, NestJS |
| `momentir` | Momentir (보험 GA CRM) | momentir.com | Framer, AI/LLM, Toss PG |
| `nursevillage` | Nursevillage (간호사 커뮤니티) | nursevillage.com | Next.js, React Native |

### SubProjects (비공개 / 경력 내부)

- 암호화폐 거래소 백엔드 (Node.js · PostgreSQL · Redis · WebSocket · AWS)
- P2P 대출 플랫폼 (React · Spring Boot · MySQL · AWS)
- SaaS 0→1 (Next.js · NestJS · PostgreSQL · Vercel)
- AI 챗봇/RAG (Python · LangChain · OpenAI · Pinecone · FastAPI)
- 블록체인 DApp (Solidity · Web3.js · Hardhat · IPFS)
- 트레이딩 봇/모니터링 (Python · Node.js · Redis · InfluxDB · Grafana)
- FLFI: Lambda@Edge 이미지 CDN · 이더리움 DApp · FCM 푸시
- Ontoh Vision: CCTV(RTSP) → AI 이벤트 감지 → Cloudflare R2 워크플로우

### Skills (6개 카테고리)

- **Backend**: Node.js, NestJS, Express, TypeScript, Python(FastAPI/Django), Go, Java/Spring Boot, PHP
- **Frontend**: React, Next.js, Vue.js, Nuxt.js, Svelte/SvelteKit, TailwindCSS, React Native, Flutter
- **Database**: PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, InfluxDB
- **Infra/DevOps**: AWS, Docker, Kubernetes, Terraform, GitHub Actions, Nginx, RabbitMQ
- **AI/LLM**: OpenAI API, LangChain, RAG, Vector DB (Pinecone)
- **Blockchain**: Ethereum, Solidity, Solana, Web3.js, Ethers.js, Hardhat

> Mobile(React Native, Flutter)은 Frontend 카테고리에 병합. 경험 밀도를 고려한 결정.

### Certifications

- Toss 스터디클럽 1기 (2023-04)
- 정보처리기능사 (2009-08)
- 컴퓨터그래픽스운용기능사 (2010-06)
- GTQ 1급, ITQ Master

### Education

- 한국방송통신대학교 컴퓨터과학과 (2023-06 ~ 재학중)
- 천안상업고등학교 컴퓨터 소프트웨어 (2010-03 ~ 2012-03)

## 경력 ↔ 프로젝트 중복 노출 규칙

동일 프로젝트가 Experience와 Projects 양쪽에 과하게 등장하지 않도록 다음 규칙 적용:

| 규칙 | 대상 |
|------|------|
| **Projects 섹션에 카드로 노출** | 공개 URL(도메인)이 있는 제품 — 현재 Randibot, Momentir, Nursevillage |
| **Experience 내부에만 노출** | 비공개 · 내부 시스템 · 공개 URL 없는 하위 업무 |
| Experience 불릿에서 언급되더라도 | Projects 카드로 이미 등장한 제품은 **제목 수준으로만 간단 언급** + "자세히" 링크로 Projects 앵커 이동 |

예: "Momentir 백엔드/AI 플로우 설계 ([프로젝트 보기](#projects))"

## 체크리스트

- [ ] `resume.ts` 타입 정의 및 데이터 입력
- [ ] i18n 키 규칙: `experience.{id}.summary`, `project.{id}.description`, `company.{key}.name`
- [ ] 날짜 문자열 파서/포매터 유틸 + 경력 개월 자동 계산(`careerStart` 기준)
- [ ] `present` 케이스 처리
- [ ] 비공개 Experience 는 `hidden: true` 로 마스킹
- [ ] 경력/프로젝트 중복 노출 규칙 적용
