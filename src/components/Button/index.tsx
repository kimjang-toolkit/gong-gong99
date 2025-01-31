import { cn } from '@/lib/utils';

interface ButtonProps {
  label: string;
  size: 'small' | 'large';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  label,
  size,
  onClick,
  className,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        ' bg-primary-300',
        size === 'small'
          ? 'rounded-[10px] px-4 py-2 text-caption-bold'
          : 'rounded-2xl px-5 py-3 text-body-bold',
        className
      )}
      onClick={onClick}
    >
      <p className="text-white">{label}</p>
    </button>
  );
}
