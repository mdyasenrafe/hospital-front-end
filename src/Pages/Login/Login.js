import { async } from "@firebase/util";
import React, { useRef, useState } from "react";

// externel packge
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postUserApi } from "../../Api/Index";
import GoogleSignin from "../../Components/GoogleSignin";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  // usefirebase
  const {
    setUser,
    error,
    setError,
    setisLoading,
    handleEmailSignUp,
    updateUserName,
    handleEmailSignIn,
    handleVerify,
  } = UseAuth();

  // get location and navigate
  const location = useLocation();
  const navigate = useNavigate();
  // set url where user from
  const redirectUrl = location?.state?.from?.pathname || "/home";
  // onsubmit function
  const onSubmit = async (data) => {
    if (data?.email) {
      handleEmailSignUp(data.email, data.password)
        .then(async (result) => {
          const response = await postUserApi(data);
          if (response.error === true) {
          } else {
            // success messge
            Swal.fire(" ", "Please verify your email", "success").then(
              async () => {
                // state save
                setUser(result);
                updateUserName(data.name);
                setUser(result);
                setError("");
                handleVerify();
                navigate("/verify");
              }
            );
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        })
        .finally(() => {
          setisLoading(false);
        });
    }
  };

  // log in
  const [login, setLogin] = useState(true);

  const onSubmitLogin = (data) => {
    console.log(data);
    handleEmailSignIn(data.email, data.password)
      .then((result) => {
        setUser(result);
        Swal.fire("Saved!", "Your Aceount successfully login", "success").then(
          () => {
            window.location.href = redirectUrl;
          }
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
      });
  };
  return (
    <>
      <div className="container ">
        <div className="text-center pb-4">
          <h1 className="fw-bold">{login ? "Log in" : "sign up"}</h1>
        </div>
        <div className="text-center">
          {login ? (
            <>
              {/* login */}
              <form
                className="form-text"
                onSubmit={handleSubmit(onSubmitLogin)}
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="login-input"
                  {...register("email", { required: true })}
                  required
                />
                <div></div>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="login-input"
                  {...register("password", { required: true })}
                />
                {errors?.password?.type === "required" && (
                  <h6 className="text-danger">This field is required</h6>
                )}
                <div></div>
                <input className="btn bg-red login-input" type="submit" />
              </form>
              <p className="text-danger fw-bold">{error}</p>
              <p className="pt-4">
                don't Have a Aceout?
                <span
                  className="text-primary cursor-pointor"
                  onClick={() => setLogin(false)}
                >
                  Resigter Now
                </span>
              </p>
            </>
          ) : (
            <>
              <form className="form-text" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="login-input"
                  required={true}
                  {...register("name", { required: true })}
                />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="login-input"
                  {...register("email", { required: true })}
                  required={true}
                />

                <input
                  name="phoneNumber"
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="login-input"
                  {...register("phoneNumber", { required: true })}
                  required={true}
                />

                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="login-input"
                  {...register("password", { required: true })}
                  required={true}
                />

                <input
                  type="password"
                  placeholder="Enter Your Re-type Password"
                  className="login-input"
                  {...register("re_password", {
                    required: true,
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                  required={true}
                />

                <input className="btn bg-red login-input" type="submit" />
                <p className="text-danger">{error}</p>
              </form>
              <p className="pt-4">
                Have a Aceout?
                <span
                  className="text-primary cursor-pointor"
                  onClick={() => setLogin(true)}
                >
                  Log in Now
                </span>
              </p>
            </>
          )}
          <GoogleSignin />
        </div>
      </div>
    </>
  );
};

export default Login;
