import { useState } from 'react';
import { useOptionContext } from '@/components/Option/context';

interface OptionLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  optionId: number;
  className?: string;
  placeholder?: string;
}

export default function OptionLabel({
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
      className={`typo-caption text-default-600 w-full mr-2 ${className} disabled:bg-transparent`}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleBlur}
      {...rest}
    />
  );
}
