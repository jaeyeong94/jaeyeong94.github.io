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
    contact: 'お問い合わせ',
  },
  common: {
    present: '現在',
    years: '年',
    months: 'ヶ月',
    showOlder: '過去の経歴を表示',
    hideOlder: '閉じる',
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
          'CCTV(RTSP)→AIイベント検知→Cloudflare R2アップロードのワークフローを設計・実装。',
          '現場のエッジサーバーでpresigned URLベースの映像アップロードパイプラインとRESTful APIを開発。',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          'B2B顧客向けトレーディング成果レポートシステムを設計・開発。',
          'Electron + Node.js + PostgreSQL + Redis基盤の暗号資産アービトラージ/マーケットメイキングポートフォリオシステムを構築。',
        ],
      },
      dio: {
        company: 'DIO フリーランスプラットフォーム',
        bullets: [
          '(Woo-Yeon-Hee) ミーティングアプリのバックエンドMVP — ローカル飲食店チェックイン・マッチング・自動精算の主要ロジック開発。',
          '(Linker) 毎週実行される1:1マッチングフルスタックMVP — Toss PG・カカオアラートトーク連携。',
          '(Momentir) 保険GA顧客管理SaaS — LLMによる顧客ノート要約と自動スケジュール登録フローの設計。',
          '(Hidden Gem) コレクター向けiOS/Androidアプリ — 位置ベースのソーシャルフィードバックエンド。',
        ],
      },
      dssolve: {
        company: 'DS Solve',
        bullets: [
          'Randibotバックエンド・MVP開発 — RCMS / K-StartupスクレイピングETL+マルチテナントアーキテクチャ。',
        ],
      },
      'flfi-exchange': {
        company: 'FLFI · 取引所チーム',
        bullets: ['OKX Broker APIをベースとした暗号資産デリバティブ取引所システムを開発。'],
      },
      miso: {
        company: 'Miso · プラットフォームチーム',
        bullets: [
          'AWS Cognitoベースの認証システムを構築、CX CRMのOTP認証とユーザーマイグレーションを実施。',
        ],
      },
      'flfi-lead': {
        company: 'FLFI',
        bullets: [
          'バックエンドTech Lead — NestJSバックエンド + Vue 3フロントエンド + AWSインフラを一貫して設計。',
          'EKS · Karpenter · ArgoCD · Helmベースで無停止Blue-Greenデプロイパイプラインを構築。',
          'Lambda@Edge + CloudFront画像CDN(アップロード・キャッシュ・リサイズ)を開発。',
          'web3.js / Ethers.jsベースのBlockchain DAppをリリース — MetaMaskログイン・署名・残高照会。',
        ],
      },
      aligo: {
        company: 'ALIGO',
        bullets: [
          'Vanilla PHP 7ベースの業務メッセージ送信サーバーとAPIを開発・運用。',
          'カカオアラートトーク/フレンドトークOpen API機能を開発、CXバックオフィスを維持管理。',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        bullets: [
          'WordpressプラグインベースのP2P貸付ソリューションを開発、Paygate Seyfert Fintech API(仮想口座・投資・返済)連携。',
        ],
      },
      ninefive: {
        company: 'Ninefive',
        bullets: ['プロダクトプロモーションページのインタラクションとWebアクセシビリティ(KWAH)対応フロントエンドを開発。'],
      },
      '4depth': {
        company: '4depth',
        bullets: ['官公庁/自治体向けサイトのパブリッシング、WCAGアクセシビリティ対応、レスポンシブWeb実装。'],
      },
    },
  },
  projects: {
    sectionTitle: 'プロジェクト',
    eyebrow: 'Projects',
    viewSite: 'サイトを開く',
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
    },
  },
  skills: {
    sectionTitle: 'スキル',
    eyebrow: 'Skills',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      db: 'Database',
      infra: 'Infra & DevOps',
      ai: 'AI / LLM',
      blockchain: 'Blockchain',
    },
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
    cta: '新しい機会やコラボレーションを歓迎します。お気軽にご連絡ください。',
    locationLabel: '所在地',
    locationValue: 'ソウル, 韓国',
    emailLabel: 'メール',
  },
  footer: {
    updated: '最終更新',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
