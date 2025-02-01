import SuccessIcon from '@/assets/icons/alert/success.svg?react';
import FailIcon from '@/assets/icons/alert/fail.svg?react';
import { useEffect } from 'react';
import useAlertStore from '@/stores/alertStore';

interface AlertProps {
  status: 'success' | 'fail';
  label: string;
}
const statusIcon = {
  success: <SuccessIcon />,
  fail: <FailIcon />,
};

const ALERT_DURATION = 2000;

// 알림창을 띄우고 싶은 곳에서 alertStore.showAlert 호출 후  status, label 전달

export default function Alert({ status, label }: AlertProps) {
  const showAlert = useAlertStore((state) => state.showAlert);
  useEffect(() => {
    setTimeout(() => {
      showAlert(null);
    }, ALERT_DURATION);
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
