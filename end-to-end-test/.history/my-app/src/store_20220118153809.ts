import { configureStore } from '@reduxjs/toolkit';
import { authApiReducer } from './auth/services/authApi';
import { authReducer } from './auth/services/authSlice';

export const store = configureStore({
  reducer: {
    authApiReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
