import { useInputContext } from '@/components/Input/context';

export default function InputDescription() {
  const { description } = useInputContext();
  return description ? (
    <span className="text-body2 text-system-red">{description}</span>
  ) : null;
}
