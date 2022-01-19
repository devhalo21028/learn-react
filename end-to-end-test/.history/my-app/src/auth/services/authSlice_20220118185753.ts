/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
});

export const { saveLogin: saveLoginToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
