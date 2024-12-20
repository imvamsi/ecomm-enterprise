import mongoose, { Document, Schema } from "mongoose";

// interface IReview extends Document {
//   user: mongoose.Types.ObjectId;
//   name: string;
//   rating: number;
//   comment: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// interface IProduct extends Document {
//   user: mongoose.Types.ObjectId;
//   name: string;
//   image: string;
//   brand: string;
//   category: string;
//   description: string;
//   reviews: IReview[];
//   rating: number;
//   price: number;
//   countInStock: number;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// const Review = mongoose.model<IReview>("Review", reviewSchema);
// const Product = mongoose.model<IProduct>("Product", productSchema);

// export { Review, Product };

export default mongoose.model("Product", productSchema);
