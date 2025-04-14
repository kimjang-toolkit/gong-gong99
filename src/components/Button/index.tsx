import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';
interface ButtonProps extends HTMLMotionProps<'button'> {
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
    <motion.button
      type={type}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'bg-primary-300 active:brightness-95',
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
    </motion.button>
  );
}
