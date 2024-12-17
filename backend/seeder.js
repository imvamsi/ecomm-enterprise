import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import users from "./data/users.js";
import Product from "./models/product.model.js";
import User from "./models/user.model.js";
import Order from "./models/order.model.js";
import connectToDB from "./config/db.js";

dotenv.config();

connectToDB();

async function importSeedData() {
  try {
    await Product.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    //const adminUser = createdUser.filter((user) => user.isAdmin === true);
    const adminUser = createdUser[0]._id;

    const seedProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(seedProducts);

    console.log("data imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function destroySeedData() {
  try {
    await Product.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();

    console.log("data deleted");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

if (process.argv[2] === "-d") destroySeedData();
else importSeedData();
