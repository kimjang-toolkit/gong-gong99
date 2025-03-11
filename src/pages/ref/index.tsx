import Form from '@/components/Form';
import InputWrapper from '@/components/Input';
import { useState } from 'react';
import { z } from 'zod';

export default function RefPage() {
  const [testValue, setTestValue] = useState('');

  return (
    <div className="flex flex-col gap-5 p-10">
      <InputWrapper
        variant="underlined"
        value={testValue}
        setValue={setTestValue}
      >
        <InputWrapper.Label className="">상품명</InputWrapper.Label>
        <InputWrapper.Field />
      </InputWrapper>
      <Form
        defaultValues={{
          name: '',
        }}
        schema={z.object({
          name: z.string().min(1, '필수입력입니다'),
        })}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        <Form.Input name="name">
          <InputWrapper.Label className="">상품명</InputWrapper.Label>
          <InputWrapper.Field />
          <InputWrapper.Description />
        </Form.Input>

        <Form.Button>제출</Form.Button>
      </Form>
    </div>
  );
}
