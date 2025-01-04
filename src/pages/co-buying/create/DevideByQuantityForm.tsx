import BoarderedInput from '@/components/Input/BoarderedInput';
import { useContext, useEffect } from 'react';
import { formatNumberWithCommas } from '@/util/formatNumberWithCommas';
import { FormContext } from '@/pages/co-buying/create/formContext';

export default function DevideByQuantityForm() {
  const { formData, setFormData } = useContext(FormContext);

  const { totalPrice, totalQuantity, ownerQuantity } = formData;

  useEffect(() => {
    if (totalQuantity && totalPrice) {
      const unitPrice = totalPrice / totalQuantity;
      setFormData({
        ...formData,
        unitPrice,
      });
    }
  }, [totalPrice, totalQuantity]);

  return (
    <>
      <BoarderedInput
        id="totalQuantity"
        name="totalQuantity"
        label="상품 총 수량"
        placeholder="공구할 상품 수량을 입력해주세요."
        type="number"
        required
      />
      <BoarderedInput
        id="ownerQuantity"
        name="ownerQuantity"
        label="내 구매 수량"
        placeholder="내가 구매할 상품 수량을 입력해주세요."
        type="number"
        required
        defaultValue={0}
      />
      <section className="flex items-center py-3 text-center rounded-lg shadow-sm justify-evenly bg-zinc-50 ">
        <div className="flex flex-col gap-2.5 min-w-[90px]">
          {/* 내구매량 * 상품 총액 / 상품 총 수량 */}
          <p className="text-tiny text-default-600">내 부담액</p>
          <p className="text-tiny text-primary-600">
            {ownerQuantity && formData.unitPrice
              ? formatNumberWithCommas(formData.unitPrice * ownerQuantity)
              : '-'}
          </p>
        </div>
        <p className="text-tiny text-default-400">+</p>
        <div className="flex flex-col gap-2.5">
          {/* 상품총액 - 내야할 금액 */}
          <p className="text-tiny text-default-600 min-w-[90px]">
            신청자 총 부담액
          </p>
          <p className="text-tiny text-primary-600">
            {totalPrice && formData.unitPrice && ownerQuantity
              ? formatNumberWithCommas(
                  totalPrice - formData.unitPrice * ownerQuantity
                )
              : '-'}
          </p>
        </div>
        <p className="text-tiny text-default-400">=</p>
        <div className="flex flex-col gap-2.5">
          {/* 상품총액  */}
          <p className="text-tiny text-default-600 min-w-[100px]">상품 총액</p>
          <p className="text-tiny text-default-600">
            {totalPrice ? formatNumberWithCommas(totalPrice) : '-'} 원
          </p>
        </div>
      </section>
    </>
  );
}
