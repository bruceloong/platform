import Mock from "mockjs";

const Random = Mock.Random;

// 获取仪表盘数据接口
Mock.mock("/api/dashboard/data", "get", () => {
  return {
    code: 200,
    success: true,
    message: "获取成功",
    data: {
      totalUsers: Random.integer(1000, 5000),
      activeUsers: Random.integer(500, 1000),
      totalOrders: Random.integer(10000, 50000),
      pendingOrders: Random.integer(100, 500),
      totalSales: Random.float(100000, 1000000, 2, 2),
      todaySales: Random.float(1000, 10000, 2, 2),
      conversionRate: Random.float(1, 10, 2, 2),
      userGrowth: Random.float(-5, 20, 2, 2),
    },
  };
});

// 获取统计数据接口
Mock.mock("/api/dashboard/stats", "get", () => {
  return {
    code: 200,
    success: true,
    message: "获取成功",
    data: {
      userStats: {
        total: Random.integer(1000, 5000),
        active: Random.integer(500, 1000),
        new: Random.integer(50, 200),
        growth: Random.float(1, 10, 2, 2),
      },
      orderStats: {
        total: Random.integer(10000, 50000),
        pending: Random.integer(100, 500),
        completed: Random.integer(9000, 40000),
        cancelled: Random.integer(100, 1000),
      },
      productStats: {
        total: Random.integer(100, 500),
        outOfStock: Random.integer(10, 50),
        lowStock: Random.integer(20, 100),
      },
      salesStats: {
        total: Random.float(100000, 1000000, 2, 2),
        today: Random.float(1000, 10000, 2, 2),
        weekly: Random.float(10000, 100000, 2, 2),
        monthly: Random.float(50000, 500000, 2, 2),
      },
    },
  };
});

// 获取图表数据接口
Mock.mock(/\/api\/dashboard\/chart\/\w+$/, "get", (options: any) => {
  const chartType = options.url.match(/\/api\/dashboard\/chart\/(\w+)$/)[1];

  // 生成折线图数据
  if (chartType === "line") {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const data = months.map((month) => ({
      month,
      users: Random.integer(500, 1500),
      orders: Random.integer(1000, 3000),
      sales: Random.float(10000, 50000, 2, 2),
    }));

    return {
      code: 200,
      success: true,
      message: "获取成功",
      data,
    };
  }

  // 生成柱状图数据
  if (chartType === "bar") {
    const categories = [
      "电子产品",
      "服装",
      "食品",
      "家居",
      "美妆",
      "图书",
      "运动",
    ];
    const data = categories.map((category) => ({
      category,
      sales: Random.integer(1000, 10000),
      profit: Random.integer(500, 5000),
    }));

    return {
      code: 200,
      success: true,
      message: "获取成功",
      data,
    };
  }

  // 生成饼图数据
  if (chartType === "pie") {
    const data = [
      { name: "电子产品", value: Random.integer(20, 30) },
      { name: "服装", value: Random.integer(15, 25) },
      { name: "食品", value: Random.integer(10, 20) },
      { name: "家居", value: Random.integer(10, 15) },
      { name: "美妆", value: Random.integer(5, 15) },
      { name: "图书", value: Random.integer(5, 10) },
      { name: "运动", value: Random.integer(5, 10) },
    ];

    return {
      code: 200,
      success: true,
      message: "获取成功",
      data,
    };
  }

  // 生成雷达图数据
  if (chartType === "radar") {
    const data = {
      indicators: [
        { name: "销售", max: 10000 },
        { name: "管理", max: 10000 },
        { name: "信息技术", max: 10000 },
        { name: "客服", max: 10000 },
        { name: "研发", max: 10000 },
        { name: "市场", max: 10000 },
      ],
      series: [
        {
          name: "预算分配",
          value: [
            Random.integer(4000, 8000),
            Random.integer(4000, 8000),
            Random.integer(4000, 8000),
            Random.integer(4000, 8000),
            Random.integer(4000, 8000),
            Random.integer(4000, 8000),
          ],
        },
        {
          name: "实际开销",
          value: [
            Random.integer(3000, 9000),
            Random.integer(3000, 9000),
            Random.integer(3000, 9000),
            Random.integer(3000, 9000),
            Random.integer(3000, 9000),
            Random.integer(3000, 9000),
          ],
        },
      ],
    };

    return {
      code: 200,
      success: true,
      message: "获取成功",
      data,
    };
  }

  return {
    code: 400,
    success: false,
    message: "不支持的图表类型",
    data: null,
  };
});
