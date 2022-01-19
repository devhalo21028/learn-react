/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Paper } from '@mui/material';
import { authApi } from '../../services/authApi';
import LoginForm, { LoginFormData } from './LoginForm';

export default function Login() {
  const [login, { isLoading: isSubmittingLogin }] = authApi.useLoginMutation();

  const handleFormSubmit = async (data: LoginFormData) => {
    const resutl = await login(data);

    console.log(result);
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
        <p>
          { isSubmittingLogin ? 'submitting' : 'not submitting' }
        </p>
        <LoginForm
          onSubmit={handleFormSubmit}
          isSubmitting={isSubmittingLogin}
        />
      </Paper>
    </section>
  );
}
