function DefaultLayout({ children }: { children: React.ReactNode[] }) {
  const [header, content, footer] = children;
  return (
    <>
      <header className="fixed top-0 w-full">{header}</header>
      <main className="px-5 py-6">{content}</main>
      <footer className="fixed bottom-0 w-full">{footer}</footer>
    </>
  );
}

export default DefaultLayout;
