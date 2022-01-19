import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/services/authApi';
import { authReducer } from './auth/services/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddlware) => {}
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
