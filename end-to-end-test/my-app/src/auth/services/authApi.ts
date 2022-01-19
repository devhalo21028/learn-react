import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../common/config';

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
    baseUrl: `${config.apiUrl}${config.apiBasePath}/auth`,
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
