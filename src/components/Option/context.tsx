import { createContext, useContext } from 'react';

export interface OptionContextProps {
  options: { name: string; quantity: number; remainQuantity?: number }[];
  setOptions: (
    options: { name: string; quantity: number; remainQuantity?: number }[]
  ) => void;
}

export const OptionContext = createContext<OptionContextProps>({
  options: [],
  setOptions: () => {},
});

export const useOptionContext = () => useContext(OptionContext);
