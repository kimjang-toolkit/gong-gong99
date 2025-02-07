import { InputContext } from '@/components/Input/context';
import InputClearButton from '@/components/Input/InputClearButton';
import InputDescription from '@/components/Input/InputDescription';
import InputField from '@/components/Input/InputField';
import InputLabel from '@/components/Input/InputLabel';
import InputSuffix from '@/components/Input/InputSuffix';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface InputProps {
  children: ReactNode;
  value: string;
  description?: string;
  variant?: 'bordered' | 'underlined';
  setValue: (value: string) => void;
  className?: string;
}
export default function Input({
  children,
  value,
  setValue,
  variant = 'bordered',
  description,
  className,
}: InputProps) {
  return (
    <InputContext.Provider value={{ value, setValue, variant, description }}>
      <div
        className={cn(
          'relative w-full flex items-center ',
          variant === 'bordered' &&
            'border border-gray-300 rounded-xl px-2.5 pt-[26px] pb-2 focus-within:border-primary-200 focus-within:ring-1.5 focus-within:ring-primary-200',
          variant === 'underlined' &&
            'border-b border-gray-300  pt-[26px] pb-2 focus-within:border-primary-200 focus-within:ring-1.5 focus-within:ring-primary-200',
          className
        )}
      >
        {children}
      </div>
    </InputContext.Provider>
  );
}

Input.Field = InputField;
Input.Label = InputLabel;
Input.Suffix = InputSuffix;
Input.ClearButton = InputClearButton;
Input.Description = InputDescription;
