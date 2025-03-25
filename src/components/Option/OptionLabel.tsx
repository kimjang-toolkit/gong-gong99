import { useOptionContext } from '@/components/Option/context';

interface OptionLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export default function OptionLabel({ label, className }: OptionLabelProps) {
  const { setOptions, options } = useOptionContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value;
    const updatedOptions = options.map((option) =>
      option.name === label ? { ...option, name: newLabel } : option
    );
    setOptions(updatedOptions);
  };

  return (
    <input
      className={`typo-caption text-default-600 w-full mr-2 ${className}`}
      value={label}
      onChange={handleChange}
    />
  );
}
