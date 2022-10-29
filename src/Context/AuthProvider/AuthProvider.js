import React, { useState } from "react";
import { createContext } from "react";
import app from "../../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState("");

  // google sign in
  const signInWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // google sign out
  const signOutFromWebsite = () => {
    return signOut(auth);
  };

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password

  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("Current User", currentUser.displayName);
      setUser(currentUser);
      // setUser(false);
    });
    return () => {
      unsubscribe();
    };
  });

  const authInfo = {
    user,
    signInWithGoogle,
    signOutFromWebsite,
    createUser,
    loginWithEmailAndPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
