import Mock from "mockjs";
import { TableItem } from "../types";

const Random = Mock.Random;

// 生成大量表格数据（用于虚拟滚动）
const generateLargeTableData = (count: number): TableItem[] => {
  const data: TableItem[] = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: String(i),
      name: Random.cname(),
      age: Random.integer(18, 60),
      address: Random.county(true),
      email: Random.email(),
      phone: Random.string("1234567890", 11),
      status: Random.pick(["active", "inactive", "pending"]),
      createdAt: Random.datetime("yyyy-MM-dd HH:mm:ss"),
      updatedAt: Random.datetime("yyyy-MM-dd HH:mm:ss"),
    });
  }

  return data;
};

// 生成100,000条数据
const largeTableData = generateLargeTableData(100000);

// 生成普通表格数据
const generateTableData = (count: number): TableItem[] => {
  const data: TableItem[] = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: String(i),
      name: Random.cname(),
      department: Random.pick([
        "技术部",
        "市场部",
        "销售部",
        "财务部",
        "人事部",
      ]),
      role: Random.pick(["管理员", "开发者", "测试员", "设计师", "产品经理"]),
      salary: Random.float(5000, 20000, 2, 2),
      hireDate: Random.date("yyyy-MM-dd"),
      performance: Random.pick(["优秀", "良好", "一般", "较差"]),
      status: Random.boolean() ? "在职" : "离职",
    });
  }

  return data;
};

// 生成100条普通表格数据
const tableData = generateTableData(100);

// 获取大数据表格数据接口
Mock.mock(/\/api\/table\/large-data(\?.+)?$/, "get", (options: any) => {
  const url = new URL(options.url, "http://localhost");
  const current = Number(url.searchParams.get("current")) || 1;
  const pageSize = Number(url.searchParams.get("pageSize")) || 100;

  const start = (current - 1) * pageSize;
  const end = start + pageSize;
  const list = largeTableData.slice(start, end);

  return {
    code: 200,
    success: true,
    message: "获取成功",
    data: {
      list,
      pagination: {
        current,
        pageSize,
        total: largeTableData.length,
      },
    },
  };
});

// 获取普通表格数据接口
Mock.mock(/\/api\/table\/data(\?.+)?$/, "get", (options: any) => {
  const url = new URL(options.url, "http://localhost");
  const current = Number(url.searchParams.get("current")) || 1;
  const pageSize = Number(url.searchParams.get("pageSize")) || 10;

  const start = (current - 1) * pageSize;
  const end = start + pageSize;
  const list = tableData.slice(start, end);

  return {
    code: 200,
    success: true,
    message: "获取成功",
    data: {
      list,
      pagination: {
        current,
        pageSize,
        total: tableData.length,
      },
    },
  };
});
