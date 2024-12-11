import express, { Express, Request, Response } from "express";
import products from "./data/products.js";

const app: Express = express();
const PORT = 8000;
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
