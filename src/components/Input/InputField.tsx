import { useInputContext } from '@/components/Input/context';
import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function InputField({ className, ...props }: InputFieldProps) {
  const { value, setValue } = useInputContext();

  return (
    <input
      {...props}
      value={value}
      autoComplete="off"
      spellCheck={false}
      onChange={(e) => setValue(e.target.value)}
      className={cn(
        'text-body text-black w-full focus:outline-none  bg-transparent',
        className
      )}
    />
  );
}
