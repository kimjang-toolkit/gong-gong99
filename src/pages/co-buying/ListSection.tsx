import CobuyingCard from '@/components/CobuyingCard';
import Banner from '@/pages/co-buying/Banner';
import {
  AttendeeCoBuyingSummary,
  QuantityCoBuyingSummary,
} from '@interface/cobuying';
import Alert from '@/components/Alert';
import { useState, useRef, useEffect } from 'react';
import { useCobuyingList } from '@/hooks/queries/useCobuying';
import CreateButton from '@/pages/co-buying/CreateButton';
import { useNavigate } from 'react-router-dom';

export default function ListSection() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useCobuyingList();

  const [showAlert, setShowAlert] = useState(true);

  const navigate = useNavigate();
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        root: document.getElementById('app-main'),
        rootMargin: '100px',
      }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner />
      {data?.pages?.map((page) =>
        page.coBuyingList.map((item) => (
          <div key={item.id} onClick={() => navigate(`/co-buying/${item.id}`)}>
            <CobuyingCard
              item={item as AttendeeCoBuyingSummary | QuantityCoBuyingSummary}
            />
            <hr className="border-b-1 border-default-100" />
          </div>
        ))
      )}
      <div ref={loadMoreRef} style={{ height: '1px' }} />
      <CreateButton />
      {showAlert && (
        <Alert
          status="success"
          label="신청이 완료되었습니다."
          setIsOpen={() => setShowAlert(false)}
        />
      )}
    </>
  );
}
