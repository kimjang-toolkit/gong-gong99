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
      <div className="flex w-full p-4 bg-primary-50 ">
        <div className="flex flex-col w-full">
          <p className="typo-caption text-default-600">
            이웃들과 야무지게 구매해요.
          </p>
          <p className="typo-h2-bold text-primary-400">
            함께 저렴하게, 공공구구!
          </p>
        </div>
        <img src="/img/마스코트.png" className="h-auto max-w-[85px] " />
      </div>
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
