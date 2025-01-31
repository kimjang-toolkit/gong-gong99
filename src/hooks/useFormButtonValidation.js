import { useEffect, useRef, useState } from 'react';
function useFormValidation() {
    const [isDisabled, setIsDisabled] = useState(true);
    const formRef = useRef(null);
    useEffect(() => {
        const form = formRef.current;
        if (!form)
            return;
        const handleFormChange = () => {
            setIsDisabled(!form.checkValidity());
        };
        // 초기 상태 설정
        handleFormChange();
        form.addEventListener('change', handleFormChange); // 'change' 이벤트로 변경
        return () => {
            form.removeEventListener('change', handleFormChange);
        };
    }, [formRef]);
    return { formRef, isDisabled };
}
export default useFormValidation;
