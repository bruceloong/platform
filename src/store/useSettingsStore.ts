import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeMode = "light" | "dark";
type Locale = "zh-CN" | "en-US";

interface SettingsState {
  theme: ThemeMode;
  locale: Locale;
  collapsed: boolean;
  colorPrimary: string;

  // 操作方法
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setLocale: (locale: Locale) => void;
  toggleCollapsed: () => void;
  setCollapsed: (collapsed: boolean) => void;
  setColorPrimary: (color: string) => void;
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      theme: "light",
      locale: "zh-CN",
      collapsed: false,
      colorPrimary: "#1890ff",

      setTheme: (theme: ThemeMode) => set({ theme }),

      toggleTheme: () => {
        const { theme } = get();
        set({ theme: theme === "light" ? "dark" : "light" });
      },

      setLocale: (locale: Locale) => set({ locale }),

      toggleCollapsed: () => {
        const { collapsed } = get();
        set({ collapsed: !collapsed });
      },

      setCollapsed: (collapsed: boolean) => set({ collapsed }),

      setColorPrimary: (colorPrimary: string) => set({ colorPrimary }),
    }),
    {
      name: "settings-storage", // 持久化存储的键名
    }
  )
);

export default useSettingsStore;
