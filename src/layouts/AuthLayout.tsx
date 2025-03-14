import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ height: "100vh", background: "#f0f2f5" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "400px",
            padding: "40px",
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>
              极简版中后台管理系统
            </h1>
            <p style={{ marginTop: "12px", color: "rgba(0, 0, 0, 0.45)" }}>
              基于 React + Ant Design 构建
            </p>
          </div>
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
