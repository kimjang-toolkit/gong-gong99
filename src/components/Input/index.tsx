import { cn } from '@/lib/utils';
import { InputHTMLAttributes, useState, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  pattern?: string;
  patternErrorMessage?: string;
  defaultValue?: string | number;
  variant?: 'bordered' | 'underlined';
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    label,
    type,
    placeholder,
    pattern,
    patternErrorMessage,
    defaultValue,
    required,
    variant = 'bordered',
    handleChange,
    ...props
  }: InputProps,
  ref
) {
  const [inputError, setInputError] = useState<string | undefined>(undefined);
  const [inputValue, setInputValue] = useState(defaultValue ?? null);

  const defaultHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === '' || (pattern && new RegExp(pattern).test(value))) {
      setInputError(undefined);
    }
    if (handleChange) {
      handleChange(e);
    }
  };
  const handleBlur = () => {
    if (
      required &&
      (inputValue === null || inputValue === undefined || inputValue === '')
    ) {
      console.log('inputValue 왜', inputValue);

      setInputError('필수 입력항목입니다.');
    } else if (pattern && !new RegExp(pattern).test(String(inputValue))) {
      console.log('패턴');
      setInputError(patternErrorMessage);
    } else {
      setInputError(undefined);
    }
  };

  return (
    <div className="flex flex-col gap-0.5">
      <div
        className={cn(
          'flex flex-col py-1.5',
          variant === 'bordered'
            ? 'border rounded-xl px-3 '
            : 'border-b px-0.5',
          'border-default-200',
          inputError
            ? 'focus-within:border-red-400'
            : 'focus-within:border-primary-200',
          className
        )}
      >
        <label className="text-caption text-default-600">{label}</label>
        <input
          ref={ref}
          autoComplete="off"
          spellCheck={false}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
          className={cn('text-body text-black focus:outline-none bg-white')}
          onChange={defaultHandleChange}
          onBlur={handleBlur}
          value={inputValue || ''}
          {...props}
        />
      </div>
      {inputError && (
        <span
          className={`${variant === 'underlined' ? 'pl-0.5' : 'pl-2'} text-red-400 text-tiny`}
        >
          {inputError}
        </span>
      )}
    </div>
  );
});

export default Input;
