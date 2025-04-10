import { useOptionContext } from '@/components/Option/context';
import { memo } from 'react';

export interface StepperButtonProps {
  optionId: number;
  quantity: number;
  remainQuantity: number;
}

function StepperButton({
  optionId,
  quantity,
  remainQuantity,
}: StepperButtonProps) {
  const { options, setOptions } = useOptionContext();

  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (quantity < remainQuantity) {
      setOptions(
        options.map((option) => {
          if (option.optionId === optionId) {
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
          if (option.optionId === optionId) {
            return { ...option, quantity: quantity - 1 };
          }
          return option;
        })
      );
    }
  };
  return (
    <div className="flex items-center justify-center min-w-[86px] border border-default-300 rounded-[4px] *:px-1 *:py-1 *:w-full *:typo-caption *:text-default-700">
      <button onClick={handleDecrease}>-</button>
      <input
        className="text-center bg-white rounded-none border-x border-default-300"
        type="number"
        min={0}
        max={remainQuantity}
        value={quantity}
        onChange={(e) => {
          setOptions(
            options.map((option) => {
              if (option.optionId === optionId) {
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

export default memo(StepperButton);
