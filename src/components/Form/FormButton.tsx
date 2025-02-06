import { useFormContext } from 'react-hook-form';

export default function FormButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { formState } = useFormContext();
  const isDisabled = !formState.isValid;
  return (
    <button type="submit" disabled={isDisabled} className="disabled:opacity-50">
      {children}
    </button>
  );
}
