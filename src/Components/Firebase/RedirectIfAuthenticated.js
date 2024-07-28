import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const RedirectIfAuthenticated = () => { // This is to redirect users when they have been authenticated
  const { currentUser } = useAuth();

  return !currentUser ? <Outlet /> : <Navigate to="/creator" />;
};

export default RedirectIfAuthenticated;
