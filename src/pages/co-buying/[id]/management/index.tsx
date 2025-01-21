import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import ApplyListSection from '@/pages/co-buying/[id]/management/ApplyListSection';

export default function ManagementPage() {
  return (
    <DefaultLayout>
      <TitleHeader />
      <>
        <InfoSection type="person" />
        <ApplyListSection />
      </>
      <BottomButton label="신청 마감하기" />
    </DefaultLayout>
  );
}
