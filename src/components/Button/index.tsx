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
        'rounded-[10px] bg-primary-300',
        size === 'small'
          ? 'px-4 py-2 text-caption-bold'
          : 'px-10 py-3 text-body-bold',
        className
      )}
      onClick={onClick}
    >
      <p className="text-white">{label}</p>
    </button>
  );
}
