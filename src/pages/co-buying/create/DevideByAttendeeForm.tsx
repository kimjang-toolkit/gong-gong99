import Input from '@/components/Input/index';


export default function DevideByAttendeeForm() {
  return (
    <>
      <Input
        id="totalQuantity"
        name="totalQuantity"
        label="상품 총 수량"
        type="number"
        required
        defaultValue={0}
      />
      <Input
        id="recruitmentNumbers"
        name="recruitmentNumbers"
        label="모집인원"
        type="number"
        required
        defaultValue={0}
      />
      <section className="flex items-center w-full gap-2">
        <div className="flex justify-between px-4 py-3 rounded-lg shadow-sm items-justify min-w-[130px] flex-1 bg-zinc-50">
          {/* 인당 구매량 */}
          <p className="text-tiny text-default-600">인당 구매수량</p>
          <p className="text-tiny text-primary-600">100</p>
        </div>
        <div className="flex justify-between px-4 py-3 rounded-lg shadow-sm items-justify min-w-[150px] flex-1 bg-zinc-50">
          {/* 인당 부담액 */}
          <p className="text-tiny text-default-600 min-w-[90px]">인당 부담액</p>
          <p className="text-tiny text-primary-600">10,000</p>
        </div>
      </section>
    </>
  );
}
