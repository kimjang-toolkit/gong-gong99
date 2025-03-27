/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from '@/components/Form';
import Option from '@/components/Option';
import QuantityCalcBox from '@/pages/co-buying/create/QuantityForm/QuantityCalcBox';
import { ItemOptionBase } from '@domain/product';
import { useState } from 'react';

type FormItemOption = ItemOptionBase & { optionId: number };

export default function QuantityForm({ formData }: { formData: any }) {
  const [itemOptions, setItemOptions] = useState<FormItemOption[]>(
    formData.itemOptions.length === 0
      ? [{ name: '공구상품 이름', quantity: 0, optionId: 0 }]
      : formData.itemOptions
  );
  const [ownerOptions, setOwnerOptions] =
    useState<FormItemOption[]>(itemOptions);

  const handleItemOptionChange = (options: FormItemOption[]) => {
    setItemOptions(options);
    setOwnerOptions(options.map((option) => ({ ...option, quantity: 0 })));
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
              <Option.Label
                className="flex-1"
                placeholder="옵션 이름 입력"
                optionId={option.optionId}
              />
              <div className="flex items-center gap-2">
                <Option.Stepper
                  optionId={option.optionId}
                  quantity={option.quantity}
                  remainQuantity={999}
                />
                <Option.DeleteButton optionId={option.optionId} />
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
                className="flex-1"
                placeholder="옵션 이름 입력"
                optionId={option.optionId}
                disabled
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
        totalPrice={formData.totalPrice}
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
