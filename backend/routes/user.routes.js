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
} from "../controllers/user.controller";

const router = express.Router();

router.route("/").post(registerUsrer).get(getUsers);
router.route("/authenticate").post(authenticateUser);
router.route("/logout").post(logoutUser);
router.route("/profile").post(updateUserProfile).get(getUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;
