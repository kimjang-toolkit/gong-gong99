import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import InfoSection from '@/pages/co-buying/[id]/info-section';
import { CoBuyingDetail } from '@interface/cobuying';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderLayout from '@/layouts/HeaderLayout';
import ApplyListSection from '@/pages/co-buying/[id]/applyList-section';
import { CoBuyingStatus } from '@domain/cobuying';
import useModalStore from '@/stores/modalStore';
import Modal from '@/components/Modal';

import useEditCobuying from '@/api/mutations/useEditCobuying';
export default function ManagementPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { data } = location.state as { data: CoBuyingDetail };
  const { mutate: editCobuying } = useEditCobuying(data.id, data.ownerName);
  const isApplying = data.coBuyingStatus === CoBuyingStatus.APPLYING;

  const { openModal } = useModalStore();

  const handleCloseApply = () => {
    openModal(
      <Modal
        title="신청 마감"
        description="신청 마감 후 공구 상품을 나눔하시겠어요?"
        onConfirm={() => {
          editCobuying(
            {
              coBuyingStatus: 2, // 잘못된 enum값이 들어가서 우선 하드코딩
            },
            {
              onSuccess: () => {
                navigate(`/co-buying/${data.id}?ownerName=${data.ownerName}`);
              },
            }
          );
        }}
        confirmText="마감"
        cancelText="취소"
      />
    );
  };
  const handleCompleteSharing = () => {};

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
        <ApplyListSection data={data as CoBuyingDetail} canEdit={!isApplying} />
        <BottomButton
          label={isApplying ? '신청 마감하기' : '나눔 완료하기'}
          onClick={isApplying ? handleCloseApply : handleCompleteSharing}
        />
      </div>
    </HeaderLayout>
  );
}
