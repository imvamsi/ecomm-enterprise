import mongoose, { Document, Schema } from "mongoose";

// interface IOrderItem {
//   name: string;
//   qty: number;
//   image: string;
//   price: number;
//   product: mongoose.Types.ObjectId;
// }

// interface IPaymentResult {
//   id?: string;
//   status?: string;
//   update_time?: string;
//   email_address?: string;
// }

// interface IShippingAddress {
//   address: string;
//   city: string;
//   postalCode: string | number;
//   country: string;
// }

// interface IOrder extends Document {
//   user: mongoose.Types.ObjectId;
//   orderItems: IOrderItem[];
//   shippingAddress: IShippingAddress;
//   paymentMethod: string;
//   paymentResult?: IPaymentResult;
//   itemsPrice: number;
//   taxPrice: number;
//   shippingPrice: number;
//   totalPrice: number;
//   isPaid: boolean;
//   paidAt?: Date;
//   isDelivered: boolean;
//   deliveredAt?: Date;
//   createdAt: Date;
//   updatedAt: Date;
// }

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
        match: [/^[A-Za-z0-9]+$/, "Invalid postal code format"],
      },
      country: {
        type: String,
        required: true,
      },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: {
        type: String,
      },
      status: {
        type: String,
      },
      update_time: {
        type: String,
      },
      email_address: {
        type: String,
      },
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
