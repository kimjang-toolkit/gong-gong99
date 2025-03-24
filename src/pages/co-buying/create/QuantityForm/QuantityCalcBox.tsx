interface QuantityCalcBoxProps {
  totalPrice: number;
  totalQuantity: number;
  ownerQuantity: number;
}
export default function QuantityCalcBox({
  totalPrice,
  totalQuantity,
  ownerQuantity,
}: QuantityCalcBoxProps) {
  let unitPrice;
  if (totalPrice && totalQuantity) {
    unitPrice = Math.floor(totalPrice / totalQuantity);
  }

  return (
    <section className="flex items-center py-3 text-center rounded-lg shadow-sm justify-evenly bg-zinc-50 ">
      <div className="flex flex-col gap-2.5 min-w-[90px]">
        {/* 내구매량 * 상품 총액 / 상품 총 수량 */}
        <p className="typo-tiny text-default-600">내 부담액</p>
        <p className="typo-tiny text-primary-600">
          {ownerQuantity && unitPrice ? unitPrice * ownerQuantity : '-'}
        </p>
      </div>
      <p className="typo-tiny text-default-400">+</p>
      <div className="flex flex-col gap-2.5">
        {/* 상품총액 - 내야할 금액 */}
        <p className="typo-tiny text-default-600 min-w-[90px]">
          신청자 총 부담액
        </p>
        <p className="typo-tiny text-primary-600">
          {totalPrice && unitPrice && ownerQuantity
            ? totalPrice - unitPrice * ownerQuantity
            : '-'}
        </p>
      </div>
      <p className="typo-tiny text-default-400">=</p>
      <div className="flex flex-col gap-2.5">
        {/* 상품총액  */}
        <p className="typo-tiny text-default-600 min-w-[100px]">상품 총액</p>
        <p className="typo-tiny text-default-600">
          {totalPrice ? totalPrice.toLocaleString() : '-'} 원
        </p>
      </div>
    </section>
  );
}
