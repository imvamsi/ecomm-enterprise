import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/order.model.js";

const createOrder = asyncHandler(async (req, res) => {
  res.send("create order");
});

const getCurrentUserOrders = asyncHandler(async (req, res) => {
  res.send("get current order of user");
});

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("order is paid");
});

const markAsDelivered = asyncHandler(async (req, res) => {
  res.send("order delivered");
});

const getAllOrders = asyncHandler(async (req, res) => {
  res.send("all orders");
});
const getOrderById = asyncHandler(async (req, res) => {
  res.send("order by id");
});

export {
  createOrder,
  getCurrentUserOrders,
  updateOrderToPaid,
  markAsDelivered,
  getAllOrders,
  getOrderById,
};
