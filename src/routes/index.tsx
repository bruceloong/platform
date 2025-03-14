import React, { Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { Spin } from "antd";
import { useAuth } from "../hooks";
import routes, { publicRoutes, authRoutes, RouteItem } from "./routes";
import { UserRole } from "../types";

// 加载中组件
const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Spin size="large" tip="页面加载中..." />
  </div>
);

// 权限路由组件
const AuthRoute: React.FC<{ children: React.ReactNode; roles?: string[] }> = ({
  children,
  roles,
}) => {
  const { isLoggedIn, hasRole } = useAuth();

  // 如果未登录，重定向到登录页
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // 如果没有权限，重定向到403页面
  if (roles && roles.length > 0 && !hasRole(roles as UserRole[])) {
    return <Navigate to="/403" replace />;
  }

  return <>{children}</>;
};

// 处理路由权限
const handleRoutePermission = (route: RouteItem): RouteItem => {
  // 如果是公共路由，直接返回
  if (publicRoutes.some((r) => r.path === route.path)) {
    return route;
  }

  // 处理子路由
  if (route.children) {
    route.children = route.children.map((child) =>
      handleRoutePermission(child)
    );
  }

  // 如果是需要认证的路由，添加 AuthRoute 包装
  if (
    route.path !== "/login" &&
    route.path !== "/404" &&
    route.path !== "/403"
  ) {
    return {
      ...route,
      element: (
        <AuthRoute roles={route.meta?.roles}>
          <Suspense fallback={<Loading />}>{route.element}</Suspense>
        </AuthRoute>
      ),
    };
  }

  return route;
};

// 处理所有路由
const processRoutes = (routeList: RouteItem[]): RouteItem[] => {
  return routeList.map((route) => handleRoutePermission(route));
};

// 路由组件
const AppRoutes: React.FC = () => {
  const processedRoutes = processRoutes(routes);
  const element = useRoutes(processedRoutes);

  return element;
};

export { AppRoutes, AuthRoute, Loading, routes, publicRoutes, authRoutes };

export default AppRoutes;
