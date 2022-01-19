/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Paper, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { authApi } from '../../services/authApi';
import { saveLogin } from '../../services/authSlice';
import LoginForm, { LoginFormData } from './LoginForm';

export default function Login() {
  const dispatch = useDispatch();
  const [login, { error, isLoading: isSubmittingLogin }] = authApi.useLoginMutation();

  const handleFormSubmit = async (data: LoginFormData) => {
    const auth = await login(data).unwrap();

    dispatch(saveLogin(auth));
  };

  const getErrorMessage = (err: any) => err?.data?.message || err?.error;

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
        { !error && (
          <Alert
            severity="error"
            css={css`
              margin-bottom: 2rem;
            `}
          >
            {getErrorMessage(error)}
          </Alert>
        )}
        <LoginForm
          onSubmit={handleFormSubmit}
          isSubmitting={isSubmittingLogin}
        />
      </Paper>
    </section>
  );
}