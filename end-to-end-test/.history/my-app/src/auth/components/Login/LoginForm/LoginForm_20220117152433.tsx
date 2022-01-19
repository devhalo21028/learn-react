/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Button, TextField } from '@mui/material';

export default function LoginForm() {
  return (
    <form
      css={css`
            display: flex;
            flex-direction: column;
          `}
    >
      <TextField
        variant="outlined"
        label="Username"
      />
      <TextField
        type="password"
        variant="outlined"
        label="Password"
      />
      <Button
        variant="contained"
        size="large"
      >
        Login
      </Button>
    </form>
  );
}
