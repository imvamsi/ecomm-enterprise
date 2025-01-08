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

export const calculateCartDetails = (item, criteria) => {
  if (criteria === "total")
    return item.reduce((acc, currentVal) => acc + currentVal.qty, 0);
  else
    return item
      .reduce((acc, currentVal) => acc + currentVal.qty * currentVal.price, 0)
      .toFixed(2);

  // Make sure you're adding qty from each cart item
};

//export { UpdateCart };
