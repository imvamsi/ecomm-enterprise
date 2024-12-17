import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectToDB();
const app = express();

app.use(cors());
const PORT = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`now running on port ${PORT}`);
});
