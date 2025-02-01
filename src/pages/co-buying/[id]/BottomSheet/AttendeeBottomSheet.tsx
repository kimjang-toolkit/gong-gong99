import Button from '@/components/Button';
import Input from '@/components/Input';
import useApplyCobuying from '@/hooks/mutations/useApplyCobuying';
import useOutsideClick from '@/hooks/useOutsideClick';
import { AttendeeCoBuyingDetail } from '@interface/cobuying';
import { Sheet } from 'react-modal-sheet';

interface ApplyBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: AttendeeCoBuyingDetail;
}

// 인원으로 나누는 공구 신청 모달
export default function AttendeeBottomSheet({
  isOpen,
  setIsOpen,
  data,
}: ApplyBottomSheetProps) {
  const sheetRef = useOutsideClick(() => {
    setIsOpen(false);
  });

  const { mutateAsync } = useApplyCobuying(data.id);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const attendeeName = formData.get('attendeeName') as string;
    try {
      await mutateAsync({
        coBuyingId: data.id,
        ownerName: data.ownerName,
        attendeeName: attendeeName,
        attendeeQuantity,
        attendeePrice: data.perAttendeePrice,
      });
      setIsOpen(false);
    } catch (error) {
      console.log('신청실패했어요', error);
    }
  };

  const attendeeQuantity = data.totalQuantity / data.targetAttendeeCount;

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      detent="content-height"
      disableScrollLocking={true}
    >
      <Sheet.Container ref={sheetRef}>
        <Sheet.Header />
        <Sheet.Content>
          <form
            className="flex flex-col gap-4 px-4 mb-8"
            onSubmit={handleSubmit}
          >
            <header className="w-full text-left text-body-bold">
              공구 신청
            </header>
            <Input
              name="attendeeName"
              label="이름"
              placeholder="이름을 입력해주세요."
              variant="bordered"
            />
            <section className="flex justify-between p-4 border rounded-xl border-default-200">
              <p className="mb-1 text-caption text-default-600">구매 수량</p>
              <p className="text-body-bold">{attendeeQuantity} 개</p>
            </section>
            <section className="flex items-start justify-between px-1">
              <p className="flex py-1 text-tiny text-default-700">
                <p className="text-primary-400">{attendeeQuantity}</p>개 구매액
              </p>
              <p className="text-body-bold text-primary-400">
                {data.perAttendeePrice}원
              </p>
            </section>
            <section className="flex justify-end w-full mt-1 active:brightness-90">
              <Button type="submit" label="신청하기" size="small" />
            </section>
          </form>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
