import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useUserStore from '../store/userStore';

const PrivateRoute = ({ children }) => {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
