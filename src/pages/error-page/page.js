import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouteError } from 'react-router-dom';
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (_jsxs("div", { id: "error-page", children: [_jsx("h1", { children: "Oops!" }), _jsx("p", { children: "\uC5D0\uB7EC\uD398\uC774\uC9C0" }), _jsx("p", { children: _jsx("i", { children: error.statusText || error.message }) })] }));
}
