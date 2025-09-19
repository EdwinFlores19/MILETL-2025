import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../features/landing/LandingPage';
import LoginPage from '../features/auth/LoginPage';
import SignupPage from '../features/auth/SignupPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import MigrationPage from '../features/migration/MigrationPage';
import ReportingPage from '../features/reporting/ReportingPage';
import PrivateRoute from './PrivateRoute';
import AppLayout from '../components/layout/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    element: (
      <PrivateRoute>
        <AppLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/migration',
        element: <MigrationPage />,
      },
      {
        path: '/reports',
        element: <ReportingPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
