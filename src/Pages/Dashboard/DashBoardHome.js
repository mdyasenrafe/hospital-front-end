import React from "react";
import LoadingSpiner from "../../Components/LoadingSpiner";
import UseGetUser from "../../Hooks/GetUser";

const DashBoardHome = () => {
  const { getUser, loading } = UseGetUser();
  return (
    <div>
      {loading ? (
        <LoadingSpiner loading={true} />
      ) : (
        <h1 className="text-black fw-bold">
          Welcome Back <span className="text-red">{getUser?.name}</span> to{" "}
          {getUser?.role} Dashboard
        </h1>
      )}
    </div>
  );
};

export default DashBoardHome;
