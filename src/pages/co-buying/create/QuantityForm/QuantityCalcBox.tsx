import {
  FormattedNumber,
  isFormattedNumber,
  toNumber,
} from '@/types/FormattedNumber';

interface QuantityCalcBoxProps {
  totalPrice: FormattedNumber;
  totalQuantity: number;
  ownerQuantity?: number;
}
export default function QuantityCalcBox({
  totalPrice,
  totalQuantity,
  ownerQuantity,
}: QuantityCalcBoxProps) {
  // console.log(
  //   "totalPrice : ",
  //   totalPrice,
  //   " totalQuantity : ",
  //   totalQuantity,
  //   " ownerQuantity : ",
  //   ownerQuantity
  // );

  let unitPrice; // 상품 단가
  let ownerPrice = 0; // 내 부담액
  let expectedTotalAttendeePrice; // 신청자 총 부담액
  let expectedTotalPrice; // 상품 총액
  /* 내 부담액 계산 */
  if (
    totalPrice &&
    isFormattedNumber(totalPrice) &&
    totalQuantity &&
    totalQuantity !== 0
  ) {
    unitPrice = Math.ceil(toNumber(totalPrice) / totalQuantity);
    if (ownerQuantity) {
      ownerPrice = unitPrice * ownerQuantity;
    } else {
      ownerPrice = 0;
    }
  }

  /* 신청자 총 부담액 계산 */
  if (totalPrice && isFormattedNumber(totalPrice)) {
    expectedTotalAttendeePrice = toNumber(totalPrice) - ownerPrice;
  } else {
    expectedTotalAttendeePrice = 0;
  }

  /* 상품 총액 계산 */
  if (totalPrice && isFormattedNumber(totalPrice)) {
    expectedTotalPrice = toNumber(totalPrice);
  } else {
    expectedTotalPrice = 0;
  }

  return (
    <section className="flex items-center py-3 text-center rounded-lg shadow-sm justify-evenly bg-zinc-50 ">
      <div className="flex flex-col gap-2.5 min-w-[90px]">
        {/* 내구매량 * 상품 총액 / 상품 총 수량 */}
        <p className="typo-tiny text-default-600">내 부담액</p>
        <p className="typo-tiny text-primary-600">
          {ownerPrice.toLocaleString()}
        </p>
      </div>
      <p className="typo-tiny text-default-400">+</p>
      <div className="flex flex-col gap-2.5">
        {/* 상품총액 - 내야할 금액 */}
        <p className="typo-tiny text-default-600 min-w-[90px]">
          신청자 총 부담액
        </p>
        <p className="typo-tiny text-primary-600">
          {expectedTotalAttendeePrice.toLocaleString()}
        </p>
      </div>
      <p className="typo-tiny text-default-400">=</p>
      <div className="flex flex-col gap-2.5">
        {/* 상품총액  */}
        <p className="typo-tiny text-default-600 min-w-[100px]">상품 총액</p>
        <p className="typo-tiny text-default-600">
          {expectedTotalPrice.toLocaleString()}
        </p>
      </div>
    </section>
  );
}
