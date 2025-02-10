import Navbar from '@/components/Navbar';
import HeaderLayout from '@/layouts/HeaderLayout';
import ListSection from '@/pages/co-buying/ListSection';

export default function CoBuyingPage() {
  return (
    <HeaderLayout>
      <div className="items-center w-full py-4 text-center text-black bg-white typo-h3-bold">
        공구글
      </div>
      <>
        <ListSection />
        <Navbar />
      </>
    </HeaderLayout>
  );
}
