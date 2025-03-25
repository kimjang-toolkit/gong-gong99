import { useOptionContext } from '@/components/Option/context';
import { cn } from '@/lib/utils';

export default function AddButton({
  defaultQuantity,
  className,
}: {
  defaultQuantity: number;
  className?: string;
}) {
  const { options, setOptions } = useOptionContext();
  return (
    <button
      onClick={() =>
        setOptions([
          ...options,
          { optionId: options.length + 1, name: '', quantity: defaultQuantity },
        ])
      }
      className={cn(
        'w-full h-9 typo-caption text-default-600 text-center border border-default-200 rounded-xl ',
        className
      )}
    >
      + 옵션 추가
    </button>
  );
}
