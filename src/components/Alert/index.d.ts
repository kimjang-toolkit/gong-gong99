interface AlertProps {
    status: 'success' | 'fail';
    label: string;
    setIsOpen: (isOpen: boolean) => void;
}
export default function Alert({ status, label, setIsOpen }: AlertProps): import("react/jsx-runtime").JSX.Element;
export {};
