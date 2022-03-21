import React from "react";
// externel packge
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "./LoadingSpiner";
import UseAuth from "../Hooks/UseAuth";
// files

const PrivateRoute = ({ children, ...rest }) => {
  let { user, isLoading } = UseAuth();
  let location = useLocation();
  if (isLoading) {
    return <LoadingSpiner loading={isLoading} height={0} />;
  }
  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
