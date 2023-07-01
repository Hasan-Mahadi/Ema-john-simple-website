import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


import app from '../../Firebase/Firebase.config';





export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const creatrUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);

  }

  const signIn = (email, password) => {
setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logout = () => {
    return signOut(auth);
  }



  //observer user auth state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setloading(false);
    });
    //stop observing while unmounting
    return () => {
      return unsubscribe();
    }
  }, [])

  //    const user = {email:'mahadi'}
  const authInfo = {
    user,
    creatrUser,
    signIn,
    loading,
    logout,
    signOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;