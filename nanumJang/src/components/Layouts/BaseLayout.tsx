import ModalProvider from '@/providers/modalProvider';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex h-svh w-full justify-center bg-content1">
      <aside className="hidden p-6 text-gray-700 lg:flex lg:items-center">
        <div className="max-w-96">
          <img src="/images/landing.png" alt="Lading Image" />
        </div>
      </aside>
      {/* 우측 앱화면 */}
      <main className="relative h-svh w-full max-w-[500px] bg-[#F4F4F5] shadow-xl lg:min-w-[500px]">
        <div
          id="scroll-parent"
          className="h-svh max-h-svh w-full overflow-y-scroll scrollbar-hide"
        >
          {children}
        </div>
        <ModalProvider />
      </main>
    </div>
  );
};

export default BaseLayout;
