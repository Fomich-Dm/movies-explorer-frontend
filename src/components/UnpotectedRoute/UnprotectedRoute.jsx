import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UnprotectedRoute = ({ loggedIn }) => {
  return !loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default UnprotectedRoute;
