import BaseLayout from '@/layouts/BaseLayout';
import CreatePage from '@/pages/co-buying/create/page';
import ErrorPage from '@/pages/error-page/page';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import PasswordPage from '@/pages/co-buying/password/page';
import DetailPage from '@/pages/co-buying/[id]/page';
import ManagementPage from '@/pages/co-buying/[id]/management/page';
import CoBuyingPage from '@/pages/co-buying/page';
import { useKakaoInit } from '@/hooks/useKakaoInit';
import ProtectedRoute from '@/routes/ProtectedRoute';
import RefPage from '@/pages/ref';

function App() {
  useKakaoInit(); // 카카오 초기화

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/co-buying" replace />,
      errorElement: <ErrorPage />,
    },
    {
      // 공구글 리스트페이지
      path: '/co-buying',
      children: [
        { index: true, element: <CoBuyingPage /> },
        { path: ':id', element: <DetailPage /> }, // 공구글 상세페이지
        { path: ':id/password', element: <PasswordPage /> }, // 관리하기 페이지 들어가기 전 비밀번호
        { path: 'create', element: <CreatePage /> }, // 공구글 작성페이지
      ],
    },
    {
      path: '/co-buying/:id/management',
      element: <ProtectedRoute />,
      children: [
        { index: true, element: <ManagementPage /> }, // 공구글 관리페이지
      ],
    },
    {
      path: '/ref',
      element: <RefPage />,
    },
  ]);

  return (
    <BaseLayout>
      <RouterProvider router={router} />
    </BaseLayout>
  );
}

export default App;
