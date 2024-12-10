import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";

function AppRoutes() {
  return (
    <Routes>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default AppRoutes;
