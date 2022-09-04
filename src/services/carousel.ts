import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseApiUrl } from '../config/baseApiUrl';
import SlideProps from '../interfaces/SlideProps';

export const carouselApi = createApi({
  reducerPath: 'carousel',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  endpoints: (builder) => ({
    getSlides: builder.query<SlideProps[], number>({
      query: () => '/carousel/slides/',
    }),
  }),
});

export const { useGetSlidesQuery } = carouselApi;
