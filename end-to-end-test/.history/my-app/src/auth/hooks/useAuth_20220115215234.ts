import React from 'react';

export interface AuthContext {
  token: string
}

export const authContext = React.createContext<Optional<AuthContext>>(null);

export const useAuth = () => React.useContext();
