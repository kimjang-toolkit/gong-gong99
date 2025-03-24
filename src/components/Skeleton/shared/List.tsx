import Rect from '@/components/Skeleton/\bshared/Rect';
import TextLine from './TextLine';

type ListProps = {
  count?: number;
  className?: string;
};

const List = ({ count = 3, className }: ListProps) => {
  return (
    <ul className={`space-y-8 ${className}`}>
      {Array.from({ length: count }).map((_, idx) => (
        <li key={idx} className="flex items-start space-x-4">
          <Rect height="60px" width="60px" />
          <div className="flex flex-col flex-1 space-y-2">
            <TextLine width="70%" />
            <TextLine width="40%" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
