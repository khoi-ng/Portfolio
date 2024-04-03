import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

// import DemoPage from './pages/DemoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  // {
  //   path: '/demo/:demoId',
  //   element: <DemoPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
