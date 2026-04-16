import type { Locale } from '@/lib/i18n';
import { PostLayout } from '@/components/writing/PostLayout';

export const meta = {
  slug: 'this-site',
  date: '2026-04-15',
  readTimeMin: 9,
};

export default function ThisSitePost({ locale }: { locale: Locale }) {
  return (
    <PostLayout
      locale={locale}
      title="이 사이트를 만든 이야기"
      date={meta.date}
      readTimeMin={meta.readTimeMin}
    >
      <p>
        며칠 만에 Next.js 15로 이력서 사이트를 처음부터 다시 만들었습니다. GitHub Pages에 올리는 정적
        export로 유지 비용은 0원, 4개 언어(ko / en / zh / ja) 로 동일한 콘텐츠를 노출하면서도 번들 100kB
        수준을 유지하는 것이 목표였습니다. 완성된 사이트가 아니라 <em>만드는 과정</em>에서 내린 설계
        결정을 정리합니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">1. SSR이 아니라 SSG로</h2>
      <p>
        GitHub Pages는 정적 파일만 호스팅하므로 선택지는 하나뿐입니다. <code>output: &apos;export&apos;</code> 로
        빌드 시점에 모든 라우트를 HTML로 pre-render 합니다. 라우트마다 완성된 HTML이 나오므로 SEO, 초기
        로드 속도, 크롤러 호환성 모두 유리합니다. 동적 기능은 <em>클라이언트 하이드레이션</em> 이후
        React가 가져가고, 첫 로드는 오롯이 HTML/CSS로 해결합니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        2. i18n — 경량 자체 구현
      </h2>
      <p>
        <code>next-intl</code> 같은 프레임워크를 도입하지 않았습니다. 이력서 사이트는 번역 키 수가 수백
        단위고, 번들 오버헤드를 줄이는 게 우선이었기 때문입니다. 대신 4개의 TypeScript 딕셔너리 파일을
        두고 <code>ko.ts</code> 를 <strong>SoT(Source of Truth)</strong>로 선언합니다. 나머지 3개
        locale은 <code>Dictionary = typeof ko</code> 타입을 <code>satisfies</code> 로 강제합니다.
      </p>
      <p>
        이렇게 하면 키 하나를 바꾸거나 추가했을 때 다른 세 파일도 반드시 따라와야 빌드가 통과합니다.
        번역 누락을 컴파일 타임에 막아주는 장치인 셈입니다. 실제로 세션 내내 딕셔너리 16회 편집 중
        누락을 한 번도 놓치지 않았습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        3. 경력은 PAR 구조로 다시 쓰기
      </h2>
      <p>
        기존 이력서 PDF를 단순 전재하면 &ldquo;개발했다&rdquo;, &ldquo;구축했다&rdquo; 같은 동사 나열로
        그치기 쉽습니다. 대신 각 경력 불릿을 <strong>Problem — Action — Result</strong> 의
        3단 구조로 다시 작성하고, 결과에는 반드시 <em>측정 도구</em>(CloudWatch, k6, Jira
        사이클타임 등)를 대괄호로 같이 적었습니다. 구체성과 검증 가능성을 한 문장에 담기 위한
        장치입니다.
      </p>
      <p>
        실수치가 없을 때는 <code>[측정: k6]</code>처럼 플레이스홀더로 두고, 실측이 확보되면 그 자리에
        실제 숫자를 치환하는 방식으로 진화시켰습니다. 리쿠르터가 읽는 30초 스캔을 가정한 설계입니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">
        4. Career Timeline — ResizeObserver로 그리는 SVG 연결선
      </h2>
      <p>
        정규직 FLFI와 프리랜서 Rootstone은 동일한 CEO/CTO 팀과의 연속된 관계입니다. 이 사실을 글로
        설명하면 독자가 놓칠 수 있어서, 두 카드 왼쪽에 <strong>플로팅 SVG 선</strong>을 그려 FLFI →
        Rootstone 방향의 화살표로 직접 연결했습니다.
      </p>
      <p>
        각 카드에 <code>data-team-key</code> 속성을 부여하고, 상위 컨테이너에
        <code> ResizeObserver</code>를 걸어 레이아웃 변경 시 실시간으로 선의 Y 좌표를 재계산합니다. 레거시
        경력 토글이 눌릴 때도, 뷰포트가 리사이즈될 때도 선이 어긋나지 않습니다. React 18의
        <code> useEffect</code> + <code>ref</code> 조합으로 어렵지 않게 구현 가능합니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">5. shadcn이 아니라 Radix</h2>
      <p>
        Tooltip과 Command Palette(⌘K) 가 필요했습니다. 처음엔 shadcn init로 통합하려 했지만,
        <code> base-nova</code> 프리셋이 Tailwind v4를 전제로 하고 우리 OKLCH 팔레트와 충돌하면서
        포기했습니다. 대신 <code>@radix-ui/react-tooltip</code>, <code>@radix-ui/react-dialog</code>,
        <code> cmdk</code> 만 직접 설치하고, 스타일링은 전부 기존 토큰(<code>accent-1</code>,{' '}
        <code>border</code>)으로 했습니다.
      </p>
      <p>
        라이브러리의 <em>테마 시스템</em>을 가져오는 것과 <em>프리미티브</em>만 가져오는 것은
        전혀 다른 비용입니다. 이미 디자인 언어가 서 있다면 후자가 압도적으로 유리합니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">6. Lighthouse 100/100/100/100</h2>
      <p>
        실측 결과 Desktop preset 기준 Performance / Accessibility / Best Practices / SEO 모두 100점을
        받았습니다. LCP 0.6s, CLS 0, TBT 0ms. <code>@media print</code> 스타일도 같이 구성해
        Cmd+P로 바로 이력서 PDF 저장도 가능합니다. 정적 export + 최소 JS + Radix 프리미티브의 조합이
        만든 결과였습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-fg md:text-2xl">마치며</h2>
      <p>
        &ldquo;이력서 사이트&rdquo; 가 반드시 화려해야 할 이유는 없습니다. 오히려 필요한 정보 단위가
        정확히 어디 있고, 30초 안에 어떤 신호를 읽을 수 있는지가 훨씬 중요합니다. 이번 사이트는 그
        기준을 스스로에게 걸고 반복적으로 정제한 결과입니다. 코드는{' '}
        <a
          href="https://github.com/jaeyeong94/jaeyeong94.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-1 underline-offset-4 hover:underline"
        >
          GitHub
        </a>{' '}
        에 공개되어 있습니다.
      </p>
    </PostLayout>
  );
}
