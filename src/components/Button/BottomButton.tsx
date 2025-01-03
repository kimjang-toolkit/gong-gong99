interface BottomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
}

function BottomButton({ label, onClick, ...props }: BottomButtonProps) {
  return (
    <button
      className="w-full py-4 text-center text-h3-bold text-default-50 bg-primary-300"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default BottomButton;
