import { Footer, Header } from "@/components/widgets";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};
