# 02 · i18n Strategy

## 요구사항

- 지원 언어: 한국어(ko) · 영어(en) · 중국어 간체(zh) · 일본어(ja)
- 기본 언어: **ko**
- URL 구조: `/ko/`, `/en/`, `/zh/`, `/ja/`
- Static export(SSG) 호환

## 라이브러리 선택

**결론: next-intl 도입하지 않고 경량 자체 구현**

### 이유

- next-intl은 middleware 기반 자동 redirect 기능이 필요할 때 강점. Static export 환경에서는 제약이 있음
- 이력서 사이트는 단일 페이지 수준 규모라 번들 오버헤드 최소화가 더 유리
- 타입 안전성은 TypeScript literal union + `keyof` 로 확보 가능

### 구조

```ts
// src/lib/i18n.ts
export const locales = ['ko', 'en', 'zh', 'ja'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'ko';

export const localeLabels: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  zh: '简体中文',
  ja: '日本語',
};
```

```ts
// src/content/i18n/ko.ts (예시)
export default {
  nav: { about: '소개', experience: '경력', projects: '프로젝트', skills: '기술', contact: '연락처' },
  hero: {
    title: '유재영',
    role: '풀스택 개발자 · 백엔드 중심',
    tagline: '비즈니스 성장을 주도하는 제품을 만듭니다.',
    cta: '이력서 다운로드',
  },
  // ...
} as const;

export type Dictionary = typeof import('./ko').default;
```

`en/zh/ja.ts` 는 `ko.ts` 의 타입(`Dictionary`)을 `satisfies` 로 강제하여 키 누락을 컴파일 타임에 감지한다.

## 라우팅

```
src/app/
├─ layout.tsx                  ← 최소 패스스루. <html lang="ko"> 기본 + body 렌더
├─ page.tsx                    ← / : 브라우저 언어 감지 후 matching locale로 replace
└─ [locale]/
   ├─ layout.tsx               ← [locale] 진입 시 <html lang> 를 Client에서 갱신, 딕셔너리 주입
   └─ page.tsx
```

### generateStaticParams

```ts
// src/app/[locale]/page.tsx
import { locales } from '@/lib/i18n';
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}
```

### 루트 / 리디렉트 (브라우저 언어 감지)

`output: 'export'` 환경에서 서버 redirect 불가 → 클라이언트에서 언어 감지.

```tsx
// src/app/page.tsx — Client Component
'use client';
import { useEffect } from 'react';

const SUPPORTED = ['ko', 'en', 'zh', 'ja'] as const;
const FALLBACK = 'ko';

function detectLocale(): string {
  if (typeof navigator === 'undefined') return FALLBACK;
  for (const lang of navigator.languages ?? [navigator.language]) {
    const base = lang.toLowerCase().split('-')[0];
    if (SUPPORTED.includes(base as any)) return base;
  }
  return FALLBACK;
}

export default function RootPage() {
  useEffect(() => {
    location.replace(`/${detectLocale()}/`);
  }, []);
  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=/${FALLBACK}/`} />
      </noscript>
      <p style={{ padding: 24 }}>Redirecting…</p>
    </>
  );
}
```

SEO 보조: 정적 HTML 내 `<link rel="alternate" hreflang>` 는 `[locale]/layout` 의 `metadata.alternates.languages` 에서 생성.

### `<html lang>` 동적화

루트 `app/layout.tsx` 는 `lang="ko"` 로 기본 설정. `[locale]/layout.tsx` 에서 클라이언트 `useEffect` 로 `document.documentElement.lang = locale` 갱신 (정적 HTML에서는 `<script>` 로 즉시 주입):

```tsx
// src/app/[locale]/layout.tsx
export default async function LocaleLayout({ params, children }) {
  const { locale } = await params;
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)}`
        }}
      />
      {children}
    </>
  );
}
```

## LocaleSwitcher UX

- Nav 우측에 드롭다운 (현재 locale 표시 + 전체 목록)
- 현재 경로의 섹션 앵커(`#experience`)가 있다면 유지
- 모바일에서는 햄버거 메뉴 안에 포함

## 번역 작업 원칙

1. `ko.ts` 가 **SoT(single source of truth)** — 먼저 작성
2. `en/zh/ja` 는 Claude가 초기 번역 → 사용자 검수
3. 고유명사(회사명, 프로젝트명)는 원어 유지 (예: "주식회사 플피" → "FLFI" for en/ja, "FLFI（플피）" for zh)
4. 날짜는 locale에 맞춰 포매팅 (`Intl.DateTimeFormat`)
5. 숫자 단위는 현지화 (1년 1개월 → 1 yr 1 mo / 1年1ヶ月 / 1年1个月)

## 체크리스트

- [ ] `Locale` 타입 정의
- [ ] 4개 딕셔너리 파일 작성 및 타입 제약
- [ ] `[locale]` 동적 세그먼트 구축
- [ ] `generateStaticParams` 등록
- [ ] 루트 리디렉트 페이지
- [ ] `LocaleSwitcher` 컴포넌트
- [ ] `<html lang>` 동적 설정
