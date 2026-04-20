import type { ProjectId } from '@/content/resume';
import type { Locale } from '@/lib/i18n';

export type ProjectCaseStudyId = 'randibot';

interface ProjectCaseStudyHighlight {
  label: string;
  value: string;
  note: string;
}

interface ProjectCaseStudySection {
  title: string;
  paragraphs: string[];
}

export interface ProjectCaseStudyContent {
  eyebrow: string;
  summary: string;
  highlights: ProjectCaseStudyHighlight[];
  sections: ProjectCaseStudySection[];
}

interface ProjectCaseStudyDefinition {
  updatedAt: string;
  content: Record<Locale, ProjectCaseStudyContent>;
}

export const projectCaseStudies = {
  randibot: {
    updatedAt: '2024-09-01',
    content: {
      ko: {
        eyebrow: 'Case Study',
        summary:
          'RCMS · K-Startup 연구비 운영 흐름을 자동화하는 0→1 SaaS MVP에서, 기관별 온보딩이 설정만으로 끝나도록 멀티테넌트 백엔드와 ETL 파이프라인을 설계했습니다.',
        highlights: [
          {
            label: '역할',
            value: '백엔드 MVP 설계 · 구현',
            note: 'NestJS · PostgreSQL · 스크래핑 ETL',
          },
          {
            label: '기간',
            value: '2024.02 — 2024.09',
            note: 'DS Solve 프리랜서',
          },
          {
            label: '핵심 설계',
            value: 'tenancyId = workspaceId',
            note: '기관별 설정 · 데이터 경계 분리',
          },
          {
            label: '결과',
            value: '5개 워크스페이스 온보딩',
            note: '코드 변경 없이 설정만으로 확장',
          },
        ],
        sections: [
          {
            title: '문제',
            paragraphs: [
              'Randibot은 정부지원사업 연구비 집행 데이터를 자동 수집하고 기관별로 가공해 보여주는 제품이었습니다. 기관마다 신청 양식과 운영 방식이 달라, 신규 고객이 들어올 때마다 개발자가 직접 로직을 수정하면 제품화 속도가 느려지는 구조였습니다.',
              '목표는 단순한 스크래핑 자동화가 아니라, 기관별 차이를 설정으로 흡수하면서도 데이터 적재·권한·운영 화면이 서로 섞이지 않는 SaaS 구조를 만드는 것이었습니다.',
            ],
          },
          {
            title: '구현',
            paragraphs: [
              '백엔드는 `tenancyId = workspaceId` 패턴으로 정리하고, 기관별 수집 규칙과 후처리 옵션을 워크스페이스 설정으로 분리했습니다. 이 구조 덕분에 애플리케이션 로직은 공통으로 유지하면서도 고객별 데이터 경계를 명확히 가져갈 수 있었습니다.',
              'RCMS · K-Startup 수집 파이프라인은 단계별 잡으로 쪼개고, 변환 실패와 재실행이 쉬운 형태로 설계했습니다. 운영자는 워크스페이스 설정만 바꿔 신규 기관을 온보딩할 수 있었고, 백엔드 배포 없이도 수집 규칙을 조정할 수 있었습니다.',
            ],
          },
          {
            title: '결과',
            paragraphs: [
              '프로덕션에서는 5개 워크스페이스를 코드 변경 없이 온보딩했고, 월 1,200건 수준의 ETL 파이프라인을 안정적으로 운영했습니다. 제품 입장에서는 “기관 추가 = 개발 요청”이 아니라 “기관 추가 = 설정 입력”으로 바뀐 것이 가장 큰 전환이었습니다.',
              '이 작업은 단순히 기능을 붙인 것이 아니라, 이후의 영업·운영 속도를 결정하는 SaaS 기본 구조를 먼저 닦은 사례였습니다.',
            ],
          },
        ],
      },
      en: {
        eyebrow: 'Case Study',
        summary:
          'For a 0→1 SaaS MVP that automates RCMS · K-Startup grant operations, I designed a multi-tenant backend and ETL pipeline so onboarding each agency became a configuration task instead of a code change.',
        highlights: [
          {
            label: 'Role',
            value: 'Backend MVP design & implementation',
            note: 'NestJS · PostgreSQL · scraping ETL',
          },
          {
            label: 'Timeline',
            value: '2024.02 — 2024.09',
            note: 'Freelance at DS Solve',
          },
          {
            label: 'Core design',
            value: 'tenancyId = workspaceId',
            note: 'Clear workspace config and data boundaries',
          },
          {
            label: 'Outcome',
            value: '5 workspaces onboarded',
            note: 'Expanded without code changes',
          },
        ],
        sections: [
          {
            title: 'Problem',
            paragraphs: [
              'Randibot was built to collect and normalize public grant-budget execution data from RCMS and K-Startup. Each agency had slightly different operational rules, and handling each new customer with custom code would have slowed the product down immediately.',
              'The real target was not “automate scraping,” but to create a SaaS foundation where customer-specific differences could be absorbed through configuration while data, permissions, and operations remained cleanly separated.',
            ],
          },
          {
            title: 'What I built',
            paragraphs: [
              'I structured the backend around `tenancyId = workspaceId`, separating collection rules and post-processing options into workspace-level configuration. That kept the application logic shared while maintaining hard boundaries between tenants.',
              'The RCMS · K-Startup pipeline was split into staged jobs so failures could be retried and traced without reprocessing everything. Operators could onboard a new institution by entering workspace settings rather than waiting for a backend deploy.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'In production, the system onboarded 5 workspaces without code changes and handled roughly 1,200 ETL runs per month. The important shift was that “adding a new agency” became an operations task instead of a development request.',
              'That made this project less about adding features and more about establishing the SaaS shape that later sales and operations could scale on top of.',
            ],
          },
        ],
      },
      ja: {
        eyebrow: 'Case Study',
        summary:
          'RCMS・K-Startup研究費運用を自動化する0→1 SaaS MVPで、機関ごとのオンボーディングが設定だけで完結するよう、マルチテナントバックエンドとETL基盤を設計しました。',
        highlights: [
          {
            label: '役割',
            value: 'バックエンドMVP設計・実装',
            note: 'NestJS · PostgreSQL · スクレイピングETL',
          },
          {
            label: '期間',
            value: '2024.02 — 2024.09',
            note: 'DS Solve フリーランス',
          },
          {
            label: '中核設計',
            value: 'tenancyId = workspaceId',
            note: '機関ごとの設定とデータ境界を分離',
          },
          {
            label: '結果',
            value: '5ワークスペースをオンボーディング',
            note: 'コード変更なしで拡張',
          },
        ],
        sections: [
          {
            title: '課題',
            paragraphs: [
              'Randibotは政府支援事業の研究費執行データを自動収集・整形して見せる製品でした。機関ごとに運用ルールが異なるため、新規顧客のたびにコードを直す構造では、プロダクト化の速度がすぐに落ちてしまいます。',
              '必要だったのは単なるスクレイピング自動化ではなく、機関差分を設定で吸収しながら、データ・権限・運用画面が混ざらないSaaS基盤でした。',
            ],
          },
          {
            title: '実装',
            paragraphs: [
              'バックエンドは `tenancyId = workspaceId` パターンで整理し、機関別の収集ルールや後処理オプションをワークスペース設定に分離しました。これによりアプリケーションロジックを共通化しつつ、テナント境界を明確に保てました。',
              'RCMS・K-Startupの収集パイプラインは段階的なジョブに分割し、失敗時の再実行や追跡がしやすい構成にしました。運用側は設定だけで新規機関をオンボーディングできるようになりました。',
            ],
          },
          {
            title: '結果',
            paragraphs: [
              '本番では5つのワークスペースをコード変更なしでオンボーディングし、月1,200件規模のETLを安定運用しました。重要だったのは「新規機関追加 = 開発依頼」ではなく「新規機関追加 = 設定入力」に変わったことです。',
              'この仕事は機能追加よりも、その後の営業と運用速度を支えるSaaSの土台を先に整えたケースでした。',
            ],
          },
        ],
      },
      zh: {
        eyebrow: 'Case Study',
        summary:
          '在一个自动化 RCMS · K-Startup 研究经费流程的 0→1 SaaS MVP 中，我设计了多租户后端和 ETL 流程，使新增机构的接入从“改代码”变成“改配置”。',
        highlights: [
          {
            label: '角色',
            value: '后端 MVP 设计与实现',
            note: 'NestJS · PostgreSQL · 抓取型 ETL',
          },
          {
            label: '周期',
            value: '2024.02 — 2024.09',
            note: 'DS Solve 自由职业',
          },
          {
            label: '核心设计',
            value: 'tenancyId = workspaceId',
            note: '按机构隔离配置与数据边界',
          },
          {
            label: '结果',
            value: '接入 5 个工作区',
            note: '无需改代码即可扩展',
          },
        ],
        sections: [
          {
            title: '问题',
            paragraphs: [
              'Randibot 的目标是自动收集并整理政府资助项目中的研究经费执行数据。不同机构的流程和规则并不完全一致，如果每新增一个客户都需要改代码，产品化速度会很快被拖慢。',
              '真正需要解决的不是“自动抓取”本身，而是建立一个 SaaS 基础，让客户差异通过配置吸收，同时保证数据、权限和运营界面互不混杂。',
            ],
          },
          {
            title: '实现',
            paragraphs: [
              '我将后端整理为 `tenancyId = workspaceId` 模式，把机构级采集规则和后处理选项都放到工作区配置里。这样业务逻辑可以共享，而租户边界依然清晰。',
              'RCMS · K-Startup 的采集流程被拆成分阶段任务，方便失败重试和问题追踪。运营侧只需输入工作区配置，就可以接入新的机构，而不需要等待后端重新部署。',
            ],
          },
          {
            title: '结果',
            paragraphs: [
              '上线后系统在不改代码的情况下完成了 5 个工作区的接入，并稳定运行了每月约 1,200 次 ETL。最大的变化是，“新增机构”从开发任务变成了运营配置任务。',
              '这项工作本质上不是单纯加功能，而是先把后续销售和运营都能承接的 SaaS 基础打牢。',
            ],
          },
        ],
      },
    },
  },
} satisfies Record<ProjectCaseStudyId, ProjectCaseStudyDefinition>;

export function isProjectCaseStudySlug(slug: string): slug is ProjectCaseStudyId {
  return slug in projectCaseStudies;
}

export function hasProjectCaseStudy(projectId: ProjectId): projectId is ProjectCaseStudyId {
  return projectId in projectCaseStudies;
}
