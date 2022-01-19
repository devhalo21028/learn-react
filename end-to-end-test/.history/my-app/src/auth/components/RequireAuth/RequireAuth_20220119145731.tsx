import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../../../store';
import { AuthState } from '../../services/authSlice';

export interface AuthProps {
  component: React.ElementType
}

export function RequireAuth({ component }: AuthProps): React.ReactElement {
  const auth = useSelector<RootState, AuthState>((state) => state.auth);
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

  const Component = component;

  return <Component />;
}
