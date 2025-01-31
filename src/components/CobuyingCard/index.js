import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { formatNumberWithCommas } from '@/util/formatNumberWithCommas';
import { DivideType } from '@domain/cobuying';
export default function CobuyingCard({ item, }) {
    const { productName, deadline, totalPrice, totalQuantity, type } = item;
    const { attendeeCount, targetAttendeeCount, perAttendeePrice } = item;
    const { totalAttendeeQuantity, unitPrice } = item;
    const perPrice = () => {
        if (type === DivideType.attendee) {
            return `인 당 ${formatNumberWithCommas(perAttendeePrice)}원`;
        }
        if (type === DivideType.quantity) {
            return `개 당 ${formatNumberWithCommas(unitPrice)}원`;
        }
    };
    return (_jsxs("article", { className: "flex flex-col py-4 bg-white active:brightness-95", children: [_jsx("p", { className: "font-medium text-black", children: productName }), _jsxs("p", { className: "text-tiny text-default-500", children: [deadline, " \uB9C8\uAC10"] }), _jsxs("div", { className: "flex items-center", children: [_jsx("p", { className: "mr-1 text-body-bold", children: `${formatNumberWithCommas(totalPrice)}원` }), _jsx("p", { className: "text-caption text-default-700", children: `(${perPrice()})` })] }), _jsxs("div", { className: "flex *:text-tiny *:text-default-600 [&>p:nth-child(2)]:text-primary-500 self-end mt-1", children: [type === DivideType.attendee && (_jsxs(_Fragment, { children: [_jsx("p", { className: "mr-1", children: "\uC2E0\uCCAD \uC778\uC6D0" }), _jsx("p", { children: attendeeCount }), _jsx("p", { children: `/${targetAttendeeCount}명` })] })), type === DivideType.quantity && (_jsxs(_Fragment, { children: [_jsx("p", { className: "mr-1", children: "\uC2E0\uCCAD \uC218\uB7C9" }), _jsx("p", { children: totalAttendeeQuantity }), _jsx("p", { children: `/${totalQuantity}개` })] }))] })] }));
}
