import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
function DefaultLayout({ children }) {
    const [header, content, footer] = children;
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: "fixed z-[10] top-0 w-full max-w-[500px]", children: header }), _jsx("main", { id: "app-main", className: "px-5 bg-white pt-[60px] pb-[110px] h-full overflow-y-auto  no-scrollbar", children: content }), _jsx("footer", { className: "fixed bottom-0 w-full max-w-[500px]", children: footer })] }));
}
export default DefaultLayout;
