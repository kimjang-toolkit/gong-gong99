import { useController, useFormContext } from 'react-hook-form';
import Input, { InputProps } from '@/components/Input';

type FormInputProps = Omit<InputProps, 'value' | 'setValue'> & {
  name: string;
  children: React.ReactNode;
};

export default function FormInput({
  name,
  children,
  ...props
}: FormInputProps) {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  // name을 받아 리액트 훅 폼에 입력을 등록함
  // useController는 입력 필드를 폼 상태에 바인딩하여 훅폼이 값을 관리하고 유효성 검사하도록 함
  // field는 폼 상태에 바인딩된 입력 필드의 값과 변경 함수를 포함하는 객체

  return (
    <Input
      value={field.value}
      setValue={field.onChange}
      description={error?.message}
      {...props}
    >
      {children}
    </Input>
  );
}
