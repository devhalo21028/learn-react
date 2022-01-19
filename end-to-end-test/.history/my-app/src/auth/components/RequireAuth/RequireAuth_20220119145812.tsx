import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../../../store';

export interface AuthProps {
  component: React.ElementType
}

export function RequireAuth({ component }: AuthProps): React.ReactElement {
  const token = useSelector<RootState, string>((state) => state.auth.token);
  const location = useLocation();

  if (!token) {
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
