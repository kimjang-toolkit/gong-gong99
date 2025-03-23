// /components/Skeleton/ImageSection/index.tsx

import Rect from '@/components/Skeleton/\bshared/Rect';

const ImageSectionSkeleton = () => {
  return (
    <div className="p-4">
      <Rect height="200px" />
      <div className="mt-4 space-y-2">
        <Rect height="20px" width="60%" />
        <Rect height="20px" width="40%" />
      </div>
    </div>
  );
};

export default ImageSectionSkeleton;
