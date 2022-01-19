/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

export interface AuthState {
  token?: string
}

export interface LoginPayload {
  token: string
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveLogin: (state, action: PayloadAction<LoginPayload>) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, );
  },
});

export const { saveLogin } = authSlice.actions;

export const authReducer = authSlice.reducer;
