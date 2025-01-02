import ModalProvider from '@/providers/modalProvider';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center w-full mx-auto h-svh bg-[#F4F4F5]">
      <aside className="hidden p-6 text-gray-700 lg:flex lg:items-center">
        <div className="max-w-96">
          <div>image</div>
        </div>
      </aside>
      {/* 우측 앱화면 */}
      <main className="relative h-svh w-full max-w-[500px] shadow-xl lg:min-w-[500px]">
        {children}
        <ModalProvider />
      </main>
    </div>
  );
};

export default BaseLayout;
