import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export function RedirectAuth() {
  const token = useSelector<RootState, string | undefined>((state) => state.auth?.token);
}