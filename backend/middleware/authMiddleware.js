import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/user.model.js";

export const protectedRoute = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    try {
      const decodedId = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedId.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized, Token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token present");
  }
});

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("You need Admin access");
  }
};
