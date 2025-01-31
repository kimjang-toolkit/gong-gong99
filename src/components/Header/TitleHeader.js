import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ArrowLeft from "@/assets/icons/arrow-left.svg?react";
import { useNavigate } from "react-router-dom";
function TitleHeader({ title, onBackPress }) {
    const navigate = useNavigate();
    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        }
        else {
            navigate(-1);
        }
    };
    return (_jsxs("div", { className: " py-4 flex items-center pl-4 text-black text-h3-bold pr-[34px] w-full bg-white", children: [_jsx(ArrowLeft, { stroke: "#262626", width: 18, height: 18, onClick: handleBackPress }), _jsx("p", { className: "w-full text-center", children: title })] }));
}
export default TitleHeader;
