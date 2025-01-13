import { useEffect, useRef, useState } from 'react';

function useFormValidation() {
  const [isDisabled, setIsDisabled] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const form = formRef.current;
    if (form?.checkValidity()) {
      setIsDisabled(false);
    }
  }, []);

  useEffect(() => {
    const form = formRef.current;
    if (form) {
      const handleFormChange = () => {
        setIsDisabled(!form.checkValidity());
      };

      form.addEventListener('input', handleFormChange);
      return () => {
        form.removeEventListener('input', handleFormChange);
      };
    }
  }, [formRef]);

  return { formRef, isDisabled };
}

export default useFormValidation;
