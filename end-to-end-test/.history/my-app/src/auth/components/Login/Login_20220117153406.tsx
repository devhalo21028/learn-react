/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import LoginForm from './LoginForm';

function Login() {
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
          padding: 4rem 6rem;
          min-width: 25rem;
        `}
      >
        <h1
          css={css`
            text-align: center;
          `}
        >
          Login
        </h1>
        <LoginForm />
      </div>
    </section>
  );
}

export default Login;
