import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseApiUrl } from '../config/baseApiUrl';
import CreateOrderInterface from '../contracts/CreateOrderInterface';

export const orderApi = createApi({
  reducerPath: 'orders',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  endpoints: (builder) => ({
    addNewOrder: builder.mutation({
      query: (initialPost: CreateOrderInterface) => ({
        url: '/orders/',
        method: 'POST',
        body: initialPost,
      }),
    }),
  }),
});

export const { useAddNewOrderMutation } = orderApi;
