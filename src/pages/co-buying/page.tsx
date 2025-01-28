import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Navbar from '@/components/Navbar';
import ListSection from '@/pages/co-buying/ListSection';

export default function CoBuyingPage() {
  return (
    <DefaultLayout>
      <div className="items-center w-full py-4 text-center text-black text-h3-bold">
        공구글
      </div>
      <ListSection />
      <Navbar />
    </DefaultLayout>
  );
}
