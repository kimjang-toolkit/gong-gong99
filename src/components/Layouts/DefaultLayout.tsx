function DefaultLayout({ children }: { children: React.ReactNode[] }) {
  const [header, content, footer] = children;
  return (
    <>
      <header className="fixed top-0 w-full max-w-[500px]">{header}</header>
      <main className="px-5 bg-white pt-[64px] pb-[110px] h-full overflow-y-auto no-scrollbar">
        {content}
      </main>
      <footer className="fixed bottom-0 w-full max-w-[500px]">{footer}</footer>
    </>
  );
}

export default DefaultLayout;
