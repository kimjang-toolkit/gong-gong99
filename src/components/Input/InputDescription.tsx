import { useInputContext } from '@/components/Input/context';

export default function InputDescription() {
  const { description } = useInputContext();
  return description ? (
    <span className="absolute translate-y-8 text-caption text-system-error">
      {description}
    </span>
  ) : null;
}
