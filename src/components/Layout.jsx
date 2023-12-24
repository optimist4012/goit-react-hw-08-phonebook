import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { AppLayout } from './Layout.styled';

export const Layout = () => {
  return (
    <AppLayout>
      <AppBar />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};
