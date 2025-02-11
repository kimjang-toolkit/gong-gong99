/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from 'react';

export interface InputContextProps {
  value: any;
  setValue: (value: any) => void;
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
