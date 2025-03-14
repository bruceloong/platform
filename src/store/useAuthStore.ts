import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserInfo, UserRole } from "../types";

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
      // 开发环境下使用测试用户
      token: import.meta.env.DEV ? "test-token" : null,
      user: import.meta.env.DEV
        ? {
            id: "1",
            username: "admin",
            name: "管理员",
            avatar: "",
            email: "admin@example.com",
            role: "admin",
            permissions: ["*"],
          }
        : null,
      isLoggedIn: import.meta.env.DEV ? true : false,
      roles: import.meta.env.DEV ? ["admin"] : [],
      permissions: import.meta.env.DEV ? ["*"] : [],

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
