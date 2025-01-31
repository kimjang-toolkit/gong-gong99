import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import useFormStore from '@/stores/coBuyingFormStore';
import { DivideType } from '@domain/cobuying';
export default function DevideTypeSection() {
    const { type, setType } = useFormStore();
    // 공구방식 선택에 따른 CSS
    const selectedTypeClass = 'bg-primary-300 text-white';
    const unselectedTypeClass = 'bg-default-300 text-default-600';
    const devideTypeDescription = {
        [DivideType.quantity]: '참여자들이 필요한 수량만큼 선택할 수 있도록 해요.',
        [DivideType.attendee]: '참여인원 수대로 금액 및 상품수량을 균등하게 나눠요.',
    };
    const handleDevideTypeChange = (e) => {
        e.preventDefault();
        setType(e.currentTarget.id);
    };
    return (_jsxs("section", { children: [_jsx("p", { className: "pl-0.5 mb-1 text-caption text-default-600", children: "\uACF5\uAD6C\uB098\uB214 \uBC29\uC2DD" }), _jsxs("div", { className: "flex gap-4", children: [_jsx("button", { id: DivideType.quantity, className: cn('text-center text-body rounded-lg h-[62px] flex-1 shadow-sm', type === DivideType.quantity
                            ? selectedTypeClass
                            : unselectedTypeClass), onClick: (e) => handleDevideTypeChange(e), children: "\uC218\uB7C9\uC73C\uB85C \uB098\uB204\uAE30" }), _jsx("button", { id: DivideType.attendee, className: cn('text-center  text-body rounded-lg h-[62px] flex-1 shadow-sm', type === DivideType.attendee
                            ? selectedTypeClass
                            : unselectedTypeClass), onClick: (e) => handleDevideTypeChange(e), children: "\uC778\uC6D0\uC73C\uB85C \uB098\uB204\uAE30" })] }), _jsxs("p", { className: "mt-1 text-tiny text-default-500", children: ["* ", devideTypeDescription[type]] })] }));
}
