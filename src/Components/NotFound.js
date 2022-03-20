import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <img className="w-100" src="https://i.ibb.co/qrZYBpz/error.png" alt="" />
      <div>
        <Link to="/home">
          <button className="btn btn-danger">Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
