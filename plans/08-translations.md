# 08 · Translations

## 대상 언어

| Locale | 이름 | 폰트 우선 | 날짜 포맷 | 비고 |
|--------|------|-----------|-----------|------|
| ko | 한국어 | Pretendard | `2023.11 ~ 현재` | SoT |
| en | English | Inter | `Nov 2023 — Present` | 경어 중립 |
| zh | 简体中文 | Pretendard CJK / PingFang SC | `2023年11月 — 至今` | 简体, 기술용어는 영문 병기 |
| ja | 日本語 | Pretendard CJK / Hiragino | `2023年11月 〜 現在` | 丁寧語(です/ます) |

## 번역 작업 플로우

1. **한국어 SoT 확정** — `ko.ts` 에 모든 키 채움
2. **타입 파생** — `type Dictionary = typeof koDict` 생성
3. **번역 draft** — Claude가 en/zh/ja 초벌 번역 (같은 키 구조 유지)
4. **검수** — 사용자가 언어별 뉘앙스 확인
5. **반복** — 이후 텍스트 변경 시 ko → 타 언어 순서

## 스타일 가이드

### 공통

- 회사명은 원어 유지, 괄호로 로마자 추가 (단 한번만)
  - ko: `주식회사 플피(FLFI)`
  - en: `FLFI`
  - zh: `FLFI`
  - ja: `FLFI`
- 기술명은 원문 유지 (`Next.js`, `Kubernetes` 등 번역하지 않음)
- 제품명(Randibot · Momentir · Nursevillage) 그대로

### 한국어 → 영어

- 기능 나열보다 **성과 중심 동사** 사용: `Led`, `Architected`, `Shipped`, `Optimized`
- 수치 그대로 유지 (p95 180ms 등)
- 경어 제거, 3인칭 표현 지양, 문장 주어 `I` 생략 후 동사 원형 시작

### 한국어 → 중국어 (간체)

- 문장 끝 `。` 사용
- 기술 번역은 하지 않음 (영문 그대로)
- 일반적 축약형: `技术栈` / `后端` / `全栈`

### 한국어 → 일본어

- 丁寧語(です/ます) 유지
- 조사 주의 (は/が/を/に)
- 카타카나 차용어 우선 (`バックエンド`, `フロントエンド`)

## 번역 대상 카테고리

### 1) UI 라벨

nav, CTA 버튼, 섹션 제목, 날짜 라벨 (`present`, `~`, `·`)

### 2) Hero 카피

직함, 태그라인, CTA

### 3) About 본문

4~5문장 self-intro

### 4) Experience

- 회사 한줄 소개 (선택)
- 역할 PAR 불릿 (각 2~4개)

### 5) Project

- 한줄 설명
- 스택 라벨 (언어명 자체는 번역 X)

### 6) Skill 카테고리 제목

Backend / Frontend / Mobile / Database / Infra & DevOps / AI & LLM / Blockchain

### 7) Interest 항목 제목 + 한줄 설명

### 8) Contact CTA

"함께 일하고 싶으신가요?" 등

### 9) Footer

"Built with Next.js" 등 crediting

## 샘플: 섹션 라벨

| key | ko | en | zh | ja |
|-----|-----|-----|-----|-----|
| nav.about | 소개 | About | 关于 | 紹介 |
| nav.experience | 경력 | Experience | 经历 | 経歴 |
| nav.projects | 프로젝트 | Projects | 项目 | プロジェクト |
| nav.skills | 기술 | Skills | 技术栈 | スキル |
| nav.contact | 연락처 | Contact | 联系方式 | お問い合わせ |
| common.present | 현재 | Present | 至今 | 現在 |
| common.years | 년 | yr | 年 | 年 |
| common.months | 개월 | mo | 个月 | ヶ月 |

## 체크리스트

- [ ] `ko.ts` SoT 완성
- [ ] Dictionary 타입 export
- [ ] `en.ts` · `zh.ts` · `ja.ts` 1차 번역
- [ ] 날짜 포매터 4개 locale 대응
- [ ] HTML `<html lang>` 속성 연결
- [ ] 폰트 fallback 테스트 (한/중/일 동시 렌더링 확인)
