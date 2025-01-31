import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function StepperButton({ maxValue, value, onChange, }) {
    const handleIncrease = (e) => {
        e.preventDefault();
        if (value < maxValue) {
            onChange(value + 1);
        }
    };
    const handleDecrease = (e) => {
        e.preventDefault();
        if (value > 0) {
            onChange(value - 1);
        }
    };
    return (_jsxs("div", { className: "flex items-center justify-center w-[86px] border border-default-300 rounded-sm *:px-1 *:py-1 *:w-full *:text-caption *:text-default-700", children: [_jsx("button", { onClick: handleDecrease, children: "-" }), _jsx("input", { className: "text-center border-x border-default-300", type: "number", value: value, onChange: (e) => {
                    onChange(Number(e.target.value));
                } }), _jsx("button", { onClick: handleIncrease, children: "+" })] }));
}
