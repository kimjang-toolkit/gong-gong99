import BaseLayout from '@/components/Layouts/BaseLayout';
import CreatePage from '@/pages/co-buying/create';
import DetailPage from '@/pages/co-buying/detail';
import ManagementPage from '@/pages/co-buying/management';
import PasswordPage from '@/pages/co-buying/password';
import ErrorPage from '@/pages/error-page';
import HomePage from '@/pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello World</div>,
      errorElement: <ErrorPage />,
      // children: [
      //   {
      //     index: true,
      //     loader: async () => {
      //       const cookies = new Cookies()
      //       const refreshToken = cookies.get('refreshToken')
      //       if (refreshToken) {
      //         try {
      //           const response = await service.postReissueToken()
      //           const { accessToken, refreshToken: newRefreshToken, storeIds } = response
      //           adminStore.getState().setAuth({ accessToken, refreshToken: newRefreshToken, storeIds })
      //           return redirect(`/work-status/${storeIds[0]}`)
      //         } catch (error) {
      //           console.error('자동 로그인 실패:', error)
      //         }
      //       }
      //       return redirect('/login')
      //     },
      //     element: <Navigate to="/login" replace />,
      //   },
    },
    {
      // 공구글 리스트페이지
      path: '/co-buying',
      children: [
        { index: true, element: <HomePage /> },
        { path: ':id', element: <DetailPage /> }, // 공구글 상세페이지
        { path: ':id/management', element: <ManagementPage /> }, // 공구글 관리페이지 , 추후 loader 추가 또는 private router씌우기
        { path: ':id/password', element: <PasswordPage /> },
        { path: 'create', element: <CreatePage /> }, // 공구글 작성페이지
        // 비밀번호를 작성하는 페이지를 라우터로 관리해야할까? 상태관리는?
      ],
    },
  ]);

  return (
    <BaseLayout>
      <RouterProvider router={router} />
    </BaseLayout>
  );
}

export default App;
