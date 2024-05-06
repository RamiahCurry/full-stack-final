import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRoute;