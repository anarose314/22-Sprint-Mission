import { Outlet, ScrollRestoration } from 'react-router';
import Header from '@/shared/components/layout/header';

export default function MainLayout() {
  return (
    <>
      <Header variant="main" />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
