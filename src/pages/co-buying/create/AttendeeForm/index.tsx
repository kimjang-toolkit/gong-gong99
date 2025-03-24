/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '@/components/Input';

import Form from '@/components/Form';
import AttendeeCalcBox from '@/pages/co-buying/create/AttendeeForm/AttendeeCalcBox';

export default function AttendeeForm({ formData }: { formData: any }) {
  return (
    <>
      <Form.Input name="targetAttendeeCount">
        <Input.Label>모집 인원 수</Input.Label>
        <Input.Field
          type="number"
          placeholder="신청받을 인원 수를 입력해주세요."
        />
        <Input.Description />
      </Form.Input>
      <AttendeeCalcBox
        totalPrice={formData.totalPrice}
        totalQuantity={formData.totalQuantity}
        targetAttendeeCount={formData.targetAttendeeCount}
      />
    </>
  );
}
