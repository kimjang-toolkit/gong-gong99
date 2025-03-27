import Alert from '@/components/Alert';
import useAlertStore from '@/stores/alertStore';

// 전역상태를 가져와 단순히 렌더해주는 역할. 배열로 모달이 쌓이는 맥락에 맞게 중첩모달을 구현할 수 있음.
function AlertProvider() {
  const alert = useAlertStore((state) => state.alert);

  if (!alert) return null;
  return <Alert status={alert.status} label={alert.label} />;
}

export default AlertProvider;
