"use client";
import {
  AuthActionProps,
  AuthContextProps,
  AuthProps,
} from "@/interfaces/auth-props";
import React, { createContext, useReducer } from "react";

// Definition: Create Auth Context
export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

// Definition: Auth Reducer to manage state
const AuthReducer = (state: AuthProps, action: AuthActionProps) => {
  switch (action.type) {
    case "LOGIN":
      return {
        token: action.payload?.token || null,
        user: action.payload?.user || null,
      };
    case "LOGOUT":
      return {
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

// Definition: AuthContextProvider component
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState: AuthProps = {
    token: null,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  console.log("AuthContext State: ", state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
