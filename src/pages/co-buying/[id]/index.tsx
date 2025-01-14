import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import ApplyBottomSheet from '@/pages/co-buying/[id]/ApplyBottomSheet';
import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DetailPage() {
  const navigate = useNavigate();
  const [isApplyingFormOpen, setIsApplyingFormOpen] = useState(false);
  return (
    <>
      <DefaultLayout>
        <RightButtonHeader
          rightElement={
            <p className="text-caption-bold text-primary-400">관리하기</p>
          }
          onBackPress={() => navigate('co-buying/create')}
        />
        <InfoSection type="person" />
        <BottomButton
          label="신청하기"
          onClick={() => {
            setIsApplyingFormOpen(true);
            console.log('open bottom sheet');
          }}
        />
      </DefaultLayout>
      <ApplyBottomSheet
        type="attendee"
        isOpen={isApplyingFormOpen}
        setIsOpen={setIsApplyingFormOpen}
      />
    </>
  );
}
