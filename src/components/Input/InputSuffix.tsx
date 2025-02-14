export default function InputSuffix({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="absolute bottom-0 text-gray-500 transform -translate-y-2 right-2">
      {children}
    </span>
  );
}
