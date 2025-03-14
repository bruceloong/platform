import { UserRole } from "../types";
import { useAuthStore } from "../store";

/**
 * 检查用户是否有权限访问
 * @param roles 允许访问的角色列表
 * @returns 是否有权限
 */
export const checkPermission = (roles?: UserRole[]): boolean => {
  // 如果没有指定角色，则所有人都可以访问
  if (!roles || roles.length === 0) {
    return true;
  }

  const { user } = useAuthStore.getState();

  // 如果用户未登录，则无权访问
  if (!user) {
    return false;
  }

  // 如果用户是管理员，则可以访问所有内容
  if (user.role === "admin") {
    return true;
  }

  // 检查用户角色是否在允许的角色列表中
  return roles.includes(user.role);
};

/**
 * 检查用户是否有指定权限
 * @param permission 权限标识
 * @returns 是否有权限
 */
export const hasPermission = (permission: string): boolean => {
  const { user } = useAuthStore.getState();

  // 如果用户未登录，则无权限
  if (!user) {
    return false;
  }

  // 如果用户是管理员或拥有所有权限，则可以访问所有内容
  if (user.role === "admin" || user.permissions.includes("*")) {
    return true;
  }

  // 检查用户是否有指定权限
  return user.permissions.includes(permission);
};

/**
 * 获取用户角色名称
 * @param role 角色类型
 * @returns 角色名称
 */
export const getRoleName = (role: UserRole): string => {
  const roleMap: Record<UserRole, string> = {
    admin: "管理员",
    editor: "编辑者",
    guest: "访客",
  };

  return roleMap[role] || "未知角色";
};

/**
 * 获取用户角色颜色
 * @param role 角色类型
 * @returns 角色颜色
 */
export const getRoleColor = (role: UserRole): string => {
  const colorMap: Record<UserRole, string> = {
    admin: "#1890ff",
    editor: "#52c41a",
    guest: "#faad14",
  };

  return colorMap[role] || "#d9d9d9";
};
