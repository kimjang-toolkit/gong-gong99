import { useInputContext } from '@/components/Input/context';

export default function InputDescription() {
  const { description } = useInputContext();
  return description ? (
    <span className="absolute translate-y-[26px] typo-tiny text-system-error">
      {description}
    </span>
  ) : null;
}
