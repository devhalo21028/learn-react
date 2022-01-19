import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../../../store';
import { useAuth } from '../../hooks/useAuth';

export interface AuthProps {
  children: React.ReactElement
}

function RequireAuth({ children }: AuthProps): React.ReactElement {
  const auth = useSelector<RootState>((state) => state.auth);
  const location = useLocation();

  if (!auth?.token) {
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