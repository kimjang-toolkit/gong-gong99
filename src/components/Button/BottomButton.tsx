interface BottomButtonProps {
  label: string;
  onClick: () => void;
}

function BottomButton({ label, onClick }: BottomButtonProps) {
  return (
    <button
      className="w-full py-5 text-center text-h2 text-default-50 bg-primary-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default BottomButton;
