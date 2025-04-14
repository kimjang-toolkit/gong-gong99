import { motion } from 'motion/react';
import { memo } from 'react';

interface TabItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// isActive가 변경되지 않으면 불필요한 렌더링 방지
const TabItem = memo(({ label, isActive, onClick }: TabItemProps) => {
  return (
    <div className="relative grow">
      <motion.button
        onClick={onClick}
        className={`border-b py-2 w-full text-center border-layout-divider ${
          isActive ? 'text-primary-500 ' : 'text-default-600 '
        }`}
      >
        <p className="text-body">{label}</p>
      </motion.button>
      {isActive && (
        <motion.div
          layoutId="active-tab"
          className="absolute bottom-0 w-full h-[0.8px] bg-primary-500"
        />
      )}
    </div>
  );
});

export default TabItem;
