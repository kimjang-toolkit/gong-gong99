import BaseLayout from '@/components/Layouts/BaseLayout';
import CreatePage from '@/pages/create';
import ErrorPage from '@/pages/error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello World</div>,
      errorElement: <ErrorPage />,
    },
    { path: '/create', element: <CreatePage /> },
  ]);

  return (
    <BaseLayout>
      <RouterProvider router={router} />
    </BaseLayout>
  );
}

export default App;
