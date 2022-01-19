import { AuthContext } from '../../services/authContext';

export interface AuthProviderProps {
  children: React.ReactElement
}

export default function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
}
