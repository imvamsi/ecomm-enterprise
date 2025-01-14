import { strict } from "assert";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("invalid email/password");
  }
});

const registerUsrer = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("username/password missing");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(409);
    throw new Error("user already exists!! Try logging in");
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(500);
    throw new Error("User creation failed");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("jwt", { path: "/", httpOnly: true, secure: true });
  res.status(200).json({ message: "Logged out successfully!!" });
});

const getUsers = asyncHandler(async (req, res) => {
  res.send("get user");
});

const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user ppro");
});

export {
  authenticateUser,
  logoutUser,
  registerUsrer,
  getUserById,
  getUserProfile,
  getUsers,
  updateUser,
  updateUserProfile,
  deleteUser,
};
