import React from 'react';

const authContext = React.createContext();

export const useAuth = () => React.useContext();
