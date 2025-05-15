import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { ROUTES } from "./utils/config";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const GenderFormPage = lazy(() => import("./pages/GenderFormPage"));
const SimpleInputsPage = lazy(() => import("./pages/SimpleInputsPage"));
const ProductAdminPage = lazy(() => import("./pages/ProductAdminPage"));

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <div>error</div>,
      children: [
        {
          path: ROUTES.HOME,
          element: <HomePage />,
          id: "home",
        },
        {
          path: ROUTES.LOGIN,
          element: <LoginPage />,
          id: "login",
        },
        {
          path: ROUTES.SIGNUP,
          element: <RegisterPage />,
          id: "signup",
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
          path: ROUTES.SIMPLE_INPUTS,
          element: <SimpleInputsPage />,
          id: "simpleInputs",
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
