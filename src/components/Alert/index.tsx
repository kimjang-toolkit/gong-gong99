import SuccessIcon from '@/assets/icons/alert/success.svg?react';
import FailIcon from '@/assets/icons/alert/fail.svg?react';
import { useEffect } from 'react';

interface AlertProps {
  status: 'success' | 'fail';
  label: string;
  setIsOpen: (isOpen: boolean) => void;
}
const statusIcon = {
  success: <SuccessIcon />,
  fail: <FailIcon />,
};

export default function Alert({ status, label, setIsOpen }: AlertProps) {
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  }, []);
  return (
    <div
      className="flex items-center bg-[#3F3F46] rounded-2xl px-3 py-2 whitespace-nowrap text-white text-tiny-bold gap-2 absolute -translate-x-1/2 left-1/2 z-[50] top-16 shadow-sm
    animate-slideIn animate-duration-200 "
    >
      {statusIcon[status]}
      {label}
    </div>
  );
}
