import { ComponentType, Suspense } from "react";

function withSuspense<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
  // 컴포넌트인데 props를 넣어줌
  options: { fallback: React.ReactNode }
) {
  return function SuspendedComponent(props: Props) {
    // react에서 nextjs로 오면서 컴포넌트 이름 지어줌
    return (
      <Suspense fallback={options.fallback}>
        <WrappedComponent {...(props as any)} />
        {/* props를 그대로 넘겨줌 */}
      </Suspense>
    );
  };
}

export default withSuspense;
// object-fit: cover;
