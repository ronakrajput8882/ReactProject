import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// A simple PrivateRoute that either renders children routes or redirects to /login
const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
