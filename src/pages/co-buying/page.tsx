import Tab from '@/components/Tab';
import HeaderLayout from '@/layouts/HeaderLayout';
import ListSection from '@/pages/co-buying/list-section';

export default function CoBuyingPage() {
  return (
    <HeaderLayout>
      <div className="items-center w-full py-4 text-center text-black bg-white typo-h3-bold">
        공구글
      </div>
      <>
        <Tab
          tabs={[
            { label: '모집중', value: 'applying' },
            { label: '나눔중', value: 'sharing' },
            { label: '나눔완료', value: 'sharing-completed' },
          ]}
        />
        <ListSection />
      </>
    </HeaderLayout>
  );
}
