import useModalStore from '@/stores/modalStore';

interface ModalProps {
  title: string;
  description: string;
  onConfirm: () => void;
  confirmText: string;
  cancelText?: string;
}

const Modal = ({
  title,
  description,
  onConfirm,
  confirmText,
  cancelText = '취소하기',
}: ModalProps) => {
  const { closeModal } = useModalStore();
  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  return (
    <div className="bg-white rounded-xl w-[186px] ">
      <div className="flex flex-col items-center justify-center gap-2 p-6">
        <h2 className="text-black typo-caption-bold">{title}</h2>
        <p className="text-center text-default-900 typo-caption">
          {description}
        </p>
      </div>
      <div className="relative flex border-t border-layout-divider">
        <button
          type="button"
          onClick={() => {
            closeModal();
          }}
          className="flex-1 h-10 px-4 text-default-700 typo-caption"
        >
          {cancelText}
        </button>
        <div className="absolute inset-y-0 w-px left-1/2 bg-layout-divider" />
        <button
          type="button"
          onClick={handleConfirm}
          className="flex-1 h-10 px-4 typo-caption text-primary-500"
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
