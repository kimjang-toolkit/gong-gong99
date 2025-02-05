import Input from '@/components/Input/index';
import useFormStore from '@/stores/coBuyingFormStore';

export default function DivideByQuantityForm() {
  const { formData } = useFormStore();
  const { totalPrice, totalQuantity, ownerQuantity } = formData;

  let unitPrice;
  if (totalPrice && totalQuantity) {
    unitPrice = totalPrice / totalQuantity;
  }

  return (
    <>
      <Input
        id="totalQuantity"
        name="totalQuantity"
        label="상품 총 수량"
        placeholder="공구할 상품 수량을 입력해주세요."
        type="number"
        required
        defaultValue={totalQuantity}
      />
      <Input
        id="ownerQuantity"
        name="ownerQuantity"
        label="내 구매 수량"
        placeholder="구매할 상품 수량을 입력해주세요."
        type="number"
        required
        defaultValue={ownerQuantity}
      />
      <section className="flex items-center py-3 text-center rounded-lg shadow-sm justify-evenly bg-zinc-50 ">
        <div className="flex flex-col gap-2.5 min-w-[90px]">
          {/* 내구매량 * 상품 총액 / 상품 총 수량 */}
          <p className="text-tiny text-default-600">내 부담액</p>
          <p className="text-tiny text-primary-600">
            {ownerQuantity && unitPrice ? unitPrice * ownerQuantity : '-'}
          </p>
        </div>
        <p className="text-tiny text-default-400">+</p>
        <div className="flex flex-col gap-2.5">
          {/* 상품총액 - 내야할 금액 */}
          <p className="text-tiny text-default-600 min-w-[90px]">
            신청자 총 부담액
          </p>
          <p className="text-tiny text-primary-600">
            {totalPrice && unitPrice && ownerQuantity
              ? totalPrice - unitPrice * ownerQuantity
              : '-'}
          </p>
        </div>
        <p className="text-tiny text-default-400">=</p>
        <div className="flex flex-col gap-2.5">
          {/* 상품총액  */}
          <p className="text-tiny text-default-600 min-w-[100px]">상품 총액</p>
          <p className="text-tiny text-default-600">
            {totalPrice ? totalPrice.toLocaleString() : '-'} 원
          </p>
        </div>
      </section>
    </>
  );
}
