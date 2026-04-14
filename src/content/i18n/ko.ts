const dict = {
  meta: {
    title: '유재영 · Ted Ryu — 풀스택 개발자',
    description:
      '핀테크 · 블록체인 · SaaS · AI 도메인에서 0→1 서비스를 구축해 온 11년차 풀스택 개발자.',
  },
  nav: {
    about: '소개',
    experience: '경력',
    projects: '프로젝트',
    skills: '기술',
    contact: '연락처',
  },
  common: {
    present: '현재',
    years: '년',
    months: '개월',
    showOlder: '이전 경력 보기',
    hideOlder: '접기',
  },
  employment: {
    fulltime: '정규직',
    freelance: '프리랜서',
    contract: '계약직',
  },
  hero: {
    name: '유재영',
    altName: 'Ted Ryu',
    role: '풀스택 개발자 · 백엔드 중심',
    tagline: '비즈니스 성장을 주도하는 제품을 만듭니다.',
    ctaContact: '연락하기',
  },
  about: {
    sectionTitle: '소개',
    eyebrow: 'About',
    impact:
      '핀테크 · 블록체인 · SaaS · AI 도메인에서 0→1 서비스를 구축 · 운영해 온 풀스택 개발자입니다. 백엔드 아키텍처와 AWS/Kubernetes 기반 인프라에 강점이 있으며, 최근에는 LLM · RAG · Web3 응용에 집중하고 있습니다.',
    stat1Label: '실무 경력',
    stat1Suffix: '년+',
    stat2Label: '0→1 서비스',
    stat2Value: '6건+',
    stat3Label: '운영 인프라',
    stat3Value: 'AWS · K8s · Terraform',
    philosophyTitle: '일하는 방식',
    philosophy1:
      '좋은 개발자는 사용자 요구사항과 UX · 비즈니스 목표를 이해하고 해결하는 사람이라 믿습니다. 지표 기반 의사결정과 사용자 피드백 루프를 중시하며, 안정적인 서비스를 위한 클라우드 인프라와 SDLC 구축에 관심이 많습니다.',
    philosophy2:
      '다양한 관점을 중시하고 혁신적인 솔루션으로 시장을 개척하는 팀을 찾고 있습니다. 체계적인 절차를 바탕으로 한 신속한 의사결정과 실행이 시장에 큰 영향을 미치는 서비스를 만드는 열쇠라고 생각합니다.',
  },
  experience: {
    sectionTitle: '경력',
    eyebrow: 'Experience',
    items: {
      onto: {
        company: '주식회사 온토 (Ontoh Vision)',
        bullets: [
          'CCTV(RTSP) → AI 이벤트 감지 → Cloudflare R2 업로드 워크플로우 설계 및 구현',
          '현장 로컬 서버에서 presigned URL 기반 영상 업로드 파이프라인과 RESTful API 개발',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          'B2B 트레이딩 성과 고객 리포트 시스템 설계 · 개발',
          'Electron + Node.js + PostgreSQL + Redis 기반 크립토 차익거래 · 마켓 메이킹 포트폴리오 시스템 구축',
        ],
      },
      dio: {
        company: 'DIO 플랫폼 프리랜스',
        bullets: [
          '(우연히) 미팅 앱 Backend MVP — 로컬 음식점 체크인 · 채팅 매칭 · 자동 체크아웃/정산 핵심 로직 개발',
          '(링커) 매주 실행되는 1:1 매칭 Full-stack MVP — Toss PG · 카카오 알림톡 연동',
          '(Momentir) 보험 GA 고객관리 SaaS — LLM 기반 고객 노트 요약 및 일정 자동 등록 플로우 설계',
          '(히든젬) 수집가 커뮤니티 iOS/Android 앱 — 위치 기반 수집 데이터 · 소셜 피드 백엔드',
        ],
      },
      dssolve: {
        company: '주식회사 디에스솔브',
        bullets: [
          'Randibot 백엔드 · MVP 개발 — RCMS · K-Startup 스크래핑 ETL + 멀티테넌시(tenancyId = workspaceId) 아키텍처',
        ],
      },
      'flfi-exchange': {
        company: '주식회사 플피(FLFI) — 거래소 팀',
        bullets: ['OKX Broker API 기반 파생상품 크립토 거래소 시스템 개발'],
      },
      miso: {
        company: '유한회사 미소 — 플랫폼 팀',
        bullets: [
          'AWS Cognito 기반 인증 시스템 구축 · CX CRM의 OTP 인증 및 사용자 마이그레이션 수행',
        ],
      },
      'flfi-lead': {
        company: '주식회사 플피(FLFI)',
        bullets: [
          'Backend Tech Lead — NestJS 백엔드 + Vue 3 프론트엔드 + AWS 인프라 전체 아키텍처 설계',
          'EKS · Karpenter · ArgoCD · Helm 기반 무중단 Blue-Green 배포 파이프라인 구축',
          'Lambda@Edge + CloudFront 이미지 CDN 시스템 개발 (업로드/캐싱/리사이징)',
          'web3.js · Ethers.js 기반 Blockchain DApp — 메타마스크 로그인 · 트랜잭션 서명 · 토큰 잔액 조회',
        ],
      },
      aligo: {
        company: '(주)알리는사람들 (ALIGO)',
        bullets: [
          'Vanilla PHP 7 기반 비즈메시징 발송서버 API 개발 · 운영',
          '카카오 알림톡/친구톡 Open API 기능 개발 및 고객 CS 백오피스 유지보수',
        ],
      },
      'studio-bloom': {
        company: '주식회사 스튜디오블룸',
        bullets: [
          'Wordpress Plugin 기반 P2P 대출 솔루션 · Paygate Seyfert Fintech API 연동 (가상계좌 · 투자 · 상환)',
        ],
      },
      ninefive: {
        company: '나인파이브주식회사',
        bullets: ['제품 프로모션 페이지 인터랙션 · 웹접근성(KWAH) 기반 프론트엔드 개발'],
      },
      '4depth': {
        company: '(주)포뎁스',
        bullets: ['공공기관/지자체 웹사이트 퍼블리싱 · 웹접근성(WCAG) 대응 · 반응형 웹 구현'],
      },
    },
  },
  projects: {
    sectionTitle: '프로젝트',
    eyebrow: 'Projects',
    viewSite: '사이트 열기',
    items: {
      randibot: {
        title: 'Randibot',
        desc:
          'RCMS · K-Startup 연구비 관리 SaaS. 국책 사업 예산집행 데이터를 자동 수집 · 변환 · 저장하는 ETL 파이프라인과 멀티테넌트 백엔드.',
      },
      momentir: {
        title: 'Momentir',
        desc:
          'AI 기반 보험 GA 고객관리 SaaS. LLM으로 고객 노트를 요약하고 일정을 자동 등록하여 설계사의 운영 공수를 절감.',
      },
      nursevillage: {
        title: 'Nursevillage',
        desc:
          '간호사 커뮤니티 iOS/Android 앱. 위치 기반 소셜 피드와 컬렉션 통계 대시보드를 제공.',
      },
    },
  },
  skills: {
    sectionTitle: '기술',
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
    sectionTitle: '관심사',
    eyebrow: 'Interests',
    items: {
      infra: {
        title: '인프라 안정성',
        desc: 'SDLC · CI/CD · 무중단 배포 · 관측성(모니터링/로깅/알림).',
      },
      ai: {
        title: 'AI / LLM 응용',
        desc: 'RAG 파이프라인 · Vector DB · Agent 워크플로우 설계.',
      },
      blockchain: {
        title: '블록체인',
        desc: 'DApp · 스마트 컨트랙트 · Web3 프론트엔드.',
      },
      network: {
        title: '네트워크 · 보안',
        desc: 'WebSocket · RTSP 실시간 통신, 인증/권한 설계.',
      },
    },
  },
  contact: {
    sectionTitle: '연락처',
    eyebrow: 'Contact',
    cta: '새로운 기회나 협업을 환영합니다. 부담없이 연락주세요.',
    locationLabel: '위치',
    locationValue: 'Seoul, Korea',
    emailLabel: '이메일',
  },
  footer: {
    updated: '마지막 업데이트',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
export type Dictionary = typeof dict;
