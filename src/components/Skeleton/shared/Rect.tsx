type RectProps = {
  width?: string;
  height?: string;
  className?: string;
};

const Rect = ({
  width = '100%',
  height = '100px',
  className = '',
}: RectProps) => {
  return (
    <div
      className={`bg-gray-200 rounded animate-pulse ${className}`}
      style={{ width, height }}
    />
  );
};

export default Rect;
