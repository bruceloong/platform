// 用户角色类型
export type UserRole = "admin" | "editor" | "guest";

// 用户信息类型
export interface UserInfo {
  id: string;
  username: string;
  name: string;
  avatar: string;
  email: string;
  role: UserRole;
  permissions: string[];
}

// 登录参数类型
export interface LoginParams {
  username: string;
  password: string;
  remember?: boolean;
}

// 登录响应类型
export interface LoginResult {
  token: string;
  user: UserInfo;
}

// 路由元数据类型
export interface RouteMeta {
  title: string;
  icon?: string;
  hidden?: boolean;
  roles?: UserRole[];
  keepAlive?: boolean;
  order?: number;
}

// 路由配置类型
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  meta?: RouteMeta;
  children?: RouteConfig[];
}

// 表格数据项类型
export interface TableItem {
  id: string;
  [key: string]: any;
}

// 表单字段类型
export interface FormField {
  name: string;
  label: string;
  type:
    | "input"
    | "textarea"
    | "select"
    | "radio"
    | "checkbox"
    | "date"
    | "number";
  required?: boolean;
  options?: { label: string; value: any }[];
  rules?: any[];
  placeholder?: string;
  defaultValue?: any;
}

// 表单配置类型
export interface FormConfig {
  name: string;
  fields: FormField[];
}

// 响应数据类型
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}

// 分页参数类型
export interface PaginationParams {
  current: number;
  pageSize: number;
  total?: number;
}

// 分页响应类型
export interface PaginationResult<T = any> {
  list: T[];
  pagination: PaginationParams;
}
