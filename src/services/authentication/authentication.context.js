import React, { useState, createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  loginRequest,
  createUserRequest,
  signOutRequest,
} from "./authentication.service";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.API_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  // let app, auth;
  // if (!getApps().length) {
  //   app = initializeApp(firebaseConfig);
  //   auth = getAuth(app);
  // }

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    setIsLoading(true);

    try {
      const res = await loginRequest(auth, email, password);
      setUser(res);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.toString());
    }
  };

  const onRegister = async (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not not match");
      return;
    }
    setIsLoading(true);
    try {
      const res = await createUserRequest(auth, email, password);
      setUser(res);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.toString());
    }
  };

  const onLogout = async () => {
    try {
      await signOutRequest(auth);
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
