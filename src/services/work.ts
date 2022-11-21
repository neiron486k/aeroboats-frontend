import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseApiUrl } from '../config/baseApiUrl';
import WorkInterface from '../contracts/WorkInterface';

export const workApi = createApi({
  reducerPath: 'works',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  endpoints: (builder) => ({
    getWorks: builder.query<WorkInterface[], void>({
      query: () => `/works/`,
    }),
  }),
});

export const { useGetWorksQuery } = workApi;
