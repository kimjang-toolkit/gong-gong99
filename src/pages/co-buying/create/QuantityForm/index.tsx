/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from '@/components/Form';
import Option from '@/components/Option';
import QuantityCalcBox from '@/pages/co-buying/create/QuantityForm/QuantityCalcBox';
import { ItemOptionBase } from '@domain/product';
import { useState } from 'react';

export default function QuantityForm({ formData }: { formData: any }) {
  // ownerOptions
  // itemOptions
  const [itemOptions, setItemOptions] = useState<ItemOptionBase[]>(
    formData.itemOptions.length === 0
      ? [{ name: '공구상품 이름', quantity: 0 }]
      : formData.itemOptions
  );
  const [ownerOptions, setOwnerOptions] =
    useState<ItemOptionBase[]>(itemOptions);

  const handleItemOptionChange = (options: ItemOptionBase[]) => {
    setItemOptions(options);
    setOwnerOptions(options);
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
              <Option.Label label={option.name} />
              <div className="flex items-center gap-2">
                <Option.Stepper
                  name={option.name}
                  quantity={option.quantity}
                  remainQuantity={999}
                />
                <Option.DeleteButton name={option.name} />
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
              className="flex items-center justify-between"
              key={option.name}
            >
              <Option.Label label={option.name} disabled />
              <Option.Stepper
                name={option.name}
                quantity={option.quantity}
                remainQuantity={
                  itemOptions.find((item) => item.name === option.name)
                    ?.quantity ?? 0
                }
              />
            </div>
          ))}
        </Option>
      </section>
      <QuantityCalcBox
        totalPrice={formData.totalPrice}
        totalQuantity={formData.itemOptions.reduce(
          (acc: number, curr: ItemOptionBase) => acc + curr.quantity,
          0
        )}
        ownerQuantity={formData.ownerQuantity ?? 0}
      />
    </>
  );
}
