import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products";
import users from "./data/users";
import productModel from "./models/product.model";
import userModel from "./models/user.model";
import orderModel from "./models/order.model";
import connectToDB from "./config/db";

dotenv.config();

connectToDB();

async function importSeedData(): Promise<void> {
  try {
  } catch (error) {}
}

async function destroySeedData(): Promise<void> {
  try {
  } catch (error) {}
}
