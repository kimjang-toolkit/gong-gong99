import Button from '@/components/Button';
import Input from '@/components/Input';
import { Sheet } from 'react-modal-sheet';

interface ApplyBottomSheetProps {
  type: 'attendee' | 'quantity';
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ApplyBottomSheet({
  type,
  isOpen,
  setIsOpen,
}: ApplyBottomSheetProps) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      detent="content-height"
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <form className="px-4 mb-5">
            <header className="w-full mb-5 text-left text-body-bold">
              공구 신청
            </header>
            <Input
              name="attendeeName"
              label="이름"
              placeholder="이름을 입력해주세요."
              variant="bordered"
            />
            <section className="flex justify-between p-4 mt-4 mb-5 border rounded-xl border-default-200">
              <div> 바뀔곳</div>
              <div className="">
                <p className="text-tiny text-default-700">총 금액</p>
                <p className="text-body-bold text-primary-400">9,000원</p>
              </div>
            </section>
            <section className="flex justify-end w-full">
              <Button
                className=""
                label="신청하기"
                size="small"
                onClick={() => {}}
              />
            </section>
          </form>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
