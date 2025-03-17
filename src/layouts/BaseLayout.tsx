import { Footer, Header } from '@/components/widgets';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};
