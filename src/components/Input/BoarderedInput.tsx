import { cn } from '@/lib/utils';
import { InputHTMLAttributes, useState } from 'react';

interface BoarderedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  regex?: RegExp; // 정규식 추가
  regexErrorMessage?: string; // 정규식 에러 메시지 추가
  isRequired?: boolean; // 필수 입력 여부 추가
}

export default function BoarderedInput({
  className,
  label,
  type,
  placeholder,
  regex,
  regexErrorMessage = 'Invalid input', // 기본값 설정
  isRequired,
  ...props
}: BoarderedInputProps) {
  const [inputError, setInputError] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isRequired && !value) {
      setInputError('필수 입력항목입니다.');
    } else if (regex && !regex.test(value)) {
      setInputError(regexErrorMessage); // 사용자 정의 에러 메시지 사용
    } else {
      setInputError(undefined);
    }
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const handleBlur = () => {
    if (isRequired && !props.value) {
      setInputError('필수 입력항목입니다.');
    }
  };

  return (
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
        onChange={handleChange} // 변경 핸들러 추가
        onBlur={handleBlur} // 블러 핸들러 추가
        {...props}
      />
      {inputError && (
        <span className="text-red-400 text-tiny">{inputError}</span>
      )}
    </div>
  );
}
