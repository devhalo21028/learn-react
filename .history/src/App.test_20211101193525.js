import { render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event'
import App from './App';

describe('App', () => {

  it('renders initial page', () => {
    render(<App />);
    expect(screen.getByText(/Test App/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
  });

  it('renders logged in page', () => {
    render(<App />);

    const usernameInput = screen.getByLabelText('username')
    const passwordInput = screen.getByLabelText('password')
    const submitButton = screen.getByText('Sign In')

    userEvent.type(usernameInput, 'hello')
    userEvent.type(passwordInput, 'world')
  })
})