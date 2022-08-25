import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Slide from '../../../components/Carousel/models/Slide';
import { baseUrl } from './baseUrl';

export const carouselSlice = createApi({
  reducerPath: 'carousel',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSlides: builder.query<Slide[], number>({
      query: () => '/carousel/slides/',
    }),
  }),
});

export const { useGetSlidesQuery } = carouselSlice;
