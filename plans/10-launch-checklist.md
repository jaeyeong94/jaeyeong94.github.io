# 10 · Launch Checklist

## 빌드 · 배포

- [ ] `pnpm install` 성공
- [ ] `pnpm typecheck` pass
- [ ] `pnpm lint` pass
- [ ] `pnpm build` 성공 → `out/` 생성
- [ ] `out/.nojekyll` 존재
- [ ] `out/ko/index.html`, `out/en/index.html`, `out/zh/index.html`, `out/ja/index.html` 생성
- [ ] `out/404.html` 생성 (Next `not-found.tsx` → 정적 export)
- [ ] GitHub Actions 워크플로우 실행 성공
- [ ] https://jaeyeong94.github.io 접속 시 브라우저 언어에 따라 `/{ko|en|zh|ja}/` 로 리디렉트 동작
- [ ] Footer에 Last Updated (빌드 시점 `process.env.BUILD_TIME` 주입) 표시

## 콘텐츠

- [ ] 모든 경력 기간 정확 (Wanted/dio 자료와 대조)
- [ ] 모든 프로젝트 URL 유효
- [ ] PAR 구조로 재작성된 핵심 불릿 4~5개 이상
- [ ] 4개 언어 번역 완료 및 검수
- [ ] **이력서 PDF: 브라우저 인쇄(Cmd+P)만 지원** — 별도 파일 업로드 없음
- [ ] `@media print` 스타일로 인쇄 시 깔끔한 이력서 레이아웃 확인

## 개인정보 노출 정책

- [ ] 이메일: `ObfuscatedEmail` 로만 렌더링 (raw 텍스트 · `mailto:` 링크 직접 노출 금지)
- [ ] 전화번호: **UI 미노출** (데이터에만 보존, JSON-LD에도 포함 금지)
- [ ] 위치: 도시/국가 수준만 (`Seoul, Korea`), 상세 주소 금지
- [ ] `docs/` 원본 PDF는 `.gitignore` 검토 (이미 커밋되어 있다면 공개 범위 재검토)

## UX

- [ ] LocaleSwitcher 동작 (4개 언어 왕복)
- [ ] Nav 앵커 스크롤 offset 정상
- [ ] 모바일 햄버거 메뉴 동작
- [ ] 모든 외부 링크 `target="_blank" rel="noopener noreferrer"`
- [ ] 이메일 난독화 (mailto는 클릭 가능, 단 소스에 노출 최소화)
- [ ] hover/focus/visited 상태 시각화
- [ ] `prefers-reduced-motion` 테스트

## 반응형

- [ ] 320px 뷰포트 (iPhone SE)
- [ ] 768px 뷰포트 (iPad)
- [ ] 1440px 뷰포트 (Laptop)
- [ ] 세로 방향 (스크롤 길이 적절)

## 성능

- [ ] Lighthouse (모바일) 성능 ≥ 90
- [ ] LCP < 2.5s
- [ ] 이미지 최적화 (WebP/AVIF)
- [ ] 폰트 서브셋 or `display: swap`
- [ ] 번들 사이즈 체크 (`next build` 출력)

## 접근성

- [ ] Lighthouse 접근성 ≥ 95
- [ ] 키보드만으로 모든 인터랙션 접근 가능
- [ ] 모든 이미지 alt
- [ ] 색 대비 WCAG AA 이상
- [ ] 스크린리더로 구조 순서 확인 (VoiceOver / NVDA)

## SEO

- [ ] 4개 locale에 대한 `<title>`, `<meta description>` 차등화
- [ ] hreflang alternates
- [ ] JSON-LD Person
- [ ] sitemap.xml 접근 가능
- [ ] robots.txt 접근 가능
- [ ] Google Search Console 사이트맵 제출 (선택)
- [ ] OG 이미지 LinkedIn/Twitter preview 정상

## 보안 · 프라이버시

- [ ] 이메일 · 전화번호 노출 범위 확인
- [ ] 비공개 정보 저장소에 미포함 (docs/ 제외 검토)
- [ ] HTTPS 강제 (GitHub Pages 기본)

## 문서

- [ ] README.md 업데이트 (로컬 개발 방법)
- [ ] CLAUDE.md 최신화
- [ ] plans/ 문서와 실제 구현 일치 여부 검토

## 배포 이후

- [ ] 본인 디바이스 (모바일/PC) 에서 실제 접속 확인
- [ ] 다른 사람 (브라우저 캐시 없는 상태) 접속 공유
- [ ] LinkedIn · dio.so 프로필에 사이트 링크 추가
- [ ] 이슈 템플릿 / CODEOWNERS (선택)
