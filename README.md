# 极简版中后台管理系统

一个基于 Vite + React + Ant Design + MockJS 构建的极简版中后台管理系统，覆盖高频需求场景。

## 核心亮点

- **动态路由权限控制**：基于 react-router@6 实现 admin/editor/guest 三种角色权限路由
- **高性能表格**：使用虚拟滚动（react-window）实现 10 万行数据的高效加载和渲染
- **自动化表单生成**：通过脚本生成 1000 种表单组合（faker.js + JSON Schema）
- **完整的 Mock 数据**：使用 MockJS 模拟后端接口，实现前后端分离开发

## 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **UI 组件库**：Ant Design
- **路由管理**：React Router 6
- **状态管理**：Zustand
- **HTTP 请求**：Axios
- **Mock 数据**：MockJS
- **数据生成**：Faker.js
- **虚拟滚动**：react-window

## 功能特性

- 用户认证与授权（登录、注销、权限控制）
- 动态路由与菜单管理
- 高性能大数据表格展示
- 复杂表单处理与验证
- 数据可视化展示
- 主题定制与多语言支持

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
src/
├── components/     # 通用组件
├── pages/          # 页面组件
├── layouts/        # 布局组件
├── routes/         # 路由配置
├── utils/          # 工具函数
├── hooks/          # 自定义 Hooks
├── services/       # API 服务
├── store/          # 状态管理
├── types/          # TypeScript 类型定义
└── mock/           # Mock 数据
```

## 在线演示

访问 [Vercel 部署地址](#) 查看在线演示

## API 文档

查看 [Postman 接口文档](#) 了解更多 API 详情

# next

完善更多页面组件，如用户详情、创建用户等
添加更多的图表和数据可视化组件
实现国际化支持
添加单元测试和集成测试
优化构建配置，提高性能
部署到 Vercel 或其他平台

## GitHub Pages 部署指南

为确保 GitHub Pages 正确部署，请按照以下步骤操作：

1. 在仓库设置中，导航到 "Settings" > "Pages"
2. 确保以下设置正确：
   - 源（Source）: 选择 "Deploy from a branch"
   - 分支（Branch）: 选择 "gh-pages" / "/(root)"
   - 自定义域（Custom domain）: 如果使用自定义域名，确保填写 "platform.yss520.online"
   - 强制 HTTPS: 建议启用

### 部署问题排查：

如果遇到 `git failed with exit code 128` 错误：

1. 检查 GitHub Actions 权限：

   - 进入仓库设置 > Actions > General
   - 确保 "Workflow permissions" 设置为 "Read and write permissions"

2. 如果使用个人访问令牌（PAT）部署：

   - 检查令牌是否有足够权限
   - 检查令牌是否过期

3. 使用最新版本的部署工具：
   - JamesIves/github-pages-deploy-action@v4
   - 或 peaceiris/actions-gh-pages@v3
