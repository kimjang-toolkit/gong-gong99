import SuccessIcon from '@/assets/icons/alert/success.svg?react';
import FailIcon from '@/assets/icons/alert/fail.svg?react';

interface AlertProps {
  status: 'success' | 'fail';
  label: string;
}
const statusIcon = {
  success: <SuccessIcon />,
  fail: <FailIcon />,
};

export default function Alert({ status, label }: AlertProps) {
  return (
    <div className="flex items-center bg-[#3F3F46] rounded-2xl px-3 py-2 whitespace-nowrap text-white text-tiny-bold gap-2 absolute -translate-x-1/2 left-1/2 bottom-20 shadow-sm ">
      {statusIcon[status]}
      {label}
    </div>
  );
}
