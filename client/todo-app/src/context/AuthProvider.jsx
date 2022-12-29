import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  //   Create User
  const createUser = (email, pass) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //   Login User
  const logIn = (email, pass) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //   Logout User
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  //   Auth Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // set only when userName is updated or user is not there
      if (currentUser === null || currentUser.email) {
        setUser(currentUser);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const providerValue = {
    user,
    isLoading,
    createUser,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
