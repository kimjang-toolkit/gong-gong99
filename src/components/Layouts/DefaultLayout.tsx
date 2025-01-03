function DefaultLayout({ children }: { children: React.ReactNode[] }) {
  const [header, content, footer] = children;
  return (
    <>
      <header className="fixed top-0 w-full max-w-[500px]">{header}</header>
      <main className="bg-white px-5 overflow-y-auto pb-[96px] h-full ">
        {content}
      </main>
      <footer className="fixed bottom-0 w-full max-w-[500px]">{footer}</footer>
    </>
  );
}

export default DefaultLayout;
