import BaseLayout from '@/layouts/BaseLayout';
import CreatePage from '@/pages/co-buying/create/page';
import ErrorPage from '@/pages/error-page/page';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import PasswordPage from '@/pages/co-buying/password/page';
import DetailPage from '@/pages/co-buying/[id]/page';
import ManagementPage from '@/pages/co-buying/[id]/management/page';
import CoBuyingPage from '@/pages/co-buying/page';
import { useKakaoInit } from '@/hooks/useKakaoInit';
import ProtectedRoute from '@/routes/ProtectedRoute';
import RefPage from '@/pages/ref';
import useAuthStore from '@/stores/authStore';
import { useEffect } from 'react';
import { authService } from '@/api/services/auth';
import ImgExtractPage from '@/pages/co-buying/img-extract/page';
import Splash from '@/components/Splash';

function App() {
  // useKakaoInit(); // 카카오 초기화

  useEffect(() => {
    // 첫로그인 시 리프레시 토큰 갱신
    const refreshTokens = async () => {
      await authService.refreshToken();
    };
    refreshTokens();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Splash />,
      errorElement: <ErrorPage />,
    },
    {
      // 공구글 리스트페이지
      path: '/co-buying',
      children: [
        { index: true, element: <CoBuyingPage /> },
        {
          path: ':id',
          element: <DetailPage />, // 공구글 상세페이지
        },
        {
          path: ':id/password',
          element: <PasswordPage />,
        }, // 관리하기 페이지 들어가기 전 비밀번호
        {
          path: 'img-extract',
          element: <ImgExtractPage />,
        },
        { path: 'create', element: <CreatePage /> }, // 공구글 작성페이지
      ],
    },
    {
      path: '/co-buying/:id/management',
      element: <ProtectedRoute />,
      loader: async ({ params, request }) => {
        const url = new URL(request.url);
        const ownerName = url.searchParams.get('ownerName');
        const accessToken = useAuthStore.getState().token;
        const name = useAuthStore.getState().ownerName;

        if (accessToken && name === ownerName) {
          return null;
        } else {
          return redirect(
            `/co-buying/${params.id}/password?ownerName=${encodeURIComponent(ownerName!)}`
          );
        }
      },
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
