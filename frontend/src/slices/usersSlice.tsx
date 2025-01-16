import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants/url";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        withCredentials: true,
        credentials: "include",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/logout`,
        withCredentials: true,
        credentials: "include",
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        withCredentials: true,
        credentials: "include",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  usersApiSlice;
