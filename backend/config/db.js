import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) throw new Error("MOngo uri is not defined");
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`Mongo connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDB;
