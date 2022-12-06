import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseApiUrl } from '../config/baseApiUrl';
import ListResponse from '../contracts/ListResponse';
import ProductInterface from '../contracts/ProductInterface';

export const productsApi = createApi({
  reducerPath: 'products',
  tagTypes: ['Product'],
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query<ListResponse<ProductInterface>, number>({
      query: (page) => `/products/?page_size=${page}`,
    }),
    getProduct: builder.query<ProductInterface, number>({
      query: (id) => `/products/${id}/`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
