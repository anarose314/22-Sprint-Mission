import { createBrowserRouter, RouterProvider } from 'react-router';
import HomeLayout from '@/shared/components/layout/home-layout';
import MainLayout from '@/shared/components/layout/main-layout';
import HomePage from '@/pages/home';
import ItemsPage from '@/pages/items';

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/items',
        Component: ItemsPage,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
