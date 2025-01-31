import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { useState, forwardRef } from 'react';
const Input = forwardRef(function Input({ className, label, type, placeholder, pattern, patternErrorMessage, defaultValue, required, variant = 'bordered', handleChange, ...props }, ref) {
    const [inputError, setInputError] = useState(undefined);
    const [inputValue, setInputValue] = useState(defaultValue ?? null);
    const defaultHandleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value === '' || (pattern && new RegExp(pattern).test(value))) {
            setInputError(undefined);
        }
        if (handleChange) {
            handleChange(e);
        }
    };
    const handleBlur = () => {
        if (required &&
            (inputValue === null || inputValue === undefined || inputValue === '')) {
            setInputError('필수 입력항목입니다.');
        }
        else if (pattern && !new RegExp(pattern).test(String(inputValue))) {
            setInputError(patternErrorMessage);
        }
        else {
            setInputError(undefined);
        }
    };
    return (_jsxs("div", { className: "flex flex-col gap-0.5", children: [_jsxs("div", { className: cn('flex flex-col py-1.5', variant === 'bordered'
                    ? 'border rounded-xl px-3 '
                    : 'border-b px-0.5', 'border-default-200', inputError
                    ? 'focus-within:border-red-400'
                    : 'focus-within:border-primary-200', className), children: [_jsx("label", { className: "text-caption text-default-600", children: label }), _jsx("input", { ref: ref, autoComplete: "off", spellCheck: false, type: type, placeholder: placeholder, pattern: pattern, required: required, className: cn('text-body text-black focus:outline-none'), onChange: defaultHandleChange, onBlur: handleBlur, value: inputValue || '', ...props })] }), inputError && (_jsx("span", { className: `${variant === 'underlined' ? 'pl-0.5' : 'pl-2'} text-red-400 text-tiny`, children: inputError }))] }));
});
export default Input;
