import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ModalProvider from '@/providers/modalProvider';
const BaseLayout = ({ children }) => {
    return (_jsxs("div", { className: "flex justify-center w-full mx-auto h-svh  bg-[#F4F4F5]", children: [_jsx("aside", { className: "hidden p-6 text-gray-700 lg:flex lg:items-center", children: _jsx("div", { className: "max-w-96", children: _jsx("div", { children: "image" }) }) }), _jsxs("main", { className: "relative h-svh w-full max-w-[500px] shadow-xl lg:min-w-[500px]", children: [children, _jsx(ModalProvider, {})] })] }));
};
export default BaseLayout;
