import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SuccessIcon from '@/assets/icons/alert/success.svg?react';
import FailIcon from '@/assets/icons/alert/fail.svg?react';
import { useEffect } from 'react';
const statusIcon = {
    success: _jsx(SuccessIcon, {}),
    fail: _jsx(FailIcon, {}),
};
export default function Alert({ status, label, setIsOpen }) {
    useEffect(() => {
        setTimeout(() => {
            setIsOpen(false);
        }, 2000);
    }, []);
    return (_jsxs("div", { className: "flex items-center bg-[#3F3F46] rounded-2xl px-3 py-2 whitespace-nowrap text-white text-tiny-bold gap-2 absolute -translate-x-1/2 left-1/2 z-[50] top-16 shadow-sm\r\n    animate-slideIn animate-duration-200 ", children: [statusIcon[status], label] }));
}
