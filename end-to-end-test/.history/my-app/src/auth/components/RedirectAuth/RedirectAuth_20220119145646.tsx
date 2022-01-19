import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../../store';

export interface RedirectAuthProps {
  component: React.ElementType
  redirectTo?: string
}

const defaultProps = {
  redirectTo: '/',
};

export function RedirectAuth({
  component,
  redirectTo,
}: RedirectAuthProps) {
  const token = useSelector<RootState, string | undefined>((state) => state.auth?.token);

  if (token) {
    return (
      <Navigate
        to={redirectTo as any}
        replace
      />
    );
  }

  const Component = component;

  return <Component />;
}

RedirectAuth.defaultProps = defaultProps;
