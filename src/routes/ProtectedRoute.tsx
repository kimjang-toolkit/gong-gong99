import useAuthStore from '@/stores/authStore';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { token } = useAuthStore();

  if (!token) {
    return <Navigate to="/co-buying" replace={true} />;
  }

  return <Outlet />;
}
