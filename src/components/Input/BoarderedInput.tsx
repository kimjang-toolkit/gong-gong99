import { cn } from '@/lib/utils';
import { InputHTMLAttributes, useState } from 'react';

interface BoarderedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  pattern?: string;
  patternErrorMessage?: string;
  defaultValue?: string | number;
}

export default function BoarderedInput({
  className,
  label,
  type,
  placeholder,
  pattern,
  patternErrorMessage,
  defaultValue,
  required,
  ...props
}: BoarderedInputProps) {
  const [inputError, setInputError] = useState<string | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string | number | null>(
    defaultValue ?? null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (pattern && new RegExp(pattern).test(value))) {
      setInputError(undefined);
    }
    if (props.onChange) {
      props.onChange(e);
    }
    setInputValue(value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('Input validity:', e.target.validity);

    if (
      required &&
      (inputValue === null || inputValue === undefined || inputValue === '')
    ) {
      setInputError('필수 입력항목입니다.');
    } else if (pattern && !new RegExp(pattern).test(String(inputValue))) {
      setInputError(patternErrorMessage);
    } else {
      setInputError(undefined);
    }
  };

  return (
    <div className="flex flex-col gap-0.5">
      <div
        className={cn(
          'flex flex-col border rounded-xl px-3 py-1.5 border-default-200  ',
          inputError
            ? 'focus-within:border-red-400'
            : 'focus-within:border-primary-200',
          className
        )}
      >
        <label className="text-caption text-default-600">{label}</label>
        <input
          autoComplete="off"
          spellCheck={false}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
          className={cn('text-body text-black focus:outline-none')}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
      </div>
      {inputError && (
        <span className="pl-2 text-red-400 text-tiny">{inputError}</span>
      )}
    </div>
  );
}
