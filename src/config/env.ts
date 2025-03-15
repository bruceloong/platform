// 环境变量配置
const env = {
  // 是否使用 Mock 数据
  useMock: true,

  // API 基础路径
  apiBaseUrl: "/api",

  // 是否启用自动登录（仅用于演示）
  enableAutoLogin: false,

  // 自动登录用户信息（仅用于演示）
  autoLoginUser: {
    id: "1",
    username: "admin",
    name: "管理员",
    avatar: "",
    email: "admin@example.com",
    role: "admin",
    permissions: ["*"],
  },
};

export default env;
