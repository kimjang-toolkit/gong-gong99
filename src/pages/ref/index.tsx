import InputWrapper from '@/components/Input';
import { useState } from 'react';

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
    </div>
  );
}
