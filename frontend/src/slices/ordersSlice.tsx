import {apiSlice} from "./apiSlice.tsx";

export const ordersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: '/api/order',
                method: 'POST',
                body: order,
                withCredentials: true,
                credentials: "include",
            })
        })
    })
})

export const {useCreateOrderMutation} = ordersSlice