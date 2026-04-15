import type { Dictionary } from './ko';

const dict: Dictionary = {
  meta: {
    title: 'Ted Ryu — 全栈开发者',
    description:
      '11年经验的全栈开发者,专注于金融科技、区块链、SaaS和AI领域的0→1产品构建。',
  },
  nav: {
    about: '关于',
    manifesto: '宣言',
    experience: '经历',
    projects: '项目',
    skills: '技术栈',
    writing: '文章',
    contact: '联系方式',
  },
  common: {
    present: '至今',
    years: '年',
    months: '个月',
    showOlder: '显示早期经历',
    hideOlder: '收起',
    comingSoon: '即将推出',
    readMore: '阅读更多',
    theme: '主题',
    themeLight: '浅色',
    themeDark: '深色',
    themeSystem: '系统',
  },
  employment: {
    fulltime: '全职',
    freelance: '自由职业',
    contract: '合同',
  },
  hero: {
    name: 'Ted Ryu',
    altName: '刘在荣',
    role: '全栈开发者 · 后端主导',
    tagline: '打造驱动业务增长的产品。',
    ctaContact: '联系我',
    nowLabel: '当前',
    nowValue: '正在开发Crypto Market Making系统和B2B投资管理仪表板。',
    keywordsLabel: '近期关注',
  },
  about: {
    sectionTitle: '关于',
    eyebrow: 'About',
    impact:
      '专注于金融科技、区块链、SaaS、AI领域的0→1产品构建与运营的全栈开发者。擅长后端架构和基于AWS/Kubernetes的基础设施,最近专注于LLM · RAG · Web3应用。',
    stat1Label: '工作经验',
    stat1Suffix: '年+',
    stat2Label: '0→1产品',
    stat2Value: '6+',
    stat3Label: '生产基础设施',
    stat3Value: 'AWS · K8s · Terraform',
    philosophyTitle: '工作方式',
    philosophy1:
      '优秀的工程师能理解用户需求、UX与业务目标并据此解决问题。我重视基于指标的决策和快速的反馈循环,也持续投入稳定的云基础设施与SDLC。',
    philosophy2:
      '我寻找重视多元视角、以创新方案开拓市场的团队。基于体系化流程的快速决策与执行,是打造真正影响市场的产品的关键。',
  },
  manifesto: {
    sectionTitle: 'AI时代的开发',
    eyebrow: 'Manifesto',
    thesis: 'AI是工具,人是导演。只有理解才能提问,只有理解才能验证。',
    mindsetTitle: 'Mindset',
    actionsTitle: 'Actions',
    mindset: [
      {
        key: 'agentic',
        title: 'Agentic Engineering',
        note:
          'AI代理运行的基础设施与护栏由人来设计。架构决策、分工与安全边界依然是人的责任。',
      },
      {
        key: 'verify',
        title: '知识即质量门禁',
        note:
          '11年的生产经验与领域知识成为AI产出的验证层。只有理解才能提问,只有理解才能验证。',
      },
      {
        key: 'learn',
        title: '复利式学习',
        note: '持续吸收新的技术栈、领域与问题空间。AI时代的前提条件是"持续的自我教育"。',
      },
    ],
    actions: [
      '把过去因成本与时间限制无法尝试的服务与工具亲自做出来。',
      '参与开源,专注于问题本身。',
      '探索与实验符合AI时代的商业思维、领导力与协作方式。',
      '用软件对这些问题给出原型级答案。',
    ],
  },
  experience: {
    sectionTitle: '经历',
    eyebrow: 'Experience',
    items: {
      masblue: {
        company: 'Masblue (masblue.studio)',
        bullets: [
          '为面向美国市场的保险SaaS设计与开发后端及AI代理编排(Orchestration)系统。',
          '将保险领域工作流拆解为基于LLM的代理,构建包含人工审查节点与审计日志的流水线。',
        ],
      },
      onto: {
        company: 'Ontoh Vision',
        bullets: [
          '设计CCTV(RTSP)→ 现场GPU推理 → Cloudflare R2的端到端管道。实现本地队列缓冲(最长24小时),断网时可优雅恢复上传(指标:Cloudflare Analytics上传成功率)。',
          '实现基于presigned URL的上传API和REST接口,支持N台摄像头水平扩展且无需修改后端(基准:计划使用[k6])。',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          '设计并运营面向B2B客户的交易业绩报告系统 — 每日汇总收益率通过门户和PDF报告交付。',
          '基于Electron + Node.js + PostgreSQL + Redis构建加密套利/做市引擎。相比既有基线降低订单簿策略执行延迟(指标:内部p95延迟日志)。',
        ],
      },
      dio: {
        company: 'DIO 自由职业平台',
        bullets: [
          '(Woo-Yeon-Hee) 交付基于位置的约见App后端MVP — 匹配逻辑与自动结算,8周内达到生产可用。',
          '(Linker) 每周1:1匹配全栈MVP — 通过Toss PG和Kakao AlimTalk集成将支付失败率稳定在约1%。',
          '(Momentir) 面向保险设计师的CRM — 基于LLM的客户笔记摘要与日程自动注册。试点设计师反馈每日运营工时减少约30%(方法:试点访谈,n=12)。',
          '(Hidden Gem) 收藏家社区iOS/Android App的基于位置的社交Feed与收藏分析后端。',
        ],
      },
      dssolve: {
        company: 'DS Solve',
        bullets: [
          '交付Randibot后端MVP — RCMS / K-Startup爬虫ETL + 多租户架构(tenancyId = workspaceId),新机构入驻仅需配置变更。',
        ],
      },
      'flfi-exchange': {
        company: 'FLFI · 交易所团队',
        bullets: [
          '基于OKX Broker API构建加密衍生品交易所 — 行情推送、订单执行、仓位管理模块。',
        ],
      },
      miso: {
        company: 'Miso · 平台团队',
        bullets: [
          '构建基于AWS Cognito的认证系统并执行老用户零停机迁移。为CX CRM引入OTP(指标:CloudWatch认证失败率 < 0.5%)。',
        ],
      },
      'flfi-lead': {
        company: 'FLFI',
        bullets: [
          '后端技术主管 — 端到端设计NestJS后端、Vue 3前端与AWS基础设施,同时带领开发团队(迭代速度与代码评审文化)。',
          '在EKS + Karpenter + ArgoCD + Helm上交付零停机蓝绿流水线 — 部署停机0秒;回滚<30秒(指标:ArgoCD rollout日志)。',
          '交付Lambda@Edge + CloudFront图片CDN(上传、缓存、即时裁剪)。图片p95相比源站直连显著下降(指标:CloudWatch RUM,7天平均)。',
          '基于web3.js / Ethers.js交付Blockchain DApp — MetaMask登录、交易签名、代币余额查询,与链上事件发布集成。',
        ],
      },
      aligo: {
        company: 'ALIGO',
        bullets: [
          '运营基于Vanilla PHP 7的消息调度服务器/API — 提升高峰期吞吐量与重试队列公平性(指标:内部调度仪表盘)。',
          '产品化Kakao AlimTalk / FriendTalk Open API功能,降低下游供应商与CX工具的集成工时。',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        bullets: [
          '基于Wordpress插件交付P2P贷款解决方案,集成Paygate Seyfert金融API(虚拟账户、投资、还款、状态)。',
        ],
      },
      ninefive: {
        company: 'Ninefive',
        bullets: ['开发产品推广页面交互及符合Web可访问性(KWAH)的前端。'],
      },
      '4depth': {
        company: '4depth',
        bullets: ['交付公共机构网站的发布、WCAG可访问性支持和响应式Web实现。'],
      },
    },
  },
  projects: {
    sectionTitle: '项目',
    eyebrow: 'Selected Work',
    description: '公开产品与已下线或内部项目的精选组合。',
    viewSite: '打开网站',
    publicGroup: '公开产品',
    internalGroup: '内部 / 已下线项目',
    status: {
      live: '运营中',
      discontinued: '已下线',
      internal: '内部',
    },
    items: {
      randibot: {
        title: 'Randibot',
        desc: 'RCMS · K-Startup研究经费管理SaaS。面向国策项目预算执行的ETL管道与多租户后端。',
      },
      momentir: {
        title: 'Momentir',
        desc:
          '面向保险设计师的AI CRM。通过LLM自动摘要客户笔记并注册日程,降低运营工时。',
      },
      nursevillage: {
        title: 'Nursevillage',
        desc: '面向护士的iOS/Android社区App — 基于位置的社交Feed与收藏统计仪表盘。',
      },
      'flfi-exchange': {
        title: 'FLFI 衍生品交易所',
        desc: '基于OKX Broker API的加密衍生品交易所 — 实时行情、撮合与仓位管理。',
      },
      'flfi-lending': {
        title: 'FLFI 金融科技平台',
        desc:
          'NestJS + Vue 3 + EKS端到端架构,蓝绿部署,图片CDN,Web3 DApp。',
      },
      'ontoh-vision': {
        title: 'Ontoh Vision',
        desc: 'CCTV(RTSP)→ 现场AI事件检测 → Cloudflare R2存储工作流。',
      },
      'rootstone-trading': {
        title: 'Rootstone Trading',
        desc: '基于Electron桌面端的加密套利与做市投资组合系统。',
      },
    },
  },
  skills: {
    sectionTitle: '技术栈',
    eyebrow: 'Craft',
    description: '长期在生产环境反复验证的"主力栈",以及按需取用的辅助工具。',
    signaturesTitle: '主力栈',
    othersTitle: '常用的其他工具',
    signatures: [
      {
        key: 'backend-ts',
        title: 'Node.js · NestJS · TypeScript',
        note: 'SaaS / 金融科技后端主力 — REST、事件驱动、多租户。',
        years: 11,
      },
      {
        key: 'cloud',
        title: 'AWS · Kubernetes · Terraform',
        note: 'EKS + Karpenter + ArgoCD零停机部署,基于IaC的可复现基础设施。',
        years: 6,
      },
      {
        key: 'data',
        title: 'PostgreSQL · Redis · RabbitMQ',
        note: 'Schema设计、索引、缓存与队列 — 分离读写路径。',
        years: 8,
      },
      {
        key: 'ai',
        title: 'LLM · RAG · Vector DB',
        note: 'OpenAI API + LangChain + Pinecone,构建RAG与Agent工作流。',
        years: 2,
      },
      {
        key: 'blockchain',
        title: 'web3.js · Solidity · Ethers.js',
        note: 'DApp前端与链上事件联动,MetaMask登录与交易签名。',
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
    sectionTitle: '文章',
    eyebrow: 'Writing',
    empty: '第一篇文章准备中。',
    items: {
      'this-site': {
        title: '打造本站的故事(即将推出)',
        summary: '关于Next.js · 4语言i18n · GitHub Pages简历站点的设计回顾。',
        date: '2026-04',
      },
      'multi-tenant-saas': {
        title: '0→1多租户SaaS设计笔记(即将推出)',
        summary: 'tenancyId = workspaceId模式、Postgres RLS的权衡,以及Stripe订阅接入。',
        date: '2026-05',
      },
    },
  },
  github: {
    sectionTitle: '开源 · GitHub',
    eyebrow: 'Open Source',
    description: '最近更新的公开仓库(构建时抓取)',
    viewAll: '查看全部',
    failure: '无法加载GitHub数据。',
  },
  reading: {
    sectionTitle: '阅读 & 工具',
    eyebrow: 'Reading · Tools',
    booksTitle: '近期阅读',
    toolsTitle: '日常工具',
  },
  interests: {
    sectionTitle: '兴趣方向',
    eyebrow: 'Interests',
    items: {
      infra: {
        title: '基础设施稳定性',
        desc: 'SDLC · CI/CD · 零停机部署 · 可观测性。',
      },
      ai: {
        title: 'AI / LLM应用',
        desc: 'RAG管道、Vector DB、Agent工作流设计。',
      },
      blockchain: {
        title: '区块链',
        desc: 'DApp · 智能合约 · Web3前端。',
      },
      network: {
        title: '网络与安全',
        desc: 'WebSocket / RTSP实时通信,认证/授权设计。',
      },
    },
  },
  contact: {
    sectionTitle: '联系方式',
    eyebrow: 'Contact',
    headline: '下一个项目,我们一起做吧。',
    cta: '欢迎新的机会和合作。请通过下方任一渠道联系我。',
    locationLabel: '位置',
    locationValue: '首尔, 韩国',
    emailLabel: '邮箱',
    freelanceLabel: '自由职业主页',
  },
  footer: {
    updated: '最后更新',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
