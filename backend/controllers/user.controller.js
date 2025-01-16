import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

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
  //res.clearCookie("jwt", { path: "/", httpOnly: true, secure: true });
  res.clearCookie("jwt", {
    path: "/",
  });
  res.status(200).json({ message: "Logged out successfully!!" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const existingUser = await User.findById(userId);
  if (existingUser) {
    res.json({
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      isAdmin: existingUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      //user.password = req.body.password;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("update failed: user not found");
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");
  if (users.length > 0) {
    res.json(users);
  } else {
    res.status(404);
    throw new Error("No user found!!");
  }
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, isAdmin } = req.body;

  const user = await User.findById(id).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("user not found....");
  }

  // Check if the current user is an admin and if they are trying to change another admin's status
  if (req.user.isAdmin && isAdmin !== undefined && req.user._id !== id) {
    // Prevent an admin from demoting another admin
    if (isAdmin === false && user.isAdmin === true) {
      res.status(403);
      throw new Error("You cannot remove admin rights from another admin");
    }
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.isAdmin =
    req.body.isAdmin !== undefined ? Boolean(req.body.isAdmin) : user.isAdmin;

  const updatedUser = await user.save();
  console.log(updatedUser);
  res.json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new Error("no user exist");
  }

  if (user.isAdmin) {
    throw new Error("cannot delete admin user");
  }

  if (user) {
    await User.deleteOne({ _id: user._id });
    res.json("user deleted successfully");
  }
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
