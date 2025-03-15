import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 使用相对路径，适配 GitHub Pages
  define: {
    // 确保环境变量在生产环境中可用
    "import.meta.env.VITE_USE_MOCK": JSON.stringify(true),
  },
});
