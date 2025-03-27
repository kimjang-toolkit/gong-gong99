import AlertProvider from '@/providers/alertProvider';
import ModalProvider from '@/providers/modalProvider';
import banner from '/img/gonggong99_banner.png';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center w-full mx-auto h-svh  bg-[#F4F4F5]">
      <aside className="hidden p-6 text-gray-700 lg:flex lg:items-center">
        <div className="mr-10 shadow-md max-w-96">
          <img src={banner} alt="공공99 배너" />
        </div>
      </aside>
      {/* 우측 앱화면 */}
      <main className="relative h-svh w-full max-w-[500px] shadow-xl lg:min-w-[500px]">
        {children}
        <ModalProvider />
        <AlertProvider />
      </main>
    </div>
  );
};

export default BaseLayout;
