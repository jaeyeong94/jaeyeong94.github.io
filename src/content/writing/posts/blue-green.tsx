import type { Locale } from '@/lib/i18n';
import { PostLayout } from '@/components/writing/PostLayout';

export const meta = {
  slug: 'blue-green',
  date: '2026-07-02',
  readTimeMin: 9,
};

export default function BlueGreenPost({ locale }: { locale: Locale }) {
  return (
    <PostLayout
      locale={locale}
      title="무중단 Blue-Green: 0초 다운타임 · 30초 롤백"
      date={meta.date}
      readTimeMin={meta.readTimeMin}
    >
      <p>
        FLFI에서 서비스가 본격적으로 성장하던 시기에 가장 공격받기 쉬운 포인트는 배포였습니다. 주 1회
        새벽 배포로 시작해, 사용자 이탈을 줄이면서 배포 빈도를 하루 3회까지 끌어올린 경험을 정리합니다.
        핵심은 <strong>EKS + Karpenter + ArgoCD + Helm</strong> 조합 자체가 아니라, 그 위에 쌓은
        <em> 안전망의 층위</em> 였습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">1. 왜 Blue-Green 인가</h2>
      <p>
        롤링 업데이트는 배포 중 오래된 파드와 새 파드가 공존합니다. 대부분의 경우 괜찮지만, 스키마
        변경이나 호환되지 않는 API 변경이 섞이면 경계에 있는 요청이 실패합니다.
        <strong> 완전 교체 후 스왑</strong> 하는 Blue-Green은 그 상태를 제거해 줍니다. 대신 두
        배포 환경을 동시에 유지해야 하므로 리소스 비용이 잠시 2배입니다 — 그 비용을 감당할 수 있다면
        얻는 안정성은 큽니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">2. 단계별 트래픽 스왑</h2>
      <p>
        새 Green 환경을 띄우자마자 전체 트래픽을 한 번에 넘기지 않았습니다.
      </p>
      <ul className="ml-4 list-disc space-y-2 text-base leading-relaxed">
        <li>
          <strong>Warm-up</strong> — 0% 트래픽 상태로 헬스체크 통과 확인. JIT 컴파일, 커넥션 풀 초기화
          완료까지.
        </li>
        <li>
          <strong>Canary 10%</strong> — 랜덤 10%를 Green으로. 에러율, p95 레이턴시를 Blue와
          비교.
        </li>
        <li>
          <strong>Staged 50%</strong> — 5분 유지, 핵심 비즈니스 메트릭(주문 성공률 등) 함께 감시.
        </li>
        <li>
          <strong>Full 100%</strong> — 최종 스왑. Blue는 &ldquo;대기 상태&rdquo; 로 10분 더 유지.
        </li>
      </ul>
      <p>
        스왑 자체는 ArgoCD의 <code>Rollout</code> 오브젝트로 자동 진행되지만, 각 단계의
        &ldquo;통과 조건&rdquo; 은 메트릭 프로바이더(Prometheus + CloudWatch) 쿼리로 명시했습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">3. 롤백은 30초 이내</h2>
      <p>
        스왑 도중 어느 단계에서든 통과 조건이 깨지면 ArgoCD가 자동으로 이전 Blue로 되돌립니다. 트래픽
        라우팅만 교체하면 되므로 30초를 넘지 않습니다. Kubernetes Deployment의 표준 롤백(파드 재생성)보다
        훨씬 빠릅니다.
      </p>
      <p>
        이 &ldquo;30초&rdquo; 가 주는 심리적 효과가 큽니다. 팀이 배포를 두려워하지 않게 되고, 결과적으로
        배포 빈도가 올라가고, 한 번의 배포에 담기는 변경 크기가 작아지며, 다시 실패 확률이 낮아지는
        선순환이 돕니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">4. Karpenter의 역할</h2>
      <p>
        Blue-Green의 비용 문제를 Karpenter가 많이 완화했습니다. Green 배포가 시작되는 순간 필요한
        만큼만 노드가 순간적으로 늘어나고, 스왑이 완료되면 Blue가 사라지면서 노드가 다시 줄어듭니다.
        Cluster Autoscaler 대비 훨씬 빠른 반응 속도를 보여주었고, Spot 인스턴스 활용도까지 같이
        올라갔습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">5. 빈도 vs 크기</h2>
      <p>
        DORA 4 메트릭 중 <strong>배포 빈도</strong> 와 <strong>변경 실패율</strong> 은 상관관계가
        있습니다. 배포가 귀한 이벤트가 되면 한 번에 많은 변경이 실리고, 하나가 실패하면 롤백이
        복잡해집니다. 반대로 배포가 싸지면 작은 단위로 자주 보내게 되고, 실패해도 영향 범위가 좁아
        회복이 쉽습니다.
      </p>
      <p>
        2년 동안 500회 넘게 무중단 배포를 돌렸습니다. 초기 공포감에 비하면 너무 아무 일도 일어나지
        않았다는 것이 결과적으로 가장 큰 학습이었습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">마치며</h2>
      <p>
        Blue-Green의 기술적 구현은 이미 많이 정리돼 있습니다. 어려운 건 기술이 아니라
        <em> 조직 차원의 자신감</em> 입니다. 배포가 안전하다는 것을 실제로 여러 번 시연해 보여야
        팀이 하루 3번의 배포 리듬에 동의합니다. 그 동의가 만들어지면 기술적 부분은 그저 따라옵니다.
      </p>
    </PostLayout>
  );
}
