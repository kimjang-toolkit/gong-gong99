import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export default function Button({ label, size, onClick, className, type, }) {
    return (_jsx("button", { type: type, className: cn('rounded-[10px] bg-primary-300', size === 'small'
            ? 'px-4 py-2 text-caption-bold'
            : 'px-10 py-3 text-body-bold', className), onClick: onClick, children: _jsx("p", { className: "text-white", children: label }) }));
}
