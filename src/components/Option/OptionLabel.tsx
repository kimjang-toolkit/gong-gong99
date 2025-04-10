import { useState, memo, useEffect, useRef } from 'react';
import { useOptionContext } from '@/components/Option/context';

export interface OptionLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  optionId: number;
  className?: string;
  placeholder?: string;
}

function OptionLabel({
  optionId,
  className,
  placeholder,
  ...rest
}: OptionLabelProps) {
  const { setOptions, options } = useOptionContext();
  const option = options.find((o) => o.optionId === optionId);
  const [inputValue, setInputValue] = useState(option?.name ?? '');

  const inputRef = useRef<HTMLInputElement>(null);
  const isLastOption = options[options.length - 1]?.optionId === optionId;

  useEffect(() => {
    if (isLastOption && inputRef.current && inputValue.trim() == '') {
      inputRef.current.focus();
    }
  }, [isLastOption]);

  const handleBlur = () => {
    if (inputValue.trim() === '') {
      // 빈 문자열이면 삭제
      setOptions(options.filter((o) => o.optionId !== optionId));
    } else {
      // 아니면 업데이트
      setOptions(
        options.map((o) =>
          o.optionId === optionId ? { ...o, name: inputValue } : o
        )
      );
    }
  };

  return (
    <input
      ref={inputRef}
      className={`typo-caption text-default-600 mr-2 ${className} bg-transparent disabled:bg-transparent`}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleBlur}
      {...rest}
    />
  );
}

export default memo(OptionLabel);
