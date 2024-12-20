import { PRODUCT_URL } from "../constants/url";
import { IProduct } from "../entities/product";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
