import { AuthContext } from '../services/authContext';

export const useAuth = () => React.useContext(AuthContext);
