// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getBlog: builder.query({
        query:()=>({
            url: "blog",
            method: 'GET'
        }),
    }),
    
    getSignleBlog: builder.query({
      query: (slug) => ({
          url: `blog/?slug=${slug}`,
          method: 'GET'
      }),
  }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlogQuery, useGetSignleBlogQuery } = blogApi