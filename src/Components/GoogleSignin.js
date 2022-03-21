import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";

const GoogleSignin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectUrl = location.state?.from?.pathname || "/home";

  const { handleWithGoogle, setUser, setIsLoading } = UseAuth();

  //   google sign in button
  const handleGoogleSigninBtn = () => {
    handleWithGoogle()
      .then((res) => {
        setUser(res?.user);
        const data = {
          name: res?.user?.displayName,
          email: res?.user?.email,
        };
        axios
          .put("https://hospital30.herokuapp.com/user/updateUser", data)
          .then((res) => {
            window.location.href = redirectUrl;
          });
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <button
        onClick={handleGoogleSigninBtn}
        className="btn bg-red w-100 login-input"
      >
        Sign in with gogle
      </button>
    </div>
  );
};

export default GoogleSignin;
