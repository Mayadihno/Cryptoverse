import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/dist/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builders) => ({
    getAllProducts: builders.query({
      query: () => "products",
    }),
    getProduct: builders.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
});
export const { useGetAllProductsQuery, useGetProductQuery } = productApi;
