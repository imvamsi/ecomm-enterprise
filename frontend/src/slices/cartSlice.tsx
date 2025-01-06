import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../entities/product";
import { UpdateCart } from "../utils/cart.util";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const item = action.payload;

      // const existingItem = state.cartItems.find(
      //   (cartItem) => cartItem._id === item._id
      // );

      // if (existingItem) {
      //   state.cartItems = state.cartItems.map((cartItem) =>
      //     cartItem._id === existingItem._id ? item : cartItem
      //   );
      // } else {
      //   state.cartItems = [...state.cartItem, item];
      // }

      const item = action.payload;

      if (!item) {
        console.error("there is no item in the payload");
        return;
      }
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem: IProduct) => cartItem._id === item._id
      );

      if (existingItemIndex === -1) {
        state.cartItems = [...state.cartItems, item];
      } else {
        state.cartItems[existingItemIndex] = item;
      }
      return UpdateCart(state);
    },
  },
});

export default cartSlice.reducer;
