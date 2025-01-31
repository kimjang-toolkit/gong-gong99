interface ButtonProps {
    label: string;
    size: 'small' | 'large';
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
}
export default function Button({ label, size, onClick, className, type, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
