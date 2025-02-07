import CobuyingCard from '@/components/CobuyingCard';
import Banner from '@/pages/co-buying/Banner';

import { useEffect, useRef } from 'react';
import { useCobuyingList } from '@/services/queries/useCobuying';
import CreateButton from '@/pages/co-buying/CreateButton';
import { useNavigate } from 'react-router-dom';
import { QuantityCoBuyingSummary } from '@interface/cobuying';
import { AttendeeCoBuyingSummary } from '@interface/cobuying';

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
      <Banner />
      {data?.pages?.map((page) =>
        page.coBuyingList.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              navigate(`/co-buying/${item.id}?ownerName=${item.ownerName}`)
            }
          >
            <CobuyingCard
              item={item as AttendeeCoBuyingSummary | QuantityCoBuyingSummary}
            />
            <hr className="border-b-1 border-default-100" />
          </div>
        ))
      )}
      <div ref={loadMoreRef} style={{ height: '3px' }} />
      <CreateButton />
    </>
  );
}
