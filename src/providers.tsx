import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

ReactDOM.createRoot(document.getElementById("root")! as HTMLElement).render(
  <React.Fragment>
    <Suspense fallback={<div>Loading page...</div>}>
      <RouterProvider router={appRouter()} />
    </Suspense>
  </React.Fragment>,
);
