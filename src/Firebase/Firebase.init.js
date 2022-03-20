import { initializeApp } from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./Firebase.config";

// Initialize Firebase
const firebaseAuth = () => initializeApp(firebaseConfig);

export default firebaseAuth;
