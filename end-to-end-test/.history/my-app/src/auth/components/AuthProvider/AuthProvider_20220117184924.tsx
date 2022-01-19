import React, { useState } from 'react';
import { AuthContext } from '../../services/authContext';

export interface AuthProviderProps {
  children: React.ReactElement
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={}>
      {children}
    </AuthContext.Provider>
  );
}
