import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../../store';

export interface AuthProps {
  component?: React.ElementType
  redirectTo?: string
}

const defaultProps = {
  redirectTo: '/',
};

export function RedirectAuth() {
  const token = useSelector<RootState, string | undefined>((state) => state.auth?.token);

  if (token) {
    return (
      <Navigate
        to={redirectTo}
        replace
      />
    );
  }
}

RedirectAuth.defaultProps = defaultProps;
