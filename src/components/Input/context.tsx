import { createContext, useContext } from 'react';

export interface InputContextProps {
  value: string;
  setValue: (value: string) => void;
  variant: 'bordered' | 'underlined';
  description?: string;
}

export const InputContext = createContext<InputContextProps>({
  value: '',
  setValue: () => {},
  variant: 'bordered',
  description: '',
});

export const useInputContext = () => useContext(InputContext);
