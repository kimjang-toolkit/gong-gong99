import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
export default function Toast({ leftIcon, message, duration }) {
    useEffect(() => {
        const timer = setTimeout(() => { }, duration);
        return () => clearTimeout(timer);
    }, [duration]);
    return (_jsx("div", { className: "absolute -translate-x-1/2 bottom-2 left-1/2 bg-[hsla(240, 5%, 26%, 0.92)] text-center text-tiny-bold text-white rounded-2xl px-4 py-2", children: _jsxs("div", { className: "flex items-center gap-1.5", children: [leftIcon, message] }) }));
}
