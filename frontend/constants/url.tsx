export const BASE_URL =
  process.env.NODE_URI === "development" ? "http://localhost:8000" : "";

export const PRODUCT_URL = "/api/products";
export const USERS_URL = "/api/users";
export const ORDERS_URL = "/api/orders";
export const STRIPE_URL = "/api/stripe";
