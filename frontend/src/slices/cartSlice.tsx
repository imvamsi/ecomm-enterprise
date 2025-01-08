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
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      return UpdateCart(state);
    },
  },
});
//export as an action
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
