import type { Dictionary } from './ko';

const dict: Dictionary = {
  meta: {
    title: 'Ted Ryu — フルスタック開発者',
    description:
      'フィンテック・ブロックチェーン・SaaS・AI領域で0→1サービスを構築してきた11年目のフルスタック開発者。',
  },
  nav: {
    about: '紹介',
    experience: '経歴',
    projects: 'プロジェクト',
    skills: 'スキル',
    writing: '記事',
    contact: 'お問い合わせ',
  },
  common: {
    present: '現在',
    years: '年',
    months: 'ヶ月',
    showOlder: '過去の経歴を表示',
    hideOlder: '閉じる',
    comingSoon: '準備中',
    readMore: '続きを読む',
    theme: 'テーマ',
    themeLight: 'ライト',
    themeDark: 'ダーク',
    themeSystem: 'システム',
  },
  employment: {
    fulltime: '正社員',
    freelance: 'フリーランス',
    contract: '契約',
  },
  hero: {
    name: 'Ted Ryu',
    altName: 'ユ・ジェヨン',
    role: 'フルスタック開発者 · バックエンド中心',
    tagline: 'ビジネスの成長を牽引するプロダクトを作ります。',
    ctaContact: 'お問い合わせ',
    nowLabel: 'Now',
    nowValue: '米国シリコンバレーの企業と、保険会社向けSaaSを開発しています。',
    keywordsLabel: '最近の注力分野',
  },
  about: {
    sectionTitle: '紹介',
    eyebrow: 'About',
    impact:
      'フィンテック・ブロックチェーン・SaaS・AI領域で0→1サービスを構築・運営してきたフルスタック開発者です。バックエンドアーキテクチャとAWS/Kubernetesベースのインフラに強みがあり、最近はLLM・RAG・Web3の応用に注力しています。',
    stat1Label: '実務経験',
    stat1Suffix: '年+',
    stat2Label: '0→1サービス',
    stat2Value: '6件+',
    stat3Label: '運用インフラ',
    stat3Value: 'AWS · K8s · Terraform',
    philosophyTitle: '働き方',
    philosophy1:
      '優れたエンジニアとは、ユーザーの要求とUX、ビジネス目標を理解して解決する人だと考えます。指標ベースの意思決定とフィードバックループを重視し、安定したサービスのためのクラウドインフラとSDLCの構築に関心があります。',
    philosophy2:
      '多様な視点を重視し、革新的なソリューションで市場を切り拓くチームを探しています。体系的なプロセスに基づく迅速な意思決定と実行こそ、市場に大きな影響を与えるプロダクトを作る鍵だと考えます。',
  },
  experience: {
    sectionTitle: '経歴',
    eyebrow: 'Experience',
    items: {
      onto: {
        company: '株式会社オント (Ontoh Vision)',
        bullets: [
          'CCTV(RTSP)→オンサイトGPU推論→Cloudflare R2のエンドツーエンドパイプラインを設計。ネットワーク断絶時はローカルキューで最大24時間バッファしリカバリアップロードを実装(指標:Cloudflare Analyticsのアップロード成功率)。',
          'presigned URLベースのアップロードAPIとRESTエンドポイントで、N台のカメラを水平スケール可能に(ベンチマーク:[k6]を予定)。',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          'B2B顧客向けのトレーディング成果レポートシステムを設計・運用。日次集計された収益率をポータルとPDFで配信。',
          'Electron + Node.js + PostgreSQL + Redis基盤で暗号資産アービトラージ/マーケットメイキングエンジンを開発。既存ベースライン比で戦略実行レイテンシを短縮(指標:内部p95レイテンシログ)。',
        ],
      },
      dio: {
        company: 'DIO フリーランスプラットフォーム',
        bullets: [
          '(Woo-Yeon-Hee) 位置ベースのミーティングアプリのバックエンドMVPを開発 — マッチングと自動精算のコアロジックを8週で本番投入。',
          '(Linker) 毎週実行される1:1マッチングのフルスタックMVP — Toss PG・カカオアラートトーク連携で決済失敗率を約1%に安定化。',
          '(Momentir) 保険GA向けCRM — LLMによる顧客ノート要約と自動スケジュール登録。パイロット参加者の日々の運用工数が体感で約30%削減(方法:パイロットインタビュー、n=12)。',
          '(Hidden Gem) コレクター向けiOS/Androidコミュニティアプリの位置ベースソーシャルフィードとコレクション分析バックエンド。',
        ],
      },
      dssolve: {
        company: 'DS Solve',
        bullets: [
          'RandibotバックエンドMVPを開発 — RCMS / K-StartupスクレイピングETL + マルチテナント(tenancyId = workspaceId)設計で、新規機関のオンボーディングを設定変更だけで完了可能に。',
        ],
      },
      'flfi-exchange': {
        company: 'FLFI · 取引所チーム',
        bullets: [
          'OKX Broker APIをベースに暗号資産デリバティブ取引所を構築 — マーケット配信、注文執行、ポジション管理モジュールを実装。',
        ],
      },
      miso: {
        company: 'Miso · プラットフォームチーム',
        bullets: [
          'AWS Cognitoベースの認証システムを構築、旧ユーザーを無停止移行。CX CRMにOTPを導入(指標:CloudWatch認証失敗率 < 0.5%)。',
        ],
      },
      'flfi-lead': {
        company: 'FLFI',
        bullets: [
          'バックエンドTech Lead — NestJSバックエンド、Vue 3フロントエンド、AWSインフラを一貫して設計しつつ、開発チームをリード(ベロシティとコードレビュー文化)。',
          'EKS + Karpenter + ArgoCD + HelmでBlue-Green無停止パイプラインを構築 — デプロイ停止0秒、ロールバック30秒以内(指標:ArgoCD rolloutログ)。',
          'Lambda@Edge + CloudFront画像CDN(アップロード・キャッシュ・オンザフライリサイズ)をリリース。画像のp95をオリジン直結比で大幅短縮(指標:CloudWatch RUM、7日平均)。',
          'web3.js / Ethers.jsベースのBlockchain DAppをリリース — MetaMaskログイン・署名・残高照会、デプロイ済みコントラクトのオンチェーンイベント発行と統合。',
        ],
      },
      aligo: {
        company: 'ALIGO',
        bullets: [
          'Vanilla PHP 7のメッセージ送信サーバー/APIを運用 — ピーク時間のスループットとリトライキューの公平性を改善(指標:社内送信ダッシュボード)。',
          'カカオアラートトーク/フレンドトークOpen API機能をプロダクト化し、ベンダー連携とCXツールの構築工数を削減。',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        bullets: [
          'WordpressプラグインでP2P貸付ソリューションを開発、Paygate Seyfert Fintech API(仮想口座・投資・返済・ステータス)と連携。',
        ],
      },
      ninefive: {
        company: 'Ninefive',
        bullets: [
          'プロダクトプロモーションページのインタラクションとWebアクセシビリティ(KWAH)対応フロントエンドを開発。',
        ],
      },
      '4depth': {
        company: '4depth',
        bullets: [
          '官公庁/自治体向けサイトのパブリッシング、WCAGアクセシビリティ対応、レスポンシブWeb実装。',
        ],
      },
    },
  },
  projects: {
    sectionTitle: 'プロジェクト',
    eyebrow: 'Selected Work',
    description: '公開中のプロダクトと、クローズ/社内向けの主要業務をまとめて。',
    viewSite: 'サイトを開く',
    publicGroup: '公開プロダクト',
    internalGroup: '非公開・終了案件',
    status: {
      live: '稼働中',
      discontinued: 'サービス終了',
      internal: '非公開',
    },
    items: {
      randibot: {
        title: 'Randibot',
        desc:
          'RCMS · K-Startup研究費管理SaaS。国策事業の予算執行データを自動収集・変換・保存するETLパイプラインとマルチテナントバックエンド。',
      },
      momentir: {
        title: 'Momentir',
        desc:
          '保険エージェント向けAI CRM。LLMで顧客ノートを要約しスケジュールを自動登録、運用工数を削減。',
      },
      nursevillage: {
        title: 'Nursevillage',
        desc:
          '看護師向けiOS/Androidコミュニティアプリ — 位置ベースのソーシャルフィードとコレクション統計ダッシュボード。',
      },
      'flfi-exchange': {
        title: 'FLFI デリバティブ取引所',
        desc:
          'OKX Broker APIベースの暗号資産デリバティブ取引所 — 配信・約定・ポジション管理。',
      },
      'flfi-lending': {
        title: 'FLFI フィンテックプラットフォーム',
        desc:
          'NestJS + Vue 3 + EKSによる一貫アーキテクチャ、Blue-Greenデプロイ、画像CDN、Web3 DApp。',
      },
      'ontoh-vision': {
        title: 'Ontoh Vision',
        desc: 'CCTV(RTSP)→ オンサイトAIイベント検知 → Cloudflare R2保存のワークフロー。',
      },
      'rootstone-trading': {
        title: 'Rootstone Trading',
        desc:
          'Electronデスクトップベースの暗号資産アービトラージ/マーケットメイキングポートフォリオシステム。',
      },
    },
  },
  skills: {
    sectionTitle: 'スキル',
    eyebrow: 'Craft',
    description:
      '長年の本番投入で検証された「シグネチャスタック」と、必要に応じて選択する補助ツールに分けて整理。',
    signaturesTitle: 'シグネチャスタック',
    othersTitle: 'よく使うその他のツール',
    signatures: [
      {
        key: 'backend-ts',
        title: 'Node.js · NestJS · TypeScript',
        note: 'SaaS / フィンテックのバックエンド主力。REST・イベント駆動・マルチテナント。',
        years: 11,
      },
      {
        key: 'cloud',
        title: 'AWS · Kubernetes · Terraform',
        note: 'EKS + Karpenter + ArgoCDで無停止デプロイ、IaCベースの再現可能なインフラ。',
        years: 6,
      },
      {
        key: 'data',
        title: 'PostgreSQL · Redis · RabbitMQ',
        note: 'スキーマ設計・インデックス・キャッシュ・キューで読み書きパスを分離。',
        years: 8,
      },
      {
        key: 'ai',
        title: 'LLM · RAG · Vector DB',
        note: 'OpenAI API + LangChain + PineconeでRAG/Agentワークフローを構築。',
        years: 2,
      },
      {
        key: 'blockchain',
        title: 'web3.js · Solidity · Ethers.js',
        note: 'DAppフロントとオンチェーンイベント連携、MetaMaskログインと署名。',
        years: 3,
      },
    ],
    others: {
      backend: 'Express · Python (FastAPI) · Go · Spring Boot · PHP',
      frontend: 'React · Next.js · Vue.js · Nuxt · Svelte · React Native · Flutter',
      data: 'MySQL · MongoDB · Elasticsearch · InfluxDB',
      infra: 'Docker · GitHub Actions · Nginx',
    },
    othersLabels: {
      backend: 'Backend',
      frontend: 'Frontend',
      data: 'Data',
      infra: 'Infra',
    },
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      db: 'Database',
      infra: 'Infra & DevOps',
      ai: 'AI / LLM',
      blockchain: 'Blockchain',
    },
  },
  writing: {
    sectionTitle: '記事',
    eyebrow: 'Writing',
    empty: '最初の記事を準備中です。',
    items: {
      'this-site': {
        title: 'このサイトを作った話(準備中)',
        summary: 'Next.js · 4言語i18n · GitHub Pagesで作った履歴書サイトの設計振り返り。',
        date: '2026-04',
      },
      'multi-tenant-saas': {
        title: '0→1マルチテナントSaaS設計ノート(準備中)',
        summary:
          'tenancyId = workspaceIdパターン、Postgres RLSの検討、Stripe購読連携まで。',
        date: '2026-05',
      },
    },
  },
  github: {
    sectionTitle: 'オープンソース · GitHub',
    eyebrow: 'Open Source',
    description: '最近更新された公開リポジトリ(ビルド時取得)',
    viewAll: 'すべて見る',
    failure: 'GitHubデータを読み込めませんでした。',
  },
  reading: {
    sectionTitle: 'Reading & Tools',
    eyebrow: 'Reading · Tools',
    booksTitle: '読んでいる本',
    toolsTitle: '日常ツール',
  },
  interests: {
    sectionTitle: '関心領域',
    eyebrow: 'Interests',
    items: {
      infra: {
        title: 'インフラの安定性',
        desc: 'SDLC · CI/CD · 無停止デプロイ · 可観測性。',
      },
      ai: {
        title: 'AI / LLM応用',
        desc: 'RAGパイプライン、Vector DB、Agentワークフロー設計。',
      },
      blockchain: {
        title: 'ブロックチェーン',
        desc: 'DApp · スマートコントラクト · Web3フロントエンド。',
      },
      network: {
        title: 'ネットワーク・セキュリティ',
        desc: 'WebSocket · RTSPリアルタイム通信、認証/認可設計。',
      },
    },
  },
  contact: {
    sectionTitle: 'お問い合わせ',
    eyebrow: 'Contact',
    headline: '次のプロジェクトを、一緒に作りましょう。',
    cta: '新しい機会やコラボレーションを歓迎します。下記のいずれかでお気軽にご連絡ください。',
    locationLabel: '所在地',
    locationValue: 'ソウル, 韓国',
    emailLabel: 'メール',
    freelanceLabel: 'フリーランス紹介',
  },
  footer: {
    updated: '最終更新',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
