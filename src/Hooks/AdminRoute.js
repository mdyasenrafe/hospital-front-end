import React from "react";
import { Spinner } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "../Components/LoadingSpiner";
import UseGetUser from "./GetUser";
import UseAuth from "./UseAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading } = UseAuth();
  const { getUser, loading } = UseGetUser();
  const location = useLocation();
  if (isLoading == true || loading == true) {
    return <Spinner animation="grow" />;
  }
  if (getUser?.role == "user") {
    return (
      <div>
        <h1>You Are Not Admin Pls Go Back To Your dashboard</h1>
        <Link to="/dashboard">
          <button className="btn bg-red">Dashboard</button>
        </Link>
      </div>
    );
  }
  if (user.email && getUser?.role == "admin") {
    return children;
  }
  return (
    <div>
      <h1>You Are Not Admin Pls Go Back To Your dashboard</h1>
      <Link to="/dashboard">
        <button className="btn bg-red">dashboarad</button>
      </Link>
    </div>
  );
};

export default AdminRoute;
