/* eslint-disable @typescript-eslint/no-explicit-any */
interface BottomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: (e: any) => void;
}

function BottomButton({ label, onClick, ...props }: BottomButtonProps) {
  return (
    <button
      className="fixed bottom-0 max-w-[500px] w-full py-4 text-center text-h3-bold text-default-50 bg-primary-300 disabled:bg-default-300 disabled:text-white"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default BottomButton;
