import React, { Suspense, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { ConfigProvider, Spin, App as AntdApp, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
import { AppRoutes } from "./routes";
import { useSettingsStore } from "./store";
import env from "./config/env";
import "./App.css";

// 引入Mock数据（根据配置决定）
if (env.useMock) {
  import("./mock");
}

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
    <Spin size="large" tip="应用加载中..." />
  </div>
);

const App: React.FC = () => {
  const { theme: appTheme, locale, colorPrimary } = useSettingsStore();

  // 设置HTML标题
  useEffect(() => {
    document.title = "极简版中后台管理系统";
  }, []);

  return (
    <ConfigProvider
      locale={locale === "zh-CN" ? zhCN : undefined}
      theme={{
        token: {
          colorPrimary: colorPrimary,
        },
        algorithm:
          appTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <AntdApp>
        <HashRouter>
          <Suspense fallback={<Loading />}>
            <AppRoutes />
          </Suspense>
        </HashRouter>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
