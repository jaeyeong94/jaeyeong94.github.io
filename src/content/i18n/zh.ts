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
    sameTeamLabel: '同一团队 · 与同一CEO/CTO延续合作',
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
    availability: {
      open: '可接自由项目 · 对正式职位开放',
      limited: '仅接有选择性的项目',
      closed: '暂不接受新咨询',
    },
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
    domainsTitle: '领域经验',
    domains: {
      fullstack: '全栈 / 后端',
      fintech: '金融科技',
      blockchain: '区块链',
      saas: 'SaaS',
      ai: 'AI / LLM',
    },
    yearsShort: '年+',
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
    items: {
      masblue: {
        company: 'Masblue (masblue.studio)',
        bullets: [
          '为美国保险公司的后台工作流设计基于LLM代理的编排后端。每个步骤嵌入领域防护栏、人工审核节点与审计日志,同步实现自动化与合规(指标:试点处理时间仪表盘)。',
          '将每次LLM代理调用(输入、输出、中间状态、成本、延迟)以结构化事件持久化,并通过OpenTelemetry跟踪,支持失败场景的审计、复现与回滚,满足合规要求。',
        ],
      },
      onto: {
        company: 'Ontoh Vision',
        bullets: [
          '设计CCTV(RTSP) → 现场GPU推理 → Cloudflare R2的端到端管道。本地缓冲(最长24小时)+ 断网恢复补传,瞄准数据丢失0%(指标:Cloudflare Analytics,7天平均)。',
          '基于Presigned URL + 回调的上传API设计,新增N台摄像头无需后端发布;节点仅凭密钥认证即可横向扩展(指标:内部部署日志)。',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          '设计并运营B2B交易业绩报告系统。独立报告账本 + 日/月快照批次 + 校验和PDF流水线同时保障准确性与审计性(指标:批次成功率 [CloudWatch])。',
          '基于Electron + Node.js + PostgreSQL + Redis + WebSocket构建加密套利 / 做市引擎。拆分接收/策略/下单事件循环,将策略执行p95延迟较基线缩短(指标:内部延迟日志)。',
        ],
      },
      dio: {
        company: 'DIO 自由职业平台',
        bullets: [
          '(Woo-Yeon-Hee) 将本地匹配App的匹配 · 结账 · 自动结算逻辑建模为状态机 + 事件溯源,8周内进入生产,关键流程上线时缺陷0件(指标:Sentry)。',
          '(Linker) 通过Outbox模式整合Toss PG与Kakao AlimTalk,保障支付—通知一致性;重试 + DLQ流程将支付失败率稳定在约1%(指标:PG webhook日志,30天平均)。',
          '(Momentir) 设计基于LLM的客户笔记摘要与日程自动抽取流水线。结构化结果交由设计师的审批UI,减少CRM遗漏;试点12人日均运营工时减少约30%(方法:用户访谈)。',
          '(Hidden Gem) 基于PostGIS + Redis构建位置 / 类别Feed后端。索引与缓存策略将主Feed p95响应时间控制在目标以内(指标:APM p95,7天平均)。',
        ],
      },
      dssolve: {
        company: 'DS Solve',
        bullets: [
          'Randibot后端MVP开发 — RCMS / K-Startup爬虫ETL + 多租户架构(tenancyId = workspaceId)使新机构入驻仅通过配置变更完成。扩展无需代码改动(指标:按机构配置管理日志)。',
        ],
      },
      miso: {
        company: 'Miso · 平台团队',
        bullets: [
          '基于AWS Cognito构建认证系统。通过Cognito Lambda Trigger实现老用户零停机迁移,并为CX CRM引入OTP;认证失败率维持在0.5%以下(指标:CloudWatch)。',
        ],
      },
      flfi: {
        company: 'FLFI',
        bullets: [
          '后端Tech Lead — 带领全栈开发团队并指导初级工程师,围绕清晰的领域边界重新设计NestJS后端、Vue 3前端与AWS基础设施,推动迭代速度与部署频率提升,并落实代码评审文化(指标:Jira周期时间、GitOps历史)。',
          '基于EKS + Karpenter + ArgoCD + Helm构建零停机蓝绿流水线 — 部署停机0秒,回滚30秒内完成(指标:ArgoCD rollout日志,全量)。',
          '设计Lambda@Edge + CloudFront图片CDN。即时裁剪 + 区域缓存将图片p95较源站直连显著缩短(指标:CloudWatch RUM,7天平均)。',
          '基于ethers.js交付Blockchain DApp — MetaMask登录、交易签名、代币余额查询。钱包抽象层与独立事件索引器使钱包连接失败率与链上同步延迟保持稳定(指标:前端错误日志、索引器延迟)。',
          '基于OKX Broker API构建加密衍生品交易所 — 拆分WebSocket行情流、REST下单API与Redis仓位快照,将成交延迟稳定在API RTT水平(指标:内部延迟日志)。此后与同一CEO/CTO团队延续合作,以Rootstone自由职业合同形式继续协作。',
        ],
      },
      aligo: {
        company: 'ALIGO',
        bullets: [
          '运营Vanilla PHP 7的企业消息发送API和服务器。按客户拆分队列 + 加权轮询改善高峰期公平性;重试采用指数退避和隔离队列分散压力(指标:内部调度仪表盘)。',
          '将Kakao AlimTalk / FriendTalk Open API产品化。统一模板与审批状态仪表盘减少下游供应商的集成工时和CX运维负担。',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        bullets: [
          '基于Wordpress插件交付P2P贷款解决方案,集成Paygate Seyfert金融API(虚拟账户 · 投资 · 还款 · 状态)。事务分离 + 幂等响应存储使运营期间金融一致性事件为0(指标:每日对账批次)。',
        ],
      },
      ninefive: {
        company: 'Ninefive',
        bullets: [
          '产品推广页面交互实现以prefers-reduced-motion响应,结合KWAH可访问性清单推进。停留时间 · 滚动深度KPI与可访问性合规同时达成。',
        ],
      },
      '4depth': {
        company: '4depth',
        bullets: [
          '公共机构 · 地方政府网站发布 · WCAG可访问性支持 · 响应式Web实现。通过语义化HTML与ARIA设计、设计稿阶段的可访问性清单,多个项目顺利通过可访问性认证。',
        ],
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
      'agent-orchestration': {
        title: 'LLM代理编排:HIL · 审计 · 回滚(即将推出)',
        summary: '将保险领域拆解为LLM代理过程中获得的可观测性与失败设计模式。',
        date: '2026-06',
      },
      'blue-green': {
        title: '零停机蓝绿部署:0秒停机 · 30秒回滚(即将推出)',
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
    testimonials: '推荐与参考人资料可应要求提供。',
  },
  credentials: {
    sectionTitle: '学历与资格',
    eyebrow: 'Credentials',
    educationTitle: '学历',
    certificationsTitle: '资格证书',
    education: {
      knou: {
        school: '韩国广播通信大学',
        degree: '计算机科学',
      },
      'cheonan-commercial': {
        school: '天安商业高中',
        degree: '计算机软件',
      },
    },
    certifications: {
      'toss-study': 'Toss 学习俱乐部 (第1期)',
      'info-processing': '信息处理技能士(韩国)',
      'computer-graphics': '计算机图形学应用技能士(韩国)',
      'gtq-1': 'GTQ 1级',
      'itq-master': 'ITQ Master',
    },
  },
  footer: {
    updated: '最后更新',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
