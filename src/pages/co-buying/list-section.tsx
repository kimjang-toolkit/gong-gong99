import CobuyingCard from '@/components/CobuyingCard';

import { useEffect, useRef } from 'react';
import { useCobuyingList } from '@/api/queries/cobuying';
import CreateButton from '@/pages/co-buying/CreateButton';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CoBuyingSummary } from '@interface/cobuying';
import SkeletonWrapper from '@/components/Skeleton/SkeletonWrapper';
import List from '@/components/Skeleton/shared/List';

export default function ListSection() {
  const { isLoading, data, fetchNextPage, hasNextPage } = useCobuyingList();
  const [searchParams] = useSearchParams();
  const tab = parseInt(searchParams.get('tab') || '1');

  const filteredPage = data?.pages
    ?.map((page) => ({
      ...page,
      coBuyingList: page.coBuyingList.filter(
        (item) => Number(item.coBuyingStatus) == tab
      ),
    }))
    .filter((page) => page.coBuyingList.length > 0);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (loadMoreRef.current) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      observer.observe(loadMoreRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [fetchNextPage, hasNextPage]);

  return (
    <SkeletonWrapper
      isLoading={isLoading}
      shouldRenderChildren={!!data}
      fallback={<List className="mt-5 space-y-10" count={5} />}
    >
      {filteredPage?.map((page) =>
        page.coBuyingList.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              navigate(`/co-buying/${item.id}?ownerName=${item.ownerName}`)
            }
          >
            <CobuyingCard data={item as CoBuyingSummary} />
            <hr className="border-b-1 border-default-100" />
          </div>
        ))
      )}
      <div ref={loadMoreRef} style={{ height: '3px' }} />
      <CreateButton />
    </SkeletonWrapper>
  );
}
