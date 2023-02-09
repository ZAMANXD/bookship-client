import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import React, { useEffect, useState } from "react";
import app, {  } from "../firebase/firebase.config";

export const AuthContext = React.createContext<any | null>(null)

const auth:any = getAuth(app)
const provider = new GoogleAuthProvider();


const AuthProvider= (props:any)=>{
    const [user, setUser] = useState<any | null>(null);
    const [loading, setLoading] = useState<Boolean>(true);

    // Create user email & password
    const signUp = (email:string, passwor:string) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, passwor);
    };
  
    // login email & password
    const login = (email:string, passwor:string) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, passwor);
    };
  
    //Update Name
    const nameUpdate = (name:string,photo:string) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };
  
    // Create user with google
    const googlLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    };
  
    // send a email for reset password
    const forgatePassword = (email:string) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
    };
  
    // logOut user
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const authInfo = {
      user,
      loading,
      login,
      signUp,
      logOut,
      nameUpdate,
      googlLogin,
      forgatePassword,
    };
    return (
        <AuthContext.Provider value={authInfo}>{props.children}</AuthContext.Provider>
      );
}

export default AuthProvider;