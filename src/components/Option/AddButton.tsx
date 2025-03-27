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
  const nextId = Math.max(...options.map((o) => o.optionId), 0) + 1;
  return (
    <button
      type="button"
      onClick={() =>
        setOptions([
          ...options,
          { optionId: nextId, name: '', quantity: defaultQuantity },
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
