# 07 · CI/CD — GitHub Pages

## 현재 워크플로우 문제점

- `.github/workflows/nextjs.yml` 은 npm/yarn 만 감지 → **pnpm 미지원**
- `next.config` 자동 주입(basePath)이 필요 없음 (user site)
- `actions/configure-pages@v5` 의 `static_site_generator: next` 는 편리하지만 자동 주입되는 basePath가 user site에선 불필요

## 수정 방향

pnpm 지원을 위해 전용 워크플로우로 재작성.

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"

      - uses: actions/configure-pages@v5

      - name: Install
        run: pnpm install --frozen-lockfile

      - name: Build
        env:
          NEXT_PUBLIC_SITE_URL: https://jaeyeong94.github.io
        run: pnpm build

      - name: Ensure .nojekyll
        run: touch out/.nojekyll

      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## 체크 포인트

### 1) basePath

`jaeyeong94.github.io` 는 **user/organization site** 이므로 basePath 불필요.  
만약 project site(`jaeyeong94.github.io/some-repo`)였다면 `basePath: '/some-repo'`, `assetPrefix` 도 필요.

### 2) `trailingSlash: true`

GitHub Pages는 디렉토리 → `index.html` 매핑이므로 `trailingSlash: true` 권장.

### 3) `.nojekyll`

GitHub Pages는 기본적으로 Jekyll 처리. Next.js `_next/` 같은 언더스코어 디렉토리를 서빙하려면 `.nojekyll` 이 필수. `public/.nojekyll` 로 커밋하거나 워크플로우에서 `touch`.

### 4) 커스텀 도메인 (추후)

커스텀 도메인 연결 시 `public/CNAME` 에 도메인 기입 + DNS `A` / `AAAA` / `CNAME` 설정.

### 5) PR 프리뷰

Pages 는 브랜치별 프리뷰 미지원. 필요하면 Cloudflare Pages / Vercel 프리뷰를 별도 연결하거나 `deploy-pages` action 에서 PR artifact 만 생성.

## Actions 활성화 조건

GitHub 저장소 설정:
- `Settings → Pages → Build and deployment → Source: **GitHub Actions**`
- 최초 1회 수동 설정 필요

## 체크리스트

- [ ] 워크플로우 pnpm 지원으로 교체
- [ ] `public/.nojekyll` 커밋
- [ ] `trailingSlash: true` 설정
- [ ] `output: 'export'` 검증
- [ ] Pages Source를 GitHub Actions 로 전환 (수동)
- [ ] 최초 배포 후 https://jaeyeong94.github.io 접속 확인
