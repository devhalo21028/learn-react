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
    baseUrl: ,
  }),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (data: LoginRequest) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
