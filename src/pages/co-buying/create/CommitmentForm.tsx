import DatePicker from '@/components/DatePicker';
import Form from '@/components/Form';
import Input from '@/components/Input';
import { CommitmentSchema, commitmentSchema, FormSchema } from '@/util/zod/cobuying-create';
import { useState } from 'react';

interface CommitmentFormProps {
  handleNext:()=>void
  formData? : FormSchema
  setFormData?: (data: FormSchema) => void;
}

export default function CommitmentForm({ handleNext, formData, setFormData }: CommitmentFormProps) {
  const [date, setDate] = useState('');

  const handleSubmit = (data: CommitmentSchema) => {
    setFormData?.({ ...formData, ...data });
    handleNext();
  };
  return (
    <>
      <section className="flex flex-col w-full gap-1 mb-4 text-black h-[90px] justify-center">
        <p className="typo-h2">공구상품 나눔을 위해</p>
        <div className="flex items-center">
          <p className="typo-h2-bold">나눔일정</p>
          <p className="typo-h2">을 확인해주세요.</p>
        </div>
      </section>
      <Form
        schema={commitmentSchema}
        defaultValues={{
          sharingDateTime: '',
          sharingLocation: '',
          memo: '',
        }}
        onSubmit={handleSubmit}
      >
        <DatePicker value={date} setValue={setDate} />
        <Form.SyncState name="sharingDateTime" value={date} />
        <Form.Input name="sharingLocation">
          <Input.Label>나눔 장소</Input.Label>
          <Input.Field placeholder="나눔 장소를 입력해주세요." />
          <Input.ClearButton />
          <Input.Description />
        </Form.Input>
        <section className="flex flex-col gap-2">
          <div className="w-full h-24 border rounded-xl px-3 py-1.5 border-default-200">
            <label className="typo-caption text-default-600">안내 메시지</label>
            <textarea
              name="memo"
              placeholder="신청자에게 안내할 내용을 자유롭게 입력해주세요."
              className="w-full text-black bg-white border-none focus:outline-none"
              maxLength={200}
            />
          </div>
        </section>
      </Form>
    </>
  );
}
