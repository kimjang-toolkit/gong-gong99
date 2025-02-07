export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 bg-default-100 h-[56px] flex items-center justify-end px-4 w-full py-1">
      <button className="flex flex-col items-center justify-center text-caption">
        <div className="w-4 h-4 bg-black"></div>
        <p>최근 본 글</p>
      </button>
    </div>
  );
}
