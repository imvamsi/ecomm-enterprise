import { PRODUCT_URL } from "../constants/url";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
