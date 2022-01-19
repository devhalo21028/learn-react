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
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  }),
  endpoints: (build) => {
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (data: LoginRequest) => 
    })
  },
});