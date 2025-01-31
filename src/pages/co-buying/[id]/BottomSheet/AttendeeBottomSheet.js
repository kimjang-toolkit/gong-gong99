import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '@/components/Button';
import Input from '@/components/Input';
import useOutsideClick from '@/hooks/useOutsideClick';
import { Sheet } from 'react-modal-sheet';
export default function AttendeeBottomSheet({ isOpen, setIsOpen, data, }) {
    const sheetRef = useOutsideClick(() => {
        setIsOpen(false);
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        setIsOpen(false);
        // mutate 시, 캐시 업데이트를 해주어서 새로고침 없이 데이터를 바꾸도록 처리
    };
    return (_jsxs(Sheet, { isOpen: isOpen, onClose: () => setIsOpen(false), detent: "content-height", disableScrollLocking: true, children: [_jsxs(Sheet.Container, { ref: sheetRef, children: [_jsx(Sheet.Header, {}), _jsx(Sheet.Content, { children: _jsxs("form", { className: "flex flex-col gap-4 px-4 mb-8", onSubmit: handleSubmit, children: [_jsx("header", { className: "w-full text-left text-body-bold", children: "\uACF5\uAD6C \uC2E0\uCCAD" }), _jsx(Input, { name: "attendeeName", label: "\uC774\uB984", placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", variant: "bordered" }), _jsxs("section", { className: "flex justify-between p-4 border rounded-xl border-default-200", children: [_jsx("p", { className: "mb-1 text-caption text-default-600", children: "\uAD6C\uB9E4 \uC218\uB7C9" }), _jsxs("p", { className: "text-body-bold", children: [" ", data.quantity, " \uAC1C"] })] }), _jsxs("section", { className: "flex items-start justify-between px-1", children: [_jsxs("p", { className: "flex py-1 text-tiny text-default-700", children: [_jsx("p", { className: "text-primary-400", children: data.quantity }), "\uAC1C \uAD6C\uB9E4\uC561"] }), _jsxs("p", { className: "text-body-bold text-primary-400", children: [data.totalPrice, "\uC6D0"] })] }), _jsx("section", { className: "flex justify-end w-full mt-1", children: _jsx(Button, { type: "submit", label: "\uC2E0\uCCAD\uD558\uAE30", size: "small" }) })] }) })] }), _jsx(Sheet.Backdrop, {})] }));
}
