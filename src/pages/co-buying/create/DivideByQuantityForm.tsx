import useFormStore from '@/stores/coBuyingFormStore';
import Input from '@/components/Input';
export default function DivideByQuantityForm() {
  const { formData } = useFormStore();
  const { totalPrice, totalQuantity, ownerQuantity } = formData;

  

  return (
    <>
      {/* <Input
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
      /> */}
     
    </>
  );
}
