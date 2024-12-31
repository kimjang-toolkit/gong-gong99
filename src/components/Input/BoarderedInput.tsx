import { cn } from '@/lib/utils';
import { InputHTMLAttributes, useState } from 'react';

interface BoarderedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  regex?: RegExp; // 정규식 추가
  regexErrorMessage?: string; // 정규식 에러 메시지 추가
  isRequired?: boolean; // 필수 입력 여부 추가
  defaultValue?: string | number;
}

export default function BoarderedInput({
  className,
  label,
  type,
  placeholder,
  regex,
  regexErrorMessage = 'Invalid input', // 기본값 설정
  isRequired,
  defaultValue,
  ...props
}: BoarderedInputProps) {
  const [inputError, setInputError] = useState<string | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string | number>(
    defaultValue ?? ''
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '' || (regex && regex.test(value))) {
      setInputError(undefined); // 올바른 입력 시 에러 메시지 제거
    }
    if (props.onChange) {
      props.onChange(e);
    }
    setInputValue(value);
  };

  const handleBlur = () => {
    if (isRequired && !inputValue) {
      setInputError('필수 입력항목입니다.');
    } else if (regex && !regex.test(String(inputValue))) {
      setInputError(regexErrorMessage);
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
          className={cn('text-body text-black focus:outline-none')}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
          value={inputValue}
        />
      </div>
      {inputError && (
        <span className="pl-2 text-red-400 text-tiny">{inputError}</span>
      )}
    </div>
  );
}
