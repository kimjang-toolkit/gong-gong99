import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        ' bg-primary-300',
        size === 'small'
          ? 'rounded-[10px] px-4 py-2 typo-caption-bold'
          : 'rounded-2xl px-5 py-3 typo-body-bold',
        props.disabled && 'bg-default-400 opacity-70',
        className
      )}
      onClick={onClick}
      {...props}
    >
      <p className="text-white">{label}</p>
    </button>
  );
}
