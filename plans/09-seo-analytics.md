# 09 · SEO & Analytics

## 메타데이터 전략

Next.js `generateMetadata` 를 locale별로 구성.

```ts
// src/app/[locale]/layout.tsx
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await loadDict(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `https://jaeyeong94.github.io/${locale}/`,
      languages: {
        ko: '/ko/',
        en: '/en/',
        zh: '/zh/',
        ja: '/ja/',
        'x-default': '/ko/',
      },
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `https://jaeyeong94.github.io/${locale}/`,
      siteName: 'Ted Ryu · Portfolio',
      locale,
      type: 'profile',
      images: ['/og-image.png'],
    },
    twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  };
}
```

## 구조화 데이터 (JSON-LD)

`Person` schema.org 타입으로 경력/프로젝트 노출.

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jaeyeong You',
    alternateName: ['유재영', 'Ted Ryu'],
    jobTitle: 'Full-stack Developer',
    url: 'https://jaeyeong94.github.io',
    sameAs: [
      'https://linkedin.com/in/jae-yeong-you',
      'https://github.com/jaeyeong94',
    ],
  })
}} />
```

## robots.txt · sitemap.xml

Next.js 13+ 의 `robots.ts` / `sitemap.ts` 규약 사용.

```ts
// src/app/robots.ts
import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://jaeyeong94.github.io/sitemap.xml',
  };
}
```

```ts
// src/app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return ['ko','en','zh','ja'].map(l => ({
    url: `https://jaeyeong94.github.io/${l}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: l === 'ko' ? 1.0 : 0.8,
  }));
}
```

## OG 이미지

**결정**: 정적 이미지 단일 사용 → `public/og-image.png` (1200×630).  
`opengraph-image.tsx` 동적 생성은 static export 제약으로 사용 불가.

## 분석

최소한의 경량 옵션:

- **Plausible** / **Umami** — 쿠키 없음, GDPR 친화적
- **GA4** — 쿠키 배너 필요 but 기능 풍부

기본: **Plausible 스크립트 주입** (도메인 하나) — 선택 사항.

## 성능 목표

- Lighthouse 성능 ≥ 90 (모바일 기준)
- CLS < 0.1
- LCP < 2.5s
- 이미지: `public/` WebP 또는 AVIF, `<Image unoptimized>` (static export)
- 폰트: `next/font/local` 로 사전 로드 + `display: swap`

## 체크리스트

- [ ] locale별 meta/title/description
- [ ] hreflang alternates 연결
- [ ] JSON-LD Person
- [ ] `robots.ts` · `sitemap.ts`
- [ ] 1200×630 OG 이미지
- [ ] (선택) Plausible 연결
- [ ] Lighthouse 초기 벤치마크
