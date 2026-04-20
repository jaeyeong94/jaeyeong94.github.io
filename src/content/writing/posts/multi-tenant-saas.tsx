import type { Locale } from '@/lib/i18n';
import { PostLayout } from '@/components/writing/PostLayout';
import { getDictionary } from '@/content/i18n';

export const meta = {
  slug: 'multi-tenant-saas',
  date: '2026-05-10',
  readTimeMin: 11,
};

export default function MultiTenantSaasPost({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <PostLayout
      locale={locale}
      dict={dict}
      title={dict.writing.items['multi-tenant-saas'].title}
      summary={dict.writing.items['multi-tenant-saas'].summary}
      date={meta.date}
      readTimeMin={meta.readTimeMin}
    >
      <p>
        여러 기관이 각자의 규칙으로 쓰는 백오피스 SaaS를 0에서 구축할 때 가장 먼저 부딪히는 벽은
        <strong> &quot;기관마다 다른 것을 어떻게 담는가&quot;</strong> 입니다. 코드를 복제하는 순간
        유지비가 폭발하고, 반대로 모든 차이를 코드 안쪽으로 감추면 다음 기관 추가 때마다 배포가 필요한
        시스템이 됩니다. 이 글은 Randibot 백엔드 MVP를 만들면서 선택한 구조적 결정을 정리합니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        1. <code>tenancyId = workspaceId</code> 의 원칙
      </h2>
      <p>
        &ldquo;기관&rdquo;은 도메인 언어이고, &ldquo;워크스페이스&rdquo;는 사용자가 인지하는 경계입니다.
        둘을 같은 식별자로 묶어버리면 모델이 단순해집니다. 모든 테넌트-scoped 테이블은
        <code> workspaceId</code> 컬럼을 가지고, 쿼리 빌더는 인증 미들웨어에서 주입된 컨텍스트로 자동
        필터링합니다.
      </p>
      <p>
        이 원칙은 JWT payload에 <code>workspaceId</code> 한 줄이 반드시 실려 있어야 한다는 제약을
        만듭니다. 로그인 직후 사용자가 속한 워크스페이스를 하나로 확정하고, 다른 워크스페이스에
        접근하려면 명시적으로 <em>스위치</em> 하도록 강제했습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        2. Postgres RLS vs 애플리케이션 레이어 필터
      </h2>
      <p>
        두 방식 모두 검토했습니다. RLS(Row-Level Security)는 DB에서 격리를 강제해 &ldquo;실수로 누락한
        WHERE&rdquo; 를 원천 차단합니다. 반면 모든 커넥션에
        <code> SET LOCAL app.workspace_id</code> 를 주입해야 하고, 마이그레이션 · 집계 · 관리자 기능에서
        예외 경로가 필요해집니다.
      </p>
      <p>
        결론은 <strong>&ldquo;애플리케이션 레이어 필터 + 고정 테스트&rdquo;</strong> 였습니다. Repository
        패턴을 유지하면서, Repository가 자동으로 <code>workspaceId</code> 를 주입하고, 각 쿼리에 대한
        테스트에서 &ldquo;다른 워크스페이스 데이터가 섞이지 않는지&rdquo; 를 전수 검증했습니다. RLS는
        팀이 익숙해지면 도입 가능한 <em>강화 옵션</em> 으로 남겼습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        3. 기관별 설정 — 코드 변경 없이 온보딩
      </h2>
      <p>
        RCMS · K-Startup 같은 외부 소스에서 데이터를 스크래핑해 변환 · 저장하는 ETL이 핵심 기능이었는데,
        기관마다 허용된 자원 항목이 다릅니다. 이를 설정 테이블(<code>workspace_settings</code>)에 JSON
        스키마로 저장하고, ETL 파이프라인이 처리 시점에 해당 워크스페이스의 설정을 읽어 규칙을
        적용합니다.
      </p>
      <p>
        신규 기관 온보딩 시 필요한 작업은 <em>워크스페이스 생성</em> 과 <em>설정 row 작성</em>
        두 가지뿐입니다. 코드 수정이 일어나지 않으므로 배포도 필요 없습니다. 5개 워크스페이스까지
        같은 이미지로 운영 중입니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        4. 구독 · 결제 — Stripe를 워크스페이스 레벨에서
      </h2>
      <p>
        사용자별이 아니라 <strong>워크스페이스별</strong>로 구독을 묶습니다.
        <code> workspaces</code> 테이블에 <code>stripe_customer_id</code> 를 저장하고, 플랜 변경 · 결제
        상태는 Stripe Webhook → <code>workspace_subscriptions</code> 테이블로 흘러가게 설계했습니다.
      </p>
      <p>
        이 구조의 가장 큰 이점은 <em>사용자 교체가 구독에 영향을 주지 않는다</em>는 점입니다. 담당자가
        변경되거나 워크스페이스 owner를 위임해도 구독 ID는 그대로 유지되므로, 결제 실패 없이 운영 권한
        이관이 가능합니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">5. 집계와 감사 로그</h2>
      <p>
        관리자 대시보드에서 &ldquo;전체 워크스페이스&rdquo; 집계가 필요할 때는 테넌시 필터를 <em>
          의도적으로 우회</em> 해야 합니다. 이를 위해 내부 Admin 토큰을 별도 발급하고, 해당 토큰으로만
        접근 가능한 <code>/admin/*</code> 엔드포인트에서는 필터를 비활성화합니다. 대신 모든 Admin
        액션은 감사 로그 테이블에 기록돼, 누가 언제 어떤 워크스페이스 데이터를 열람했는지 추적
        가능합니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">마치며</h2>
      <p>
        멀티테넌트 SaaS는 <strong>데이터 격리</strong>, <strong>설정 외부화</strong>,
        <strong> 구독 단위</strong> 이 세 축의 합집합입니다. 세 축을 각자 최소한으로 해결하는 방향이
        시간이 지날수록 유리합니다. 너무 이른 RLS · 너무 세밀한 per-tenant 코드 분기는 팀이 감당할
        수 있는 수준을 넘어서는 순간 역효과를 냅니다.
      </p>
    </PostLayout>
  );
}
