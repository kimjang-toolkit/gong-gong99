declare function useFormValidation(): {
    formRef: import("react").RefObject<HTMLFormElement | null>;
    isDisabled: boolean;
};
export default useFormValidation;
