interface BottomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: (e: any) => void;
}
declare function BottomButton({ label, onClick, ...props }: BottomButtonProps): import("react/jsx-runtime").JSX.Element;
export default BottomButton;
