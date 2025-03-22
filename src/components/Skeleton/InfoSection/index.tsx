import TextLine from '@/components/Skeleton/\bshared/TextLine';

const InfoSectionSkeleton = () => {
  return (
    <section className="p-4 space-y-4">
      {/* 제목 */}
      <TextLine width="70%" height="1.5rem" />

      {/* 부제목 */}
      <TextLine width="40%" height="1rem" />

      {/* 설명 영역 */}
      <div className="space-y-2">
        <TextLine width="100%" />
        <TextLine width="90%" />
      </div>
    </section>
  );
};

export default InfoSectionSkeleton;
