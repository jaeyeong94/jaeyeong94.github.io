const dict = {
  meta: {
    title: '유재영 · Ted Ryu — 풀스택 개발자',
    description:
      '핀테크 · 블록체인 · SaaS · AI 도메인에서 0→1 서비스를 구축해 온 11년차 풀스택 개발자.',
  },
  nav: {
    about: '소개',
    manifesto: '신념',
    experience: '경력',
    projects: '프로젝트',
    skills: '기술',
    writing: '글',
    contact: '연락처',
  },
  common: {
    present: '현재',
    years: '년',
    months: '개월',
    showOlder: '이전 경력 보기',
    hideOlder: '접기',
    comingSoon: '준비 중',
    readMore: '자세히 보기',
    theme: '테마',
    themeLight: '라이트',
    themeDark: '다크',
    themeSystem: '시스템',
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
    nowLabel: '지금',
    nowValue: 'Crypto Market Making 시스템과 B2B 투자관리 대시보드를 만들고 있습니다',
    keywordsLabel: '요즘 집중',
    availability: {
      open: '프리랜서 계약 가능 · 정규직 이직 오픈',
      limited: '한정 프로젝트만 가능',
      closed: '현재 신규 문의 비공개',
    },
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
    domainsTitle: '도메인 연차',
    domains: {
      fullstack: '풀스택 / 백엔드',
      fintech: '핀테크',
      blockchain: '블록체인',
      saas: 'SaaS',
      ai: 'AI / LLM',
    },
    yearsShort: '년+',
  },
  manifesto: {
    sectionTitle: 'AI 시대의 개발',
    eyebrow: 'Manifesto',
    thesis:
      'AI는 도구, 사람이 디렉터다. 알아야 요청할 수 있고, 알아야 검증할 수 있다.',
    mindsetTitle: 'Mindset',
    actionsTitle: 'Actions',
    mindset: [
      {
        key: 'agentic',
        title: '에이전틱 엔지니어링',
        note:
          'AI 에이전트가 움직일 인프라와 가드레일을 사람이 설계한다. 아키텍처 결정·분업 구조·안전장치는 사람의 몫.',
      },
      {
        key: 'verify',
        title: '지식이 품질 게이트',
        note:
          '11년간 쌓은 실무 경험과 도메인 지식이 AI 결과물의 검증 레이어로 작동한다. 알아야 요청하고, 알아야 검증할 수 있다.',
      },
      {
        key: 'learn',
        title: '복리로 쌓이는 학습',
        note:
          '새로운 스택·도메인·문제 공간을 끊임없이 흡수한다. AI 시대의 전제조건은 "지속적인 자기계발" 이다.',
      },
    ],
    actions: [
      '비용과 시간 제약으로 시도하지 못했던 서비스와 툴을 직접 만든다.',
      '오픈소스에 기여하며 "문제 해결" 자체에 집중한다.',
      'AI 시대에 맞는 사업 마인드·리더십·협업 방식을 실험하고 정리한다.',
      '그 질문들에 소프트웨어로 답할 수 있는 솔루션을 프로토타이핑한다.',
    ],
    lookingForTitle: '찾는 팀',
    lookingFor: [
      '다양한 관점을 환영하는 엔지니어링 문화',
      '빠른 의사결정과 실행을 존중하는 조직',
      '지표 기반의 피드백 루프',
      'AI 시대의 새 시장을 개척하는 제품',
    ],
  },
  experience: {
    sectionTitle: '경력',
    eyebrow: 'Experience',
    items: {
      masblue: {
        company: 'Masblue (masblue.studio)',
        bullets: [
          '미국 보험사의 백오피스 워크플로우를 LLM 에이전트로 분해·오케스트레이션하는 백엔드 설계. 각 스텝에 도메인 가드레일과 Human-in-the-loop 체크포인트, 감사 로그를 삽입해 자동화와 규제 대응을 동시에 충족 (측정: 파일럿 처리시간 대시보드).',
          'LLM 에이전트 호출 전과정(입력·출력·중간 상태·비용·레이턴시)을 구조화 이벤트로 저장하고 OpenTelemetry로 추적. 실패 케이스의 감사·재현·롤백을 가능케 하여 규제 요구에 대응.',
        ],
      },
      onto: {
        company: '주식회사 온토 (Ontoh Vision)',
        bullets: [
          'CCTV(RTSP) → 온사이트 GPU AI 추론 → Cloudflare R2 업로드 엔드투엔드 파이프라인 설계. 네트워크 단절 시 최대 24시간 로컬 버퍼링과 재업로드로 데이터 유실 0% 목표 (측정: Cloudflare Analytics, 7일 평균).',
          'Presigned URL + 콜백 기반 업로드 API 설계로 카메라 N대 증설 시 백엔드 배포 0건 달성. 카메라 노드는 시크릿 기반 인증만으로 확장 가능 (측정: 내부 배포 로그).',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          'B2B 트레이딩 성과 리포트 시스템 설계·운영. 원장 분리 + 일/월 스냅샷 배치 + 검증체크섬 기반 PDF 파이프라인으로 정확성과 감사 가능성을 확보 (측정: 배치 성공률 [CloudWatch]).',
          'Electron + Node.js + PostgreSQL + Redis + WebSocket 기반 크립토 차익거래 · 마켓 메이킹 엔진 구축. 수신/전략/주문 이벤트 루프를 분리해 전략 실행 p95 레이턴시를 기존 대비 단축 (측정: 내부 latency 로그).',
        ],
      },
      dio: {
        company: 'DIO 플랫폼 프리랜서',
        bullets: [
          '(우연히) 지역 매칭 앱의 매칭 · 체크아웃 · 자동 정산 로직을 상태머신 + 이벤트 소싱으로 모델링해 8주 내 프로덕션 안착. 핵심 플로우 결함 0건으로 런칭 (측정: Sentry 로그).',
          '(링커) Toss PG · 카카오 알림톡을 Outbox 패턴으로 결합해 결제–알림 정합성을 확보. 재시도·DLQ 플로우로 결제 실패율을 약 1%로 안정화 (측정: PG 웹훅 로그, 30일 평균).',
          '(Momentir) LLM 기반 고객 노트 요약 + 일정 자동 추출 파이프라인을 설계. 구조화된 결과를 설계사 승인 UI로 제공해 CRM 누락을 최소화, 파일럿 12명 기준 일일 운영 공수 약 30% 절감 (측정: 사용자 인터뷰).',
          '(히든젬) PostGIS + Redis 기반 위치·카테고리 피드 백엔드 설계. 인덱스·캐시 전략으로 메인 피드 p95 응답 시간을 목표치 이내로 확보 (측정: APM p95, 7일 평균).',
        ],
      },
      dssolve: {
        company: '주식회사 디에스솔브',
        bullets: [
          'Randibot 백엔드 MVP 개발 — RCMS · K-Startup 스크래핑 ETL + 멀티테넌트(tenancyId = workspaceId) 아키텍처로 신규 기관 온보딩을 설정 변경만으로 처리. 코드 변경 없이 기관 확장 가능하게 함 (측정: 기관별 설정 관리 로그).',
        ],
      },
      'flfi-exchange': {
        company: '주식회사 플피(FLFI) — 거래소 팀',
        bullets: [
          'OKX Broker API 기반 파생상품 크립토 거래소 시스템 개발. WebSocket 시세 스트림 + REST 주문 API + Redis 포지션 스냅샷을 분리해 체결 지연을 API RTT 수준으로 안정화 (측정: 내부 latency 로그).',
        ],
      },
      miso: {
        company: '유한회사 미소 — 플랫폼 팀',
        bullets: [
          'AWS Cognito 기반 인증 시스템 구축. Cognito Lambda Trigger로 레거시 유저를 무중단 마이그레이션하고 OTP 인증 플로우를 CX CRM에 도입. 인증 실패율 0.5% 이하 유지 (측정: CloudWatch).',
        ],
      },
      'flfi-lead': {
        company: '주식회사 플피(FLFI)',
        bullets: [
          'Backend Tech Lead — 풀스택 개발팀 리딩 및 주니어 엔지니어 멘토링. NestJS 백엔드 + Vue 3 프론트엔드 + AWS 인프라를 일관된 도메인 경계로 재설계하고 스프린트 속도와 배포 빈도 개선을 주도하며 코드리뷰 문화를 정착 (측정: Jira 사이클타임, GitOps 히스토리).',
          'EKS + Karpenter + ArgoCD + Helm 기반 무중단 Blue-Green 파이프라인 구축. 배포 다운타임 0초 · 롤백 30초 이내 달성 (측정: ArgoCD rollout 로그, 전수 조사).',
          'Lambda@Edge + CloudFront 이미지 CDN 설계. 온더플라이 리사이즈 + 지역 캐시로 p95 응답 시간을 오리진 직결 대비 대폭 단축 (측정: CloudWatch RUM, 7일 평균).',
          'ethers.js 기반 Blockchain DApp 통합 구축 — 메타마스크 로그인, 트랜잭션 서명, 토큰 잔액 조회. 월렛 추상화 레이어와 이벤트 인덱서 분리로 월렛 연결 실패율과 온체인 상태 동기화 지연을 안정화 (측정: 프론트 에러 로그, 인덱서 lag).',
        ],
      },
      aligo: {
        company: '(주)알리는사람들 (ALIGO)',
        bullets: [
          'Vanilla PHP 7 기반 비즈메시징 발송 API · 서버 개발·운영. 고객별 큐 분리와 가중 라운드 로빈으로 피크 시간 fairness를 개선, 재시도 지수 백오프로 queue 부담을 분산 (측정: 사내 발송 큐 대시보드).',
          '카카오 알림톡 · 친구톡 Open API를 제품화. 공통 템플릿 · 승인 상태 통합 대시보드로 외부 벤더 연동 공수와 CS 운영 부담을 절감.',
        ],
      },
      'studio-bloom': {
        company: '주식회사 스튜디오블룸',
        bullets: [
          'Wordpress Plugin 기반 P2P 대출 솔루션 · Paygate Seyfert Fintech API 연동(가상계좌 · 투자 · 상환 · 상태 확인) 개발. 트랜잭션 분리 + 멱등 응답 저장으로 금전 정합성 이슈 0건 운영 (측정: 일일 정합성 체크 배치).',
        ],
      },
      ninefive: {
        company: '나인파이브주식회사',
        bullets: [
          '제품 프로모션 페이지의 인터랙션을 prefers-reduced-motion 대응으로 구현하고 KWAH 기준 웹접근성 체크리스트를 병행. 체류 시간 · 스크롤 깊이 KPI와 접근성 기준을 동시에 충족.',
        ],
      },
      '4depth': {
        company: '(주)포뎁스',
        bullets: [
          '공공기관 · 지자체 웹사이트 퍼블리싱 · 웹접근성(WCAG) 대응 · 반응형 웹 구현. 의미론적 HTML과 ARIA 설계, 시안 단계의 접근성 체크리스트로 다수 프로젝트의 웹접근성 인증을 통과.',
        ],
      },
    },
  },
  projects: {
    sectionTitle: '프로젝트',
    eyebrow: 'Selected Work',
    description: '공개된 제품과, 비공개/종료된 주요 작업을 함께 정리.',
    viewSite: '사이트 열기',
    publicGroup: '공개 제품',
    internalGroup: '비공개 · 종료 프로젝트',
    status: {
      live: '운영 중',
      discontinued: '서비스 종료',
      internal: '비공개',
    },
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
          '간호사 커뮤니티 iOS/Android 앱. 위치 기반 소셜 피드와 컬렉션 통계 대시보드.',
      },
      'flfi-exchange': {
        title: 'FLFI 파생 거래소',
        desc: 'OKX Broker API 기반 크립토 파생상품 거래소. 실시간 시세 · 주문 체결 · 포지션 관리.',
      },
      'flfi-lending': {
        title: 'FLFI 핀테크 플랫폼',
        desc:
          'NestJS + Vue 3 + EKS 기반 서비스 아키텍처 전체 설계 · 무중단 Blue-Green · 이미지 CDN · Web3 DApp.',
      },
      'ontoh-vision': {
        title: 'Ontoh Vision',
        desc: 'CCTV(RTSP) 스트림 → AI 이벤트 감지 → Cloudflare R2 저장 워크플로우.',
      },
      'rootstone-trading': {
        title: 'Rootstone Trading',
        desc: 'Electron 데스크톱 기반 크립토 차익거래 · 마켓 메이킹 포트폴리오 시스템.',
      },
    },
  },
  skills: {
    sectionTitle: '기술',
    eyebrow: 'Craft',
    description:
      '수년간 반복 사용해 검증된 "시그니처 스택"과, 필요에 따라 선택해 쓰는 보조 도구로 나누어 정리.',
    signaturesTitle: '시그니처 스택',
    othersTitle: '그 외 익숙한 도구',
    signatures: [
      {
        key: 'backend-ts',
        title: 'Node.js · NestJS · TypeScript',
        note: 'SaaS · 핀테크 백엔드의 주력. RESTful · 이벤트 기반 · 멀티테넌시까지.',
        years: 11,
      },
      {
        key: 'cloud',
        title: 'AWS · Kubernetes · Terraform',
        note: 'EKS + Karpenter + ArgoCD 무중단 배포, IaC 기반 재현 가능한 인프라.',
        years: 6,
      },
      {
        key: 'data',
        title: 'PostgreSQL · Redis · RabbitMQ',
        note: '스키마 설계 · 인덱싱 · 캐싱 · 이벤트 큐로 읽기/쓰기 경로를 분리.',
        years: 8,
      },
      {
        key: 'ai',
        title: 'LLM · RAG · Vector DB',
        note: 'OpenAI API + LangChain + Pinecone 으로 RAG/에이전트 플로우 구축.',
        years: 2,
      },
      {
        key: 'blockchain',
        title: 'web3.js · Solidity · Ethers.js',
        note: 'DApp 프론트 + 온체인 이벤트 연동. 메타마스크 로그인 및 서명.',
        years: 3,
      },
    ],
    others: {
      backend: 'Express · Python(FastAPI) · Go · Spring Boot · PHP',
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
    sectionTitle: '글',
    eyebrow: 'Writing',
    empty: '첫 글을 준비 중입니다.',
    items: {
      'this-site': {
        title: '이 사이트를 만든 이야기 (준비 중)',
        summary: 'Next.js · 4개 언어 i18n · GitHub Pages로 만든 이력서 사이트의 설계 회고.',
        date: '2026-04',
      },
      'multi-tenant-saas': {
        title: '0→1 멀티테넌트 SaaS 설계 노트 (준비 중)',
        summary: 'tenancyId = workspaceId 패턴, Postgres RLS 고민, Stripe 구독 연결까지.',
        date: '2026-05',
      },
      'agent-orchestration': {
        title: 'LLM 에이전트 오케스트레이션: HIL·감사·롤백 (준비 중)',
        summary: '보험 도메인을 LLM 에이전트로 분해하면서 얻은 관측성·실패 설계 패턴.',
        date: '2026-06',
      },
      'blue-green': {
        title: '무중단 Blue-Green: 0초 다운타임 · 30초 롤백 (준비 중)',
        summary: 'EKS + Karpenter + ArgoCD + Helm 조합에서 배포 단계와 회귀 안전망 설계.',
        date: '2026-07',
      },
    },
  },
  reading: {
    sectionTitle: '요즘 참고',
    eyebrow: 'Reading · Tools',
    booksTitle: '읽고 있는 책',
    toolsTitle: '도구',
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
    headline: '다음 프로젝트를 함께 만들어봅시다.',
    cta: '새로운 기회나 협업을 환영합니다. 아래 채널로 편하게 연락 주세요.',
    locationLabel: '위치',
    locationValue: 'Seoul, Korea',
    emailLabel: '이메일',
    freelanceLabel: '프리랜서 소개',
    testimonials: '추천사 · 레퍼런스는 요청 시 제공합니다.',
  },
  credentials: {
    sectionTitle: '학력 · 자격',
    eyebrow: 'Credentials',
    educationTitle: '학력',
    certificationsTitle: '자격',
    education: {
      knou: {
        school: '한국방송통신대학교',
        degree: '컴퓨터과학과',
      },
      'cheonan-commercial': {
        school: '천안상업고등학교',
        degree: '컴퓨터 소프트웨어',
      },
    },
    certifications: {
      'toss-study': 'Toss 스터디클럽 1기',
      'info-processing': '정보처리기능사',
      'computer-graphics': '컴퓨터그래픽스운용기능사',
      'gtq-1': 'GTQ 1급',
      'itq-master': 'ITQ Master',
    },
  },
  footer: {
    updated: '마지막 업데이트',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
export type Dictionary = typeof dict;
