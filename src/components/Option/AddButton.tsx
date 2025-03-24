import { cn } from '@/lib/utils';

export default function AddButton({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        'w-full h-9 typo-caption text-default-600 text-center border border-default-200 rounded-xl ',
        className
      )}
    >
      + 옵션 추가
    </button>
  );
}
