import { useState, memo } from 'react';
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

  const handleBlur = () => {
    setOptions(
      options.map((o) =>
        o.optionId === optionId ? { ...o, name: inputValue } : o
      )
    );
  };

  return (
    <input
      className={`typo-caption text-default-600 mr-2 ${className} disabled:bg-transparent`}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleBlur}
      {...rest}
    />
  );
}

export default memo(OptionLabel);
