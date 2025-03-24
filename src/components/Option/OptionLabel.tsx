export default function OptionLabel({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`typo-caption text-default-600 ${className}`}>{label}</div>
  );
}
