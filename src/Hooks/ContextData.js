import { useState, useEffect } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import Swal from "sweetalert2";
import firebaseAuth from "../Firebase/Firebase.init";

firebaseAuth();

const ContextData = () => {
  const auth = getAuth();

  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState();

  const generatorRecatchpa = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      auth
    );
  };

  const handleSignUp = (number) => {
    generatorRecatchpa();
    let appVerifier = window.recaptchaVerifier;

    return signInWithPhoneNumber(auth, number, appVerifier);
  };

  const handleVerify = (otp) => {
    console.log(otp);
    let confirmationResult = window.confirmationResult;
    return confirmationResult?.confirm(otp);
  };

  // handle email
  const handleEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // send verification email
  const handleVerifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((res) => {});
  };

  // observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) =>
          localStorage.setItem("access_token", idToken)
        );

        const lastSignTime = user?.metadata?.lastSignInTime;

        const dateOne = lastSignTime;
        const dateOneObj = new Date(dateOne);
        const dateTwoObj = new Date();
        const milliseconds = Math.abs(dateTwoObj - dateOneObj);
        const hours = milliseconds / 36e5;

        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // updated user name
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // log out function
  const logOut = () => {
    Swal.fire({
      title: "Are you sure want to logout?",
      text: "Your class won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ed174a",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            setUser({});
            setError("");
            window.location.reload(true);
            localStorage.clear();
            sessionStorage.clear();
            Swal.fire(" ", "Your Aceount has been Log out now", "success");
          })
          .catch((error) => {})
          .finally(() => setIsLoading(false));
      }
    });
  };

  return {
    handleSignUp,
    handleVerify,
    user,
    setUser,
    setError,
    error,
    updateUserName,
    isLoading,
    logOut,
    handleEmail,
    handleVerifyEmail,
    profileData,
    setProfileData,
  };
};

export default ContextData;
