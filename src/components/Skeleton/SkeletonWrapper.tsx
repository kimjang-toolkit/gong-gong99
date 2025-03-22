// components/Skeleton/SkeletonWrapper.tsx
import { useEffect, useState } from 'react';

type SkeletonWrapperProps = {
  isLoading: boolean;
  fallback: React.ReactNode; // 스켈레톤 컴포넌트
  children: React.ReactNode; // 실제 콘텐츠
  minDelay?: number; // 최소 로딩 시간 (ms)
};

const SkeletonWrapper = ({
  isLoading,
  fallback,
  children,
  minDelay = 350,
}: SkeletonWrapperProps) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isLoading) {
      timeout = setTimeout(() => {
        setShowSkeleton(false);
      }, minDelay);
    } else {
      setShowSkeleton(true);
    }

    return () => clearTimeout(timeout);
  }, [isLoading, minDelay]);

  return <>{showSkeleton ? fallback : children}</>;
};

export default SkeletonWrapper;
