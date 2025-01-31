import { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type?: string;
    placeholder?: string;
    pattern?: string;
    patternErrorMessage?: string;
    defaultValue?: string | number;
    variant?: 'bordered' | 'underlined';
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
