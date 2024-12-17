import express from "express";

import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/product.model.js";

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ msg: "Product not found" });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
export default router;
