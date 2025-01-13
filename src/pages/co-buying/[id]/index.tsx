import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import { useNavigate } from 'react-router-dom';

export default function DetailPage() {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <RightButtonHeader
        rightElement={
          <p className="text-caption-bold text-primary-400">관리하기</p>
        }
        onBackPress={() => navigate('co-buying/create')}
      />
      <InfoSection />
      <BottomButton label="신청하기" />
    </DefaultLayout>
  );
}
