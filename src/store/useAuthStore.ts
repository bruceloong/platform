import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserInfo, UserRole } from "../types";
import env from "../config/env";

interface AuthState {
  token: string | null;
  user: UserInfo | null;
  isLoggedIn: boolean;
  roles: UserRole[];
  permissions: string[];

  // 操作方法
  setToken: (token: string) => void;
  setUser: (user: UserInfo) => void;
  login: (token: string, user: UserInfo) => void;
  logout: () => void;
  hasRole: (role: UserRole) => boolean;
  hasPermission: (permission: string) => boolean;
}

// 创建认证状态存储
const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // 初始状态（根据配置决定是否自动登录）
      token: env.enableAutoLogin ? "auto-login-token" : null,
      user: env.enableAutoLogin ? env.autoLoginUser : null,
      isLoggedIn: env.enableAutoLogin,
      roles: env.enableAutoLogin ? [env.autoLoginUser.role] : [],
      permissions: env.enableAutoLogin ? env.autoLoginUser.permissions : [],

      setToken: (token: string) => set({ token }),

      setUser: (user: UserInfo) => {
        set({
          user,
          roles: [user.role],
          permissions: user.permissions || [],
        });
      },

      login: (token: string, user: UserInfo) => {
        set({
          token,
          user,
          isLoggedIn: true,
          roles: [user.role],
          permissions: user.permissions || [],
        });
      },

      logout: () => {
        set({
          token: null,
          user: null,
          isLoggedIn: false,
          roles: [],
          permissions: [],
        });
      },

      hasRole: (role: UserRole) => {
        const { roles } = get();
        return roles.includes(role);
      },

      hasPermission: (permission: string) => {
        const { permissions } = get();
        return permissions.includes(permission);
      },
    }),
    {
      name: "auth-storage", // 持久化存储的键名
    }
  )
);

export default useAuthStore;
