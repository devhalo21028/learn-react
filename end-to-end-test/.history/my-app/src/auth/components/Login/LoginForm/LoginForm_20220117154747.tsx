/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Button, TextField } from '@mui/material';

export interface LoginFormState {
  username: string
  password: string
  buttonDisabled: boolean
}

export default function LoginForm() {
  const [formState, setFormState] = useState<LoginFormState>({
    username: '',
    password: '',
    buttonDisabled: true,
  });

  const isButtonDisabled = (state: LoginFormState) => !state.username || !state.password;

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const fieldName = e.target.name;
    const newFormState = {
      ...formState,
      [fieldName]: newValue,
    };

    const buttonDisabled = isButtonDisabled(newFormState);

    console.log({
      ...newFormState,
      buttonDisabled,
    });

    setFormState({
      ...newFormState,
      buttonDisabled,
    });
  };

  return (
    <form
      autoComplete="off"
      css={css`
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
          `}
    >
      <TextField
        variant="outlined"
        name="username"
        label="Username"
        onChange={onFieldChange}
      />
      <TextField
        type="password"
        variant="outlined"
        name="password"
        label="Password"
        onChange={onFieldChange}
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
