import { useOptionContext } from '@/components/Option/context';

interface StepperButtonProps {
  name: string;
  quantity: number;
}

export default function StepperButton({ name, quantity }: StepperButtonProps) {
  const { options, setOptions, maxValue } = useOptionContext();

  const curMaxValue =
    maxValue -
    options.reduce((acc, option) => {
      return (acc += option.quantity);
    }, 0);

  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (quantity < curMaxValue) {
      setOptions(
        options.map((option) => {
          if (option.name === name) {
            return { ...option, quantity: quantity + 1 };
          }
          return option;
        })
      );
    }
  };
  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (quantity > 0) {
      setOptions(
        options.map((option) => {
          if (option.name === name) {
            return { ...option, quantity: quantity - 1 };
          }
          return option;
        })
      );
    }
  };
  return (
    <div className="flex items-center justify-center w-[86px] border border-default-300 rounded-sm *:px-1 *:py-1 *:w-full *:typo-caption *:text-default-700">
      <button onClick={handleDecrease}>-</button>
      <input
        className="text-center bg-white rounded-none border-x border-default-300"
        type="number"
        value={quantity}
        onChange={(e) => {
          setOptions(
            options.map((option) => {
              if (option.name === name) {
                return { ...option, quantity: Number(e.target.value) };
              }
              return option;
            })
          );
        }}
      />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}
