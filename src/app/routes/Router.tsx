import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from '@/pages/home';
import ItemsPage from '@/pages/items';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/items',
    Component: ItemsPage,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
