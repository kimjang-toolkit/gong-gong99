import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Input from '@/components/Input/index';
import useFormStore from '@/stores/coBuyingFormStore';
export default function DevideByAttendeeForm() {
    const { formData } = useFormStore();
    const { totalQuantity, recruitmentNumbers } = formData;
    return (_jsxs(_Fragment, { children: [_jsx(Input, { id: "totalQuantity", name: "totalQuantity", label: "\uC0C1\uD488 \uCD1D \uC218\uB7C9", type: "number", required: true, defaultValue: totalQuantity }), _jsx(Input, { id: "recruitmentNumbers", name: "recruitmentNumbers", label: "\uBAA8\uC9D1\uC778\uC6D0", type: "number", required: true, defaultValue: recruitmentNumbers }), _jsxs("section", { className: "flex items-center w-full gap-2", children: [_jsxs("div", { className: "flex justify-between px-4 py-3 rounded-lg shadow-sm items-justify min-w-[130px] flex-1 bg-zinc-50", children: [_jsx("p", { className: "text-tiny text-default-600", children: "\uC778\uB2F9 \uAD6C\uB9E4\uC218\uB7C9" }), _jsx("p", { className: "text-tiny text-primary-600", children: "100" })] }), _jsxs("div", { className: "flex justify-between px-4 py-3 rounded-lg shadow-sm items-justify min-w-[150px] flex-1 bg-zinc-50", children: [_jsx("p", { className: "text-tiny text-default-600 min-w-[90px]", children: "\uC778\uB2F9 \uBD80\uB2F4\uC561" }), _jsx("p", { className: "text-tiny text-primary-600", children: "10,000" })] })] })] }));
}
