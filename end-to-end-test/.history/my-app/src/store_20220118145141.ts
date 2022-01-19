import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/services/authSlice';

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
