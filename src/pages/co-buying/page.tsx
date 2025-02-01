import DefaultLayout from '@/layouts/DefaultLayout';
import Navbar from '@/components/Navbar';
import ListSection from '@/pages/co-buying/ListSection';
import MetaTag from '@/components/MetaTag/index';

export default function CoBuyingPage() {
  return (
    <>
      <MetaTag title="공구글" />
      <DefaultLayout>
        <div className="items-center w-full py-4 text-center text-black bg-white text-h3-bold">
          공구글
        </div>
        <ListSection />
        <Navbar />
      </DefaultLayout>
    </>
  );
}
