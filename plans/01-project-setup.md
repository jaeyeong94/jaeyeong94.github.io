# 01 · Project Setup

## 결정 사항

| 항목 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | Next.js 15 (App Router) | 유지보수 편의, Server Components, 정적 export 지원 |
| 패키지 매니저 | pnpm | 디스크 효율, 빠른 설치 |
| 빌드 모드 | `output: 'export'` (SSG) | GitHub Pages 정적 호스팅 |
| 언어 | TypeScript strict | 타입 안정성 |
| 스타일 | TailwindCSS **v3.4** | 안정성·생태계 호환 우선 |
| 아이콘 | lucide-react | 가볍고 일관된 디자인 |
| 폰트 | next/font (Pretendard, Inter) | 한글 가독성 + 라틴 |
| 애니메이션 | **CSS @keyframes + IntersectionObserver 커스텀 훅** | 외부 의존성 0, 번들 절감 |
| 린트 | ESLint + Prettier | Next 기본 config |

## 디렉토리 구조

```
jaeyeong94.github.io/
├─ src/
│  ├─ app/
│  │  ├─ [locale]/
│  │  │  ├─ layout.tsx           ← <html lang={locale}>, 딕셔너리 주입
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx              ← 최소 패스스루 (Next 규약상 필수)
│  │  ├─ page.tsx                ← 루트 / : 브라우저 언어 감지 후 redirect
│  │  ├─ robots.ts
│  │  └─ sitemap.ts
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Nav.tsx
│  │  │  ├─ LocaleSwitcher.tsx
│  │  │  └─ Footer.tsx
│  │  ├─ sections/
│  │  │  ├─ Hero.tsx
│  │  │  ├─ About.tsx
│  │  │  ├─ Experience.tsx
│  │  │  ├─ Projects.tsx
│  │  │  ├─ Skills.tsx
│  │  │  ├─ Interests.tsx
│  │  │  └─ Contact.tsx
│  │  └─ ui/
│  │     ├─ SectionHeading.tsx
│  │     ├─ Card.tsx
│  │     ├─ Chip.tsx
│  │     ├─ Timeline.tsx
│  │     └─ GradientOrb.tsx
│  ├─ content/
│  │  ├─ resume.ts               ← 구조화된 원본 데이터 (ID 기반)
│  │  └─ i18n/
│  │     ├─ ko.ts
│  │     ├─ en.ts
│  │     ├─ zh.ts
│  │     └─ ja.ts
│  ├─ lib/
│  │  ├─ i18n.ts                 ← locale 타입, 딕셔너리 로더
│  │  └─ utils.ts                ← cn() 등
│  └─ styles/
│     └─ globals.css
├─ public/
│  ├─ favicon.ico
│  ├─ og-image.png
│  └─ .nojekyll                  ← GitHub Pages Jekyll 비활성
├─ plans/                        ← 이 폴더
├─ docs/                         ← 원본 자료
├─ .github/workflows/nextjs.yml
├─ next.config.ts
├─ tsconfig.json
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ package.json
├─ pnpm-lock.yaml
├─ .gitignore
├─ .prettierrc
├─ README.md
└─ CLAUDE.md
```

## next.config.ts 핵심 설정

```ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },   // static export 필수
  trailingSlash: true,              // GitHub Pages 호환
  // jaeyeong94.github.io 는 user site 이므로 basePath 불필요
};
```

## package.json scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}
```

## 설치 순서

```bash
# 1. Next.js 스캐폴딩 (pnpm). Tailwind는 v4가 기본이므로 별도 강제 설치
pnpm create next-app@latest . --ts --app --src-dir --eslint --import-alias "@/*" --use-pnpm --no-turbo
# Tailwind v3 강제
pnpm remove tailwindcss @tailwindcss/postcss 2>/dev/null || true
pnpm add -D tailwindcss@^3.4 postcss autoprefixer
pnpm dlx tailwindcss init -p

# 2. 런타임 의존성 (애니메이션 라이브러리 없음 — CSS + IntersectionObserver)
pnpm add lucide-react clsx tailwind-merge

# 3. dev 의존성
pnpm add -D prettier prettier-plugin-tailwindcss
```

## 체크리스트

- [ ] Next.js 프로젝트 생성
- [ ] `.nojekyll` 파일 추가
- [ ] `output: 'export'` 설정
- [ ] Pretendard 웹폰트 `@next/font` 로딩
- [ ] `tsconfig.json` strict 모드
- [ ] `.gitignore` 에 `node_modules`, `.next`, `out/` 추가
- [ ] 최초 `pnpm build` 로 `out/` 생성 확인
