import { FREE_SHIPPING_THRESHOLD, SHIPPING_COST, TAX } from "../constants/cart";
import { ICartItems } from "../entities/cart";

const addDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

/*
 *edit types once items in the cart are clear
 */

export const UpdateCart = (state) => {
  const itemsPrice = state.cartItems.reduce(
    (total: number, item: number): number =>
      (item.price * 100 * item.qty) / 100,
    0
  );
  state.itemsPrice = addDecimals(itemsPrice);

  const shippingPrice = itemsPrice > FREE_SHIPPING_THRESHOLD ? 0 : 15;
  state.shippingPrice = addDecimals(shippingPrice);
  //Ontario HST 13%
  const tax = TAX * itemsPrice;
  state.tax = addDecimals(tax);

  const totalPrice = itemsPrice + SHIPPING_COST + tax;
  state.totalPrice = addDecimals(totalPrice);

  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};

// A function that calculates either total quantity or total price based on the criteria
export const calculateCartTotal = (cartItems, criteria) => {
  switch (criteria) {
    case "totalQuantity":
      return cartItems.reduce((acc, item) => acc + item.qty, 0);
    case "totalPrice":
      return cartItems
        .reduce((acc, item) => acc + item.qty * item.price, 0)
        .toFixed(2); // Round to 2 decimal places for price
    default:
      return 0;
  }
};
