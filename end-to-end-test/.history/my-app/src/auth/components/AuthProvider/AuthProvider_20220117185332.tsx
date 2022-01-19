import React, { useState, useMemo } from 'react';
import { AuthContext, LoginData } from '../../services/authContext';

export interface AuthProviderProps {
  children: React.ReactElement
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string>('');

  const login = (data: LoginData) => {
    console.log(data);
  };

  const logout = () => setToken('');

  const value = ;

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
