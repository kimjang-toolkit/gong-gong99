import DeleteIcon from '@/assets/icons/x-button.svg?react';
import { useOptionContext } from '@/components/Option/context';

export default function DeleteButton({ name }: { name: string }) {
  const { options, setOptions } = useOptionContext();
  return (
    <button
      onClick={() =>
        setOptions(options.filter((option) => option.name !== name))
      }
    >
      <DeleteIcon className="w-4 h-4 text-default-600" />
    </button>
  );
}
