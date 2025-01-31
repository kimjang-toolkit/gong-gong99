interface ApplyBottomSheetProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    data: {
        quantity: number;
        totalPrice: number;
    };
}
export default function AttendeeBottomSheet({ isOpen, setIsOpen, data, }: ApplyBottomSheetProps): import("react/jsx-runtime").JSX.Element;
export {};
