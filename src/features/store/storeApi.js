// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getStore: builder.query({
        query:()=>({
            url: "store",
            method: 'GET'
        }),
    }),
    
    getSignleStore: builder.query({
      query: (slug) => ({
          url: `store/?slug=${slug}`,
          method: 'GET'
      }),
  }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStoreQuery, useGetSignleStoreQuery } = storeApi