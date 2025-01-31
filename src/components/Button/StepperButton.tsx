interface StepperButtonProps {
  maxValue: number;
  value: number;
  onChange: (value: number) => void;
}

export default function StepperButton({
  maxValue,
  value,
  onChange,
}: StepperButtonProps) {
  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (value < maxValue) {
      onChange(value + 1);
    }
  };
  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (value > 0) {
      onChange(value - 1);
    }
  };
  return (
    <div className="flex items-center justify-center w-[86px] border border-default-300 rounded-sm *:px-1 *:py-1 *:w-full *:text-caption *:text-default-700">
      <button onClick={handleDecrease}>-</button>
      <input
        className="text-center bg-white rounded-none border-x border-default-300"
        type="number"
        value={value}
        onChange={(e) => {
          onChange(Number(e.target.value));
        }}
      />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}
