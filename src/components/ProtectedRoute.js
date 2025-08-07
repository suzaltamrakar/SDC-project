import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Only redirect to login if not authenticated and coming from landing page
  if (!isAuthenticated && location.pathname === "/") {
    return <Navigate to="/login" replace />;
  }

  // If not authenticated and not on landing page, redirect to landing page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
