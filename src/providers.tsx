import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.Fragment>
    <RouterProvider router={appRouter()} />
  </React.Fragment>
);
