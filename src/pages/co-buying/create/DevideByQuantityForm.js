import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Input from "@/components/Input/index";
import { formatNumberWithCommas } from "@/util/formatNumberWithCommas";
import useFormStore from "@/stores/coBuyingFormStore";
export default function DevideByQuantityForm() {
    const { formData } = useFormStore();
    const { totalPrice, totalQuantity, ownerQuantity } = formData;
    let unitPrice;
    if (totalPrice && totalQuantity) {
        unitPrice = totalPrice / totalQuantity;
    }
    return (_jsxs(_Fragment, { children: [_jsx(Input, { id: "totalQuantity", name: "totalQuantity", label: "\uC0C1\uD488 \uCD1D \uC218\uB7C9", placeholder: "\uACF5\uAD6C\uD560 \uC0C1\uD488 \uC218\uB7C9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", type: "number", required: true, defaultValue: totalQuantity }), _jsx(Input, { id: "ownerQuantity", name: "ownerQuantity", label: "\uB0B4 \uAD6C\uB9E4 \uC218\uB7C9", placeholder: "\uB0B4\uAC00 \uAD6C\uB9E4\uD560 \uC0C1\uD488 \uC218\uB7C9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", type: "number", required: true, defaultValue: ownerQuantity }), _jsxs("section", { className: "flex items-center py-3 text-center rounded-lg shadow-sm justify-evenly bg-zinc-50 ", children: [_jsxs("div", { className: "flex flex-col gap-2.5 min-w-[90px]", children: [_jsx("p", { className: "text-tiny text-default-600", children: "\uB0B4 \uBD80\uB2F4\uC561" }), _jsx("p", { className: "text-tiny text-primary-600", children: ownerQuantity && unitPrice
                                    ? formatNumberWithCommas(unitPrice * ownerQuantity)
                                    : "-" })] }), _jsx("p", { className: "text-tiny text-default-400", children: "+" }), _jsxs("div", { className: "flex flex-col gap-2.5", children: [_jsx("p", { className: "text-tiny text-default-600 min-w-[90px]", children: "\uC2E0\uCCAD\uC790 \uCD1D \uBD80\uB2F4\uC561" }), _jsx("p", { className: "text-tiny text-primary-600", children: totalPrice && unitPrice && ownerQuantity
                                    ? formatNumberWithCommas(totalPrice - unitPrice * ownerQuantity)
                                    : "-" })] }), _jsx("p", { className: "text-tiny text-default-400", children: "=" }), _jsxs("div", { className: "flex flex-col gap-2.5", children: [_jsx("p", { className: "text-tiny text-default-600 min-w-[100px]", children: "\uC0C1\uD488 \uCD1D\uC561" }), _jsxs("p", { className: "text-tiny text-default-600", children: [totalPrice ? formatNumberWithCommas(totalPrice) : "-", " \uC6D0"] })] })] })] }));
}
