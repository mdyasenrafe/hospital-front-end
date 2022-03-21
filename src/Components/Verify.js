import React from "react";
import UseAuth from "../Hooks/UseAuth";

const Verify = () => {
  const { user } = UseAuth();
  console.log(user?.emailVerified);
  return (
    <div className="shadow-lg p-4 container">
      {user?.emailVerified ? (
        <h1>Already Verified</h1>
      ) : (
        <>
          <h1>Please Verify Your Email</h1>
          <p>
            check your <span className="text-primary">{user?.email}</span>{" "}
            email. if you dont't find in your inbox.then please check also in
            spam folder
          </p>
        </>
      )}
    </div>
  );
};

export default Verify;
