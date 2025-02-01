import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import { useCobuyingDetail } from '@/hooks/queries/useCobuying';
import DefaultLayout from '@/layouts/DefaultLayout';
import AttendeeBottomSheet from '@/pages/co-buying/[id]/BottomSheet/AttendeeBottomSheet';
import QuantityBottomSheet from '@/pages/co-buying/[id]/BottomSheet/QuantityBottomSheet';
import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import { DivideType } from '@domain/cobuying';
import { CoBuyingDetail } from '@interface/cobuying';
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

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
    // 관리하기 비밀번호 페이지
    navigate('password');
  };

  return (
    <>
      <DefaultLayout>
        <RightButtonHeader
          backUrl="/co-buying"
          rightElement={
            <button
              className="text-caption-bold text-primary-400"
              onClick={handleManageButton}
            >
              관리하기
            </button>
          }
        />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <InfoSection data={data as CoBuyingDetail} />
        )}
        <BottomButton
          label="신청하기"
          onClick={() => {
            setIsApplyingFormOpen(true);
            console.log('open bottom sheet');
          }}
        />
      </DefaultLayout>

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
