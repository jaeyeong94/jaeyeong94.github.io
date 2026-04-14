# 00 · Overview

## 목표

Ted Ryu(유재영)의 공개용 온라인 이력서 · 포트폴리오 사이트를 Next.js로 구축하고 GitHub Pages에 CI/CD 배포한다.

## 성공 기준

- [ ] `https://jaeyeong94.github.io` 에서 사이트가 정상 렌더링됨
- [ ] 한국어 · 영어 · 중국어 · 일본어 4개 언어 전환 동작
- [ ] LinkedIn · dio.so · Wanted 자료의 핵심 경력/프로젝트가 반영됨
- [ ] 모바일/태블릿/데스크톱 반응형 동작
- [ ] Lighthouse 성능 90+ · 접근성 95+ · SEO 95+
- [ ] GitHub Actions push 시 자동 빌드/배포
- [ ] 검색엔진 인덱싱을 위한 `robots.txt`, `sitemap.xml`, OpenGraph/Twitter 메타
- [ ] 이메일 · 전화번호 스팸 방지 처리

## 비 목표 (out of scope)

- 블로그 / CMS
- 다크모드 토글 (추후 확장)
- 댓글 / 방명록
- 애널리틱스 세부 대시보드 (GA4 태그만 삽입)

## 작업 단계 (문서 링크)

1. [01-project-setup.md](./01-project-setup.md) — Next.js · pnpm · Tailwind 초기화
2. [02-i18n-strategy.md](./02-i18n-strategy.md) — 다국어 라우팅/번들 설계
3. [03-content-model.md](./03-content-model.md) — 데이터 스키마 (Experience/Project/Skill)
4. [04-design-system.md](./04-design-system.md) — 타이포 · 컬러 · 스페이싱 · 모션
5. [05-components.md](./05-components.md) — 컴포넌트 트리
6. [06-sections.md](./06-sections.md) — 각 섹션의 콘텐츠 전략
7. [07-ci-cd.md](./07-ci-cd.md) — GitHub Actions + Pages
8. [08-translations.md](./08-translations.md) — 4개 언어 번역 작업 플로우
9. [09-seo-analytics.md](./09-seo-analytics.md) — 메타/OG/sitemap/robots/GA
10. [10-launch-checklist.md](./10-launch-checklist.md) — 출시 전 최종 점검

## 원본 자료

- `docs/linkedin.md` — LinkedIn 프로필 URL
- `docs/wanted.pdf` — Wanted 이력서 (가장 상세)
- `docs/dio.pdf` — dio.so 프리랜서 프로필 (최신 프로젝트 포함)

## 결정 로그 (Decision Log)

| # | 결정 | 근거 |
|---|------|------|
| D1 | TailwindCSS **v3.4** | 생태계 안정성, 이력서는 장기 유지보수 우선 |
| D2 | **framer-motion 미사용** · CSS + IntersectionObserver | 번들 경량, "과한 디자인 금지" 원칙 |
| D3 | 루트 `/` = **브라우저 언어 감지** 후 `/{locale}/` redirect | 자연스러운 글로벌 UX |
| D4 | **Projects 섹션** = 공개 URL 제품만, 그 외는 Experience 내부 | 중복 노출 방지 |
| D5 | Skills **6개 카테고리** (Mobile→Frontend 병합) | 경험 밀도에 맞춘 구성 |
| D6 | About = 간결 impact + **Philosophy 서브섹션** | 기능성 + 개성 양립 |
| D7 | PDF = **브라우저 인쇄만** (`@media print`) | 관리 비용 0 |
| D8 | 전화번호 **UI 비노출** / 이메일 난독화 / 위치(도시+국가)만 공개 | 개인정보 보호 |
| D9 | OG 이미지 = 정적 PNG (`public/og-image.png`) | static export 제약 |

