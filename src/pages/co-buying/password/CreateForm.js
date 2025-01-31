import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Input from '@/components/Input';
import { useState } from 'react';
export default function CreateForm() {
    const [password, setPassword] = useState('');
    return (_jsxs(_Fragment, { children: [_jsx(Input, { label: "\uC774\uB984", type: "text", name: "ownerName", variant: "underlined", pattern: '^[a-zA-Z0-9가-힣\\s]{2,8}$', patternErrorMessage: "2~8\uC790\uC758 \uD55C\uAE00, \uC601\uBB38, \uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4", required: true }), _jsx(Input, { name: "ownerPwd", type: "password", label: "\uBE44\uBC00\uBC88\uD638", variant: "underlined", pattern: '^[a-zA-Z0-9가-힣\\s]{6,20}$', patternErrorMessage: "6~20\uC790\uC758 \uC601\uBB38, \uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4", required: true, handleChange: (e) => setPassword(e.target.value) }), _jsx(Input, { type: "password", label: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778", variant: "underlined", patternErrorMessage: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4", required: true, pattern: `^${password}$` })] }));
}
