import Button from '@/components/Button';
import StepperButton from '@/components/Button/StepperButton';
import Input from '@/components/Input';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useState } from 'react';
import { Sheet } from 'react-modal-sheet';

interface ApplyBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: {
    remainQuantity: number; // 남은 수량
    unitPrice: number; // 단가
  };
}

export default function QuantityBottomSheet({
  isOpen,
  setIsOpen,
  data,
}: ApplyBottomSheetProps) {
  const sheetRef = useOutsideClick(() => {
    setIsOpen(false);
  });

  const [quantity, setQuantity] = useState(1); // 구매 수량

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
              <div className="flex flex-col">
                <p className="mb-1 text-tiny text-default-700">구매 수량</p>
                <StepperButton
                  maxValue={data.remainQuantity}
                  value={quantity}
                  onChange={setQuantity}
                />
              </div>
              <div className="flex flex-col items-end">
                <p className="mb-1 text-tiny text-default-700">총 금액</p>
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
      <Sheet.Backdrop />
    </Sheet>
  );
}
