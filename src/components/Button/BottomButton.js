import { jsx as _jsx } from "react/jsx-runtime";
function BottomButton({ label, onClick, ...props }) {
    return (_jsx("button", { className: "w-full py-4 text-center text-h3-bold text-default-50 bg-primary-300 disabled:bg-default-300 disabled:text-white", onClick: onClick, ...props, children: label }));
}
export default BottomButton;
