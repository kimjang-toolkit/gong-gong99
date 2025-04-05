import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import InfoSection from '@/pages/co-buying/[id]/info-section';
import { CoBuyingDetail } from '@interface/cobuying';
import { useLocation } from 'react-router-dom';
import HeaderLayout from '@/layouts/HeaderLayout';
import ApplyListSection from '@/pages/co-buying/[id]/applyList-section';

export default function ManagementPage() {
  const location = useLocation();
  const { data } = location.state as { data: CoBuyingDetail };

  return (
    <HeaderLayout>
      <RightButtonHeader
        rightElement={
          <button className="typo-caption-bold text-primary-400">
            수정하기
          </button>
        }
      />
      <div className="flex flex-col gap-2">
        <InfoSection data={data as CoBuyingDetail} />
        <ApplyListSection data={data as CoBuyingDetail} canEdit />
      </div>
      <BottomButton label="신청 마감하기" />
    </HeaderLayout>
  );
}
