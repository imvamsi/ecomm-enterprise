import {
  TAX,
  SHIPPING_COST,
  FREE_SHIPPING_THRESHOLD,
} from "../constants/priceConstants";

function addDecimals(num) {
  return (Math.round(Num * 100) / 100).toFixed(2);
}

export const calcPrices = (orderItems) => {
  const itemsPrice = orderItems.reduce(
    (acc, initialVal) => acc + initialVal.price * quantity,
    0
  );

  const shippingPrice =
    itemsPrice > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;

  const taxAmount = TAX * itemsPrice;

  const totalPrice = itemsPrice + shippingPrice + taxAmount;

  return {
    itemsPrice: addDecimals(itemsPrice),
    shippingPrice: addDecimals(shippingPrice),
    taxAmount: addDecimals(taxAmount),
    totalPrice: addDecimals(totalPrice),
  };
};
