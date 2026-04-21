import type { ProjectId } from '@/content/resume';
import type { Locale } from '@/lib/i18n';

export type ProjectCaseStudyId = 'randibot' | 'momentir' | 'flfi-lending';

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
  momentir: {
    updatedAt: '2026-04-21',
    content: {
      ko: {
        eyebrow: 'Case Study',
        summary:
          '보험 GA 운영팀이 남기는 상담 노트와 후속 일정을 LLM으로 구조화해, 설계사가 CRM 입력보다 고객 대응에 더 많은 시간을 쓰도록 만든 AI CRM 흐름을 설계했습니다.',
        highlights: [
          {
            label: '역할',
            value: '제품 설계 · 풀스택 구현',
            note: 'LLM 파이프라인 · 승인 UI · CRM 흐름',
          },
          {
            label: '컨텍스트',
            value: '보험 GA 운영 워크플로우',
            note: 'DIO 프리랜서 프로젝트',
          },
          {
            label: '핵심 설계',
            value: '요약 → 추출 → 승인',
            note: '구조화 결과를 사람 확인 단계와 연결',
          },
          {
            label: '결과',
            value: '파일럿 12명 · 공수 약 30% 절감',
            note: '사용자 인터뷰 기준',
          },
        ],
        sections: [
          {
            title: '문제',
            paragraphs: [
              '보험 설계사는 상담 이후 고객 노트를 정리하고, 다음 액션을 CRM에 다시 입력하는 데 적지 않은 시간을 씁니다. 메모는 자유형 텍스트로 남고, 일정 등록은 별도 흐름으로 처리되기 때문에 중요한 후속 조치가 빠지는 경우도 잦았습니다.',
              'Momentir의 과제는 “상담 내용을 AI가 알아서 처리한다”는 인상을 주는 것이 아니라, 설계사가 검토 가능한 형태로 요약과 액션 초안을 먼저 만들어 운영 부담을 줄이는 것이었습니다.',
            ],
          },
          {
            title: '구현',
            paragraphs: [
              '저는 고객 노트를 입력받아 핵심 맥락을 요약하고, 후속 일정·태스크 후보를 구조화된 결과로 추출하는 LLM 파이프라인을 설계했습니다. 결과는 바로 CRM에 쓰지 않고, 설계사가 확인·수정·승인할 수 있는 UI를 거치도록 연결했습니다.',
              '이 구조 덕분에 모델 출력의 불확실성을 운영 리스크로 넘기지 않으면서도, 반복 입력과 누락 확인에 들던 시간을 줄일 수 있었습니다. 제품 경험도 “자동 처리”보다 “빠르게 검토하고 확정”하는 흐름에 맞춰 설계했습니다.',
            ],
          },
          {
            title: '결과',
            paragraphs: [
              '파일럿에서는 보험 설계사 12명이 실제 상담 노트를 바탕으로 기능을 사용했고, 사용자 인터뷰 기준 일일 운영 공수가 약 30% 줄어든 것으로 확인했습니다. 특히 메모 요약과 후속 일정 정리처럼 반복적이지만 놓치기 쉬운 업무에서 반응이 좋았습니다.',
              '이 작업의 핵심은 AI 기능을 붙인 것이 아니라, 사람이 최종 판단을 유지한 채 AI를 운영 흐름 안에 무리 없이 넣는 제품 구조를 만든 점이었습니다.',
            ],
          },
        ],
      },
      en: {
        eyebrow: 'Case Study',
        summary:
          'I designed an AI CRM flow that turns insurance-agent notes into structured summaries and follow-up actions, so agents spend less time on CRM entry and more time on customer work.',
        highlights: [
          {
            label: 'Role',
            value: 'Product design & full-stack implementation',
            note: 'LLM pipeline · approval UI · CRM workflow',
          },
          {
            label: 'Context',
            value: 'Insurance GA operations workflow',
            note: 'Freelance engagement via DIO',
          },
          {
            label: 'Core design',
            value: 'Summarize → extract → approve',
            note: 'Structured output stays behind a human review step',
          },
          {
            label: 'Outcome',
            value: '12-agent pilot · ~30% less ops effort',
            note: 'Based on user interviews',
          },
        ],
        sections: [
          {
            title: 'Problem',
            paragraphs: [
              'Insurance agents spend a meaningful amount of time rewriting consultation notes and logging next steps into their CRM. Notes are usually free-form, while follow-up scheduling lives in a different flow, which makes omissions easy.',
              'The goal for Momentir was not to make AI look autonomous, but to create a workflow where summaries and follow-up drafts appear in a form agents can quickly review and finalize.',
            ],
          },
          {
            title: 'What I built',
            paragraphs: [
              'I designed an LLM pipeline that takes consultation notes, summarizes the key context, and extracts suggested follow-up schedules and tasks as structured output. Those results were routed through an approval UI rather than written directly into the CRM.',
              'That let the product reduce repetitive data entry without turning model uncertainty into operational risk. The product experience was shaped around “review quickly and confirm,” not “trust the AI blindly.”',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'In the pilot, 12 insurance agents used the flow with real consultation notes, and user interviews indicated roughly 30% less daily operational effort. The strongest response came from tasks that were repetitive yet easy to miss, such as note summarization and follow-up scheduling.',
              'What mattered in this project was not just adding AI features, but fitting AI into a production workflow where the human still owns the final decision.',
            ],
          },
        ],
      },
      ja: {
        eyebrow: 'Case Study',
        summary:
          '保険GAの相談メモをLLMで構造化し、要約と次回アクション候補を作ることで、設計士がCRM入力より顧客対応に時間を使えるAI CRMフローを設計しました。',
        highlights: [
          {
            label: '役割',
            value: 'プロダクト設計・フルスタック実装',
            note: 'LLMパイプライン · 承認UI · CRMフロー',
          },
          {
            label: '文脈',
            value: '保険GAの運用ワークフロー',
            note: 'DIO経由のフリーランス案件',
          },
          {
            label: '中核設計',
            value: '要約 → 抽出 → 承認',
            note: '構造化結果を人の確認ステップにつなぐ',
          },
          {
            label: '結果',
            value: '12名パイロット · 工数約30%削減',
            note: 'ユーザーインタビュー基準',
          },
        ],
        sections: [
          {
            title: '課題',
            paragraphs: [
              '保険設計士は相談後に顧客メモを整理し、次のアクションをCRMへ再入力する作業に多くの時間を使います。メモは自由文、日程登録は別フローという構造のため、重要なフォローアップが抜けやすい状態でした。',
              'Momentirで必要だったのは「AIが全部やる」印象ではなく、設計士が確認できる形で要約と次アクションの下書きを先に作り、運用負荷を減らすことでした。',
            ],
          },
          {
            title: '実装',
            paragraphs: [
              '相談メモを入力として受け取り、重要な文脈を要約し、次回日程やタスク候補を構造化結果として抽出するLLMパイプラインを設計しました。結果はCRMへ直接反映せず、設計士が確認・修正・承認できるUIを通す形にしました。',
              'この構造により、モデル出力の不確実性をそのまま運用リスクにせず、反復入力や抜け漏れ確認にかかる時間を減らせました。体験全体も「自動処理」より「素早く確認して確定」に合わせています。',
            ],
          },
          {
            title: '結果',
            paragraphs: [
              'パイロットでは保険設計士12名が実際の相談メモで機能を使い、ユーザーインタビュー基準で日次の運用工数が約30%減ったことを確認しました。特にメモ要約や次回日程整理のような、反復的で抜けやすい作業への評価が高かったです。',
              'この仕事で重要だったのはAI機能を追加したことよりも、人が最終判断を持ったままAIを運用フローへ自然に組み込める構造を作った点でした。',
            ],
          },
        ],
      },
      zh: {
        eyebrow: 'Case Study',
        summary:
          '我设计了一套面向保险 GA 的 AI CRM 流程，把咨询笔记转换为结构化摘要和后续动作建议，让顾问把时间更多放在客户工作而不是 CRM 录入上。',
        highlights: [
          {
            label: '角色',
            value: '产品设计与全栈实现',
            note: 'LLM 流程 · 审核 UI · CRM 工作流',
          },
          {
            label: '场景',
            value: '保险 GA 运营流程',
            note: '通过 DIO 的自由职业项目',
          },
          {
            label: '核心设计',
            value: '摘要 → 抽取 → 审核',
            note: '结构化结果必须经过人工确认',
          },
          {
            label: '结果',
            value: '12 人试点 · 工时下降约 30%',
            note: '基于用户访谈',
          },
        ],
        sections: [
          {
            title: '问题',
            paragraphs: [
              '保险顾问在咨询结束后，需要整理客户笔记并把下一步动作重新录入 CRM。笔记通常是自由文本，而后续日程又在另一套流程里处理，所以遗漏跟进事项很常见。',
              'Momentir 要解决的，不是让 AI 看起来“全自动”，而是先生成顾问可以快速审核的摘要和后续动作草稿，从而降低运营负担。',
            ],
          },
          {
            title: '实现',
            paragraphs: [
              '我设计了一条 LLM 流程，输入咨询笔记后先提炼核心上下文，再把后续日程与任务候选抽成结构化结果。结果不会直接写入 CRM，而是进入顾问可确认、修改、批准的界面。',
              '这样既减少了重复录入，又不会把模型不确定性直接变成运营风险。整个体验的重点也不是“自动完成”，而是“快速审核后确认”。',
            ],
          },
          {
            title: '结果',
            paragraphs: [
              '在试点中，12 名保险顾问使用真实咨询笔记体验了这条流程。根据用户访谈，日常运营工时约下降 30%。效果最明显的，是笔记摘要和后续日程整理这类重复但容易遗漏的工作。',
              '这个项目真正有价值的地方，不只是加上了 AI，而是把 AI 放进了一个仍由人做最终判断的生产流程里。',
            ],
          },
        ],
      },
    },
  },
  'flfi-lending': {
    updatedAt: '2026-04-21',
    content: {
      ko: {
        eyebrow: 'Case Study',
        summary:
          'NestJS · Vue 3 · EKS 기반 핀테크 플랫폼에서 서비스 경계와 무중단 배포 체계를 다시 설계해, 제품 속도와 운영 신뢰성을 함께 끌어올렸습니다.',
        highlights: [
          {
            label: '역할',
            value: 'Tech Lead · Backend',
            note: '풀스택 개발자 6명 팀 리딩',
          },
          {
            label: '기간',
            value: '2021.04 — 2023.11',
            note: 'FLFI 정규직',
          },
          {
            label: '핵심 설계',
            value: '도메인 경계 + Blue-Green',
            note: 'NestJS · Vue 3 · EKS · ArgoCD',
          },
          {
            label: '결과',
            value: '500+ 무중단 배포',
            note: '주 1회 → 일 3회 배포로 전환',
          },
        ],
        sections: [
          {
            title: '문제',
            paragraphs: [
              'FLFI는 대출, 거래, Web3 기능이 빠르게 늘어나던 핀테크 플랫폼이었습니다. 기능은 계속 추가되는데 서비스 경계와 배포 체계가 함께 정리되지 않으면, 신규 기능 속도보다 운영 리스크가 먼저 커지는 상태였습니다.',
              '특히 배포 주기가 느리고 롤백 자신감이 낮으면, 제품 팀은 작은 변경도 무겁게 다루게 됩니다. 이 프로젝트의 핵심은 기능 몇 개를 붙이는 것이 아니라, 계속 바뀌는 제품을 버틸 수 있는 플랫폼 기반을 다시 세우는 일이었습니다.',
            ],
          },
          {
            title: '구현',
            paragraphs: [
              '백엔드는 NestJS, 프론트는 Vue 3, 인프라는 AWS 기준으로 다시 경계를 나눴습니다. 도메인별 책임을 정리하고 공통 인프라 규칙을 맞추면서, 기능 추가가 곧 구조 훼손으로 이어지지 않게 만들었습니다.',
              '배포 쪽은 EKS + Karpenter + ArgoCD + Helm 조합으로 Blue-Green 파이프라인을 구축했습니다. 결과적으로 서비스 중단 없이 배포와 빠른 롤백이 가능한 운영 흐름을 만들었고, 제품 팀이 훨씬 짧은 사이클로 배포할 수 있게 됐습니다.',
              '동시에 Lambda@Edge + CloudFront 이미지 CDN과 Web3 연동 흐름도 정리해, 플랫폼 핵심 경로의 응답성과 운영 일관성을 함께 개선했습니다.',
            ],
          },
          {
            title: '결과',
            paragraphs: [
              '운영에서는 2년간 500회 이상의 무중단 배포를 유지했고, 배포 빈도도 주 1회 수준에서 일 3회 수준으로 올라갔습니다. 이미지 경로는 p95 420ms에서 120ms로 줄였고, 제품팀은 배포를 두려워하지 않는 상태에 가까워졌습니다.',
              '이 사례는 “플랫폼을 잘 만든다”는 말을 구조 재설계, 배포 체계, 성능 개선으로 실제 운영 지표에 연결한 작업이었습니다.',
            ],
          },
        ],
      },
      en: {
        eyebrow: 'Case Study',
        summary:
          'On a fintech platform built with NestJS, Vue 3, and EKS, I redesigned service boundaries and zero-downtime delivery so product velocity and operational reliability improved together.',
        highlights: [
          {
            label: 'Role',
            value: 'Tech Lead · Backend',
            note: 'Led a 6-person full-stack team',
          },
          {
            label: 'Timeline',
            value: '2021.04 — 2023.11',
            note: 'Full-time at FLFI',
          },
          {
            label: 'Core design',
            value: 'Domain boundaries + Blue-Green',
            note: 'NestJS · Vue 3 · EKS · ArgoCD',
          },
          {
            label: 'Outcome',
            value: '500+ zero-downtime deploys',
            note: 'Moved from weekly deploys to 3 per day',
          },
        ],
        sections: [
          {
            title: 'Problem',
            paragraphs: [
              'FLFI was a fintech platform expanding across lending, trading, and Web3 flows. Features were growing quickly, but without clearer service boundaries and a safer release model, the operational risk would scale faster than the product itself.',
              'When deploys are slow and rollback confidence is weak, even small changes become expensive. The core problem here was not a missing feature, but a platform shape that could not support the pace the product needed.',
            ],
          },
          {
            title: 'What I changed',
            paragraphs: [
              'I re-cut the platform around clearer domain boundaries across the NestJS backend, Vue 3 frontend, and AWS infrastructure. That made it easier to add features without each change eroding the overall structure.',
              'On the delivery side, I built a Blue-Green pipeline with EKS, Karpenter, ArgoCD, and Helm. That gave the team a release flow with zero-downtime deploys and fast rollback, which changed deployment from a risky event into a routine operation.',
              'At the same time, I improved key platform paths such as the Lambda@Edge + CloudFront image CDN and Web3 integration flows so reliability and latency improved together.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'The platform sustained more than 500 zero-downtime deployments over two years, and deploy frequency moved from roughly once a week to three times a day. Image delivery improved from p95 420ms to 120ms, and the team could ship with much less release anxiety.',
              'This case mattered because it turned “platform engineering” into visible operational outcomes: better structure, safer deploys, and faster core paths.',
            ],
          },
        ],
      },
      ja: {
        eyebrow: 'Case Study',
        summary:
          'NestJS・Vue 3・EKS ベースのフィンテック基盤で、サービス境界と無停止デリバリを再設計し、開発速度と運用品質を同時に引き上げました。',
        highlights: [
          {
            label: '役割',
            value: 'Tech Lead · Backend',
            note: 'フルスタック6名チームをリード',
          },
          {
            label: '期間',
            value: '2021.04 — 2023.11',
            note: 'FLFI 正社員',
          },
          {
            label: '中核設計',
            value: 'ドメイン境界 + Blue-Green',
            note: 'NestJS · Vue 3 · EKS · ArgoCD',
          },
          {
            label: '結果',
            value: '500回超の無停止デプロイ',
            note: '週1回から1日3回へ改善',
          },
        ],
        sections: [
          {
            title: '課題',
            paragraphs: [
              'FLFI はレンディング、トレーディング、Web3 機能へ広がっていたフィンテック基盤でした。機能追加の速度に対して、サービス境界とリリース方式が追いつかなければ、プロダクトより先に運用リスクが膨らむ状態でした。',
              'デプロイが遅く、ロールバックへの自信が低いと、小さな変更でも重い作業になります。ここで必要だったのは新機能よりも、継続的な変化に耐えるプラットフォームの形を作り直すことでした。',
            ],
          },
          {
            title: '実装',
            paragraphs: [
              'NestJS バックエンド、Vue 3 フロントエンド、AWS インフラの責務をドメイン単位で整理し直しました。これにより、機能追加がそのまま構造の崩れに繋がりにくくなりました。',
              '配備は EKS + Karpenter + ArgoCD + Helm で Blue-Green パイプラインを構築しました。無停止デプロイと高速ロールバックが可能になり、配備が特別なイベントではなく日常の運用になりました。',
              '同時に Lambda@Edge + CloudFront の画像 CDN や Web3 連携経路も整え、基盤の主要経路の応答性と一貫性を改善しました。',
            ],
          },
          {
            title: '結果',
            paragraphs: [
              '2年間で500回を超える無停止デプロイを維持し、配備頻度は週1回程度から1日3回まで向上しました。画像配信は p95 420ms から 120ms に改善し、チームはリリースを必要以上に恐れずに進められるようになりました。',
              'このケースは、プラットフォーム改善を構造、配備、安全性、性能という実際の運用成果に結びつけた仕事でした。',
            ],
          },
        ],
      },
      zh: {
        eyebrow: 'Case Study',
        summary:
          '在一个基于 NestJS、Vue 3 和 EKS 的金融科技平台中，我重整了服务边界与无停机交付体系，让产品迭代速度和运营可靠性一起提升。',
        highlights: [
          {
            label: '角色',
            value: 'Tech Lead · Backend',
            note: '带领 6 人全栈团队',
          },
          {
            label: '周期',
            value: '2021.04 — 2023.11',
            note: 'FLFI 全职',
          },
          {
            label: '核心设计',
            value: '领域边界 + Blue-Green',
            note: 'NestJS · Vue 3 · EKS · ArgoCD',
          },
          {
            label: '结果',
            value: '500+ 次无停机部署',
            note: '从每周 1 次提升到每天 3 次',
          },
        ],
        sections: [
          {
            title: '问题',
            paragraphs: [
              'FLFI 是一个同时覆盖借贷、交易和 Web3 流程的金融科技平台。功能在快速扩展，但如果服务边界和发布体系不一起重整，运营风险会比产品本身增长得更快。',
              '当部署缓慢、回滚信心不足时，再小的改动都会变得昂贵。这里真正需要解决的不是单个功能，而是一个能承受持续变化的平台形态。',
            ],
          },
          {
            title: '实现',
            paragraphs: [
              '我重新梳理了 NestJS 后端、Vue 3 前端和 AWS 基础设施的领域边界，使新增功能不会不断侵蚀整体结构。',
              '在交付层面，我用 EKS、Karpenter、ArgoCD 和 Helm 搭建了 Blue-Green 发布流水线，让无停机部署和快速回滚成为常规操作，而不是高风险事件。',
              '同时，我也整理了 Lambda@Edge + CloudFront 图片 CDN 与 Web3 集成路径，让平台关键链路的响应速度和一致性一起提升。',
            ],
          },
          {
            title: '结果',
            paragraphs: [
              '平台在两年内完成了 500 多次无停机部署，部署频率从大约每周 1 次提升到每天 3 次。图片链路从 p95 420ms 降到 120ms，团队发布时的心理负担也明显降低。',
              '这个案例的价值在于，它把“平台工程”真正落到了结构重整、部署安全和核心路径性能这些可见结果上。',
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
