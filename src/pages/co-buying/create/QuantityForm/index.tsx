/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from '@/components/Form';
import Option from '@/components/Option';
import QuantityCalcBox from '@/pages/co-buying/create/QuantityForm/QuantityCalcBox';
import { toFormattedNumber } from '@/types/FormattedNumber';
import { ItemOptionBase } from '@domain/product';
import { useState } from 'react';

type FormItemOption = ItemOptionBase & { optionId: number };

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

  // ownerOptions를 업데이트하는 함수
  const updateOwnerOptions = (updatedOptions: FormItemOption[]) => {
    setOwnerOptions((prevOptions) =>
      prevOptions.map((prevOption) => {
        const updatedOption = updatedOptions.find(
          (updated: FormItemOption) => updated.optionId === prevOption.optionId
        );

        if (!updatedOption) return prevOption;

        // 수량이 감소한 경우
        if (prevOption.quantity > updatedOption.quantity) {
          return {
            ...prevOption,
            quantity: updatedOption.quantity,
          };
        }

        // 이름이 변경된 경우
        if (prevOption.name !== updatedOption.name) {
          return {
            ...prevOption,
            name: updatedOption.name,
            quantity: 0,
          };
        }

        return prevOption;
      })
    );
  };

  const handleItemOptionChange = (nextOptions: FormItemOption[]) => {
    setItemOptions(nextOptions);

    // 새로 추가된 옵션 처리
    const newOptions = findNewOptions(nextOptions, ownerOptions);
    if (newOptions.length > 0) {
      setOwnerOptions((prevOptions) => [
        ...prevOptions,
        ...newOptions.map((option) => ({
          optionId: getNextOptionId(itemOptions),
          name: option.name,
          quantity: 0,
        })),
      ]);
      return;
    }
    // 변경된 옵션 처리
    const updatedOptions = findUpdatedOptions(nextOptions, itemOptions);
    if (updatedOptions.length > 0) {
      updateOwnerOptions(updatedOptions);
    }
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

// 새로운 optionId 계산 (기존 최대값 + 1)
const getNextOptionId = (itemOptions: FormItemOption[]) => {
  const maxId = Math.max(...itemOptions.map((option) => option.optionId), 0);
  return maxId + 1;
};

// 새로운 옵션을 찾는 함수
const findNewOptions = (
  nextOptions: FormItemOption[],
  ownerOptions: FormItemOption[]
) => {
  return nextOptions.filter(
    (option) =>
      !ownerOptions.find((owner) => owner.optionId === option.optionId)
  );
};

// 변경된 옵션을 찾는 함수
const findUpdatedOptions = (
  nextOptions: FormItemOption[],
  itemOptions: FormItemOption[]
) => {
  return nextOptions.filter((option: FormItemOption) => {
    const itemChanged = itemOptions.find(
      (item) =>
        item.optionId === option.optionId &&
        (item.quantity !== option.quantity || item.name !== option.name)
    );
    return itemChanged !== undefined;
  });
};
