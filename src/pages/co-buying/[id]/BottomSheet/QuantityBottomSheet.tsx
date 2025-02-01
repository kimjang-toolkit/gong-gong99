import Button from '@/components/Button';
import StepperButton from '@/components/Button/StepperButton';
import Input from '@/components/Input';
import useOutsideClick from '@/hooks/useOutsideClick';
import { QuantityCoBuyingDetail } from '@interface/cobuying';
import { useState } from 'react';
import { Sheet } from 'react-modal-sheet';

interface ApplyBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: QuantityCoBuyingDetail;
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    setIsOpen(false);
    // mutate 시, 캐시 업데이트를 해주어서 새로고침 없이 데이터를 바꾸도록 처리
  };

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
              <StepperButton
                maxValue={data.remainQuantity}
                value={quantity}
                onChange={setQuantity}
              />
            </section>
            <section className="flex items-start justify-between px-1">
              <p className="flex py-1 text-tiny text-default-700">
                <p className="text-primary-400">{quantity}</p>개 구매액
              </p>
              <p className="text-body-bold text-primary-400">
                {quantity * data.unitPrice}
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
