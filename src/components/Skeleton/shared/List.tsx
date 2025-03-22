import TextLine from './TextLine';

type ListProps = {
  count?: number;
};

const List = ({ count = 3 }: ListProps) => {
  return (
    <ul className="space-y-4">
      {Array.from({ length: count }).map((_, idx) => (
        <li key={idx} className="flex items-center space-x-4">
          <div className="flex-1 space-y-2">
            <TextLine width="70%" />
            <TextLine width="40%" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
