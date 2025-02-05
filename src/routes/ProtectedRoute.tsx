import useAuth from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/cobuying" />;
  }

  return <Outlet />;
}
