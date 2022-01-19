import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText(/Test App/i)).toBeInTheDocument();
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
});
