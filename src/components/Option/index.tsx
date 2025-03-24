import AddButton from '@/components/Option/AddButton';
import { OptionContext } from '@/components/Option/context';
import DeleteButton from '@/components/Option/DeleteButton';
import OptionLabel from '@/components/Option/OptionLabel';
import StepperButton from '@/components/Option/Stepper';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface OptionProps {
  maxValue: number;
  options: { name: string; quantity: number; remainQuantity: number }[];
  setOptions: (options: { name: string; quantity: number }[]) => void;
  children: ReactNode;
  className?: string;
}

export default function Option({
  children,
  options,
  setOptions,
  maxValue,
  className,
}: OptionProps) {
  return (
    <OptionContext.Provider value={{ options, setOptions, maxValue }}>
      <div
        className={cn(
          'flex flex-col border border-default-200 rounded-xl ',
          className
        )}
      >
        {children}
      </div>
    </OptionContext.Provider>
  );
}

Option.Label = OptionLabel;
Option.AddButton = AddButton;
Option.Stepper = StepperButton;
Option.DeleteButton = DeleteButton;
