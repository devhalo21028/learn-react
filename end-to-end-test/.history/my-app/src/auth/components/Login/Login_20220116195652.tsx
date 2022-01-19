/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

function Login() {
  return (
    <section
      css={css`
        background: #ccc;
        display: flex;
        flex: 1;
      `}
    >
      <div css={css`
          background: #ddd;
        `}
      >
        <h1>Login</h1>
      </div>
    </section>
  );
}

export default Login;
