import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import BottomButton from '@/components/Button/BottomButton';
import RightButtonHeader from '@/components/Header/RightButtonHeader';
import DefaultLayout from '@/layouts/DefaultLayout';
// import InfoSection from '@/pages/co-buying/[id]/InfoSection';
import ApplyListSection from '@/pages/co-buying/[id]/management/ApplyListSection';
// import { DivideType } from '@domain/cobuying';
export default function ManagementPage() {
    return (_jsxs(DefaultLayout, { children: [_jsx(RightButtonHeader, { rightElement: _jsx("button", { className: "text-caption-bold text-primary-400", children: "\uC218\uC815\uD558\uAE30" }) }), _jsx(_Fragment, { children: _jsx(ApplyListSection, {}) }), _jsx(BottomButton, { label: "\uC2E0\uCCAD \uB9C8\uAC10\uD558\uAE30" })] }));
}
