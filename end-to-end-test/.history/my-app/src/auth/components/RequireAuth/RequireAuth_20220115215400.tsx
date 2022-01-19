import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export interface AuthProps {
  children: React.ReactNode
}

const RequireAuth = ({ children }: AuthProps) => {
  const auth = useAuth();
};

export default RequireAuth;
