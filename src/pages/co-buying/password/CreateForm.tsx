import Input from '@/components/Input';
import { useState } from 'react';

export default function CreateForm() {
  const [password, setPassword] = useState('');
  return (
    <>
      <Input
        label="이름"
        name="ownerName"
        variant="underlined"
        pattern={'^[a-zA-Z0-9가-힣\\s]{2,8}$'}
        patternErrorMessage="2~8자의 한글, 영문, 숫자만 입력 가능합니다"
        required
      />
      <Input
        name="ownerPwd"
        type="password"
        label="비밀번호"
        variant="underlined"
        pattern={'^[a-zA-Z0-9가-힣\\s]{6,20}$'}
        patternErrorMessage="6~20자의 영문, 숫자만 입력 가능합니다"
        required
        handleChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        label="비밀번호 확인"
        variant="underlined"
        patternErrorMessage="비밀번호가 일치하지 않습니다"
        required
        pattern={`^${password}$`}
      />
    </>
  );
}
