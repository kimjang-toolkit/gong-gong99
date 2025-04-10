import DeleteIcon from '@/assets/icons/x-button.svg?react';
import { useOptionContext } from '@/components/Option/context';

export default function DeleteButton({
  optionId,
  className,
}: {
  optionId: number;
  className?: string;
}) {
  const { options, setOptions } = useOptionContext();
  return (
    <button
      type="button"
      onClick={() => {
        if (options.length > 1) {
          setOptions(options.filter((option) => option.optionId !== optionId));
        }
      }}
      className={className}
    >
      <DeleteIcon className="w-4 h-4 text-default-600" />
    </button>
  );
}
