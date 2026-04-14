import type { Dictionary } from './ko';

const dict: Dictionary = {
  meta: {
    title: 'Ted Ryu — 全栈开发者',
    description:
      '11年经验的全栈开发者,专注于金融科技、区块链、SaaS和AI领域的0→1产品构建。',
  },
  nav: {
    about: '关于',
    experience: '经历',
    projects: '项目',
    skills: '技术栈',
    contact: '联系方式',
  },
  common: {
    present: '至今',
    years: '年',
    months: '个月',
    showOlder: '显示早期经历',
    hideOlder: '收起',
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
  experience: {
    sectionTitle: '经历',
    eyebrow: 'Experience',
    items: {
      onto: {
        company: 'Ontoh Vision',
        bullets: [
          '设计并实现CCTV(RTSP)→ AI事件检测 → Cloudflare R2上传的端到端工作流。',
          '在现场边缘服务器上开发基于presigned URL的视频上传管道与RESTful API。',
        ],
      },
      rootstone: {
        company: 'Rootstone',
        bullets: [
          '设计并开发面向B2B客户的交易业绩报告系统。',
          '基于Electron + Node.js + PostgreSQL + Redis构建加密货币套利 / 做市商投资组合系统。',
        ],
      },
      dio: {
        company: 'DIO 自由职业平台',
        bullets: [
          '(Woo-Yeon-Hee) 约见App后端MVP — 餐厅签到、聊天匹配、自动结算核心逻辑。',
          '(Linker) 每周1:1匹配全栈MVP — Toss PG、Kakao AlimTalk集成。',
          '(Momentir) 保险GA客户管理SaaS — 基于LLM的客户笔记摘要与自动日程登记流程。',
          '(Hidden Gem) 收藏家社区iOS/Android App — 基于位置的社交Feed后端。',
        ],
      },
      dssolve: {
        company: 'DS Solve',
        bullets: [
          '开发Randibot后端MVP — RCMS / K-Startup爬虫ETL管道与多租户架构。',
        ],
      },
      'flfi-exchange': {
        company: 'FLFI · 交易所团队',
        bullets: ['基于OKX Broker API构建加密衍生品交易所系统。'],
      },
      miso: {
        company: 'Miso · 平台团队',
        bullets: ['基于AWS Cognito构建认证系统;为CX CRM交付OTP认证与用户迁移。'],
      },
      'flfi-lead': {
        company: 'FLFI',
        bullets: [
          '后端技术主管 — 端到端设计NestJS后端、Vue 3前端和AWS基础设施架构。',
          '基于EKS + Karpenter + ArgoCD + Helm构建蓝绿零停机部署流水线。',
          '开发Lambda@Edge + CloudFront图片CDN系统(上传、缓存、实时裁剪)。',
          '基于web3.js / Ethers.js交付Blockchain DApp — MetaMask登录、签名、代币余额查询。',
        ],
      },
      aligo: {
        company: 'ALIGO',
        bullets: [
          '基于Vanilla PHP 7构建并运营商业短信发送服务器和API。',
          '交付Kakao AlimTalk / FriendTalk Open API功能,维护CX后台工具。',
        ],
      },
      'studio-bloom': {
        company: 'Studio Bloom',
        bullets: [
          '基于Wordpress插件交付P2P贷款解决方案,集成Paygate Seyfert金融API(虚拟账户、投资、还款)。',
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
    eyebrow: 'Projects',
    viewSite: '打开网站',
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
    },
  },
  skills: {
    sectionTitle: '技术栈',
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
    cta: '欢迎新的机会和合作。随时联系我。',
    locationLabel: '位置',
    locationValue: '首尔, 韩国',
    emailLabel: '邮箱',
  },
  footer: {
    updated: '最后更新',
    builtWith: 'Built with Next.js',
  },
};

export default dict;
