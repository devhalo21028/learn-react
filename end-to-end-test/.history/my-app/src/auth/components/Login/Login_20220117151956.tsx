/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { TextField } from '@mui/material';

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
          padding: 2rem;
          min-width: 40rem;
        `}
      >
        <h1
          css={css`
            text-align: center;
          `}
        >
          Login
        </h1>
        <form>
          <TextField variant="outlined" label="Username" />
          <TextField variant="outlined" label="Password" />
        </form>
      </div>
    </section>
  );
}

export default Login;
