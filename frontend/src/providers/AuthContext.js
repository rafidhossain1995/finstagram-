import React, {createContext, useEffect, useState} from "react"
import {getFirebaseIdToken} from "../utility/firebaseFunction"
import firebase from "../firebase"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  const updateUser = (user) => {
    if (user) {
      const { email, id } = user;
      const lastLogin = user.metadata.lastLogin;
      setCurrentUser({ email, lastLogin, id: id });
      getFirebaseIdToken().then((token) => {
        setToken(token);
        setLoading(false);
      });
    } else {
      setCurrentUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div>
          ...loading
      </div>
    );
  }
  return (
    <AuthContext.Provider value={{ currentUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;