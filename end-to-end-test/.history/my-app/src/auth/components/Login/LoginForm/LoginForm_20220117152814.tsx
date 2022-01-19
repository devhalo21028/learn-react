/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';
import { Button, TextField } from '@mui/material';

export default function LoginForm() {
  const [buttonDisabled, setButtonDisabled] = useState();

  return (
    <form
      css={css`
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
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
