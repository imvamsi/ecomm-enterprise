import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shipping from "../pages/Shipping";
import PrivateRoute from "../components/PrivateRoute";
import Payment from "../pages/Payment";
import PlaceOrder from "../pages/PlaceOrder.tsx";

function AppRoutes() {
    return (
        <Routes>
            <Route index={true} path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="" element={<PrivateRoute/>}>
                <Route path="/shipping" element={<Shipping/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/place-order" element={<PlaceOrder/>}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;
