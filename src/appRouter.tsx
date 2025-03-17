import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import {
  ContactsPage,
  GenderFormPage,
  HomePage,
  LoginPage,
  ProductAdminPage,
  RegisterPage,
} from "./pages";
import { ROUTES } from "./utils/config";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <div>error</div>,
      children: [
        {
          path: ROUTES.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTES.LOGIN,
          element: <LoginPage />,
        },
        {
          path: ROUTES.SIGNUP,
          element: <RegisterPage />,
        },
        {
          path: ROUTES.CONTACTS,
          element: <ContactsPage />,
        },
        {
          path: ROUTES.GENDERS,
          element: <GenderFormPage />,
        },
        {
          path: ROUTES.ADMIN_PRODUCTS,
          element: <ProductAdminPage />,
        },
        {
          path: "*",
          element: <div>404</div>,
        },
      ],
    },
  ]);
