function DefaultLayout({ children }: { children: React.ReactNode[] }) {
  const [header, content, footer] = children;
  return (
    <>
      <header className="absolute top-0 w-full ">{header}</header>
      <main className="px-5 mt-[64px]">{content}</main>
      <footer className="absolute bottom-0 w-full">{footer}</footer>
    </>
  );
}

export default DefaultLayout;
