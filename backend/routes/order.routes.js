import express from "express";
import {
  createOrder,
  getCurrentUserOrders,
  updateOrderToPaid,
  markAsDelivered,
  getAllOrders,
  getOrderById,
} from "../controllers/order.controller.js";
import { protectedRoute, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protectedRoute, createOrder)
  .get(protectedRoute, isAdmin, getAllOrders);

router.route("/currentUser").get(protectedRoute, getCurrentUserOrders);
router.route("/:id").get(protectedRoute, isAdmin, getOrderById);
router.route("/:id/pay").put(protectedRoute, updateOrderToPaid);
router.route("/:id/deliver").put(protectedRoute, markAsDelivered);

export default router;
