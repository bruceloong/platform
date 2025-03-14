import React, { useState, useEffect } from "react";
import { Row, Col, Card, Statistic, Spin, Tabs, DatePicker } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Line, Column, Pie, Radar } from "@ant-design/charts";
import { dashboardApi } from "../services";

interface DashboardData {
  totalUsers: number;
  activeUsers: number;
  totalOrders: number;
  pendingOrders: number;
  totalSales: number;
  todaySales: number;
  conversionRate: number;
  userGrowth: number;
}

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await dashboardApi.getDashboardData();
        if (res.success) {
          setData(res.data);
        }
      } catch (error) {
        console.error("获取仪表盘数据失败:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 折线图数据
  const lineData = [
    { month: "1月", value: 3500, category: "销售额" },
    { month: "2月", value: 2800, category: "销售额" },
    { month: "3月", value: 4100, category: "销售额" },
    { month: "4月", value: 3800, category: "销售额" },
    { month: "5月", value: 5200, category: "销售额" },
    { month: "6月", value: 4900, category: "销售额" },
    { month: "7月", value: 6100, category: "销售额" },
    { month: "8月", value: 5800, category: "销售额" },
    { month: "9月", value: 6800, category: "销售额" },
    { month: "10月", value: 7200, category: "销售额" },
    { month: "11月", value: 6900, category: "销售额" },
    { month: "12月", value: 8100, category: "销售额" },
    { month: "1月", value: 1500, category: "订单量" },
    { month: "2月", value: 1200, category: "订单量" },
    { month: "3月", value: 1900, category: "订单量" },
    { month: "4月", value: 1800, category: "订单量" },
    { month: "5月", value: 2200, category: "订单量" },
    { month: "6月", value: 2100, category: "订单量" },
    { month: "7月", value: 2500, category: "订单量" },
    { month: "8月", value: 2400, category: "订单量" },
    { month: "9月", value: 2800, category: "订单量" },
    { month: "10月", value: 3000, category: "订单量" },
    { month: "11月", value: 2900, category: "订单量" },
    { month: "12月", value: 3500, category: "订单量" },
  ];

  // 柱状图数据
  const columnData = [
    { month: "1月", value: 350 },
    { month: "2月", value: 280 },
    { month: "3月", value: 410 },
    { month: "4月", value: 380 },
    { month: "5月", value: 520 },
    { month: "6月", value: 490 },
    { month: "7月", value: 610 },
    { month: "8月", value: 580 },
    { month: "9月", value: 680 },
    { month: "10月", value: 720 },
    { month: "11月", value: 690 },
    { month: "12月", value: 810 },
  ];

  // 饼图数据
  const pieData = [
    { type: "电子产品", value: 35 },
    { type: "服装", value: 25 },
    { type: "食品", value: 15 },
    { type: "家居", value: 10 },
    { type: "其他", value: 15 },
  ];

  // 雷达图数据
  const radarData = [
    { item: "销售", user: "用户A", score: 80 },
    { item: "营销", user: "用户A", score: 70 },
    { item: "开发", user: "用户A", score: 60 },
    { item: "客服", user: "用户A", score: 90 },
    { item: "运营", user: "用户A", score: 85 },
    { item: "销售", user: "用户B", score: 70 },
    { item: "营销", user: "用户B", score: 90 },
    { item: "开发", user: "用户B", score: 80 },
    { item: "客服", user: "用户B", score: 60 },
    { item: "运营", user: "用户B", score: 75 },
  ];

  // 折线图配置
  const lineConfig = {
    data: lineData,
    xField: "month",
    yField: "value",
    seriesField: "category",
    yAxis: {
      title: {
        text: "金额 (元)",
      },
    },
    legend: {
      position: "top",
    },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 1000,
      },
    },
  };

  // 柱状图配置
  const columnConfig = {
    data: columnData,
    xField: "month",
    yField: "value",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    meta: {
      value: {
        alias: "新增用户",
      },
    },
    color: "#1890ff",
  };

  // 饼图配置
  const pieConfig = {
    data: pieData,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };

  // 雷达图配置
  const radarConfig = {
    data: radarData,
    xField: "item",
    yField: "score",
    seriesField: "user",
    meta: {
      score: {
        alias: "分数",
        min: 0,
        max: 100,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: "rgba(0, 0, 0, 0.04)",
      },
    },
    point: {
      size: 2,
    },
    area: {},
  };

  if (loading || !data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <Spin size="large" tip="加载中..." />
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ marginBottom: "24px" }}>仪表盘</h1>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="总用户数"
              value={data.totalUsers}
              prefix={<UserOutlined />}
              suffix={
                <span
                  style={{
                    fontSize: "14px",
                    color: data.userGrowth >= 0 ? "#52c41a" : "#ff4d4f",
                  }}
                >
                  {data.userGrowth >= 0 ? (
                    <ArrowUpOutlined />
                  ) : (
                    <ArrowDownOutlined />
                  )}
                  {Math.abs(data.userGrowth)}%
                </span>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="活跃用户"
              value={data.activeUsers}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="总订单数"
              value={data.totalOrders}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="待处理订单"
              value={data.pendingOrders}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: "#faad14" }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="总销售额"
              value={data.totalSales}
              precision={2}
              prefix={<DollarOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="今日销售额"
              value={data.todaySales}
              precision={2}
              prefix={<DollarOutlined />}
              valueStyle={{ color: "#52c41a" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="转化率"
              value={data.conversionRate}
              precision={2}
              prefix={<LineChartOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="用户增长率"
              value={data.userGrowth}
              precision={2}
              prefix={
                data.userGrowth >= 0 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
              valueStyle={{
                color: data.userGrowth >= 0 ? "#52c41a" : "#ff4d4f",
              }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <div style={{ marginTop: "24px" }}>
        <Card
          title="数据分析"
          extra={
            <RangePicker
              style={{ marginRight: "16px" }}
              placeholder={["开始日期", "结束日期"]}
            />
          }
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="销售趋势" key="1">
              <div style={{ height: "400px", padding: "20px 0" }}>
                <Line {...lineConfig} />
              </div>
            </TabPane>
            <TabPane tab="用户增长" key="2">
              <div style={{ height: "400px", padding: "20px 0" }}>
                <Column {...columnConfig} />
              </div>
            </TabPane>
            <TabPane tab="销售分布" key="3">
              <Row gutter={16}>
                <Col span={12}>
                  <div style={{ height: "400px", padding: "20px 0" }}>
                    <Pie {...pieConfig} />
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ height: "400px", padding: "20px 0" }}>
                    <Radar {...radarConfig} />
                  </div>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
