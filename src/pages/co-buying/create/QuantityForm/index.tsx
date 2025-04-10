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
      ? [{ name: '공구상품 이름', quantity: 0, optionId: 0 }]
      : formData.itemOptions
  );
  const [ownerOptions, setOwnerOptions] = useState<FormItemOption[]>(
    itemOptions.map((option) => ({
      ...option,
      quantity: 0,
    }))
  );

  // itemOption이 변경되면 ownerOption도 변경된다
  // 1. itemOption의 optionId가 삭제될 경우 -> 해당 optionId를 ownerOption에서도 삭제한다.
  // 2. itemOption에 아이템이 추가될 경우 ->ownerOption에도 추가된다.. 단 quantity는 0으로 초기화
  // 3. itemOption의 수량이 변경될 경우 -> 해당 ownerOption의 수량은 0으로 변경된다.

  const handleItemOptionChange = (nextOptions: FormItemOption[]) => {
    setItemOptions(nextOptions);
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
          options={ownerOptions}
          setOptions={setOwnerOptions}
          className="gap-3 px-3 py-2"
        >
          {ownerOptions.map((option) => (
            <div
              className="flex items-center justify-between w-full"
              key={option.name}
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
        ownerQuantity={ownerOptions.reduce(
          (acc: number, curr: FormItemOption) => acc + curr.quantity,
          0
        )}
      />
    </>
  );
}
