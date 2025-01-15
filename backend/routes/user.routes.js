import express from "express";
import {
  authenticateUser,
  logoutUser,
  registerUsrer,
  getUserById,
  getUserProfile,
  getUsers,
  updateUser,
  updateUserProfile,
  deleteUser,
} from "../controllers/user.controller.js";
import { protectedRoute, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUsrer).get(protectedRoute, isAdmin, getUsers);
router.route("/login").post(authenticateUser);
router.route("/logout").post(logoutUser);
router
  .route("/profile")
  .put(protectedRoute, updateUserProfile)
  .get(protectedRoute, getUserProfile);
router
  .route("/:id")
  .delete(protectedRoute, isAdmin, deleteUser)
  .get(protectedRoute, isAdmin, getUserById)
  .put(protectedRoute, isAdmin, updateUser);

export default router;
