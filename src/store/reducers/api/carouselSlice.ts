import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Slide from '../../../components/Carousel/models/Slide';

export const carouselSlice = createApi({
  reducerPath: 'carousel',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/carousel' }),
  endpoints: (builder) => ({
    getSlides: builder.query<Slide[], number>({
      query: () => '/slides/',
    }),
  }),
});

export const { useGetSlidesQuery } = carouselSlice;
