/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import LoginForm, { LoginFormData } from './LoginForm';

export default function Login() {
  const handleFormSubmit = (data: LoginFormData) => {
    console.log(data);
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
      <div
        css={css`
          background: #ddd;
          padding: 4rem;
          min-width: 25rem;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-bottom: 4rem;
            color: #333;
          `}
        >
          Login
        </h1>
        <LoginForm onSubmit={handleFormSubmit} />
      </div>
    </section>
  );
}
