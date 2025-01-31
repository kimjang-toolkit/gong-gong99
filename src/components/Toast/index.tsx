import { useEffect } from 'react';

interface ToastProps {
  leftIcon?: React.ReactNode;
  message: string;
  duration?: number;
  
}
export default function Toast({ leftIcon, message, duration }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {}, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className="absolute -translate-x-1/2 bottom-2 left-1/2 bg-[hsla(240, 5%, 26%, 0.92)] text-center text-tiny-bold text-white rounded-2xl px-4 py-2">
      <div className="flex items-center gap-1.5">
        {leftIcon}
        {message}
      </div>
    </div>
  );
}
