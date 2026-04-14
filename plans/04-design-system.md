# 04 · Design System

## 디자인 원칙

> "Resume 를 읽기에 과하지 않되, 비어있지 않고 볼륨감과 입체감이 있어야 한다."

1. **가독성 우선** — 폰트 크기, 라인 하이트, 컬러 대비(WCAG AA+) 보장
2. **절제된 장식** — 장식은 섹션 경계와 여백에 집중, 본문은 깨끗하게
3. **볼륨감** — 그라데이션 오브(blur), 섹션 배경 subtle layer, 카드 elevation
4. **입체감** — 스크롤 기반 fade/slide, hover lift, sticky 섹션 헤더
5. **인쇄 호환** — `@media print` 에서 장식 제거, 흑백 안정

## 컬러 팔레트

라이트 모드 기준 (추후 다크모드 대응 가능하도록 CSS variable로 관리).

```css
:root {
  /* Neutral */
  --bg:           oklch(99% 0.005 240);
  --bg-subtle:    oklch(97% 0.01 240);
  --surface:      oklch(100% 0 0);
  --border:       oklch(92% 0.01 240);
  --text:         oklch(22% 0.02 240);
  --text-muted:   oklch(48% 0.015 240);
  --text-subtle:  oklch(62% 0.01 240);

  /* Accent — deep indigo → teal gradient */
  --accent-1:     oklch(52% 0.18 265);   /* indigo */
  --accent-2:     oklch(68% 0.14 195);   /* teal */
  --accent-ring:  oklch(60% 0.15 240);

  /* Status */
  --success:      oklch(62% 0.14 160);
  --warning:      oklch(70% 0.14 75);
}
```

## 타이포그래피

| 용도 | 폰트 | 크기 | 굵기 |
|------|------|------|------|
| H1 (Hero) | Pretendard / Inter | `clamp(2.5rem, 5vw, 4.5rem)` | 700 |
| H2 (Section) | Pretendard / Inter | `clamp(1.75rem, 3vw, 2.5rem)` | 700 |
| H3 (Card Title) | Pretendard / Inter | `1.125rem` | 600 |
| Body | Pretendard / Inter | `1rem` | 400 |
| Caption | Pretendard / Inter | `0.875rem` | 400 |
| Mono (기술 태그) | JetBrains Mono | `0.75rem` | 500 |

- 한중일 폰트 fallback:
  - ko: Pretendard → Apple SD Gothic Neo → Noto Sans KR
  - en: Inter → system-ui
  - zh: Pretendard (CJK 포함) → PingFang SC → Noto Sans SC
  - ja: Pretendard → Hiragino Sans → Noto Sans JP

## 스페이싱

- 섹션 상하 패딩: `py-20 md:py-32`
- 컨테이너 max-width: `max-w-5xl` (이력서 집중)
- 섹션 간 간격: scroll-mt-24 로 앵커 오프셋

## 레이아웃

- **단일 페이지 스크롤** (랜딩형) + sticky nav
- Hero 는 `min-h-[85vh]`, 이후 섹션은 자연 높이
- 경력 섹션은 좌측 타임라인 dot + 우측 카드 (md 이상), 모바일은 단일 컬럼

## 장식 요소

### Gradient Orb

```tsx
// 섹션 배경에 배치, pointer-events-none, blur-3xl
<div className="absolute -z-10 h-96 w-96 rounded-full
                bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)]
                opacity-20 blur-3xl" />
```

### Card

- `rounded-2xl` · `border border-[--border]` · `bg-[--surface]`
- hover: `translate-y-[-2px]` + `shadow-lg`
- inner padding `p-6 md:p-8`

### Chip (기술 태그)

- `inline-flex px-2.5 py-1 rounded-full text-xs`
- 배경: `bg-[--bg-subtle]` · 텍스트: `text-[--text-muted]`
- hover 시 accent 테두리

## 모션 (CSS + IntersectionObserver)

외부 의존성 없이 경량으로 처리.

```css
/* globals.css */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
.reveal[data-visible="true"] { opacity: 1; transform: none; }
.reveal-stagger > * { transition-delay: calc(var(--i, 0) * 60ms); }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

```tsx
// src/hooks/useReveal.ts
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.dataset.visible = 'true'; io.disconnect(); } },
      { threshold: 0.1, rootMargin: '-10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
```

- 기본 패턴: 섹션 진입 시 24px 슬라이드업 + fade
- 스태거: 카드에 `style={{ '--i': idx }}` 로 0.06s 딜레이
- `prefers-reduced-motion: reduce` 시 즉시 표시

## 반응형 브레이크포인트

Tailwind 기본값 사용 (sm 640, md 768, lg 1024, xl 1280).

- `< 768`: nav 햄버거, 타임라인 단일 컬럼, hero 1단
- `768 ~ 1024`: 타임라인 2단 (dot + card), hero 2단
- `> 1024`: 최대 레이아웃, 여백 확장

## 인쇄 스타일

```css
@media print {
  .no-print { display: none; }
  .gradient-orb { display: none; }
  body { background: white; color: black; }
  a::after { content: " (" attr(href) ")"; font-size: 0.8em; }
}
```

## 접근성

- 모든 인터랙티브 요소 `focus-visible` 링 (`ring-2 ring-[--accent-ring]`)
- 이미지 `alt` 필수
- 섹션마다 `<section aria-labelledby>` + 제목 id
- LocaleSwitcher 는 `<button aria-haspopup="listbox">` 패턴

## 시맨틱 마크업 (이력서 특화)

- 각 경력 · 프로젝트는 `<article>`
- 모든 날짜는 `<time datetime="YYYY-MM">` 래핑
- Experience 섹션은 `<ol reversed>` (시간 역순 의미론)
- 회사명은 `<h3>`, 역할은 `<p class="role">`
- 스킬 카테고리는 `<h3>` + `<ul>`
- Contact 블록은 `<address>` 태그
- 스크린리더 테스트: VoiceOver / NVDA 에서 경력 순서 자연스러움 확인

## 체크리스트

- [ ] Pretendard + Inter 폰트 적용
- [ ] CSS variables 정의
- [ ] Tailwind theme extend (accent-1/2, 스페이싱)
- [ ] Card/Chip/SectionHeading/GradientOrb UI 원자 컴포넌트
- [ ] useReveal 훅 + `.reveal` 유틸 클래스
- [ ] prefers-reduced-motion 대응
- [ ] 인쇄 스타일 (이력서 PDF 저장용 최적화)
- [ ] 시맨틱 태그(time/article/address) 적용 확인
