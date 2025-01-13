import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

// interface IUSer extends mongoose.Document {
//   name: string;
//   email: string;
//   password: string;
//   isAdmin: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

const userSchema = new Schema(
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
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);
