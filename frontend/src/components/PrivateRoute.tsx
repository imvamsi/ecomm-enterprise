import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
  const userInfo = useSelector((state) => state.login);
  console.log("🚀 ~ PrivateRoute ~ userInfo:", userInfo);
  return userInfo ? <Outlet /> : <Navigate to={"/login"} />;
}
