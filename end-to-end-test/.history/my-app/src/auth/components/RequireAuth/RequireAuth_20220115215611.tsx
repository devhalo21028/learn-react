import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export interface AuthProps {
  children: React.ReactNode
}

function RequireAuth({ children }: AuthProps) {
  const auth = useAuth();

  if (auth?.token) {
    return (
      <Navigate
        to="/login"
      />
    );
  }

  return children;
}

export default RequireAuth;
