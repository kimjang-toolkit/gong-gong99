import BaseLayout from '@/components/Layouts/BaseLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello World</div>,
    },
  ]);

  return (
    <BaseLayout>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </BaseLayout>
  );
}

export default App;
