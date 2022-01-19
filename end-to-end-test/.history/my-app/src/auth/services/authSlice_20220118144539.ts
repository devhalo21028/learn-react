import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token?: string
}

const initialState: AuthState = {
  token: null,
};
