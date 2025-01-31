import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BottomButton from '@/components/Button/BottomButton';
import TitleHeader from '@/components/Header/TitleHeader';
import DefaultLayout from '@/layouts/DefaultLayout';
import useFormValidation from '@/hooks/useFormButtonValidation';
import CheckForm from '@/pages/co-buying/password/CheckForm';
import CreateForm from '@/pages/co-buying/password/CreateForm';
import useFormStore from '@/stores/coBuyingFormStore';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const createFormText = ['공구글 게시를 위해', '기본정보', '공구 열기'];
const checkFormText = ['공구글 관리를 위해', '비밀번호', '다음'];
export default function PasswordPage() {
    const navigate = useNavigate();
    const { formData } = useFormStore();
    const { formRef, isDisabled } = useFormValidation();
    // pathparam으로 id가져오기
    const { id } = useParams();
    //id가 없다면 공구글 생성을 위한 비밀번호 입력페이지
    const isCreateMode = !id;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formRef.current)
            return;
        const formEntries = new FormData(formRef.current);
        const data = Object.fromEntries(formEntries);
        // 비밀번호 생성페이지
        if (isCreateMode) {
            const response = await axios.post(`${import.meta.env.VITE_API_SERVER_URL}/co-buying`, { ...formData, ...data });
            console.log(response);
        }
        // 비밀번호 확인페이지
        else {
            console.log(data);
            //비밀번호 확인로직
            navigate(`/co-buying/${id}/management`);
        }
    };
    return (_jsxs(DefaultLayout, { children: [_jsx(TitleHeader, {}), _jsxs(_Fragment, { children: [_jsxs("section", { className: "flex flex-col w-full gap-1 text-black h-[90px] justify-center", children: [_jsx("p", { className: "text-h2", children: isCreateMode ? createFormText[0] : checkFormText[0] }), _jsxs("div", { className: "flex items-center", children: [_jsx("p", { className: "text-h2-bold", children: isCreateMode ? createFormText[1] : checkFormText[1] }), _jsx("p", { className: "text-h2", children: "\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." })] })] }), _jsx("form", { className: "flex flex-col gap-4 mt-3", ref: formRef, children: isCreateMode ? _jsx(CreateForm, {}) : _jsx(CheckForm, {}) })] }), _jsx(BottomButton, { type: "button", onClick: (e) => handleSubmit(e), label: isCreateMode ? createFormText[2] : checkFormText[2], disabled: isDisabled })] }));
}
