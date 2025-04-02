import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import { useCobuyingDetail } from '@/api/queries/cobuying';
import InfoSection from '@/pages/co-buying/[id]/info-section';
// import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import { CoBuyingDetail } from '@interface/cobuying';
import { useParams, useSearchParams } from 'react-router-dom';
import HeaderLayout from '@/layouts/HeaderLayout';
import ApplyListSection from '@/pages/co-buying/[id]/applyList-section';
// import { DivideType } from '@domain/cobuying';

export default function ManagementPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useCobuyingDetail(
    id!,
    searchParams.get('ownerName')!
  );

  return (
    <HeaderLayout>
      <RightButtonHeader
        rightElement={
          <button className="typo-caption-bold text-primary-400">
            수정하기
          </button>
        }
      />
      <>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-2">
            <InfoSection data={data as CoBuyingDetail} />
            <ApplyListSection data={data as CoBuyingDetail} canEdit />
          </div>
        )}
      </>
      <BottomButton label="신청 마감하기" />
    </HeaderLayout>
  );
}
