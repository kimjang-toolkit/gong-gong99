import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import DefaultLayout from '@/layouts/DefaultLayout';
import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import ApplyListSection from '@/pages/co-buying/[id]/management/ApplyListSection';

export default function ManagementPage() {
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
        <InfoSection type="person" />
        <ApplyListSection />
      </>
      <BottomButton label="신청 마감하기" />
    </DefaultLayout>
  );
}
