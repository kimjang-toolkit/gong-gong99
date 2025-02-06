import { createContext, useContext } from 'react';

export interface InputContextProps {
  value: string;
  setValue: (value: string) => void;
  variant: 'bordered' | 'underlined';
}

export const InputContext = createContext<InputContextProps>({
  value: '',
  setValue: () => {},
  variant: 'bordered',
});

export const useInputContext = () => useContext(InputContext);
