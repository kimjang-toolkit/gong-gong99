import useAlertStore from '@/stores/alertStore';
import useAuthStore from '@/stores/authStore';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { token } = useAuthStore();
  const { showAlert } = useAlertStore();

  if (!token) {
    showAlert({
      status: 'fail',
      label: '인증이 필요합니다.',
    });
    return <Navigate to="/co-buying" replace={true} />;
  }

  return <Outlet />;
}
