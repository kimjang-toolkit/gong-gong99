function DefaultLayout({ children }: { children: React.ReactNode[] }) {
  const [header, content, footer] = children;
  return (
    <>
      <header className="fixed top-0 w-full max-w-[500px]">{header}</header>
      <main className="px-5 mt-[64px] h-full no-scrollbar overflow-y-auto">
        {content}
      </main>
      <footer className="fixed bottom-0 w-full max-w-[500px]">{footer}</footer>
    </>
  );
}

export default DefaultLayout;
