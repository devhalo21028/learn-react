import React from 'react';

export interface LoginData {
  username: string
  password: string
}

export interface AuthContextType {
  token: string,
  login: (data: LoginData) => void,
  logout: () => void
}

export const AuthContext = React.createContext<AuthContextType | null>(null);
