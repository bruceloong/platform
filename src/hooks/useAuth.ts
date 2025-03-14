import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useAuthStore } from "../store";
import { authApi } from "../services";
import { LoginParams, UserRole } from "../types";

/**
 * 认证相关的自定义Hook
 */
export const useAuth = () => {
  const navigate = useNavigate();
  const {
    token,
    user,
    isLoggedIn,
    roles,
    login: setLogin,
    logout: setLogout,
  } = useAuthStore();

  /**
   * 登录
   * @param params 登录参数
   */
  const login = async (params: LoginParams) => {
    try {
      const res = await authApi.login(params);
      if (res.success) {
        setLogin(res.data.token, res.data.user);
        message.success("登录成功");
        navigate("/dashboard");
        return true;
      }
      return false;
    } catch (error) {
      console.error("登录失败:", error);
      return false;
    }
  };

  /**
   * 注销
   */
  const logout = async () => {
    try {
      await authApi.logout();
      setLogout();
      message.success("注销成功");
      navigate("/login");
    } catch (error) {
      console.error("注销失败:", error);
    }
  };

  /**
   * 检查是否有角色权限
   * @param allowedRoles 允许的角色列表
   */
  const hasRole = (allowedRoles?: UserRole[]) => {
    if (!isLoggedIn || !user) {
      return false;
    }

    if (!allowedRoles || allowedRoles.length === 0) {
      return true;
    }

    if (user.role === "admin") {
      return true;
    }

    return allowedRoles.includes(user.role);
  };

  /**
   * 检查是否有权限
   * @param permission 权限标识
   */
  const hasPermission = (permission: string) => {
    if (!isLoggedIn || !user) {
      return false;
    }

    if (user.role === "admin" || user.permissions.includes("*")) {
      return true;
    }

    return user.permissions.includes(permission);
  };

  return {
    token,
    user,
    isLoggedIn,
    roles,
    login,
    logout,
    hasRole,
    hasPermission,
  };
};
