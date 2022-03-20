import React, { createContext } from "react";
import ContextData from "../Hooks/ContextData";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const allContext = ContextData();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
