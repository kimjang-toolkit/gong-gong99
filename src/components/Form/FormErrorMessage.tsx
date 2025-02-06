import { useFormContext } from 'react-hook-form';

interface FormErrorMessageProps {
  name: string;
}
export default function FormErrorMessage({ name }: FormErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;

  return errorMessage ? (
    <span className="text-system-error text-body2">
      {errorMessage.toString()}
    </span>
  ) : null;
}
