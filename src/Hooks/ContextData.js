import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPhoneNumber,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import Swal from "sweetalert2";

import firebaseAuth from "../Firebase/Firebase.init";

firebaseAuth();

const ContextData = () => {
  const auth = getAuth();
  // useState
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [isLoading, setisLoading] = useState(true);

  const handleWithGoogle = () => {
    const gogleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, gogleProvider);
  };

  // handle email sign in
  const handleEmailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleEmailSignUp = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // verify
  const handleVerify = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  // update email and password  call
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
  // observe hook
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setisLoading(false);
    });
  }, [user]);
  // sign out
  const handleSignOUt = () => {
    Swal.fire({
      title: "Do you want Logout?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "logout",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            setUser();
          })
          .catch((error) => {
            // An error happened.
          });
        Swal.fire(" ", "logout succesfull", "success").then(() => {});
      }
    });
  };
  return {
    user,
    setUser,
    error,
    setError,
    isLoading,
    setisLoading,
    handleEmailSignUp,
    handleEmailSignIn,
    handleSignOUt,
    updateUserName,
    handleVerify,
    handleWithGoogle,
  };
};

export default ContextData;
