import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Avatar, Button, theme, Spin } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  UserOutlined,
  TableOutlined,
  FormOutlined,
  ProfileOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useAuth } from "../hooks";
import { useSettingsStore } from "../store";
import { authRoutes } from "../routes/routes";
import { getRoleName } from "../utils";

const { Header, Sider, Content } = Layout;

// 图标映射
const iconMap: Record<string, React.ReactNode> = {
  dashboard: <DashboardOutlined />,
  user: <UserOutlined />,
  table: <TableOutlined />,
  form: <FormOutlined />,
  profile: <ProfileOutlined />,
  setting: <SettingOutlined />,
};

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token: themeToken } = theme.useToken();
  const { user, logout, hasRole } = useAuth();
  const { collapsed, toggleCollapsed } = useSettingsStore();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // 处理路由变化
  useEffect(() => {
    const pathname = location.pathname;
    const paths = pathname.split("/").filter(Boolean);

    if (paths.length > 0) {
      setSelectedKeys([pathname]);
      setOpenKeys(
        paths
          .slice(0, -1)
          .map((_, index) => `/${paths.slice(0, index + 1).join("/")}`)
      );
    }

    setLoading(false);
  }, [location.pathname]);

  // 生成菜单项
  const generateMenuItems = (routes: typeof authRoutes) => {
    // 只处理根路由下的子路由
    const rootRoute = routes.find((route) => route.path === "/");
    if (!rootRoute || !rootRoute.children) return [];

    return rootRoute.children
      .filter(
        (route) =>
          !route.meta?.hidden &&
          (!route.meta?.roles || hasRole(route.meta.roles))
      )
      .map((route) => {
        // 如果有子路由，创建子菜单
        if (route.children && route.children.length > 0) {
          const subMenuItems = route.children
            .filter(
              (child) =>
                !child.meta?.hidden &&
                (!child.meta?.roles || hasRole(child.meta.roles))
            )
            .map((child) => ({
              key: `/${route.path}/${child.path}`,
              label: child.meta?.title,
              onClick: () => navigate(`/${route.path}/${child.path}`),
            }));

          if (subMenuItems.length === 0) return null;

          return {
            key: `/${route.path}`,
            icon: route.meta?.icon ? iconMap[route.meta.icon] : null,
            label: route.meta?.title,
            children: subMenuItems,
          };
        }

        // 没有子路由，创建普通菜单项
        return {
          key: `/${route.path}`,
          icon: route.meta?.icon ? iconMap[route.meta.icon] : null,
          label: route.meta?.title,
          onClick: () => navigate(`/${route.path}`),
        };
      })
      .filter(Boolean); // 过滤掉 null 项
  };

  // 用户下拉菜单
  const userMenuItems = [
    {
      key: "profile",
      icon: <ProfileOutlined />,
      label: "个人中心",
      onClick: () => navigate("/profile"),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "系统设置",
      onClick: () => navigate("/settings"),
      disabled: !hasRole(["admin"]),
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "退出登录",
      onClick: logout,
    },
  ];

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" tip="加载中..." />
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <h1
            style={{
              color: themeToken.colorPrimary,
              margin: 0,
              fontSize: collapsed ? "16px" : "18px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {collapsed ? "管理系统" : "极简版中后台管理系统"}
          </h1>
        </div>
        <Menu
          mode="inline"
          theme="light"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={setOpenKeys}
          style={{ borderRight: 0 }}
          items={generateMenuItems(authRoutes)}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{ fontSize: "16px", width: "64px", height: "64px" }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            {user && (
              <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "0 12px",
                  }}
                >
                  <Avatar src={user.avatar} style={{ marginRight: "8px" }} />
                  <div>
                    <div style={{ fontWeight: "bold" }}>{user.name}</div>
                    <div
                      style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.45)" }}
                    >
                      {getRoleName(user.role)}
                    </div>
                  </div>
                </div>
              </Dropdown>
            )}
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: "24px",
            background: "#fff",
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
