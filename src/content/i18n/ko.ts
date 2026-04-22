const dict = {
  meta: {
    brandName: 'Ted Ryu',
    title: '유재영 · Ted Ryu — 풀스택 개발자',
    siteName: 'Ted Ryu · 포트폴리오',
    description:
      '0→1 SaaS · AI 오케스트레이션 · 핀테크 시스템을 설계·운영하는 풀스택 개발자. 백엔드 아키텍처와 AWS/Kubernetes 인프라에 강점이 있습니다.',
  },
  nav: {
    about: '소개',
    manifesto: '작업 방식',
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
    skipToContent: '본문으로 건너뛰기',
    redirecting: '이동 중...',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
    primaryNavigation: '주요 메뉴',
    mobileNavigation: '모바일 메뉴',
    notFoundTitle: '페이지를 찾을 수 없습니다',
    notFoundDescription: '요청한 주소가 없거나 이동되었습니다.',
    backHome: '홈으로 이동',
    revealEmail: '이메일 주소 보기',
    printPage: '인쇄 / PDF',
    sameTeamLabel: '같은 팀 · CEO/CTO와 이어짐',
    commandPaletteOpen: '섹션 검색 열기',
    commandPaletteTitle: '섹션 이동',
    commandPaletteSearch: '섹션 검색...',
    commandPaletteEmpty: '일치하는 섹션이 없습니다',
    commandPaletteHeading: '이동',
  },
  employment: {
    fulltime: '정규직',
    freelance: '프리랜서',
    contract: '계약직',
  },
  hero: {
    name: '유재영',
    altName: 'Ted Ryu',
    role: '0→1 SaaS · AI 오케스트레이션 · 핀테크 시스템을 만드는 풀스택 개발자',
    mastheadLabel: '포트폴리오 · Vol. 01',
    tagline: '0→1 제품을 빠르게 만들고, 운영 가능한 시스템으로 다듬습니다.',
    proofLabel: '핵심 근거',
    ctaProjects: '주요 작업 보기',
    ctaContact: '연락하기',
    nowLabel: '지금',
    nowItems: [
      '크립토 마켓메이킹 시스템 · B2B 투자 대시보드',
      '미국 보험사향 AI 오케스트레이션 백엔드',
    ],
    keywordsLabel: '요즘 집중',
    availability: {
      open: '프리랜서 계약 가능 · 정규직 이직 오픈',
      limited: '한정 프로젝트만 가능',
      closed: '현재 신규 문의 비공개',
    },
    availabilityBadge: {
      open: '가능',
      limited: '한정',
      closed: '마감',
    },
  },
  about: {
    sectionTitle: '소개',
    eyebrow: 'About',
    impact:
      '처음부터 거창한 플랫폼을 말하기보다, 사람들이 실제로 쓰고 팀이 끝까지 운영할 수 있는 제품을 만드는 일을 오래 해왔습니다. 핀테크, 블록체인, SaaS, AI를 오가며 결국 반복해온 일은 복잡한 흐름을 단순한 시스템으로 정리하고, 프로토타입에서 프로덕션까지의 거리를 짧게 만드는 것이었습니다.',
    stat1Label: '실무 경력',
    stat1Suffix: '년+',
    stat2Label: '0→1 서비스',
    stat2Value: '6건+',
    stat3Label: '운영 인프라',
    stat3Value: 'AWS · K8s · Terraform',
    philosophyTitle: '일에 대한 태도',
    philosophy1:
      '이력서에는 숫자가 남지만, 제가 더 중요하게 보는 것은 그 숫자를 버티게 하는 구조입니다. 당황하지 않고 롤백할 수 있는 배포 체계, 실패 상황에서도 어긋나지 않는 결제와 정산 흐름, 사람이 마지막 판단을 할 수 있게 남겨두는 운영 화면 같은 것들을 꾸준히 설계해 왔습니다.',
    philosophy2:
      '링크드인과 이력서에는 역할과 숫자가 남고, GitHub와 글에는 사고방식이 남는다고 생각합니다. 그래서 공개된 코드와 문서도 무엇을 만들었는지만이 아니라 왜 그런 구조를 택했는지가 드러나길 바랍니다. 새 도구를 빠르게 받아들이되, 책임 경계와 관측 가능성은 더 엄격하게 챙기는 편입니다.',
    philosophy3:
      '최근에는 LLM과 에이전트를 제품과 백오피스에 연결하는 일을 자주 합니다. 다만 자동화를 과장하지 않고, 시스템이 안전하게 반복할 수 있는 일과 사람이 끝까지 판단해야 하는 일을 분리하는 쪽을 선호합니다. 빨리 만드는 것보다, 빨리 만들고도 오래 운영할 수 있는 상태를 남기는 개발자이고 싶습니다.',
    domainsTitle: '도메인 연차',
    domains: {
      fullstack: '풀스택 / 백엔드',
      fintech: '핀테크',
      blockchain: '블록체인',
      saas: 'SaaS',
      ai: 'AI / LLM',
    },
    outcomesTitle: '선별된 성과',
    outcomes: [
      {
        label: '배포 신뢰성',
        value: '500+ 무중단 배포',
        note:
          'EKS · ArgoCD 기반 Blue-Green 파이프라인으로 0초 다운타임, 30초 이내 롤백을 유지했습니다.',
      },
      {
        label: '실서비스 트래픽',
        value: '일 500만 건 메시징',
        note:
          '비즈메시징 API를 피크 3,000 RPS 환경에서 운영하며 큐 공정성과 재시도 전략을 안정화했습니다.',
      },
      {
        label: '운영 자동화',
        value: '20분 → 4분',
        note:
          '미국 보험사 파일럿에서 LLM 오케스트레이션으로 평균 처리시간을 약 80% 줄였습니다.',
      },
    ],
    yearsShort: '년+',
  },
  manifesto: {
    sectionTitle: 'AI 작업 방식',
    eyebrow: 'Approach',
    thesis:
      'AI로 속도를 높이되, 구조와 가드레일, 최종 검증은 사람이 책임져야 한다고 믿습니다.',
    mindsetTitle: 'Principles',
    actionsTitle: 'In practice',
    mindset: [
      {
        key: 'structure',
        title: '구조를 먼저 설계합니다',
        note:
          '에이전트와 자동화는 프롬프트보다 아키텍처, 가드레일, 감사 가능성이 먼저라고 봅니다.',
      },
      {
        key: 'verify',
        title: '도메인 지식으로 검증합니다',
        note:
          '알고 있는 만큼 더 정확히 요청할 수 있고, 더 빨리 결과를 걸러낼 수 있습니다.',
      },
    ],
    actions: [
      '반복 업무와 운영 병목을 자동화 가능한 워크플로우로 바꿉니다.',
      '작게 프로토타이핑하고, 지표와 사용자 피드백으로 다음 단계를 정합니다.',
      '새 도구는 빠르게 흡수하되, 프로덕션 품질 기준은 더 엄격하게 봅니다.',
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
    timelineLabel: '커리어 타임라인',
    timelineAriaLabel: '커리어 타임라인',
    earlyCareerLabel: '초기 경력 · {n}곳',
    items: {
      masblue: {
        company: 'Masblue (masblue.studio)',
        summary: '보험 백오피스를 에이전트 오케스트레이션 흐름으로 재구성',
        metric: '파일럿 50건 · 20분 → 4분',
        bullets: [
          '미국 보험사의 백오피스 워크플로우를 LLM 에이전트로 분해·오케스트레이션하는 백엔드 설계. 각 스텝에 도메인 가드레일과 Human-in-the-loop 체크포인트, 감사 로그를 삽입해 자동화와 규제 대응을 동시에 충족. 파일럿 50건 기준 평균 처리시간 20분 → 4분(약 80% 절감) 달성 (측정: 파일럿 처리시간 대시보드).',
          'LLM 에이전트 호출 전과정(입력·출력·중간 상태·비용·레이턴시)을 구조화 이벤트로 저장하고 OpenTelemetry로 추적. 실패 케이스의 감사·재현·롤백을 가능케 하여 규제 요구에 대응.',
        ],
      },
      onto: {
        company: '주식회사 온토 (Ontoh Vision)',
        summary: '온사이트 추론과 R2 업로드를 잇는 비전 파이프라인 설계',
        metric: '업로드 성공률 99.7% · 카메라 8대',
        bullets: [
          'CCTV(RTSP) → 온사이트 GPU AI 추론 → Cloudflare R2 업로드 엔드투엔드 파이프라인 설계. 네트워크 단절 시 최대 24시간 로컬 버퍼링과 재업로드로 업로드 성공률 99.7% 유지 (측정: Cloudflare Analytics, 7일 평균).',
          'Presigned URL + 콜백 기반 업로드 API 설계로 카메라 8대 동시 증설 시 백엔드 배포 0건 달성. 카메라 노드는 시크릿 기반 인증만으로 수평 확장 가능 (측정: 내부 배포 로그).',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        summary: '기관 고객용 트레이딩 리포트와 차익거래 엔진 운영',
        metric: '배치 성공률 99.9% · 일평균 3,000건',
        bullets: [
          'B2B 트레이딩 성과 리포트 시스템 설계·운영. 원장 분리 + 일/월 스냅샷 배치 + 검증체크섬 기반 PDF 파이프라인으로 15개 기관 고객 대상 배치 성공률 99.9% 유지 (측정: CloudWatch 배치 로그, 30일 평균).',
          'Electron + Node.js + PostgreSQL + Redis + WebSocket 기반 크립토 차익거래 · 마켓 메이킹 엔진 구축. 수신/전략/주문 이벤트 루프를 분리해 전략 실행 p95 레이턴시를 120ms → 45ms(약 63% 단축), 일평균 3,000건 체결 처리 (측정: 내부 latency 로그).',
        ],
      },
      dio: {
        company: 'DIO 플랫폼 프리랜서',
        summary: '여러 0→1 서비스에서 결제·정산·LLM 워크플로우 구현',
        metric: '8주 런칭 · 체크인 2,500건 · 파일럿 12명',
        bullets: [
          '(우연히) 지역 매칭 앱의 매칭 · 체크아웃 · 자동 정산 로직을 상태머신 + 이벤트 소싱으로 모델링해 8주 내 프로덕션 안착, 출시 2주 내 체크인 2,500건 기록 · 핵심 플로우 결함 0건으로 런칭 (측정: Sentry 로그).',
          '(링커) Toss PG · 카카오 알림톡을 Outbox 패턴으로 결합해 결제–알림 정합성을 확보. 재시도·DLQ 플로우로 주간 250건 매칭에서 결제 실패율 약 1%로 안정화 (측정: PG 웹훅 로그, 30일 평균).',
          '(Momentir) LLM 기반 고객 노트 요약 + 일정 자동 추출 파이프라인을 설계. 구조화된 결과를 설계사 승인 UI로 제공해 CRM 누락을 최소화, 파일럿 12명 기준 일일 운영 공수 약 30% 절감 (측정: 사용자 인터뷰).',
          '(히든젬) PostGIS + Redis 기반 위치·카테고리 피드 백엔드 설계. 인덱스·캐시 전략으로 메인 피드 p95 응답 시간을 180ms 이하로 안정화 (측정: APM p95, 7일 평균).',
        ],
      },
      dssolve: {
        company: '주식회사 디에스솔브',
        summary: '설정 기반으로 확장되는 Randibot 멀티테넌트 백엔드 구축',
        metric: '5개 워크스페이스 · 월 1,200건 ETL',
        bullets: [
          'Randibot 백엔드 MVP 개발 — RCMS · K-Startup 스크래핑 ETL + 멀티테넌트(tenancyId = workspaceId) 아키텍처로 신규 기관 온보딩을 설정 변경만으로 처리. 5개 워크스페이스를 코드 변경 없이 온보딩, 월 1,200건 ETL 파이프라인 안정 운영 (측정: 기관별 설정 관리 로그).',
        ],
      },
      miso: {
        company: 'Miso Inc.',
        summary: '레거시 이전을 포함한 Cognito 인증 체계 구축',
        metric: '12만 사용자 이전 · 실패율 0.5% 이하',
        bullets: [
          'AWS Cognito 기반 인증 시스템 구축. Cognito Lambda Trigger로 레거시 유저 12만명을 무중단 마이그레이션하고 OTP 인증 플로우를 CX CRM에 도입. 인증 실패율 0.5% 이하 유지 (측정: CloudWatch).',
        ],
      },
      flfi: {
        company: '주식회사 플피 (FLFI)',
        summary: '핀테크 플랫폼 백엔드와 배포 체계를 팀 단위로 재설계',
        metric: '500+ 무중단 배포 · 일 3회 배포',
        bullets: [
          'Backend Tech Lead — 풀스택 개발자 6명 팀 리딩 및 주니어 엔지니어 2명 멘토링. NestJS 백엔드 + Vue 3 프론트엔드 + AWS 인프라를 일관된 도메인 경계로 재설계하고 스프린트 속도와 배포 빈도 개선을 주도하며 코드리뷰 문화를 정착 (측정: Jira 사이클타임, GitOps 히스토리).',
          'EKS + Karpenter + ArgoCD + Helm 기반 무중단 Blue-Green 파이프라인 구축. 배포 빈도를 주 1회 → 일 3회로 개선, 2년간 500+ 회 무중단 배포, 다운타임 0초 · 롤백 30초 이내 달성 (측정: ArgoCD rollout 로그, 전수 조사).',
          'Lambda@Edge + CloudFront 이미지 CDN 설계. 온더플라이 리사이즈 + 지역 캐시로 이미지 p95 응답 시간을 420ms → 120ms(약 71% 단축), 일 50만 건 이미지 처리 (측정: CloudWatch RUM, 7일 평균).',
          'ethers.js 기반 Blockchain DApp 통합 구축 — 메타마스크 로그인, 트랜잭션 서명, 토큰 잔액 조회. 월렛 추상화 레이어와 이벤트 인덱서 분리로 월렛 연결 실패율 8% → 0.5%로 감소, 온체인 상태 동기화 지연을 안정화 (측정: 프론트 에러 로그, 인덱서 lag).',
          'OKX Broker API 기반 파생상품 크립토 거래소 시스템 구축 — WebSocket 시세 스트림 + REST 주문 API + Redis 포지션 스냅샷 분리로 체결 지연을 80ms(API RTT 수준)으로 안정화, 120+ 페어 지원 (측정: 내부 latency 로그). 이후 동일 팀(CEO/CTO)과 Rootstone 프리랜서 계약으로 이어짐.',
        ],
      },
      aligo: {
        company: '(주)알리는사람들 (ALIGO)',
        summary: '대규모 비즈메시징 API와 발송 큐 인프라 운영',
        metric: '일 500만 건 · 피크 3,000 RPS',
        bullets: [
          'Vanilla PHP 7 기반 비즈메시징 발송 API · 서버 개발·운영. 일 발송 500만 건 · 피크 3,000 RPS 환경에서 고객별 큐 분리와 가중 라운드 로빈으로 공정성을 개선하고, 재시도 지수 백오프로 큐 부담을 분산 (측정: 사내 발송 큐 대시보드).',
          '카카오 알림톡 · 친구톡 Open API를 제품화. 공통 템플릿 · 승인 상태 통합 대시보드로 외부 벤더 연동 공수와 CS 운영 부담을 절감.',
        ],
      },
      'studio-bloom': {
        company: '주식회사 스튜디오블룸',
        summary: 'P2P 대출 솔루션과 핀테크 정산 연동 개발',
        metric: '누적 12만 건 거래 · 정합성 사고 0건',
        bullets: [
          'WordPress Plugin 기반 P2P 대출 솔루션 · Paygate Seyfert Fintech API 연동(가상계좌 · 투자 · 상환 · 상태 확인) 개발. 트랜잭션 분리 + 멱등 응답 저장으로 2년간 누적 12만 건 거래 처리, 금전 정합성 사고 0건 운영 (측정: 일일 정합성 체크 배치).',
        ],
      },
      ninefive: {
        company: '나인파이브주식회사',
        summary: '프로모션 인터랙션과 접근성 기준을 함께 구현',
        metric: '체류·스크롤 KPI · 접근성 기준 충족',
        bullets: [
          '제품 프로모션 페이지의 인터랙션을 prefers-reduced-motion 대응으로 구현하고 KWAH 기준 웹접근성 체크리스트를 병행. 체류 시간 · 스크롤 깊이 KPI와 접근성 기준을 동시에 충족.',
        ],
      },
      '4depth': {
        company: '(주)포뎁스',
        summary: '공공 웹사이트 퍼블리싱과 웹접근성 대응',
        metric: '공공 프로젝트 14건 · K-WCAG 인증',
        bullets: [
          '공공기관 · 지자체 웹사이트 퍼블리싱 · 웹접근성(WCAG) 대응 · 반응형 웹 구현. 의미론적 HTML과 ARIA 설계, 시안 단계의 접근성 체크리스트로 14건의 공공기관 프로젝트 웹접근성 인증(K-WCAG)을 통과.',
        ],
      },
    },
  },
  projects: {
    sectionTitle: '프로젝트',
    eyebrow: 'Selected Work',
    description: '공개된 제품과, 비공개/종료된 주요 작업을 함께 정리.',
    viewSite: '사이트 열기',
    viewCaseStudy: '상세 보기',
    backToProjects: '프로젝트로 돌아가기',
    publicGroup: '공개 제품',
    publicGroupDesc: '프리랜서 포지션으로 작업한 서비스',
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
        proof: '5개 기관 워크스페이스 · 월 1,200건 ETL',
      },
      momentir: {
        title: 'Momentir',
        desc:
          'AI 기반 보험 GA 고객관리 SaaS. LLM으로 고객 노트를 요약하고 일정을 자동 등록하여 설계사의 운영 공수를 절감.',
        proof: '보험 설계사 파일럿 12명 · 운영 공수 약 30% 절감',
      },
      nursevillage: {
        title: 'Nursevillage',
        desc:
          '간호사 커뮤니티 iOS/Android 앱. 위치 기반 소셜 피드와 컬렉션 통계 대시보드.',
        proof: '간호사 커뮤니티 앱 운영',
      },
      'flfi-exchange': {
        title: 'FLFI 파생 거래소',
        desc: 'OKX Broker API 기반 크립토 파생상품 거래소. 실시간 시세 · 주문 체결 · 포지션 관리.',
        proof: '120+ 페어 · 체결 지연 약 80ms',
      },
      'flfi-lending': {
        title: 'FLFI 핀테크 플랫폼',
        desc:
          'NestJS + Vue 3 + EKS 기반 서비스 아키텍처 전체 설계 · 무중단 Blue-Green · 이미지 CDN · Web3 DApp.',
        proof: '500+ 무중단 배포 · 이미지 p95 420ms → 120ms',
      },
      'ontoh-vision': {
        title: 'Ontoh Vision',
        desc: 'CCTV(RTSP) 스트림 → AI 이벤트 감지 → Cloudflare R2 저장 워크플로우.',
        proof: '업로드 성공률 99.7% · 카메라 확장 시 백엔드 배포 없음',
      },
      'rootstone-trading': {
        title: 'Rootstone Trading',
        desc: 'Electron 데스크톱 기반 크립토 차익거래 · 마켓 메이킹 포트폴리오 시스템.',
        proof: '전략 p95 120ms → 45ms · 일평균 3,000건 체결',
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
    backToList: '목록으로',
    readTime: '{n}분 읽기',
    items: {
      'this-site': {
        title: '이 사이트를 만든 이야기',
        summary: 'Next.js · 4개 언어 i18n · GitHub Pages로 만든 이력서 사이트의 설계 회고.',
        date: '2026-04',
      },
      'multi-tenant-saas': {
        title: '0→1 멀티테넌트 SaaS 설계 노트',
        summary: 'tenancyId = workspaceId 패턴, Postgres RLS 고민, Stripe 구독 연결까지.',
        date: '2026-05',
      },
      'agent-orchestration': {
        title: 'LLM 에이전트 오케스트레이션: HIL·감사·롤백',
        summary: '보험 도메인을 LLM 에이전트로 분해하면서 얻은 관측성·실패 설계 패턴.',
        date: '2026-06',
      },
      'blue-green': {
        title: '무중단 Blue-Green: 0초 다운타임 · 30초 롤백',
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
    freelanceValue: 'heyted.dev',
    githubLabel: 'GitHub',
    githubValue: 'github.com/jaeyeong94',
    linkedinLabel: 'LinkedIn',
    linkedinValue: 'linkedin.com/in/jae-yeong-you',
    testimonials: '추천사 · 레퍼런스는 요청 시 제공합니다.',
  },
  footer: {
    credit: 'Ted Ryu · Jaeyeong You',
    updated: '마지막 업데이트',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
export type Dictionary = typeof dict;
