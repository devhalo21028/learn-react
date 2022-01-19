/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Paper } from '@mui/material';
// import { useDispatch } from 'react-redux';
import { authApi } from '../../services/authApi';
// import { saveLogin } from '../../services/authSlice';
import LoginForm, { LoginFormData } from './LoginForm';

export default function Login() {
  // const dispatch = useDispatch();
  const [login, result] = authApi.useLoginMutation();

  const handleFormSubmit = (data: LoginFormData) => {
    login(data);
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
          JSON.stringify(result, null, 4)
        </p>
        <LoginForm
          onSubmit={handleFormSubmit}
          isSubmitting={result.isLoading}
        />
      </Paper>
    </section>
  );
}
