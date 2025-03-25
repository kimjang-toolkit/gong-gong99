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
}: OptionLabelProps) {
  const { setOptions, options } = useOptionContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value;
    const updatedOptions = options.map((option) =>
      option.optionId === optionId ? { ...option, name: newLabel } : option
    );
    setOptions(updatedOptions);
  };

  return (
    <input
      className={`typo-caption text-default-600 w-full mr-2 ${className}`}
      placeholder={placeholder}
      value={options.find((option) => option.optionId === optionId)?.name}
      onChange={handleChange}
    />
  );
}
