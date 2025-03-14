import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store";

const RootRedirect: React.FC = () => {
  const { isLoggedIn } = useAuthStore();

  // 如果已登录，重定向到仪表盘，否则重定向到登录页
  return isLoggedIn ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default RootRedirect;
