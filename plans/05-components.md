# 05 · Components

## 레이아웃

### `<RootLayout>` (src/app/[locale]/layout.tsx)
- `<html lang={locale}>` 동적 설정
- 폰트 next/font 로딩
- 전역 메타데이터(title, description, OG) per locale
- `<Nav>` + `<main>` + `<Footer>` 배치

### `<Nav>`
- Props: `locale`, `dict`
- 상단 sticky, scroll 시 배경 blur
- 앵커: #about, #experience, #projects, #skills, #contact
- 모바일: 햄버거 → 전체화면 오버레이
- 우측: `<LocaleSwitcher>`

### `<LocaleSwitcher>`
- Props: `currentLocale`, `pathname`
- 드롭다운 listbox 패턴
- 선택 시 `/ko/...` → `/en/...` 치환 (pathname replace)

### `<Footer>`
- 저작권 · 소스코드 링크(GitHub) · last updated

## 섹션

### `<Hero>` (about 위)
- 좌: 이름 (H1, 대형) · 직함 · 한줄 태그라인 · CTA 버튼(2개: Contact, Resume PDF)
- 우 (md 이상): 그라데이션 오브 + 선택적 프로필 이미지
- 배경: subtle grid pattern or noise

### `<About>` (#about)
- **상단**: 간결한 impact 문장 2~3줄 (핵심 가치제안)
- **하이라이트 통계 카드 3개**: 경력 N년+ (자동 계산), 0→1 서비스 6건+, 운영 도메인 4개+
- **하단 서브섹션 `<Philosophy>`**: "일하는 방식 / Approach" — dio.so 자기소개 기반 정성적 내러티브 (인용구 스타일)

### `<Philosophy>` — About 내부 서브섹션
- `<blockquote>` + 본문 2~3문단
- 주제: 비즈니스-기술 정렬, 지표 기반 의사결정, 사용자 피드백 루프, SDLC 안정성

### `<Experience>` (#experience)
- 좌측 수직 타임라인 (연도 라벨 · dot)
- 각 Experience 카드:
  - 회사명 · 로고(선택) · 기간 · 고용형태 뱃지
  - 역할
  - 상세 불릿 (PAR 구조, 2~4개)
  - 기술 Chip
  - SubProject 섹션 접이식 (details/summary)
- "Show older" 토글로 2019년 이전 경력 접기

### `<Projects>` (#projects)
- `featured: true` 만 먼저 2~3개 크게, 나머지는 컴팩트 카드
- Randibot · Momentir · Nursevillage (공개 3건)
- 각 카드: 스크린샷 placeholder · 제목 · 한줄 설명 · 스택 Chip · 외부 링크

### `<Skills>` (#skills)
- **6개 카테고리** 가로 그리드 (Backend · Frontend · Database · Infra/DevOps · AI/LLM · Blockchain)
- 각 카테고리: 제목 + Chip 배열
- 숙련도는 별/점이 아닌 `expert / proficient / familiar` 텍스트 접미사로 subtle 표시

### `<Interests>`
- 2~4개 관심사 불릿 (인프라 안정화, AI/LLM 응용, 블록체인, 네트워크/보안 등)
- 작고 내러티브한 섹션

### `<Contact>` (#contact)
- 이메일 (mailto 난독화)
- GitHub / LinkedIn / dio.so 아이콘 링크
- "함께 일하고 싶으신가요?" 한 줄 CTA

## UI 원자 컴포넌트

### `<SectionHeading>`
- Props: `id`, `eyebrow`(선택 상단 라벨), `title`, `description`
- 구조: eyebrow · h2 · description

### `<Card>`
- Props: `as`, `className`, `children`
- 기본 스타일 적용, asChild 패턴 불필요 (단순 div)

### `<Chip>`
- Props: `children`, `variant`('default'|'accent'|'ghost')

### `<Timeline>`
- Props: `items` (Experience[])
- 내부에서 map + dot + 연결선

### `<GradientOrb>`
- Props: `className`, `from`, `to`, `size`
- 단순 절대 위치 blur 원

### `useReveal()` 훅
- DOM ref 반환 → 엘리먼트에 `.reveal` 클래스 적용
- IntersectionObserver 로 진입 감지 후 `data-visible="true"` 토글
- `prefers-reduced-motion` 시 즉시 표시 (CSS에서 처리)

### `<LocalizedDate>`
- Props: `value: DateString | 'present'`, `locale: Locale`
- `<time datetime={iso}>` 렌더 + `Intl.DateTimeFormat` 로 사람 읽기 쉬운 라벨

### `<ObfuscatedEmail>`
- Props: `user`, `domain`
- 렌더: `user[at]domain` 텍스트 + hover 시 `mailto:` 주입
- 스팸봇 긁기 방지

## 체크리스트

- [ ] 레이아웃 3종 (Nav · LocaleSwitcher · Footer)
- [ ] 섹션 7종 (Hero · About · Philosophy · Experience · Projects · Skills · Interests · Contact)
- [ ] UI 원자/유틸 8종 (SectionHeading · Card · Chip · Timeline · GradientOrb · useReveal · LocalizedDate · ObfuscatedEmail)
- [ ] prop 타입 strict
