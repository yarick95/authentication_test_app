import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    OAuthProvider,
    GoogleAuthProvider
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import PropTypes from "prop-types";
  import auth from "../../storage/firebase.js";
  
  export const AuthContext = createContext(null);
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const handleGoogleLogin = () => {
      signInWithPopup(auth, new GoogleAuthProvider()).then((data) => {
        //setIsAuthenticated(true);  
      });
    };
  
    const handleMicrosoftLogin = () => {
      signInWithPopup(auth, new OAuthProvider('microsoft.com')).then((data) => {
        //setIsAuthenticated(true); 
      });
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const authValue = {
      createUser,
      user,
      loginUser,
      handleGoogleLogin,
      handleMicrosoftLogin,
      logOut,
      loading,
    };
  
    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
  };
  
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default AuthProvider;