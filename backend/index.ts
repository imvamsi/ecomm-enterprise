import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();

const app: Express = express();
const PORT = process.env.SERVER_PORT;
app.get("/", (req: Request, res: Response) => {
  res.send("helloworld aarya");
});

app.get("/api/products/:id", (req, res) => {
  console.log("req obj is", req);
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`now running on port ${PORT}`);
});
