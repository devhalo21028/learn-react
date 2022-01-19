import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export function RedirectAuth() {
  const token = useSelector((state) => state.auth?.token);
}
