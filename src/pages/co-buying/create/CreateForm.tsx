import BottomButton from '@/components/Button/BottomButton';
import Form from '@/components/Form';
import Input from '@/components/Input';
import AttendeeForm from '@/pages/co-buying/create/AttendeeForm';
import DivideTypeSection from '@/pages/co-buying/create/DivideTypeButton';
import QuantityForm from '@/pages/co-buying/create/QuantityForm';
import { formSchema, FormSchema } from '@/util/zod/cobuying-create';
import { DivideType } from '@domain/cobuying';
import { useState } from 'react';

interface CreateFormProps {
  setFormData: (formData: FormSchema) => void;
  formData: FormSchema;
  handleNextStep: () => void;
}
export default function CreateForm({
  setFormData,
  formData,
  handleNextStep,
}: CreateFormProps) {
  const [type, setType] = useState(formData.type);

  const handleSubmit = (data: FormSchema) => {
    setFormData({ ...formData, ...data });
    handleNextStep();
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

      {type === DivideType.quantity && <QuantityForm formData={formData} />}
      {type === DivideType.attendee && <AttendeeForm formData={formData} />}

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
      <Form.Button>
        <BottomButton label="다음" />
      </Form.Button>
    </Form>
  );
}
