import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import connectToDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

connectToDB();
const app = express();

app.use(cors());
const PORT = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`now running on port ${PORT}`);
});
