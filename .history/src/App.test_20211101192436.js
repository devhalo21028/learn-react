import { render, screen } from '@testing-library/react';
import App from './App';

it('renders initial page', () => {
  render(<App />);
  expect(screen.getByText(/Test App/i)).toBeInTheDocument();
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
});
