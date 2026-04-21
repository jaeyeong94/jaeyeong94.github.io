# jaeyeong94.github.io

[`jaeyeong.me`](https://jaeyeong.me)의 소스 저장소입니다.  
Next.js 16 기반의 정적 export 포트폴리오이며, 온라인 이력서 · 케이스스터디 · 글 아카이브를 함께 운영합니다.

## 현재 구성

- **URL**: [https://jaeyeong.me](https://jaeyeong.me)
- **Stack**: Next.js 16 · React 19 · TypeScript · Tailwind CSS 3 · pnpm
- **배포**: GitHub Actions → GitHub Pages
- **언어**: `ko` · `en` · `ja` · `zh`
- **특징**:
  - 하드코딩 문자열 없는 locale 사전 기반 i18n
  - 프로젝트/글 상세 SEO 메타데이터 + JSON-LD
  - 상세 페이지별 Open Graph / Twitter 이미지 정적 생성
  - 브라우저 print 기반 PDF 이력서 출력
  - export smoke test + Playwright E2E + 선택적 시각 회귀 테스트

## 로컬 개발

```bash
pnpm install
pnpm dev
```

## 검증 명령

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm test:smoke
pnpm test:e2e:smoke
pnpm test:e2e:visual
pnpm qa:print
```

참고:

- `pnpm build` 후 `out/` 기준으로 메타 이미지 경로를 안정화합니다.
- `pnpm test:e2e:visual`은 현재 macOS 스냅샷 기준으로 유지합니다.
- `pnpm qa:print`는 `ko` / `en` 홈을 실제 PDF로 생성해 `test-results/print/`에 저장합니다.

## 디렉터리

- `src/app/`: App Router 라우트
- `src/components/`: 섹션/레이아웃/UI 컴포넌트
- `src/content/`: i18n 사전, 프로젝트/글 콘텐츠, 이력 데이터
- `src/lib/`: SEO, 날짜, OG 이미지 헬퍼
- `tests/`: export smoke, E2E, 시각 회귀 테스트
- `plans/`: 구현 메모 및 계획
