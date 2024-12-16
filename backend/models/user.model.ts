import mongoose, { Document, Schema } from "mongoose";

interface IUSer extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUSer>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      requireD: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUSer>("User", userSchema);
