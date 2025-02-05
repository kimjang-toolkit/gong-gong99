import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import { useCobuyingDetail } from '@/hooks/queries/useCobuying';
import DefaultLayout from '@/layouts/DefaultLayout';
import InfoSection from '@/pages/co-buying/[id]/InfoSection';
// import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import ApplyListSection from '@/pages/co-buying/[id]/management/ApplyListSection';
import { CoBuyingDetail } from '@interface/cobuying';
import { useParams, useSearchParams } from 'react-router-dom';
// import { DivideType } from '@domain/cobuying';

export default function ManagementPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useCobuyingDetail(
    id!,
    searchParams.get('ownerName')!
  );

  return (
    <DefaultLayout>
      <RightButtonHeader
        rightElement={
          <button className="text-caption-bold text-primary-400">
            수정하기
          </button>
        }
      />
      <>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <InfoSection data={data as CoBuyingDetail} />
        )}
        <ApplyListSection />
      </>
      <BottomButton label="신청 마감하기" />
    </DefaultLayout>
  );
}
