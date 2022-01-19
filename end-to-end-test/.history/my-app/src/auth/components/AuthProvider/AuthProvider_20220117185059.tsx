import React, { useState } from 'react';
import { AuthContext, LoginData } from '../../services/authContext';

export interface AuthProviderProps {
  children: React.ReactElement
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string>('');

  const login = (data: LoginData) => {

  };

  const logout = () => setToken('');

  const value = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
