import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export interface AuthProps {
  children: React.ReactNode
}

function RequireAuth({ children }: AuthProps): React.ReactElement {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.token) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return children;
}

export default RequireAuth;
