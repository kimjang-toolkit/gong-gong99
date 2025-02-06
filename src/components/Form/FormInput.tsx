import { useController, useFormContext } from 'react-hook-form';

import Input, { InputProps } from '@/components/Input';

type FormInputProps = InputProps & {
  name: string;
};

export default function FormInput({ name, ...props }: FormInputProps) {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Input
      {...props}
      {...field}
      className={`${error ? 'border-system-red ' : ''}`}
    />
  );
}
