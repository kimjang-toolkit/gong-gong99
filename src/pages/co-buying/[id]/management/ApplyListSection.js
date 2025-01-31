import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { formatNumberWithCommas } from '@/util/formatNumberWithCommas';
export default function ApplyListSection() {
    const mock = [
        {
            attendeeName: '조승효',
            appliedQuantity: 3,
            attendeePrice: 10000,
        },
        {
            attendeeName: '오찬솔솔',
            appliedQuantity: 3,
            attendeePrice: 1000000,
        },
        {
            attendeeName: '오찬솔',
            appliedQuantity: 3,
            attendeePrice: 10000,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx("p", { className: "text-caption text-default-500 mb-1.5", children: "\uC2E0\uCCAD \uD604\uD669" }), _jsxs("table", { className: "w-full overflow-hidden rounded-l-md rounded-r-md", children: [_jsx("thead", { className: "bg-default-50", children: _jsxs("tr", { className: "*:text-default-500 *:text-caption *:py-2", children: [_jsx("th", { children: "\uC2E0\uCCAD\uC790" }), _jsx("th", { children: "\uC2E0\uCCAD\uC218\uB7C9" }), _jsx("th", { children: "\uBD80\uB2F4\uC561" })] }) }), _jsx("tbody", { children: mock.map((data) => (_jsxs("tr", { className: "*:py-1.5 *:text-center *:text-caption", children: [_jsx("td", { className: "min-w-[30%]", children: data.attendeeName }), _jsx("td", { children: data.appliedQuantity }), _jsxs("td", { className: "min-w-[45%]", children: [formatNumberWithCommas(data.attendeePrice), "\uC6D0"] })] }))) })] })] }));
}
