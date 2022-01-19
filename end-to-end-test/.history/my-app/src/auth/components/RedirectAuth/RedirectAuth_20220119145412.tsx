import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../../store';

export function RedirectAuth() {
  const token = useSelector<RootState, string | undefined>((state) => state.auth?.token);

  if (token) {
    return <Navigate to="/" replace />;
  }
}
