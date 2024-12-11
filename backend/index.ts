import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import products from "./data/products.js";

dotenv.config();

const app: Express = express();

app.use(cors());
const PORT = process.env.SERVER_PORT;
app.get("/", (req: Request, res: Response) => {
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
