import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface InputLabelProps {
  children: ReactNode;
  className?: string;
}

export default function InputLabel({ children, className }: InputLabelProps) {
  return (
    <label
      className={cn(
        'absolute top-1 [&>*]:text-caption text-default-600',
        className
      )}
    >
      <p>{children}</p>
    </label>
  );
}
