/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Button, TextField } from '@mui/material';

export interface LoginFormData {
  username: string
  password: string
}

export interface LoginFormState extends LoginFormData {
  buttonDisabled: boolean
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void
  isSubmitting: boolean
}

export default function LoginForm({
  onSubmit,
  isSubmitting,
}: LoginFormProps) {
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

    setFormState({
      ...newFormState,
      buttonDisabled,
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const {
      username,
      password,
    } = formState;

    onSubmit({
      username,
      password,
    });

    e.preventDefault();
  };

  return (
    <form
      css={css`
            display: flex;
            flex-direction: column;
            row-gap: 2rem;
          `}
      onSubmit={handleOnSubmit}
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
        type="submit"
        disabled={formState.buttonDisabled || isSubmitting}
        variant="contained"
        size="large"
      >
        Login
      </Button>
    </form>
  );
}
