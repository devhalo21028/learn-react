import React from 'react';

export interface AuthContext {
  token: string
}

export const authContext = React.createContext<AuthContext>({});

export const useAuth = () => React.useContext();
