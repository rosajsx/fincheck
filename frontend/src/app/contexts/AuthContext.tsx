/* eslint-disable react-refresh/only-export-components */
import { createContext, type PropsWithChildren } from "react";

interface AuthContextValue {
  signedIn: boolean;
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <AuthContext.Provider value={{ signedIn: false }}>
      {children}
    </AuthContext.Provider>
  );
}
