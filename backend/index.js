import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import products from "./data/products.js";
import connectToDB from "./config/db.js";

dotenv.config();

connectToDB();
const app = express();

app.use(cors());
const PORT = process.env.SERVER_PORT;
app.get("/", (req, res) => {
  res.send("helloworld aarya");
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.listen(PORT, () => {
  console.log(`now running on port ${PORT}`);
});
