import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import AttendeeBottomSheet from '@/pages/co-buying/[id]/BottomSheet/AttendeeBottomSheet';
import QuantityBottomSheet from '@/pages/co-buying/[id]/BottomSheet/QuantityBottomSheet';
import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function DetailPage() {
  const navigate = useNavigate();
  // const { id } = useParams();
  const [isApplyingFormOpen, setIsApplyingFormOpen] = useState(false);

  const handleManageButton = () => {
    // 관리하기 비밀번호 페이지
    navigate('password');
  };

  const type = 'attendee';
  return (
    <>
      <DefaultLayout>
        <RightButtonHeader
          rightElement={
            <button
              className="text-caption-bold text-primary-400"
              onClick={handleManageButton}
            >
              관리하기
            </button>
          }
          onBackPress={() => navigate('co-buying/create')}
        />
        <InfoSection type={type} />
        <BottomButton
          label="신청하기"
          onClick={() => {
            setIsApplyingFormOpen(true);
            console.log('open bottom sheet');
          }}
        />
      </DefaultLayout>

      {type === 'attendee' && (
        <AttendeeBottomSheet
          isOpen={isApplyingFormOpen}
          setIsOpen={setIsApplyingFormOpen}
          data={{
            quantity: 3,
            totalPrice: 9000,
          }}
        />
      )}
      {type === 'quantity' && (
        <QuantityBottomSheet
          isOpen={isApplyingFormOpen}
          setIsOpen={setIsApplyingFormOpen}
          data={{
            remainQuantity: 3,
            unitPrice: 3000,
          }}
        />
      )}
    </>
  );
}
