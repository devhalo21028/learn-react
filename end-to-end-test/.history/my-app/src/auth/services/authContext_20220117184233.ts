import React from 'react';

export interface AuthContextType {
  token: string
}

export const AuthContext = React.createContext<AuthContextType | null>(null);
