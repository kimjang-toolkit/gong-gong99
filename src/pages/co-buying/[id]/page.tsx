import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import { useCobuyingDetail } from '@/api/queries/cobuying';
import HeaderLayout from '@/layouts/HeaderLayout';
import AttendeeBottomSheet from '@/pages/co-buying/[id]/BottomSheet/AttendeeBottomSheet';
import QuantityBottomSheet from '@/pages/co-buying/[id]/BottomSheet/QuantityBottomSheet';
import InfoSection from '@/pages/co-buying/[id]/info-section';
import { DivideType } from '@domain/cobuying';
import { CoBuyingDetail } from '@interface/cobuying';
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ImageSection from '@/pages/co-buying/[id]/image-section';
import ImageSectionSkeleton from '@/components/Skeleton/ImageSection';
import SkeletonWrapper from '@/components/Skeleton/SkeletonWrapper';
import FormSectionSkeleton from '@/components/Skeleton/FormSection';
import ApplyListSection from '@/pages/co-buying/[id]/applyList-section';

export default function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useCobuyingDetail(
    id!,
    searchParams.get('ownerName')!
  );

  const [isApplyingFormOpen, setIsApplyingFormOpen] = useState(false);

  const handleManageButton = () => {
    // 관리하기 페이지
    navigate(`management?ownerName=${searchParams.get('ownerName')}`, {
      state: {
        data,
      },
    });
  };

  return (
    <>
      <HeaderLayout>
        <RightButtonHeader
          backUrl="/co-buying"
          rightElement={
            <button
              className="typo-caption-bold text-primary-400"
              onClick={handleManageButton}
            >
              관리하기
            </button>
          }
        />
        <>
          <SkeletonWrapper
            isLoading={isLoading}
            shouldRenderChildren={!!data}
            fallback={
              <>
                <ImageSectionSkeleton />
                <FormSectionSkeleton />
              </>
            }
          >
            <ImageSection data={data as CoBuyingDetail} />
            <InfoSection data={data as CoBuyingDetail} />
            <ApplyListSection className="mt-4" data={data as CoBuyingDetail} />
          </SkeletonWrapper>
          <BottomButton
            label="신청하기"
            onClick={() => {
              setIsApplyingFormOpen(true);
            }}
          />
        </>
      </HeaderLayout>

      {data?.type === DivideType.attendee && (
        <AttendeeBottomSheet
          isOpen={isApplyingFormOpen}
          setIsOpen={setIsApplyingFormOpen}
          data={data}
        />
      )}
      {data?.type === DivideType.quantity && (
        <QuantityBottomSheet
          isOpen={isApplyingFormOpen}
          setIsOpen={setIsApplyingFormOpen}
          data={data}
        />
      )}
    </>
  );
}
