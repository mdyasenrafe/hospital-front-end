import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvidor";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
