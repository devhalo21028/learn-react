import React from 'react';
import { AuthContext } from '../services/authContext';

// eslint-disable-next-line import/prefer-default-export
export const useAuth = () => React.useContext(AuthContext);
