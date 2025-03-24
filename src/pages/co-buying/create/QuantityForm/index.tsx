/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from '@/components/Form';
import Input from '@/components/Input';
import Option from '@/components/Option';
import QuantityCalcBox from '@/pages/co-buying/create/QuantityForm/QuantityCalcBox';
import { ItemOptionBase } from '@domain/product';
import { useState } from 'react';

export default function QuantityForm({ formData }: { formData: any }) {
  // ownerOptions
  // itemOptions
  const [itemOptions, setItemOptions] = useState<ItemOptionBase[]>([
    { name: '상품 옵션 1', quantity: 3 },
    { name: '상품 옵션 2', quantity: 0 },
  ]);
  const [ownerOptions, setOwnerOptions] = useState<ItemOptionBase[]>([]);
  return (
    <>
      <section className="flex flex-col gap-2">
        <p className="typo-caption text-default-600">상품 옵션</p>
        <Option
          options={itemOptions}
          setOptions={setItemOptions}
          className="gap-3 px-3 py-2"
        >
          {itemOptions.map((option) => (
            <div className="flex items-center justify-between">
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
