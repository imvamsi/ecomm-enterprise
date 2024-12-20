export const BASE_URL: string | undefined =
  import.meta.env.VITE_NODE_ENV === "development"
    ? "http://localhost:8000"
    : "";

export const PRODUCT_URL: string = "/api/products";
export const USERS_URL: string = "/api/users";
export const ORDERS_URL: string = "/api/orders";
export const STRIPE_URL: string = "/api/stripe";
