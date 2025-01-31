import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Input from '@/components/Input/index';
import useFormStore from '@/stores/coBuyingFormStore';
function CommonForm() {
    const { formData } = useFormStore();
    const { productName, totalPrice, productLink, deadline } = formData;
    return (_jsxs(_Fragment, { children: [_jsx(Input, { id: "productName", name: "productName", label: "\uC0C1\uD488 \uC774\uB984", placeholder: "\uC0C1\uD488 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694. (5~100\uC790)", pattern: '^[a-zA-Z0-9가-힣\\s]{5,100}$', required: true, patternErrorMessage: "5~100\uC790\uC758 \uD55C\uAE00, \uC601\uBB38, \uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4", defaultValue: productName }), _jsx(Input, { id: "totalPrice", name: "totalPrice", label: "\uC0C1\uD488 \uCD1D\uC561", placeholder: "\uC0C1\uD488 \uCD1D \uAC00\uACA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", type: "number", required: true, defaultValue: totalPrice }), _jsx(Input, { id: "productLink", name: "productLink", label: "\uC0C1\uD488 \uB9C1\uD06C (\uC120\uD0DD)", placeholder: "\uACF5\uAD6C\uD560 \uC0C1\uD488 \uAD6C\uB9E4\uB9C1\uD06C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.", pattern: "^$|^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$", patternErrorMessage: "\uC62C\uBC14\uB978 URL \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4", defaultValue: productLink }), _jsx(Input, { id: "deadline", name: "deadline", label: "\uC2E0\uCCAD \uB9C8\uAC10\uC77C", type: "date", defaultValue: deadline, 
                // leftIcon={
                //   <div className="mb-1">
                //     <CalandarIcon width={15} height={15} fill="#a1a1aa" />
                //   </div>
                // }
                min: new Date().toISOString().split('T')[0] })] }));
}
export default CommonForm;
