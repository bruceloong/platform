import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserRole } from "../types";
import RootRedirect from "../components/RootRedirect";

// 布局组件
const MainLayout = React.lazy(() => import("../layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("../layouts/AuthLayout"));

// 页面组件
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Login = React.lazy(() => import("../pages/Login"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Unauthorized = React.lazy(() => import("../pages/Unauthorized"));

// 用户管理
const UserList = React.lazy(() => import("../pages/User/UserList"));
const UserDetail = React.lazy(() => import("../pages/User/UserDetail"));
const UserCreate = React.lazy(() => import("../pages/User/UserCreate"));

// 表格示例
const BasicTable = React.lazy(() => import("../pages/Table/BasicTable"));
const LargeTable = React.lazy(() => import("../pages/Table/LargeTable"));

// 表单示例
const BasicForm = React.lazy(() => import("../pages/Form/BasicForm"));
const AdvancedForm = React.lazy(() => import("../pages/Form/AdvancedForm"));
const FormGenerator = React.lazy(() => import("../pages/Form/FormGenerator"));

// 个人中心
const Profile = React.lazy(() => import("../pages/Profile"));
const Settings = React.lazy(() => import("../pages/Settings"));

// 路由配置
export interface RouteItem {
  path: string;
  element: React.ReactNode;
  children?: RouteItem[];
  meta?: {
    title: string;
    icon?: string;
    roles?: UserRole[];
    hidden?: boolean;
  };
}

// 公共路由
export const publicRoutes: RouteItem[] = [
  {
    path: "/login",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
    meta: {
      title: "登录",
      hidden: true,
    },
  },
  {
    path: "/404",
    element: <NotFound />,
    meta: {
      title: "404",
      hidden: true,
    },
  },
  {
    path: "/403",
    element: <Unauthorized />,
    meta: {
      title: "403",
      hidden: true,
    },
  },
  {
    path: "/",
    element: <RootRedirect />,
    meta: {
      title: "首页",
      hidden: true,
    },
  },
];

// 权限路由
export const authRoutes: RouteItem[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        meta: {
          title: "仪表盘",
          icon: "dashboard",
          roles: ["admin", "editor", "guest"],
        },
      },
      {
        path: "user",
        element: <Outlet />,
        meta: {
          title: "用户管理",
          icon: "user",
          roles: ["admin", "editor"],
        },
        children: [
          {
            path: "list",
            element: <UserList />,
            meta: {
              title: "用户列表",
              roles: ["admin", "editor"],
            },
          },
          {
            path: "detail/:id",
            element: <UserDetail />,
            meta: {
              title: "用户详情",
              hidden: true,
              roles: ["admin", "editor"],
            },
          },
          {
            path: "create",
            element: <UserCreate />,
            meta: {
              title: "创建用户",
              roles: ["admin"],
            },
          },
          {
            path: "",
            element: <Navigate to="/user/list" replace />,
            meta: {
              title: "用户列表重定向",
              hidden: true,
            },
          },
        ],
      },
      {
        path: "table",
        element: <Outlet />,
        meta: {
          title: "表格示例",
          icon: "table",
          roles: ["admin", "editor", "guest"],
        },
        children: [
          {
            path: "basic",
            element: <BasicTable />,
            meta: {
              title: "基础表格",
              roles: ["admin", "editor", "guest"],
            },
          },
          {
            path: "large",
            element: <LargeTable />,
            meta: {
              title: "大数据表格",
              roles: ["admin", "editor"],
            },
          },
          {
            path: "",
            element: <Navigate to="/table/basic" replace />,
            meta: {
              title: "表格重定向",
              hidden: true,
            },
          },
        ],
      },
      {
        path: "form",
        element: <Outlet />,
        meta: {
          title: "表单示例",
          icon: "form",
          roles: ["admin", "editor"],
        },
        children: [
          {
            path: "basic",
            element: <BasicForm />,
            meta: {
              title: "基础表单",
              roles: ["admin", "editor", "guest"],
            },
          },
          {
            path: "advanced",
            element: <AdvancedForm />,
            meta: {
              title: "高级表单",
              roles: ["admin", "editor"],
            },
          },
          {
            path: "generator",
            element: <FormGenerator />,
            meta: {
              title: "表单生成器",
              roles: ["admin"],
            },
          },
          {
            path: "",
            element: <Navigate to="/form/basic" replace />,
            meta: {
              title: "表单重定向",
              hidden: true,
            },
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
        meta: {
          title: "个人中心",
          icon: "profile",
          roles: ["admin", "editor", "guest"],
        },
      },
      {
        path: "settings",
        element: <Settings />,
        meta: {
          title: "系统设置",
          icon: "setting",
          roles: ["admin"],
        },
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
        meta: {
          title: "未找到",
          hidden: true,
        },
      },
    ],
  },
];

// 所有路由
export const routes = [...publicRoutes, ...authRoutes];

export default routes;
