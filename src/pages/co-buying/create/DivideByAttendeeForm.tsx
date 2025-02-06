import Input from '@/components/Input/legacy';
import useFormStore from '@/stores/coBuyingFormStore';

export default function DivideByAttendeeForm() {
  const { formData } = useFormStore();
  const { totalQuantity, recruitmentNumbers } = formData;
  return (
    <>
      <Input
        id="totalQuantity"
        name="totalQuantity"
        label="상품 총 수량"
        type="number"
        required
        defaultValue={totalQuantity}
        placeholder="공구할 상품 수량을 입력해주세요."
      />
      <Input
        id="recruitmentNumbers"
        name="recruitmentNumbers"
        label="모집 인원"
        type="number"
        required
        defaultValue={recruitmentNumbers}
        placeholder="모집할 인원을 입력해주세요."
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
