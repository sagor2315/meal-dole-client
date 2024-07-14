import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState("");

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || users?.email;
      const loginUser = { email: userEmail };
      setLoading(false);
      setUsers(currentUser);
      console.log("Observing user:", currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loginUser, {
            withCredentials: true,
          })
          .then((res) => {
            const data = res.data;
            console.log(data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", loginUser, {
            withCredentials: true,
          })
          .then((res) => {
            const data = res.data;
            console.log(data);
          });
      }
    });

    () => {
      return unSubscribe;
    };
  }, [users?.email]);

  const authInfo = {
    loading,
    users,
    createUser,
    signInUser,
    userWithGoogle,
    LogOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
