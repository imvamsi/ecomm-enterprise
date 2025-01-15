export interface ICartItems {
  cartItems: CartItem[];
  price: number;
  itemsPrice: string;
  qty: number;
  _id: string;
  shippingPrice: string;
  tax: string;
  totalPrice: string;
}

interface CartItem {
  _id: string;
  user: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: any[]; // Define a specific type for reviews if required
  __v: number;
  createdAt: string;
  updatedAt: string;
  qty: number;
}
