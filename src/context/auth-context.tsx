"use client"
import { auth } from "@/services/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextData {
  user: User | null | undefined,
  logIn: typeof logIn,
  logOut: typeof logOut,
}

const logIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const logOut = async () => {
  await signOut(auth);
};

export const AuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  logOut,
});

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
   children 
  }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log("I am in useEffect and user is : ", user);
        if (user) {
          console.log("The logged in user state is : ", user);
          setUser(user);
        } else {
          setUser(null)
        }
  
        return () => {
          unsubscribe();
        };
      });
    },[user]);
    return (
      <AuthContext.Provider value={{ user, logIn, logOut }}>
        {children}
      </AuthContext.Provider>
    )
}

export const useAuth = () => {
  return useContext(AuthContext)
}