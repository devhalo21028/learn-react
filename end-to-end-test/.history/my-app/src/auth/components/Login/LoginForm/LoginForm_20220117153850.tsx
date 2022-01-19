/** @jsxImportSource @emotion/react */

import { SyntheticEvent, useState } from 'react';
import { css } from '@emotion/react';
import { Button, TextField } from '@mui/material';

export interface LoginFormState {
  username: string
  password: string
  buttonDisabled: boolean
}

export default function LoginForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formState, setFormState] = useState<LoginFormState>({
    username: '',
    password: '',
    buttonDisabled: true,
  });

  const onFieldChange = (e: SyntheticEvent) => {
    console.log(e);
  };

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
        onChange={onFieldChange}
      />
      <TextField
        type="password"
        variant="outlined"
        label="Password"
      />
      <Button
        disabled={formState.buttonDisabled}
        variant="contained"
        size="large"
      >
        Login
      </Button>
    </form>
  );
}
