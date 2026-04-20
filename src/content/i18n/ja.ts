import type { Dictionary } from './ko';

const dict: Dictionary = {
  meta: {
    brandName: 'Ted Ryu',
    title: 'Ted Ryu — フルスタック開発者',
    siteName: 'Ted Ryu · ポートフォリオ',
    description:
      '0→1のSaaS・AIオーケストレーション・フィンテックシステムを設計・運用するフルスタック開発者。バックエンドアーキテクチャとAWS/Kubernetes基盤に強みがあります。',
  },
  nav: {
    about: '紹介',
    manifesto: '進め方',
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
    skipToContent: '本文へスキップ',
    redirecting: '移動中...',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    primaryNavigation: 'メインナビゲーション',
    mobileNavigation: 'モバイルナビゲーション',
    notFoundTitle: 'ページが見つかりません',
    notFoundDescription: '指定されたページは存在しないか、移動されました。',
    backHome: 'ホームへ戻る',
    revealEmail: 'メールアドレスを表示',
    printPage: '印刷 / PDF',
    sameTeamLabel: '同じチーム · 同一のCEO/CTOと継続',
    commandPaletteOpen: 'セクション検索を開く',
    commandPaletteTitle: 'セクションへ移動',
    commandPaletteSearch: 'セクションを検索...',
    commandPaletteEmpty: '一致するセクションがありません',
    commandPaletteHeading: 'ナビゲート',
  },
  employment: {
    fulltime: '正社員',
    freelance: 'フリーランス',
    contract: '契約',
  },
  hero: {
    name: 'Ted Ryu',
    altName: 'ユ・ジェヨン',
    role: '0→1のSaaS・AIオーケストレーション・フィンテックシステムを作るフルスタック開発者',
    mastheadLabel: 'ポートフォリオ · Vol. 01',
    tagline: '0→1の立ち上げを素早く進め、運用に耐えるシステムまで仕上げます。',
    proofLabel: '実績の要点',
    ctaProjects: '主な仕事を見る',
    ctaContact: 'お問い合わせ',
    nowLabel: 'Now',
    nowItems: [
      'クリプトのマーケットメイキング基盤とB2B投資ダッシュボード',
      '米国保険会社向けAIオーケストレーションバックエンド',
    ],
    keywordsLabel: '最近の注力分野',
    availability: {
      open: 'フリーランス契約可 · 正社員オープン',
      limited: '限定案件のみ',
      closed: '新規のお問い合わせは受付停止中',
    },
    availabilityBadge: {
      open: '受付中',
      limited: '限定',
      closed: '停止',
    },
  },
  about: {
    sectionTitle: '紹介',
    eyebrow: 'About',
    impact:
      'フィンテック・ブロックチェーン・SaaS・AI領域で0→1プロダクトを作り運用してきたフルスタック開発者です。バックエンドアーキテクチャとAWS/Kubernetes基盤を軸に、最近はLLM・RAG応用に注力しています。',
    stat1Label: '実務経験',
    stat1Suffix: '年+',
    stat2Label: '0→1サービス',
    stat2Value: '6件+',
    stat3Label: '運用インフラ',
    stat3Value: 'AWS · K8s · Terraform',
    philosophyTitle: '働き方',
    philosophy1:
      'まずユーザー課題とビジネス目標を理解し、その上で構造と運用方法を設計します。',
    philosophy2:
      '指標とフィードバックループで次の優先順位を決め、速く着実に進むチームを好みます。',
    domainsTitle: 'ドメイン経験',
    domains: {
      fullstack: 'フルスタック / バックエンド',
      fintech: 'フィンテック',
      blockchain: 'ブロックチェーン',
      saas: 'SaaS',
      ai: 'AI / LLM',
    },
    outcomesTitle: '主な成果',
    outcomes: [
      {
        label: 'デプロイの信頼性',
        value: '500回以上の無停止デプロイ',
        note:
          'EKS・ArgoCDベースのBlue-Greenパイプラインで、停止0秒・30秒以内のロールバックを維持しました。',
      },
      {
        label: '本番スケール',
        value: '1日500万件のメッセージ配信',
        note:
          'ピーク3,000 RPSのビジネスメッセージAPIを運用し、キューの公平性とリトライ戦略を安定化しました。',
      },
      {
        label: '運用効率',
        value: '20分 → 4分',
        note:
          '米国保険会社のパイロットで、LLMオーケストレーションにより平均処理時間を約80%短縮しました。',
      },
    ],
    yearsShort: '年+',
  },
  manifesto: {
    sectionTitle: 'AIとの進め方',
    eyebrow: 'Approach',
    thesis:
      'AIでスピードは上げる一方、構造設計・ガードレール・最終検証は人が担うべきだと考えています。',
    mindsetTitle: 'Principles',
    actionsTitle: 'In practice',
    mindset: [
      {
        key: 'structure',
        title: 'まず構造を設計する',
        note:
          'エージェントや自動化では、プロンプト調整より先にアーキテクチャ、ガードレール、監査可能性を整えます。',
      },
      {
        key: 'verify',
        title: 'ドメイン知識で検証する',
        note:
          '理解している領域ほど、依頼の精度もレビューの速度も上げられると考えています。',
      },
    ],
    actions: [
      '反復作業や運用上のボトルネックを、自動化できるワークフローに置き換えます。',
      '小さくプロトタイプを作り、指標とユーザーフィードバックで次を決めます。',
      '新しい道具は素早く取り入れますが、本番品質の基準はより厳しく見ます。',
    ],
    lookingForTitle: '探しているチーム',
    lookingFor: [
      '多様な視点を歓迎するエンジニアリング文化',
      '迅速な意思決定と実行を尊重する組織',
      '指標ベースのフィードバックループ',
      'AI時代の新市場を切り拓くプロダクト',
    ],
  },
  experience: {
    sectionTitle: '経歴',
    eyebrow: 'Experience',
    timelineLabel: 'キャリアタイムライン',
    timelineAriaLabel: 'キャリアタイムライン',
    earlyCareerLabel: '初期キャリア · {n} 社',
    items: {
      masblue: {
        company: 'Masblue (masblue.studio)',
        bullets: [
          '米国保険会社のバックオフィス業務をLLMエージェントに分解しオーケストレーションするバックエンドを設計。各ステップにドメインのガードレール、Human-in-the-Loopチェックポイント、監査ログを組み込み、自動化と規制対応を同時に満たす。パイロット50件で平均処理時間を20分→4分(約80%短縮)(指標:パイロット処理時間ダッシュボード)。',
          'LLMエージェント呼び出し全過程(入力・出力・中間状態・コスト・レイテンシ)を構造化イベントとして保存し、OpenTelemetryで追跡。失敗ケースの監査・再現・ロールバックを可能にし、規制要件に対応。',
        ],
      },
      onto: {
        company: '株式会社オント (Ontoh Vision)',
        bullets: [
          'CCTV(RTSP) → オンサイトGPU AI推論 → Cloudflare R2アップロードのエンドツーエンドパイプラインを設計。ネットワーク断絶時は最大24時間のローカルバッファと再アップロードで、アップロード成功率99.7%を維持(指標:Cloudflare Analytics、7日平均)。',
          'Presigned URL + コールバックベースのアップロードAPI設計により、カメラ8台の同時追加時もバックエンドデプロイ0件。ノードはシークレット認証のみで横スケール(指標:内部デプロイログ)。',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          'B2Bトレーディング成果レポートシステムを設計・運用。元帳分離 + 日次/月次スナップショットバッチ + チェックサム検証のPDFパイプラインで、15社の機関顧客向けバッチ成功率99.9%を維持(指標:CloudWatchバッチログ、30日平均)。',
          'Electron + Node.js + PostgreSQL + Redis + WebSocketベースで暗号資産アービトラージ / マーケットメイキングエンジンを構築。受信/戦略/発注のイベントループを分離し、戦略実行p95レイテンシを120ms → 45ms(約63%短縮)、1日平均3,000件の約定を処理(指標:内部レイテンシログ)。',
        ],
      },
      dio: {
        company: 'DIO フリーランスプラットフォーム',
        bullets: [
          '(Woo-Yeon-Hee) 位置ベースのマッチングアプリのマッチング・チェックアウト・自動精算ロジックをステートマシン + イベントソーシングでモデリングし、8週で本番投入。リリース後2週間でチェックイン2,500件を記録し、主要フローの欠陥0件でローンチ(指標:Sentry)。',
          '(Linker) Toss PGとカカオAlimTalkをOutboxパターンで結合し決済–通知の整合性を確保。週250件のマッチングに対してリトライ + DLQフローで決済失敗率を約1%に安定化(指標:PG Webhookログ、30日平均)。',
          '(Momentir) LLMベースの顧客ノート要約 + スケジュール自動抽出パイプラインを設計。構造化結果をエージェント承認UIで提供しCRM漏れを最小化、パイロット12名で日次運用工数が約30%削減(手法:ユーザーインタビュー)。',
          '(Hidden Gem) PostGIS + Redisベースの位置・カテゴリフィード・バックエンドを設計。インデックス・キャッシュ戦略でメインフィードp95応答時間を180ms以内に安定化(指標:APM p95、7日平均)。',
        ],
      },
      dssolve: {
        company: 'DS Solve',
        bullets: [
          'RandibotバックエンドMVPを開発 — RCMS / K-StartupスクレイピングETL + マルチテナント(tenancyId = workspaceId)アーキテクチャで新規機関のオンボーディングを設定変更のみで完了可能に。5つのワークスペースをコード変更0件でオンボーディングし、月1,200件のETLパイプラインを安定運用(指標:機関別設定管理ログ)。',
        ],
      },
      miso: {
        company: 'Miso Inc.',
        bullets: [
          'AWS Cognitoベースの認証システムを構築。Cognito Lambda Triggerでレガシーユーザー12万人を無停止移行し、CX CRMにOTP認証フローを導入。認証失敗率は0.5%以下を維持(指標:CloudWatch)。',
        ],
      },
      flfi: {
        company: 'FLFI',
        bullets: [
          'バックエンドTech Lead — 6名のフルスタック開発チームをリードし、ジュニアエンジニア2名をメンタリングしつつ、NestJSバックエンド、Vue 3フロントエンド、AWSインフラをドメイン境界に沿って再設計。スプリント速度とデプロイ頻度の向上を主導し、コードレビュー文化を定着(指標:Jiraサイクルタイム、GitOps履歴)。',
          'EKS + Karpenter + ArgoCD + Helmで無停止Blue-Greenパイプラインを構築。デプロイ頻度を週1回 → 日3回へ改善し、2年間で500+回の無停止デプロイを達成、デプロイ停止0秒・ロールバック30秒以内(指標:ArgoCD rolloutログ、全件監査)。',
          'Lambda@Edge + CloudFront画像CDNを設計。オンザフライリサイズ + リージョナルキャッシュで画像p95応答時間を420ms → 120ms(約71%短縮)、日50万件の画像を処理(指標:CloudWatch RUM、7日平均)。',
          'ethers.jsベースのBlockchain DAppを一貫して構築 — MetaMaskログイン、トランザクション署名、トークン残高照会。ウォレット抽象化レイヤーとイベントインデクサーの分離により、ウォレット接続失敗率を8% → 0.5%へ削減、オンチェーン同期遅延を安定化(指標:フロント側エラーログ、インデクサーlag)。',
          'OKX Broker APIベースで暗号資産デリバティブ取引所を構築 — WebSocket市場ストリーム + REST注文API + Redisポジションスナップショットを分離し、約定レイテンシを約80ms(API RTTレベル)に安定化、120+ペアをサポート(指標:内部レイテンシログ)。その後、同じCEO/CTOチームとRootstoneのフリーランス契約として継続。',
        ],
      },
      aligo: {
        company: 'ALIGO',
        bullets: [
          'Vanilla PHP 7ベースの業務メッセージ送信API・サーバーを開発・運用 — 日500万件の送信、ピーク3,000 RPSの環境下で、顧客別キュー分割と加重ラウンドロビンでピーク時間の公平性を改善、リトライは指数バックオフで分離キュー処理(指標:社内送信キューダッシュボード)。',
          'カカオAlimTalk・FriendTalk Open APIをプロダクト化。共通テンプレート・承認ステータスの統合ダッシュボードにより、外部ベンダーの連携工数とCX運用負担を削減。',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        bullets: [
          'WordpressプラグインベースのP2P貸付ソリューションを開発、Paygate Seyfert Fintech API(仮想口座・投資・返済・ステータス)と連携。トランザクション分離 + 冪等レスポンス保存で、2年間累計約12万件の取引を処理し金融整合性インシデント0件(指標:日次整合性チェックバッチ)。',
        ],
      },
      ninefive: {
        company: 'Ninefive',
        bullets: [
          'プロダクトプロモーションページのインタラクションをprefers-reduced-motion対応で実装し、KWAH基準のWebアクセシビリティチェックリストを併走。滞在時間・スクロール深度KPIとアクセシビリティ基準を同時に達成。',
        ],
      },
      '4depth': {
        company: '4depth',
        bullets: [
          '官公庁 · 自治体向けサイトのパブリッシング、WCAGアクセシビリティ対応、レスポンシブWeb実装。セマンティックHTMLとARIA設計、デザイン段階からのアクセシビリティチェックリストで、14件の公共プロジェクトでK-WCAG認証を通過。',
        ],
      },
    },
  },
  projects: {
    sectionTitle: 'プロジェクト',
    eyebrow: 'Selected Work',
    description: '公開中のプロダクトと、クローズ/社内向けの主要業務をまとめて。',
    viewSite: 'サイトを開く',
    viewCaseStudy: '詳細を見る',
    backToProjects: 'プロジェクトへ戻る',
    publicGroup: '公開プロダクト',
    publicGroupDesc: 'フリーランス契約で手がけたサービス',
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
        proof: '5機関のワークスペース · 月1,200件のETL',
      },
      momentir: {
        title: 'Momentir',
        desc:
          '保険エージェント向けAI CRM。LLMで顧客ノートを要約しスケジュールを自動登録、運用工数を削減。',
        proof: '保険設計士12名のパイロット · 工数を約30%削減',
      },
      nursevillage: {
        title: 'Nursevillage',
        desc:
          '看護師向けiOS/Androidコミュニティアプリ — 位置ベースのソーシャルフィードとコレクション統計ダッシュボード。',
        proof: '看護師コミュニティアプリを運用',
      },
      'flfi-exchange': {
        title: 'FLFI デリバティブ取引所',
        desc:
          'OKX Broker APIベースの暗号資産デリバティブ取引所 — 配信・約定・ポジション管理。',
        proof: '120超のペア · 約定レイテンシは約80ms',
      },
      'flfi-lending': {
        title: 'FLFI フィンテックプラットフォーム',
        desc:
          'NestJS + Vue 3 + EKSによる一貫アーキテクチャ、Blue-Greenデプロイ、画像CDN、Web3 DApp。',
        proof: '500回超の無停止デプロイ · 画像p95を420msから120msへ短縮',
      },
      'ontoh-vision': {
        title: 'Ontoh Vision',
        desc: 'CCTV(RTSP)→ オンサイトAIイベント検知 → Cloudflare R2保存のワークフロー。',
        proof: 'アップロード成功率99.7% · カメラ増設時もバックエンドデプロイ不要',
      },
      'rootstone-trading': {
        title: 'Rootstone Trading',
        desc:
          'Electronデスクトップベースの暗号資産アービトラージ/マーケットメイキングポートフォリオシステム。',
        proof: '戦略実行p95 120ms → 45ms · 1日平均3,000件約定',
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
    backToList: '記事一覧',
    readTime: '{n}分で読めます',
    items: {
      'this-site': {
        title: 'このサイトを作った話',
        summary: 'Next.js · 4言語i18n · GitHub Pagesで作った履歴書サイトの設計振り返り。',
        date: '2026-04',
      },
      'multi-tenant-saas': {
        title: '0→1マルチテナントSaaS設計ノート',
        summary:
          'tenancyId = workspaceIdパターン、Postgres RLSの検討、Stripe購読連携まで。',
        date: '2026-05',
      },
      'agent-orchestration': {
        title: 'LLMエージェント・オーケストレーション:HIL・監査・ロールバック',
        summary:
          '保険ドメインをLLMエージェントに分解する過程で得た、可観測性と失敗設計のパターン。',
        date: '2026-06',
      },
      'blue-green': {
        title: '無停止Blue-Green:デプロイ停止0秒 · ロールバック30秒以内',
        summary:
          'EKS + Karpenter + ArgoCD + Helmの組み合わせでの段階的デプロイと回帰安全網の設計。',
        date: '2026-07',
      },
    },
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
    freelanceValue: 'heyted.dev',
    githubLabel: 'GitHub',
    githubValue: 'github.com/jaeyeong94',
    linkedinLabel: 'LinkedIn',
    linkedinValue: 'linkedin.com/in/jae-yeong-you',
    testimonials: '推薦状・リファレンスはご要望に応じてご提供します。',
  },
  footer: {
    credit: 'Ted Ryu · Jaeyeong You',
    updated: '最終更新',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
