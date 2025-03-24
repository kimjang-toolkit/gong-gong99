import { createContext, useContext } from 'react';

export interface OptionContextProps {
  options: { name: string; quantity: number; remainQuantity?: number }[];
  setOptions: (
    options: { name: string; quantity: number; remainQuantity?: number }[]
  ) => void;
  maxValue: number;
}

export const OptionContext = createContext<OptionContextProps>({
  options: [],
  setOptions: () => {},
  maxValue: 0,
});

export const useOptionContext = () => useContext(OptionContext);
