import React from 'react';

export interface AuthContext {
  token: string
}

export const authContext = React.createContext<AuthContext | null>(null);

export const useAuth = () => React.useContext();
