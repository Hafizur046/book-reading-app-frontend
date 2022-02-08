import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getSelf: builder.query({
      query: () => `auth/me`,
    }),
  }),
});

export const { useGetSelfQuery } = userApi;
