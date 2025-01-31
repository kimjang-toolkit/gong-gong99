interface ApplyBottomSheetProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    data: {
        remainQuantity: number;
        unitPrice: number;
    };
}
export default function QuantityBottomSheet({ isOpen, setIsOpen, data, }: ApplyBottomSheetProps): import("react/jsx-runtime").JSX.Element;
export {};
