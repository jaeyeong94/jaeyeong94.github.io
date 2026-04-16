import type { Locale } from '@/lib/i18n';
import { PostLayout } from '@/components/writing/PostLayout';

export const meta = {
  slug: 'agent-orchestration',
  date: '2026-06-05',
  readTimeMin: 10,
};

export default function AgentOrchestrationPost({ locale }: { locale: Locale }) {
  return (
    <PostLayout
      locale={locale}
      title="LLM 에이전트 오케스트레이션: HIL · 감사 · 롤백"
      date={meta.date}
      readTimeMin={meta.readTimeMin}
    >
      <p>
        미국 보험사의 백오피스 업무를 LLM 에이전트로 분해하는 프로젝트를 진행 중입니다. &ldquo;단일
        거대 프롬프트&rdquo; 로 해결할 수 있는 일은 데모뿐이라는 점이 곧바로 드러났고, 프로덕션에서
        요구되는 것은 <strong>관측성 · 인간 개입 · 롤백 가능성</strong> 세 가지였습니다. 이 글은 그
        세 가지를 어떻게 기본 구조로 녹였는지에 대한 메모입니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        1. 업무 단위로 에이전트를 쪼갠다
      </h2>
      <p>
        보험 언더라이팅 한 건을 처리하려면 서류 수집 → 규정 매칭 → 위험 평가 → 가격 제안 → 고객 응대
        같은 단계가 직렬 · 병렬로 섞여 있습니다. 이를 전부 하나의 프롬프트로 밀어 넣으면 모델이 어디서
        실수했는지 추적할 수 없습니다.
      </p>
      <p>
        대신 <strong>업무 하나 = 에이전트 하나</strong> 로 매핑하고, 각 에이전트가 입력 스키마 · 출력
        스키마 · 허용 도구 세트 · 실패 기준을 명시적으로 가지게 했습니다. 오케스트레이터는 상태머신이
        되고, 에이전트는 함수입니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        2. Human-in-the-Loop 체크포인트
      </h2>
      <p>
        &ldquo;완전 자동&rdquo; 은 규제 산업에서 선택지가 아닙니다. 대신 어느 지점에서 사람이 개입해야
        하는지를 <em>설계</em> 합니다. 우리는 세 종류의 HIL 트리거를 도입했습니다.
      </p>
      <ul className="ml-4 list-disc space-y-2 text-base leading-relaxed">
        <li>
          <strong>Confidence gate</strong> — 모델의 self-reported 확신도가 임계치 미만이면 큐에 쌓아
          전문가 리뷰를 기다립니다.
        </li>
        <li>
          <strong>Policy gate</strong> — 특정 조건(예: 일정 보장 금액 이상)을 만족하면 무조건 사람이
          서명합니다. 모델이 건너뛸 수 없습니다.
        </li>
        <li>
          <strong>Drift alarm</strong> — 통계적으로 이상한 응답 패턴이 감지되면 자동 실행을
          <em> 중단</em> 하고 알림을 발송합니다.
        </li>
      </ul>
      <p>
        중요한 건 HIL이 <em>예외 경로</em> 가 아니라 <em>설계 요소</em> 라는 점입니다. 에이전트
        출력물은 기본적으로 &ldquo;대기 상태&rdquo; 로 저장되고, 명시적 승인이 있어야 다음 단계로
        진행됩니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        3. 감사 가능성 — 모든 호출을 구조화 이벤트로
      </h2>
      <p>
        LLM 호출 하나마다 다음 필드를 이벤트로 기록합니다: 입력 프롬프트, 모델 id, 온도 · 기타 파라미터,
        도구 호출 로그, 중간 상태, 토큰 · 비용, 지연, 최종 출력, HIL 결과. 이벤트는
        <code> OpenTelemetry</code> trace로 내보내면서 동시에 자체 스토어에도 JSON 형태로 쌓입니다.
      </p>
      <p>
        이렇게 해두면 특정 의사결정을 몇 주 뒤에도 &ldquo;왜 그랬는지&rdquo; 재현할 수 있습니다. 규제
        감사나 고객 분쟁 상황에서 필수적입니다. 동시에 failure 분석도 수월해집니다 — 실패한 케이스의
        trace를 따라가다 보면 특정 도구 호출이 자주 실패한다는 식의 패턴이 보입니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">4. 롤백 가능성</h2>
      <p>
        &ldquo;LLM 출력 결과를 원장(ledger) 에 즉시 반영하지 않는다&rdquo; 가 핵심 원칙입니다. 모든
        쓰기 작업은 먼저 <em>제안 상태(proposal)</em> 로 기록되고, 명시적 커밋 단계에서만 최종
        테이블로 옮겨집니다. 커밋 후에도 이전 상태의 스냅샷을 N일 보관합니다.
      </p>
      <p>
        에이전트가 의도와 다르게 동작했다고 판명되면 스냅샷으로 한 번에 되돌릴 수 있고, 무엇이 잘못
        갱신됐는지도 같은 감사 로그로 추적 가능합니다. 이 구조 덕분에 <em>실험적 릴리즈</em> 의 심리적
        허들이 확 낮아집니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        5. 모델에게 맡기지 말아야 할 것
      </h2>
      <p>
        에이전트 파이프라인의 경계는 <strong>비즈니스 로직 · 금액 · 규정</strong> 입니다. 이 범위에
        들어오는 계산은 모델이 아니라 코드가 해야 합니다. 모델은 그 코드를 어떤 순서로 호출할지 결정할
        뿐입니다.
      </p>
      <p>
        이 분리가 지켜질 때 모델의 환각이 직접적으로 금전 사고로 번지지 않습니다. 반대로 이 경계를
        허물면 어떤 관측성도 안전을 보장하지 못합니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">마치며</h2>
      <p>
        LLM 에이전트는 지금까지 엔지니어가 다뤄온 분산 시스템과 다르지 않습니다. &ldquo;사람이 개입하는
        실패 가능한 함수&rdquo; 라는 관점으로 보면 <em>관측</em> · <em>가드레일</em> · <em>롤백</em>
        이라는 익숙한 도구가 그대로 적용됩니다. 차이점은 그 함수의 비결정성이 훨씬 크다는 것뿐입니다.
        그래서 기본 구조가 더 중요합니다.
      </p>
    </PostLayout>
  );
}
