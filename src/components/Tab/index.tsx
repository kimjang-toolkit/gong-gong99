import TabItem from '@/components/Tab/TabItem';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

interface TabProps {
  tabs: {
    label: string;
    value: string;
  }[];
}

export default function Tab({ tabs }: TabProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTab = searchParams.get('tab') || tabs[0].value;

  // useCallback을 사용하여 불필요한 렌더링을 방지
  const handleTabClick = useCallback(
    (tab: string) => {
      setSearchParams({ tab });
    },
    [setSearchParams]
  );

  return (
    <div className="sticky top-0 flex bg-white">
      {tabs.map((tab) => (
        <TabItem
          key={tab.value}
          label={tab.label}
          isActive={selectedTab === tab.value}
          onClick={() => handleTabClick(tab.value)}
        />
      ))}
    </div>
  );
}
