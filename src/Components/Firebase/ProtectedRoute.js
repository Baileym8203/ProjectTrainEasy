import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => { // This is to protect certain routes from being seen if logged in and or not logged in
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/ProjectTrainEasy/SignUp" />;
};

export default ProtectedRoute;