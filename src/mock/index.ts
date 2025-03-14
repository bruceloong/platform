import Mock from "mockjs";
import "./user";
import "./table";
import "./form";
import "./dashboard";

// 设置全局延迟，模拟网络请求
Mock.setup({
  timeout: "200-600",
});

// 设置响应数据格式
Mock.mock(/\/api\/.*/, "options", () => {
  return {
    code: 200,
    success: true,
    message: "success",
    data: null,
  };
});

export default Mock;
