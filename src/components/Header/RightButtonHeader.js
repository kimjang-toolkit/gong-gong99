import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ArrowLeft from '@/assets/icons/arrow-left.svg?react';
import { useNavigate } from 'react-router-dom';
export default function RightButtonHeader({ rightElement, backUrl, }) {
    const navigate = useNavigate();
    const handleBackPress = () => {
        if (backUrl) {
            navigate(backUrl);
        }
        else {
            navigate(-1);
        }
    };
    return (_jsxs("div", { className: "flex items-center justify-between w-full px-4 py-4 text-black bg-white text-h3-bold", children: [_jsx(ArrowLeft, { stroke: "#262626", width: 18, height: 18, onClick: handleBackPress }), rightElement] }));
}
