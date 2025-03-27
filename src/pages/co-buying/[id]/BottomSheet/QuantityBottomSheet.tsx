import Button from '@/components/Button';
import useApplyCobuying from '@/api/mutations/useApplyCobuying';
import useOutsideClick from '@/hooks/useOutsideClick';
import { QuantityCoBuyingDetail } from '@interface/cobuying';
import { useEffect, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import Input from '@/components/Input';
import { ItemOption } from '@domain/product';
import Option from '@/components/Option';

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

  // 옵션 별로 띄워주기 => 어떤 옵션을 구매하는지 보여주어야 함
  const [attendeeName, setAttendeeName] = useState('');
  const [itemOptions, setItemOptions] = useState<ItemOption[]>(
    data.itemOptions.map((option, index) => ({
      ...option,
      quantity: index === 0 ? 1 : 0,
    }))
  );

  // 신청할땐 remainQuantity 없애고 name과 quantity만 보내기

  const quantity = itemOptions.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = quantity * data.unitPrice; // 총 구매 금액

  const { mutateAsync } = useApplyCobuying(data.id);

  useEffect(() => {
    console.log('itemOptions', itemOptions);
  }, [itemOptions]);
  const handleSubmit = async () => {
    try {
      await mutateAsync({
        coBuyingId: data.id,
        ownerName: data.ownerName,
        attendeeName: attendeeName,
        attendeePrice: totalPrice,
        itemOptions: itemOptions.map((option) => ({
          optionId: option.optionId,
          name: option.name,
          quantity: option.quantity,
        })),
      });
      setIsOpen(false);
      setItemOptions([]);
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

            <section className="flex flex-col gap-2">
              <p className="typo-caption text-default-600">구매 옵션</p>
              <Option
                options={itemOptions}
                setOptions={setItemOptions}
                className="gap-3 px-3 py-2"
              >
                {itemOptions.map((option) => (
                  <div
                    className="flex items-center justify-between"
                    key={option.name}
                  >
                    <Option.Label
                      className="flex-1"
                      placeholder="옵션 이름 입력"
                      optionId={option.optionId}
                    />
                    <div className="flex items-center gap-2">
                      <Option.Stepper
                        optionId={option.optionId}
                        quantity={option.quantity}
                        remainQuantity={option.remainQuantity}
                      />
                    </div>
                  </div>
                ))}
              </Option>
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
                disabled={
                  itemOptions.reduce(
                    (acc, option) => acc + option.quantity,
                    0
                  ) === 0 || attendeeName === ''
                }
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
