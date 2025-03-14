import { get, post, put, del } from "./http";
import {
  LoginParams,
  LoginResult,
  UserInfo,
  PaginationParams,
  PaginationResult,
  TableItem,
  FormConfig,
} from "../types";

// 用户认证相关API
export const authApi = {
  // 用户登录
  login: (params: LoginParams) => post<LoginResult>("/auth/login", params),

  // 用户注销
  logout: () => post("/auth/logout"),

  // 获取当前用户信息
  getCurrentUser: () => get<UserInfo>("/auth/current-user"),
};

// 用户管理相关API
export const userApi = {
  // 获取用户列表
  getUsers: (params: PaginationParams) =>
    get<PaginationResult<UserInfo>>("/users", params),

  // 获取用户详情
  getUser: (id: string) => get<UserInfo>(`/users/${id}`),

  // 创建用户
  createUser: (data: Partial<UserInfo>) => post<UserInfo>("/users", data),

  // 更新用户
  updateUser: (id: string, data: Partial<UserInfo>) =>
    put<UserInfo>(`/users/${id}`, data),

  // 删除用户
  deleteUser: (id: string) => del(`/users/${id}`),
};

// 表格数据相关API
export const tableApi = {
  // 获取大数据表格数据
  getLargeData: (params: PaginationParams) =>
    get<PaginationResult<TableItem>>("/table/large-data", params),

  // 获取表格数据
  getTableData: (params: PaginationParams) =>
    get<PaginationResult<TableItem>>("/table/data", params),
};

// 表单相关API
export const formApi = {
  // 获取表单配置列表
  getFormConfigs: () => get<FormConfig[]>("/forms/configs"),

  // 获取表单配置详情
  getFormConfig: (id: string) => get<FormConfig>(`/forms/configs/${id}`),

  // 提交表单数据
  submitForm: (formId: string, data: any) =>
    post(`/forms/submit/${formId}`, data),

  // 生成表单配置
  generateFormConfig: (count: number) =>
    post<FormConfig[]>("/forms/generate", { count }),
};

// 仪表盘相关API
export const dashboardApi = {
  // 获取仪表盘数据
  getDashboardData: () => get("/dashboard/data"),

  // 获取统计数据
  getStats: () => get("/dashboard/stats"),

  // 获取图表数据
  getChartData: (type: string) => get(`/dashboard/chart/${type}`),
};

export default {
  auth: authApi,
  user: userApi,
  table: tableApi,
  form: formApi,
  dashboard: dashboardApi,
};
