import Button from '@/components/Button';
import StepperButton from '@/components/Button/StepperButton';
import useApplyCobuying from '@/api/mutations/useApplyCobuying';
import useOutsideClick from '@/hooks/useOutsideClick';
import { QuantityCoBuyingDetail } from '@interface/cobuying';
import { useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import Input from '@/components/Input';

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

  const [attendeeName, setAttendeeName] = useState('');
  const [quantity, setQuantity] = useState(1); // 구매 수량
  const totalPrice = quantity * data.unitPrice; // 총 구매 금액

  const { mutateAsync } = useApplyCobuying(data.id);

  const handleSubmit = async () => {
    try {
      await mutateAsync({
        coBuyingId: data.id,
        ownerName: data.ownerName,
        attendeeName: attendeeName,
        attendeeQuantity: quantity,
        attendeePrice: totalPrice,
      });
      setIsOpen(false);
      setQuantity(1);
    } catch (error) {
      console.log('신청실패했어요', error);
    }

    setIsOpen(false);
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
          <div className="flex flex-col gap-4 px-4 mb-8">
            <header className="w-full text-left typo-body-bold">
              공구 신청
            </header>
            <Input
              value={attendeeName}
              setValue={(value) => setAttendeeName(value)}
              variant="bordered"
            >
              <Input.Label>이름</Input.Label>
              <Input.Field />
            </Input>

            <section className="flex justify-between p-4 border rounded-xl border-default-200">
              <p className="mb-1 typo-caption text-default-600">구매 수량</p>
              <StepperButton
                maxValue={data.remainQuantity}
                value={quantity}
                onChange={setQuantity}
              />
            </section>
            <section className="flex items-start justify-between px-1">
              <p className="flex py-1 typo-tiny text-default-700">
                <p className="text-primary-400">{quantity}</p>개 구매액
              </p>
              <p className="typo-body-bold text-primary-400">
                {totalPrice.toLocaleString()}원
              </p>
            </section>
            <section className="flex justify-end w-full mt-1 active:brightness-90">
              <Button
                type="submit"
                label="신청하기"
                size="small"
                onClick={handleSubmit}
              />
            </section>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
