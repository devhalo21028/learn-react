import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token?: string
}

export interface LoginActionPayload {
  token: string
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: ActionPayload<LoginActionPayload>) {
      
    }
  }
})
