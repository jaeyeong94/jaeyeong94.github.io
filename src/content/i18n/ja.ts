import type { Dictionary } from './ko';

const dict: Dictionary = {
  meta: {
    title: 'Ted Ryu — フルスタック開発者',
    description:
      'フィンテック・ブロックチェーン・SaaS・AI領域で0→1サービスを構築してきた11年目のフルスタック開発者。',
  },
  nav: {
    about: '紹介',
    manifesto: 'マニフェスト',
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
    sameTeamLabel: '同じチーム · 同一のCEO/CTOと継続',
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
    nowValue: 'Crypto Market MakingシステムとB2B投資管理ダッシュボードを開発しています。',
    keywordsLabel: '最近の注力分野',
    availability: {
      open: 'フリーランス契約可 · 正社員オープン',
      limited: '限定案件のみ',
      closed: '新規のお問い合わせは受付停止中',
    },
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
    domainsTitle: 'ドメイン経験',
    domains: {
      fullstack: 'フルスタック / バックエンド',
      fintech: 'フィンテック',
      blockchain: 'ブロックチェーン',
      saas: 'SaaS',
      ai: 'AI / LLM',
    },
    yearsShort: '年+',
  },
  manifesto: {
    sectionTitle: 'AI時代の開発',
    eyebrow: 'Manifesto',
    thesis:
      'AIはツール、人がディレクター。理解しているからこそ依頼でき、理解しているからこそ検証できる。',
    mindsetTitle: 'Mindset',
    actionsTitle: 'Actions',
    mindset: [
      {
        key: 'agentic',
        title: 'エージェンティック・エンジニアリング',
        note:
          'AIエージェントが動くインフラとガードレールを人が設計する。アーキテクチャの意思決定・分業・安全策は人の責任。',
      },
      {
        key: 'verify',
        title: '知識こそ品質ゲート',
        note:
          '11年間の実務経験とドメイン知識が、AI出力の検証レイヤーとして機能する。理解しているからこそ依頼でき、理解しているからこそ検証できる。',
      },
      {
        key: 'learn',
        title: '複利で積み上がる学習',
        note:
          '新しいスタック・ドメイン・問題空間を絶え間なく吸収する。AI時代の前提条件は"継続的な自己研鑽"だ。',
      },
    ],
    actions: [
      'コストと時間の制約で手が出せなかったサービスとツールを自ら作る。',
      'オープンソースに貢献し、問題解決そのものにフォーカスする。',
      'AI時代にふさわしい事業観・リーダーシップ・協働のパターンを試行し整理する。',
      'それらの問いに対してソフトウェアで答えを出すプロトタイプを作る。',
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
        company: 'Miso · プラットフォームチーム',
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
      'agent-orchestration': {
        title: 'LLMエージェント・オーケストレーション:HIL・監査・ロールバック(準備中)',
        summary:
          '保険ドメインをLLMエージェントに分解する過程で得た、可観測性と失敗設計のパターン。',
        date: '2026-06',
      },
      'blue-green': {
        title: '無停止Blue-Green:デプロイ停止0秒 · ロールバック30秒以内(準備中)',
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
    testimonials: '推薦状・リファレンスはご要望に応じてご提供します。',
  },
  credentials: {
    sectionTitle: '学歴・資格',
    eyebrow: 'Credentials',
    educationTitle: '学歴',
    certificationsTitle: '資格',
    education: {
      knou: {
        school: '韓国放送通信大学',
        degree: 'コンピュータサイエンス学科',
      },
      'cheonan-commercial': {
        school: '天安商業高校',
        degree: 'コンピュータソフトウェア',
      },
    },
    certifications: {
      'toss-study': 'Toss Study Club 1期',
      'info-processing': '情報処理技能士(韓国)',
      'computer-graphics': 'コンピュータグラフィックス運用技能士(韓国)',
      'gtq-1': 'GTQ 1級',
      'itq-master': 'ITQ Master',
    },
  },
  footer: {
    updated: '最終更新',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
