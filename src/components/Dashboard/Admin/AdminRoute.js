import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAdminLoggedIn } from "./AdminAuth";
export default function AdminRoute() {
  if (isAdminLoggedIn()) return <Outlet />;
  else return <Navigate to={"/AdminLogin"} />;
}
