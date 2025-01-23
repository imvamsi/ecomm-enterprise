import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {errorHandler, notFound} from "./middleware/errorHandler.js";
import connectToDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import orderRoutes from "./routes/order.routes.js";

import cors from "cors";

const corsOptions = {
    origin: 'http://localhost:5173',  // Your frontend URL
    credentials: true,  // Allow cookies to be sent
};


dotenv.config();
connectToDB();
const app = express();
app.use(cors(corsOptions));

// app.use(cors({
//     origin: 'http://localhost:5173', // Your frontend URL
//     credentials: true, // Allow cookies to be sent
// }));


app.use(cookieParser());
//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//app.use(cors());
const PORT = process.env.SERVER_PORT;
app.get("/", (req, res) => {
    res.send("hello");
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/order", orderRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`now running on port ${PORT}`);
});
