import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LoginResponse {
  token: string
}

export interface LoginRequest {
  username: string
  password: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000/api/v1/auth',
  }),
  endpoints: (build) => {
    build.mutation<LoginResponse, LoginRequest>({
      query: (data: LoginRequest) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
    });
  },
});
