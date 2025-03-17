import { memo } from 'react';

interface TabItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// isActive가 변경되지 않으면 불필요한 렌더링 방지
const TabItem = memo(({ label, isActive, onClick }: TabItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`border-b py-2 w-full text-center ${
        isActive
          ? 'text-primary-500 border-primary-500'
          : 'text-default-600 border-layout-divider'
      }`}
    >
      <p className="text-body">{label}</p>
    </button>
  );
});

export default TabItem;
