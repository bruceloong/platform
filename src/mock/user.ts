import Mock from "mockjs";
import { UserInfo, UserRole } from "../types";

const Random = Mock.Random;

// 生成随机用户数据
const generateUsers = (count: number) => {
  const users: UserInfo[] = [];

  // 预设三种角色的用户
  const adminUser: UserInfo = {
    id: "1",
    username: "admin",
    name: "管理员",
    avatar: Random.image("100x100", "#4A7BF7", "Admin"),
    email: "admin@example.com",
    role: "admin",
    permissions: ["*"],
  };

  const editorUser: UserInfo = {
    id: "2",
    username: "editor",
    name: "编辑者",
    avatar: Random.image("100x100", "#50C14E", "Editor"),
    email: "editor@example.com",
    role: "editor",
    permissions: ["read", "write", "edit"],
  };

  const guestUser: UserInfo = {
    id: "3",
    username: "guest",
    name: "访客",
    avatar: Random.image("100x100", "#FFC533", "Guest"),
    email: "guest@example.com",
    role: "guest",
    permissions: ["read"],
  };

  users.push(adminUser, editorUser, guestUser);

  // 生成其他随机用户
  for (let i = 4; i <= count; i++) {
    const role: UserRole = Random.pick(["admin", "editor", "guest"]);
    let permissions: string[] = [];

    switch (role) {
      case "admin":
        permissions = ["*"];
        break;
      case "editor":
        permissions = ["read", "write", "edit"];
        break;
      case "guest":
        permissions = ["read"];
        break;
    }

    users.push({
      id: String(i),
      username: Random.word(5, 10),
      name: Random.cname(),
      avatar: Random.image("100x100", Random.color(), Random.first()),
      email: Random.email(),
      role,
      permissions,
    });
  }

  return users;
};

// 生成20个用户
const users = generateUsers(20);

// 登录接口
Mock.mock("/api/auth/login", "post", (options: any) => {
  const { username, password } = JSON.parse(options.body);

  // 简单的用户名密码验证
  if (username === "admin" && password === "admin") {
    return {
      code: 200,
      success: true,
      message: "登录成功",
      data: {
        token: Random.guid(),
        user: users.find((user) => user.username === "admin"),
      },
    };
  } else if (username === "editor" && password === "editor") {
    return {
      code: 200,
      success: true,
      message: "登录成功",
      data: {
        token: Random.guid(),
        user: users.find((user) => user.username === "editor"),
      },
    };
  } else if (username === "guest" && password === "guest") {
    return {
      code: 200,
      success: true,
      message: "登录成功",
      data: {
        token: Random.guid(),
        user: users.find((user) => user.username === "guest"),
      },
    };
  } else {
    return {
      code: 400,
      success: false,
      message: "用户名或密码错误",
      data: null,
    };
  }
});

// 注销接口
Mock.mock("/api/auth/logout", "post", () => {
  return {
    code: 200,
    success: true,
    message: "注销成功",
    data: null,
  };
});

// 获取当前用户信息接口
Mock.mock("/api/auth/current-user", "get", () => {
  return {
    code: 200,
    success: true,
    message: "获取成功",
    data: users[0], // 默认返回管理员用户
  };
});

// 获取用户列表接口
Mock.mock(/\/api\/users(\?.+)?$/, "get", (options: any) => {
  const url = new URL(options.url, "http://localhost");
  const current = Number(url.searchParams.get("current")) || 1;
  const pageSize = Number(url.searchParams.get("pageSize")) || 10;

  const start = (current - 1) * pageSize;
  const end = start + pageSize;
  const list = users.slice(start, end);

  return {
    code: 200,
    success: true,
    message: "获取成功",
    data: {
      list,
      pagination: {
        current,
        pageSize,
        total: users.length,
      },
    },
  };
});

// 获取用户详情接口
Mock.mock(/\/api\/users\/\d+$/, "get", (options: any) => {
  const id = options.url.match(/\/api\/users\/(\d+)$/)[1];
  const user = users.find((item) => item.id === id);

  if (user) {
    return {
      code: 200,
      success: true,
      message: "获取成功",
      data: user,
    };
  } else {
    return {
      code: 404,
      success: false,
      message: "用户不存在",
      data: null,
    };
  }
});

// 创建用户接口
Mock.mock("/api/users", "post", (options: any) => {
  const newUser = JSON.parse(options.body);
  newUser.id = String(users.length + 1);
  users.push(newUser as UserInfo);

  return {
    code: 200,
    success: true,
    message: "创建成功",
    data: newUser,
  };
});

// 更新用户接口
Mock.mock(/\/api\/users\/\d+$/, "put", (options: any) => {
  const id = options.url.match(/\/api\/users\/(\d+)$/)[1];
  const updateData = JSON.parse(options.body);
  const index = users.findIndex((item) => item.id === id);

  if (index !== -1) {
    users[index] = { ...users[index], ...updateData };
    return {
      code: 200,
      success: true,
      message: "更新成功",
      data: users[index],
    };
  } else {
    return {
      code: 404,
      success: false,
      message: "用户不存在",
      data: null,
    };
  }
});

// 删除用户接口
Mock.mock(/\/api\/users\/\d+$/, "delete", (options: any) => {
  const id = options.url.match(/\/api\/users\/(\d+)$/)[1];
  const index = users.findIndex((item) => item.id === id);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    return {
      code: 200,
      success: true,
      message: "删除成功",
      data: deletedUser,
    };
  } else {
    return {
      code: 404,
      success: false,
      message: "用户不存在",
      data: null,
    };
  }
});
