import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.model.js";

const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
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
  res.send("register user");
});

const logoutUser = asyncHandler(async (req, res) => {
  res.send("log out user");
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
