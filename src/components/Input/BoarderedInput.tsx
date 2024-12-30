import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

interface BoarderedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

export default function BoarderedInput({
  className,
  label,
  type,
  error,
  placeholder,
  ...props
}: BoarderedInputProps) {
  return (
    <div
      className={cn(
        'flex flex-col border rounded-xl px-3 py-1.5 border-default-200 focus-within:border-primary-200 ',
        className
      )}
    >
      <label className="text-caption text-default-600">{label}</label>
      <input
        autoComplete="off"
        spellCheck={false}
        type={type}
        placeholder={placeholder}
        className={cn(
          'text-body text-black focus:outline-none',
          error ? 'border-red-500' : 'border-gray-300'
        )}
        {...props}
      />
    </div>
  );
}
