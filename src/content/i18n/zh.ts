import type { Dictionary } from './ko';

const dict: Dictionary = {
  meta: {
    brandName: 'Ted Ryu',
    title: 'Ted Ryu — 全栈开发者',
    siteName: 'Ted Ryu · 作品集',
    description:
      '设计并运营0→1 SaaS、AI编排与金融科技系统的全栈开发者,擅长后端架构与AWS/Kubernetes基础设施。',
  },
  nav: {
    about: '关于',
    manifesto: '方式',
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
    skipToContent: '跳转到正文',
    redirecting: '正在跳转...',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    primaryNavigation: '主导航',
    mobileNavigation: '移动端导航',
    notFoundTitle: '页面未找到',
    notFoundDescription: '请求的页面不存在或已被移动。',
    backHome: '返回首页',
    revealEmail: '显示邮箱地址',
    printPage: '打印 / PDF',
    sameTeamLabel: '同一团队 · 与同一CEO/CTO延续合作',
    commandPaletteOpen: '打开搜索',
    commandPaletteTitle: '跳转至章节',
    commandPaletteSearch: '搜索章节...',
    commandPaletteEmpty: '未找到匹配的章节',
    commandPaletteHeading: '导航',
  },
  employment: {
    fulltime: '全职',
    freelance: '自由职业',
    contract: '合同',
  },
  hero: {
    name: 'Ted Ryu',
    altName: '刘在荣',
    role: '打造0→1 SaaS、AI编排与金融科技系统的全栈开发者',
    mastheadLabel: '作品集 · Vol. 01',
    tagline: '我把0→1产品从初始架构推进到可稳定运营的系统。',
    proofLabel: '核心依据',
    ctaProjects: '查看代表项目',
    ctaContact: '联系我',
    nowLabel: '当前',
    nowItems: [
      '加密做市系统与 B2B 投资管理面板',
      '面向美国保险公司的 AI 编排后端',
    ],
    keywordsLabel: '近期关注',
    availability: {
      open: '可接自由项目 · 对正式职位开放',
      limited: '仅接有选择性的项目',
      closed: '暂不接受新咨询',
    },
    availabilityBadge: {
      open: '开放',
      limited: '有限',
      closed: '关闭',
    },
  },
  about: {
    sectionTitle: '关于',
    eyebrow: 'About',
    impact:
      '相比讲述宏大的愿景，我更长期在做的是把人真正会用、团队也能长期运营的产品先落到地上。虽然经历跨过金融科技、区块链、SaaS 与 AI，但反复在做的事情始终一样：降低复杂度，让原型到生产的距离更短。',
    stat1Label: '工作经验',
    stat1Suffix: '年+',
    stat2Label: '0→1产品',
    stat2Value: '6+',
    stat3Label: '生产基础设施',
    stat3Value: 'AWS · K8s · Terraform',
    philosophyTitle: '我看重的事',
    philosophy1:
      '简历上会留下数字，但我更看重支撑这些数字的结构。能够冷静回滚的发布链路、在故障下仍保持一致的支付与结算流程，以及在关键判断处仍给人留出空间的运营界面，这些一直是我愿意花时间打磨的部分。',
    philosophy2:
      'LinkedIn 和简历会留下头衔与结果，GitHub 和文章会留下一个人如何思考问题。所以我希望公开的代码和文档不只展示做成了什么，也能看出为什么系统会被设计成这样。新工具值得快学，但清晰的责任边界、可观测性和长期可靠性更重要。',
    philosophy3:
      '最近这意味着把 LLM 和智能体接进产品与后台工作流里。只是我不会浪漫化自动化。我更愿意明确哪些重复工作可以安全交给系统，哪些判断仍应由人来承担。比起单纯更快交付，我更在意系统在热度过去之后还能稳定运行。',
    domainsTitle: '领域经验',
    domains: {
      fullstack: '全栈 / 后端',
      fintech: '金融科技',
      blockchain: '区块链',
      saas: 'SaaS',
      ai: 'AI / LLM',
    },
    outcomesTitle: '代表性成果',
    outcomes: [
      {
        label: '部署可靠性',
        value: '500+ 次无停机部署',
        note:
          '基于 EKS 与 ArgoCD 的 Blue-Green 流水线实现 0 秒停机、30 秒内回滚。',
      },
      {
        label: '生产规模',
        value: '每日 500 万条消息',
        note:
          '在峰值 3,000 RPS 环境下运营企业消息 API,稳定队列公平性与重试策略。',
      },
      {
        label: '运维效率',
        value: '20 分钟 → 4 分钟',
        note:
          '通过 LLM 编排将美国保险试点后台处理平均耗时降低约 80%。',
      },
    ],
    yearsShort: '年+',
  },
  manifesto: {
    sectionTitle: '与 AI 协作的方式',
    eyebrow: 'Approach',
    thesis: '我会用AI提升速度,但结构设计、防护栏和最终验证必须由人负责。',
    mindsetTitle: 'Principles',
    actionsTitle: 'In practice',
    mindset: [
      {
        key: 'structure',
        title: '先设计结构',
        note:
          '面对代理系统和自动化,我会先处理架构、防护栏与可审计性,再优化提示与流程。',
      },
      {
        key: 'verify',
        title: '用领域知识做验证',
        note:
          '对领域理解越深,提问就越准确,筛掉低质量结果的速度也越快。',
      },
    ],
    actions: [
      '把重复工作和运维瓶颈改造成可自动化的工作流。',
      '先做小型原型,再让指标和用户反馈决定下一步。',
      '快速吸收新工具,但对生产质量设更高标准。',
    ],
    lookingForTitle: '正在寻找的团队',
    lookingFor: [
      '欢迎多元视角的工程文化',
      '尊重快速决策与执行的组织',
      '基于指标的反馈闭环',
      '开拓AI时代新市场的产品',
    ],
  },
  experience: {
    sectionTitle: '经历',
    eyebrow: 'Experience',
    timelineLabel: '职业时间线',
    timelineAriaLabel: '职业时间线',
    earlyCareerLabel: '早期经历 · {n} 个角色',
    items: {
      masblue: {
        company: 'Masblue (masblue.studio)',
        summary: '把保险后台流程重构为代理编排型工作流',
        metric: '50 个试点案例 · 20 分钟 → 4 分钟',
        bullets: [
          '为美国保险公司的后台工作流设计基于LLM代理的编排后端。每个步骤嵌入领域防护栏、人工审核节点与审计日志,同步实现自动化与合规。试点50单平均处理时间由20分钟降至4分钟(约80%下降)(指标:试点处理时间仪表盘)。',
          '将每次LLM代理调用(输入、输出、中间状态、成本、延迟)以结构化事件持久化,并通过OpenTelemetry跟踪,支持失败场景的审计、复现与回滚,满足合规要求。',
        ],
      },
      onto: {
        company: 'Ontoh Vision',
        summary: '设计连接现场推理与 R2 上传的视觉管线',
        metric: '上传成功率 99.7% · 8 台摄像头',
        bullets: [
          '设计CCTV(RTSP) → 现场GPU推理 → Cloudflare R2的端到端管道。本地缓冲(最长24小时)+ 断网恢复补传,上传成功率维持在99.7%(指标:Cloudflare Analytics,7天平均)。',
          '基于Presigned URL + 回调的上传API设计,8台摄像头同时扩容时后端零发布;节点仅凭密钥认证即可横向扩展(指标:内部部署日志)。',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        summary: '为机构客户运营交易报表与做市引擎基础设施',
        metric: '批处理成功率 99.9% · 日均约 3,000 笔',
        bullets: [
          '设计并运营B2B交易业绩报告系统。独立报告账本 + 日/月快照批次 + 校验和PDF流水线在15家机构客户上维持99.9%的批次成功率(指标:CloudWatch批次日志,30天平均)。',
          '基于Electron + Node.js + PostgreSQL + Redis + WebSocket构建加密套利 / 做市引擎。拆分接收/策略/下单事件循环,将策略执行p95延迟由120ms降至45ms(约63%下降),日均处理3,000单成交(指标:内部延迟日志)。',
        ],
      },
      dio: {
        company: 'DIO 自由职业平台',
        summary: '在多个 0→1 产品里实现支付、结算与 LLM 工作流',
        metric: '8 周上线 · 2,500 次签到 · 12 人试点',
        bullets: [
          '(Woo-Yeon-Hee) 将本地匹配App的匹配 · 结账 · 自动结算逻辑建模为状态机 + 事件溯源,8周内进入生产,上线两周内记录2,500次签到,关键流程缺陷0件(指标:Sentry)。',
          '(Linker) 通过Outbox模式整合Toss PG与Kakao AlimTalk,保障支付—通知一致性;在每周约250单匹配量下,重试 + DLQ流程将支付失败率稳定在约1%(指标:PG webhook日志,30天平均)。',
          '(Momentir) 设计基于LLM的客户笔记摘要与日程自动抽取流水线。结构化结果交由设计师的审批UI,减少CRM遗漏;试点12人日均运营工时减少约30%(方法:用户访谈)。',
          '(Hidden Gem) 基于PostGIS + Redis构建位置 / 类别Feed后端。索引与缓存策略将主Feed p95响应时间稳定在180ms以内(指标:APM p95,7天平均)。',
        ],
      },
      dssolve: {
        company: 'DS Solve',
        summary: '构建可通过配置扩展的 Randibot 多租户后端',
        metric: '5 个工作区 · 月均约 1,200 次 ETL',
        bullets: [
          'Randibot后端MVP开发 — RCMS / K-Startup爬虫ETL + 多租户架构(tenancyId = workspaceId)使新机构入驻仅通过配置变更完成。5个工作区零代码改动完成接入,月均1,200次ETL稳定运行(指标:按机构配置管理日志)。',
        ],
      },
      miso: {
        company: 'Miso Inc.',
        summary: '构建包含老用户迁移的 Cognito 认证体系',
        metric: '迁移 12 万用户 · 失败率低于 0.5%',
        bullets: [
          '基于AWS Cognito构建认证系统。通过Cognito Lambda Trigger实现12万老用户零停机迁移,并为CX CRM引入OTP;认证失败率维持在0.5%以下(指标:CloudWatch)。',
        ],
      },
      flfi: {
        company: 'FLFI',
        summary: '主导金融科技平台后端与部署体系重构',
        metric: '500+ 次零停机部署 · 每日 3 次发布',
        bullets: [
          '后端Tech Lead — 带领6人全栈开发团队并指导2名初级工程师,围绕清晰的领域边界重新设计NestJS后端、Vue 3前端与AWS基础设施,推动迭代速度与部署频率提升,并落实代码评审文化(指标:Jira周期时间、GitOps历史)。',
          '基于EKS + Karpenter + ArgoCD + Helm构建零停机蓝绿流水线。部署节奏从每周1次提升到每日3次,两年内完成500+次零停机部署,部署停机0秒,回滚30秒内完成(指标:ArgoCD rollout日志,全量)。',
          '设计Lambda@Edge + CloudFront图片CDN。即时裁剪 + 区域缓存将图片p95响应时间由420ms降至120ms(约71%下降),日均处理50万张图片(指标:CloudWatch RUM,7天平均)。',
          '基于ethers.js交付Blockchain DApp — MetaMask登录、交易签名、代币余额查询。钱包抽象层与独立事件索引器使钱包连接失败率由8%降至0.5%,链上同步延迟保持稳定(指标:前端错误日志、索引器延迟)。',
          '基于OKX Broker API构建加密衍生品交易所 — 拆分WebSocket行情流、REST下单API与Redis仓位快照,将成交延迟稳定在约80ms(API RTT水平),支持120+交易对(指标:内部延迟日志)。此后与同一CEO/CTO团队延续合作,以Rootstone自由职业合同形式继续协作。',
        ],
      },
      aligo: {
        company: 'ALIGO',
        summary: '运营大规模企业消息 API 与队列基础设施',
        metric: '日发送 500 万条 · 峰值 3,000 RPS',
        bullets: [
          '运营Vanilla PHP 7的企业消息发送API和服务器 — 日发送500万条、高峰3,000 RPS环境下,按客户拆分队列 + 加权轮询改善高峰期公平性;重试采用指数退避和隔离队列分散压力(指标:内部调度仪表盘)。',
          '将Kakao AlimTalk / FriendTalk Open API产品化。统一模板与审批状态仪表盘减少下游供应商的集成工时和CX运维负担。',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        summary: '开发 P2P 借贷产品与金融对账流程',
        metric: '累计约 12 万笔交易 · 一致性事故 0 起',
        bullets: [
          '基于Wordpress插件交付P2P贷款解决方案,集成Paygate Seyfert金融API(虚拟账户 · 投资 · 还款 · 状态)。事务分离 + 幂等响应存储在两年累计约12万笔交易中维持金融一致性事件0件(指标:每日对账批次)。',
        ],
      },
      ninefive: {
        company: 'Ninefive',
        summary: '在宣传页动效与可访问性之间保持平衡',
        metric: '停留/滚动 KPI · 可访问性合规',
        bullets: [
          '产品推广页面交互实现以prefers-reduced-motion响应,结合KWAH可访问性清单推进。停留时间 · 滚动深度KPI与可访问性合规同时达成。',
        ],
      },
      '4depth': {
        company: '4depth',
        summary: '负责公共网站前端发布与可访问性实现',
        metric: '14 个公共项目 · K-WCAG 认证',
        bullets: [
          '公共机构 · 地方政府网站发布 · WCAG可访问性支持 · 响应式Web实现。通过语义化HTML与ARIA设计、设计稿阶段的可访问性清单,14个政府项目顺利通过K-WCAG认证。',
        ],
      },
    },
  },
  projects: {
    sectionTitle: '项目',
    eyebrow: 'Selected Work',
    description: '公开产品与已下线或内部项目的精选组合。',
    viewSite: '打开网站',
    viewCaseStudy: '查看详情',
    backToProjects: '返回项目',
    publicGroup: '公开产品',
    publicGroupDesc: '以自由职业身份交付的服务',
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
        proof: '5个机构工作区 · 月均约1,200次ETL',
      },
      momentir: {
        title: 'Momentir',
        desc:
          '面向保险设计师的AI CRM。通过LLM自动摘要客户笔记并注册日程,降低运营工时。',
        proof: '12名保险顾问试点 · 运营工时下降约30%',
      },
      nursevillage: {
        title: 'Nursevillage',
        desc: '面向护士的iOS/Android社区App — 基于位置的社交Feed与收藏统计仪表盘。',
        proof: '已上线的护士社区 App',
      },
      'flfi-exchange': {
        title: 'FLFI 衍生品交易所',
        desc: '基于OKX Broker API的加密衍生品交易所 — 实时行情、撮合与仓位管理。',
        proof: '120+ 交易对 · 成交延迟约 80ms',
      },
      'flfi-lending': {
        title: 'FLFI 金融科技平台',
        desc:
          'NestJS + Vue 3 + EKS端到端架构,蓝绿部署,图片CDN,Web3 DApp。',
        proof: '500+次零停机部署 · 图片p95从420ms降至120ms',
      },
      'ontoh-vision': {
        title: 'Ontoh Vision',
        desc: 'CCTV(RTSP)→ 现场AI事件检测 → Cloudflare R2存储工作流。',
        proof: '上传成功率99.7% · 摄像头扩容时后端无需发布',
      },
      'rootstone-trading': {
        title: 'Rootstone Trading',
        desc: '基于Electron桌面端的加密套利与做市投资组合系统。',
        proof: '策略执行 p95 120ms → 45ms · 日均约3,000笔成交',
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
    backToList: '文章列表',
    readTime: '约 {n} 分钟',
    items: {
      'this-site': {
        title: '打造本站的故事',
        summary: '关于Next.js · 4语言i18n · GitHub Pages简历站点的设计回顾。',
        date: '2026-04',
      },
      'multi-tenant-saas': {
        title: '0→1多租户SaaS设计笔记',
        summary: 'tenancyId = workspaceId模式、Postgres RLS的权衡,以及Stripe订阅接入。',
        date: '2026-05',
      },
      'agent-orchestration': {
        title: 'LLM代理编排:HIL · 审计 · 回滚',
        summary: '将保险领域拆解为LLM代理过程中获得的可观测性与失败设计模式。',
        date: '2026-06',
      },
      'blue-green': {
        title: '零停机蓝绿部署:0秒停机 · 30秒回滚',
        summary: '在EKS + Karpenter + ArgoCD + Helm组合上的部署阶段与回归安全网设计。',
        date: '2026-07',
      },
    },
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
    freelanceValue: 'heyted.dev',
    githubLabel: 'GitHub',
    githubValue: 'github.com/jaeyeong94',
    linkedinLabel: 'LinkedIn',
    linkedinValue: 'linkedin.com/in/jae-yeong-you',
    testimonials: '推荐与参考人资料可应要求提供。',
  },
  footer: {
    credit: 'Ted Ryu · Jaeyeong You',
    updated: '最后更新',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
