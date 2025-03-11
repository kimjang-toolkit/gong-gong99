import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

export default function FormButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { formState } = useFormContext();
  const isDisabled = !formState.isValid;
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={cn(
        '*:disabled:bg-default-400 *:disabled:text-white',
        className
      )}
    >
      {children}
    </button>
  );
}
