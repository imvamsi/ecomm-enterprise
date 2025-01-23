import asyncHandler from "../middleware/asyncHandler.js";
import {calcPrices} from "../utils/calcPrice.js";
import OrderModel from "../models/order.model.js";
import ProductModel from "../models/product.model.js";


/*
creates the order item:
1. get the order items
2. get the product ids from db that match the existing order items
3. once you have the product ids, loop over the existing items, 
 */

const createOrder = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod
    } = req.body
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('orderItem not found')
    }

    const itemsFromDb = await ProductModel.find({
        _id: {$in: orderItems.map((item) => item._id)},  // Conditions
    });

    //map over order items and get the price from the db and restructure the order object
    /**
     * @typedef {Object} matchingItem
     * @property {number} price
     */
    const dbOrderItems = orderItems.map(itemFromClient => {
        const matchingItem = itemsFromDb.find(x => x._id === itemFromClient._id)
        return {
            ...itemFromClient,
            product: itemFromClient._id,
            price: matchingItem.price,
            _id: undefined
        }
    })

    const {
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = calcPrices(dbOrderItems);

    const order = new OrderModel({
        orderItems: dbOrderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder)

});


const getCurrentUserOrders = asyncHandler(async (req, res) => {
    const orders = await OrderModel.find({user: req.user._id})
    if (!orders || orders.length === 0) {
        res.status(404)
        throw new Error('order not found')
    } else {
        res.status(200).json(orders)
    }
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
