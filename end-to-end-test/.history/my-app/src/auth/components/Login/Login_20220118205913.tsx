/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Paper, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { authApi } from '../../services/authApi';
import { saveLogin } from '../../services/authSlice';
import LoginForm, { LoginFormData } from './LoginForm';

export default function Login() {
  const dispatch = useDispatch();
  const [login, { error, isLoading }] = authApi.useLoginMutation();

  const handleFormSubmit = async (data: LoginFormData) => {
    try {
      const auth = await login(data).unwrap();

      dispatch(saveLogin(auth));
    } catch (err) {
      console.log(err);
    }
  };

  const getErrorMessage = (): string => {
    if (error && 'data' in error) {
      return error.data.message;
    }

    return '';
  };

  return (
    <section
      css={css`
        background: #ccc;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
      `}
    >
      <Paper
        css={css`
          background: #ddd;
          padding: 4rem;
          min-width: 25rem;
          border-radius: 10px;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin: 0 0 4rem 0;
            color: #222;
          `}
        >
          Login
        </h1>
        <pre>
          {JSON.stringify(loginState, null, 4)}
        </pre>
        { error && (
          <Alert severity="error">
            {getErrorMessage()}
          </Alert>
        )}
        <LoginForm
          onSubmit={handleFormSubmit}
          isSubmitting={isLoading}
        />
      </Paper>
    </section>
  );
}