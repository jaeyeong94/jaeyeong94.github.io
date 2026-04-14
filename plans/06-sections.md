# 06 · Sections — Content Strategy

각 섹션이 전달해야 할 메시지와 우선순위.

## Hero

**목표**: 3초 안에 "누구이고, 뭘 하는 사람인가"를 인지시킨다.

- H1: **유재영 · Jaeyeong You · Ted Ryu**
- 직함: **풀스택 개발자 · 백엔드 중심 · 11년차**
- 태그라인 (ko): "비즈니스 성장을 주도하는 제품을 만듭니다."
- CTA:
  - 주: `연락하기` → #contact
  - 보조: `GitHub` / `LinkedIn` 아이콘 링크

## About

**목표**: 3초 안에 핵심 가치제안을 전달. 정성적 내러티브는 별도 서브섹션으로.

### 상단 — 간결 impact (2~3문장, ko)

> 핀테크 · 블록체인 · SaaS · AI 도메인에서 0→1 서비스를 구축 · 운영해 온 **11년차 풀스택 개발자**입니다. 백엔드 아키텍처와 AWS/Kubernetes 기반 인프라에 강점이 있으며, 최근에는 LLM · RAG · Web3 응용에 집중하고 있습니다.

### 하이라이트 통계 (3개)

- `11년+` 실무 경력 (자동 계산)
- `0→1` 서비스 구축 6건+
- `AWS / K8s / Terraform` 운영 인프라

### 하단 서브섹션 — Philosophy / Approach

> 좋은 개발자는 사용자 요구사항과 UX · 비즈니스 목표를 이해하고 해결하는 사람이라 믿습니다. 지표 기반 의사결정과 사용자 피드백 루프를 중시하며, 안정적인 서비스를 위한 클라우드 인프라와 SDLC 구축에 관심이 많습니다.
>
> 다양한 관점을 중시하고 혁신적인 솔루션으로 시장을 개척하는 팀을 찾고 있습니다. 체계적인 절차를 바탕으로 신속한 의사결정과 실행이 시장에 큰 영향을 미치는 서비스를 만드는 열쇠라고 생각합니다.

`<blockquote>` 스타일 + `~ 200~300자` 내러티브.

## Experience

**표시 순서**: 최신 → 과거

### 최신 프리랜서 (합친 묶음)

각 경력 카드는 **회사명 · 기간 · 고용형태 · 역할 · 2~4개 PAR 불릿 · 스택**.

**CLAUDE.md 페르소나를 따라 PAR 포맷으로 재작성**해야 하는 불릿:

- 거래소 백엔드 (Rootstone) — 대규모 트래픽, 실시간 매칭, 지갑/출금
- Ontoh Vision — CCTV(RTSP) → AI → Cloudflare R2 워크플로우
- FLFI Tech Lead — 팀 리딩 · NestJS + Vue 3 + K8s · Lambda@Edge CDN
- Aligo — PHP → Node.js 마이그레이션, 알림톡/카카오톡 API 개발
- Momentir — LLM 기반 노트 요약 + 일정 자동 등록 플로우
- Randibot — RCMS/K-Startup 스크래핑 ETL 파이프라인 · 멀티테넌시
- FLFI Exchange — OKX Broker API 파생상품 거래소

*"show older experiences"* 토글로 감추는 항목: 2019년 이전 프론트엔드 경력 (4depth, 나인파이브, Studio Bloom).

## Projects

**featured: true** 3건 (공개 가능):

### Randibot (randibot.com)
- RCMS · K-Startup 연구비 관리 SaaS
- 스택: Next.js · NestJS · PostgreSQL · Multi-tenancy
- 역할: 백엔드 설계 & MVP 개발
- 한줄: "국책 사업 예산집행 관련 데이터를 자동 수집 · 변환 · 저장하는 ETL 파이프라인과 멀티테넌트 SaaS 백엔드"

### Momentir (momentir.com)
- AI 기반 보험 GA 고객관리 SaaS
- 스택: Framer · LLM(OpenAI) · Toss PG · RESTful API
- 역할: 백엔드 및 AI 플로우 설계
- 한줄: "LLM 기반 고객 노트 요약과 일정 자동 등록 플로우로 설계사의 운영 공수를 절감한 CRM"

### Nursevillage (nursevillage.com)
- 간호사 커뮤니티 플랫폼 (iOS/Android)
- 스택: Next.js · React Native
- 한줄: "위치 기반 커뮤니티 + 컬렉션 통계 대시보드를 제공하는 소셜 앱"

## Skills

6개 카테고리 그리드 (카테고리 제목 + Chip).

- Backend · Frontend(+Mobile) · Database · Infra/DevOps · AI/LLM · Blockchain

## Interests

4개 항목:

1. **인프라 안정성** — SDLC · CI/CD · 무중단 배포 · 관측성
2. **AI/LLM 응용** — RAG 파이프라인 · Vector DB · Agent 워크플로우
3. **블록체인** — DApp · 스마트 컨트랙트 · Web3 프론트엔드
4. **네트워크·보안** — WebSocket/RTSP 실시간 · 인증/권한 설계

## Contact

`<address>` 블록 안에 다음 항목:

- **위치**: Seoul, Korea (한/영/중/일 현지화)
- **이메일**: `fksak80[at]gmail.com` — `<ObfuscatedEmail>` 로 렌더, 클릭 시 `mailto:` 실행
- **LinkedIn**: linkedin.com/in/jae-yeong-you
- **GitHub**: github.com/jaeyeong94
- **dio.so**: crew.dio.so/... (선택 노출)

**비노출**: 전화번호 (데이터에는 보존하되 UI에 렌더링하지 않음)

한 줄 CTA (ko): "새로운 기회나 협업을 환영합니다. 부담없이 연락주세요."

## 체크리스트

- [ ] Hero 카피 4개 언어 버전
- [ ] About 간결본(2~3문장) 번역
- [ ] Philosophy 내러티브(200~300자) 번역
- [ ] Experience 불릿 PAR 재작성 (CLAUDE.md 참조)
- [ ] Project 한줄 설명 번역
- [ ] Skill 6개 카테고리 제목 번역
- [ ] Contact CTA 번역 + 위치 표기 현지화 (Seoul/首尔/ソウル)
