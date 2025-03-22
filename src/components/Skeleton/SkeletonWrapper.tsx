import { useEffect, useState } from 'react';

type SkeletonWrapperProps = {
  isLoading: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
  minDelay?: number;
};

const SkeletonWrapper = ({
  isLoading,
  fallback,
  children,
  minDelay = 400,
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

  return (
    <div className="relative">
      {/* Skeleton Layer */}
      <div
        className={`transition-opacity duration-300 absolute top-0 left-0 w-full ${
          showSkeleton ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {fallback}
      </div>

      {/* Content Layer */}
      <div
        className={`transition-opacity duration-300 ${
          showSkeleton ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SkeletonWrapper;
