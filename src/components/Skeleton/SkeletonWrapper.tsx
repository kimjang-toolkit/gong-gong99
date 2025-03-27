import { useEffect, useRef, useState } from 'react';

type SkeletonWrapperProps = {
  isLoading: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
  minDelay?: number;
  shouldRenderChildren?: boolean;
};

const SkeletonWrapper = ({
  isLoading,
  fallback,
  children,
  minDelay = 300,
  shouldRenderChildren = true,
}: SkeletonWrapperProps) => {
  const [showSkeleton, setShowSkeleton] = useState(false);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isLoading) {
      startTimeRef.current = Date.now();
      setShowSkeleton(true);
    } else {
      const elapsed = Date.now() - (startTimeRef.current ?? 0);
      const remaining = minDelay - elapsed;

      if (remaining > 0) {
        timeout = setTimeout(() => {
          setShowSkeleton(false);
        }, remaining);
      } else {
        setShowSkeleton(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [isLoading, minDelay]);

  return <>{showSkeleton || !shouldRenderChildren ? fallback : children}</>;
};

export default SkeletonWrapper;
