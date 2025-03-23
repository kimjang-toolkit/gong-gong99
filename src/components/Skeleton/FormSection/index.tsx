import TextLine from '@/components/Skeleton/\bshared/TextLine';

function FormSectionSkeleton() {
  return (
    <section className="p-4 space-y-4">
      <TextLine width="100%" height="2.5rem" />
      <TextLine width="100%" height="2.5rem" />
      <TextLine width="100%" height="6rem" />
    </section>
  );
}

export default FormSectionSkeleton;
