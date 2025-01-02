import BoarderedInput from '@/components/Input/BoarderedInput';

export default function DevideByQuantityForm() {
  return (
    <>
      <BoarderedInput
        id="totalQuantity"
        label="상품 총 수량"
        type="number"
        isRequired
        defaultValue={0}
      />
      <BoarderedInput
        id="ownerQuantity"
        label="내 구매 수량"
        type="number"
        isRequired
        defaultValue={0}
      />
      <section className="flex items-center py-3 text-center rounded-lg shadow-sm justify-evenly bg-zinc-50 ">
        <div className="flex flex-col gap-2.5 min-w-[90px]">
          {/* 내구매량 * 상품 총액 / 상품 총 수량 */}
          <p className="text-tiny text-default-600">내 부담액</p>
          <p className="text-tiny text-primary-600">10,000,000</p>
        </div>
        <p className="text-tiny text-default-400">+</p>
        <div className="flex flex-col gap-2.5">
          {/* 상품총액 - 내야할 금액 */}
          <p className="text-tiny text-default-600 min-w-[90px]">
            신청자 총 부담액
          </p>
          <p className="text-tiny text-primary-600">10,000,000</p>
        </div>
        <p className="text-tiny text-default-400">=</p>
        <div className="flex flex-col gap-2.5">
          {/* 상품총액  */}
          <p className="text-tiny text-default-600 min-w-[100px]">상품 총액</p>
          <p className="text-tiny text-default-600">20,000,000 원</p>
        </div>
      </section>
    </>
  );
}
