import BottomButton from '@/components/Button/BottomButton';
import Form from '@/components/Form';
import Input from '@/components/Input';
import AttendeeCalcBox from '@/pages/co-buying/create/AttendeeCalcBox';
import DivideTypeSection from '@/pages/co-buying/create/DivideTypeButton';
import QuantityCalcBox from '@/pages/co-buying/create/QuantityCalcBox';
import { formSchema, FormSchema } from '@/util/zod/cobuying-create';
import { DivideType } from '@domain/cobuying';
import { useState } from 'react';

interface CreateFormProps {
  setFormData: (formData: FormSchema) => void;
  formData: FormSchema;
}
export default function CreateForm({ setFormData, formData }: CreateFormProps) {
  const [type, setType] = useState(formData.type);

  const handleSubmit = (data: FormSchema) => {
    console.log(data);
    // 비밀번호 띄우기
    // 데이터 저장
    setFormData({ ...formData, ...data });
  };
  return (
    <Form
      defaultValues={formData}
      schema={formSchema}
      onChange={(data) => setFormData(data as FormSchema)}
      onSubmit={handleSubmit}
    >
      <Form.Input name="productName">
        <Input.Label>상품 이름</Input.Label>
        <Input.Field placeholder="상품 이름을 입력해주세요. (4~100자)" />
        <Input.Description />
      </Form.Input>
      <Form.Input name="totalPrice">
        <Input.Label>상품 총액</Input.Label>
        <Input.Field placeholder="상품 총액을 입력해주세요." type="number" />
        <Input.Suffix>원</Input.Suffix>
        <Input.Description />
      </Form.Input>
      <Form.Input name="productLink">
        <Input.Label>상품 링크</Input.Label>
        <Input.Field type="url" placeholder="상품 링크를 입력해주세요." />
        <Input.Description />
      </Form.Input>
      <Form.Input name="deadline">
        <Input.Label>신청 마감일</Input.Label>
        <Input.Field
          min={new Date().toISOString().split('T')[0]}
          placeholder="신청 마감일을 입력해주세요."
          type="date"
        />
        <Input.Description />
      </Form.Input>
      <DivideTypeSection type={type as DivideType} setType={setType} />
      <Form.SyncState name="type" value={type} />
      <Form.Input name="totalQuantity">
        <Input.Label>상품 전체 수량</Input.Label>
        <Input.Field
          type="number"
          placeholder="상품 전체 수량을 입력해주세요."
          min={1}
        />
        <Input.Description />
      </Form.Input>
      {type === DivideType.quantity && (
        <Form.Input name="ownerQuantity">
          <Input.Label>내 구매 수량</Input.Label>
          <Input.Field
            type="number"
            placeholder="구매하실 수량을 입력해주세요."
          />
          <Input.Description />
        </Form.Input>
      )}
      {type === DivideType.attendee && (
        <Form.Input name="targetAttendeeCount">
          <Input.Label>모집 인원 수</Input.Label>
          <Input.Field
            type="number"
            placeholder="신청받을 인원 수를 입력해주세요."
          />
          <Input.Description />
        </Form.Input>
      )}
      {type === DivideType.quantity && (
        <QuantityCalcBox
          totalPrice={formData.totalPrice}
          totalQuantity={formData.totalQuantity}
          ownerQuantity={formData.ownerQuantity ?? 0}
        />
      )}
      {type === DivideType.attendee && (
        <AttendeeCalcBox
          totalPrice={formData.totalPrice}
          totalQuantity={formData.totalQuantity}
          targetAttendeeCount={formData.targetAttendeeCount ?? 0}
        />
      )}
      <section className="flex flex-col gap-2">
        <div className="w-full h-24 border rounded-xl px-3 py-1.5 border-default-200">
          <label className="typo-caption text-default-600">안내 메시지</label>
          <textarea
            name="noticeMessage"
            placeholder="신청자에게 안내할 내용을 자유롭게 입력해주세요."
            className="w-full text-black bg-white border-none focus:outline-none"
            maxLength={200}
          />
        </div>
      </section>
      <Form.Button className="ml-[-20px]">
        <BottomButton label="다음" />
      </Form.Button>
    </Form>
  );
}
