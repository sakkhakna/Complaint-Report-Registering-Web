import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";

function ProtectedRoute() {
  const token = Cookies.get("token");
  return token ? <Outlet /> : <Navigate to="sign-in" />;
}

export default ProtectedRoute;
