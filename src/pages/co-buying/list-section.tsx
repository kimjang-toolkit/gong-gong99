import CobuyingCard from '@/components/CobuyingCard';

import { useEffect, useRef } from 'react';
import { useCobuyingList } from '@/api/queries/cobuying';
import CreateButton from '@/pages/co-buying/CreateButton';
import { useNavigate } from 'react-router-dom';
import { CoBuyingSummary } from '@interface/cobuying';

export default function ListSection() {
  const { data, fetchNextPage, hasNextPage } = useCobuyingList();

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
    <>
      {data?.pages?.map((page) =>
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
    </>
  );
}
