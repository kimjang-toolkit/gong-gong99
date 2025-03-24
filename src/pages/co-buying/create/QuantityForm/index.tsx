/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from '@/components/Form';
import Input from '@/components/Input';
import QuantityCalcBox from '@/pages/co-buying/create/QuantityForm/QuantityCalcBox';

export default function QuantityForm({ formData }: { formData: any }) {
  return (
    <>
      <Form.Input name="ownerQuantity">
        <Input.Label>내 구매 수량</Input.Label>
        <Input.Field
          type="number"
          placeholder="구매하실 수량을 입력해주세요."
        />
        <Input.Description />
      </Form.Input>
      <QuantityCalcBox
        totalPrice={formData.totalPrice}
        totalQuantity={formData.totalQuantity}
        ownerQuantity={formData.ownerQuantity ?? 0}
      />
    </>
  );
}
