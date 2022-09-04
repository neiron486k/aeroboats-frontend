import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseApiUrl } from '../config/baseApiUrl';
import ListResponse from '../interfaces/ListResponse';
import ProductProps from '../interfaces/ProductProps';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query<ListResponse<ProductProps>, number>({
      query: (page) => `/products/?page=${page}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
