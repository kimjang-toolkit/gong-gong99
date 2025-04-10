/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from '@/components/Form';
import Option from '@/components/Option';
import QuantityCalcBox from '@/pages/co-buying/create/QuantityForm/QuantityCalcBox';
import { toFormattedNumber } from '@/types/FormattedNumber';
import { ItemOptionBase } from '@domain/product';
import { useState } from 'react';

type FormItemOption = ItemOptionBase;

export default function QuantityForm({ formData }: { formData: any }) {
  const [itemOptions, setItemOptions] = useState<FormItemOption[]>(
    formData.itemOptions.length === 0
      ? [{ name: '', quantity: 0, optionId: 0 }]
      : formData.itemOptions
  );
  const [ownerOptions, setOwnerOptions] = useState<FormItemOption[]>(
    itemOptions.map((option) => ({
      ...option,
      quantity: 0,
    }))
  );

  const handleItemOptionChange = (nextOptions: FormItemOption[]) => {
    setItemOptions(nextOptions);
    setOwnerOptions((prevOwnerOptions) => {
      return nextOptions.map((option) => {
        const prev = prevOwnerOptions?.find(
          // ownerOption에 itemOption이 있는지 확인
          (o) => o.optionId === option.optionId
        );
        return {
          ...option,
          quantity:
            prev && prev.quantity > option.quantity // ownerOption 수량보다 커지면 ownerOption 수량으로 설정
              ? option.quantity
              : (prev?.quantity ?? 0),
        };
      });
    });
  };

  return (
    <>
      <section className="flex flex-col gap-2">
        <p className="typo-caption text-default-600">상품 옵션</p>
        <Form.SyncState name="itemOptions" value={itemOptions} />
        <Option
          options={itemOptions}
          setOptions={handleItemOptionChange}
          className="gap-3 px-3 py-2"
        >
          {itemOptions.map((option) => (
            <div
              className="flex items-center justify-between"
              key={option.name}
            >
              <Option.DeleteButton
                optionId={option.optionId}
                className={`${itemOptions.length == 1 ? 'hidden' : ''}`}
              />
              <Option.Label
                placeholder="옵션 이름 입력"
                className="w-full"
                optionId={option.optionId}
              />
              <div className="flex items-center gap-2">
                <Option.Stepper
                  optionId={option.optionId}
                  quantity={option.quantity}
                  remainQuantity={999}
                />
              </div>
            </div>
          ))}
          <Option.AddButton defaultQuantity={1} />
        </Option>
      </section>
      <section className="flex flex-col gap-2">
        <p className="typo-caption text-default-600">내 구매 옵션</p>
        <Form.SyncState name="ownerOptions" value={ownerOptions} />
        <Option
          options={ownerOptions ?? []}
          setOptions={setOwnerOptions}
          className="gap-3 px-3 py-2"
        >
          {ownerOptions?.map((option) => (
            <div
              className="flex items-center justify-between w-full"
              key={option.optionId}
            >
              <Option.Label
                placeholder="옵션 이름 입력"
                optionId={option.optionId}
                disabled
                className="w-full"
              />
              <Option.Stepper
                optionId={option.optionId}
                quantity={option.quantity}
                remainQuantity={
                  itemOptions.find((item) => item.optionId === option.optionId)
                    ?.quantity ?? 0
                }
              />
            </div>
          ))}
        </Option>
      </section>
      <QuantityCalcBox
        totalPrice={toFormattedNumber(formData.totalPrice)}
        totalQuantity={itemOptions.reduce(
          (acc: number, curr: FormItemOption) => acc + curr.quantity,
          0
        )}
        ownerQuantity={ownerOptions?.reduce(
          (acc: number, curr: FormItemOption) => acc + curr.quantity,
          0
        )}
      />
    </>
  );
}
