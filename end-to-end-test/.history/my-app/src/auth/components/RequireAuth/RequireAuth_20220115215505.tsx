import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export interface AuthProps {
  children: React.ReactNode
}

const RequireAuth = ({ children }: AuthProps) => {
  const auth = useAuth();

  if (auth?.token) {
    return <Nav
  }

  return children;
};

export default RequireAuth;
