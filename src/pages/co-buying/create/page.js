import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import DefaultLayout from '@/layouts/DefaultLayout';
import CommonForm from '@/pages/co-buying/create/CommonForm';
import DevideByQuantityForm from '@/pages/co-buying/create/DevideByQuantityForm';
import DevideByAttendeeForm from '@/pages/co-buying/create/DevideByAttendeeForm';
import DevideTypeSection from '@/pages/co-buying/create/DevideTypeSection';
import { useNavigate } from 'react-router-dom';
import useFormValidation from '@/hooks/useFormButtonValidation';
import useFormStore from '@/stores/coBuyingFormStore';
import { DivideType } from '@domain/cobuying';
function CreatePage() {
    const navigate = useNavigate();
    const { formRef, isDisabled } = useFormValidation();
    const { setFormData, type } = useFormStore();
    // 다음 버튼 핸들러
    const handleNextClick = (e) => {
        e.preventDefault();
        navigate('/co-buying/password');
    };
    // 폼 간에 상태 변경을 공유하기 위해 필요
    const handleFormBlur = (e) => {
        const formEntries = new FormData(e.currentTarget);
        const data = Object.fromEntries(formEntries);
        setFormData(data);
    };
    return (_jsxs(DefaultLayout, { children: [_jsx(TitleHeader, { title: "\uACF5\uAD6C\uAE00 \uC791\uC131" }), _jsxs("form", { ref: formRef, onBlur: handleFormBlur, className: "flex flex-col gap-4", children: [_jsx(CommonForm, {}), _jsx(DevideTypeSection, {}), type === DivideType.quantity && _jsx(DevideByQuantityForm, {}), type === DivideType.attendee && _jsx(DevideByAttendeeForm, {}), _jsx("section", { className: "flex flex-col gap-2", children: _jsxs("div", { className: "w-full h-24 border rounded-xl px-3 py-1.5 border-default-200", children: [_jsx("label", { className: "text-caption text-default-600", children: "\uC548\uB0B4 \uBA54\uC2DC\uC9C0" }), _jsx("textarea", { name: "noticeMessage", placeholder: "\uC2E0\uCCAD\uC790\uC5D0\uAC8C \uC548\uB0B4\uD560 \uB0B4\uC6A9\uC744 \uC790\uC720\uB86D\uAC8C \uC785\uB825\uD574\uC8FC\uC138\uC694.", className: "w-full text-black border-none focus:outline-none", maxLength: 200 })] }) })] }), _jsx(BottomButton, { type: "button", label: "\uB2E4\uC74C", onClick: (e) => handleNextClick(e), disabled: isDisabled })] }));
}
export default CreatePage;
