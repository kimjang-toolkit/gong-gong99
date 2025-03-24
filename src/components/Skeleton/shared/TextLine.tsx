type TextLineProps = {
  width?: string;
  height?: string;
  className?: string;
};

const TextLine = ({
  width = '100%',
  height = '1rem',
  className = '',
}: TextLineProps) => {
  return (
    <div
      className={`bg-gray-200 rounded animate-pulse ${className}`}
      style={{ width, height }}
    />
  );
};

export default TextLine;
