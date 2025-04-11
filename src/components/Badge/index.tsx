import { cn } from '@/lib/utils';

interface BadgeProps {
  className?: string;
  label: string;
  color: 'primary' | 'yellow' | 'neutral';
}
export default function Badge({ className, label, color }: BadgeProps) {
  const colorMap = {
    primary: 'border border-primary-500 text-primary-500',
    yellow: 'border border-[#C4841D] text-[#C4841D]',
    neutral: 'border border-default-400 text-default-400',
  };
  return (
    <div
      className={cn(
        'px-2  py-1 bg-transparent text-center rounded-full typo-tiny font-medium inline',
        className,
        colorMap[color]
      )}
    >
      {label}
    </div>
  );
}
