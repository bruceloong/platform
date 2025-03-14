import React, { useState, useEffect } from "react";
import {
  Table,
  Card,
  Button,
  Space,
  Tag,
  Popconfirm,
  message,
  Input,
  Form,
  Select,
  TablePaginationConfig,
} from "antd";
import {
  SearchOutlined,
  ReloadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { tableApi } from "../../services";
import { TableItem } from "../../types";

const { Option } = Select;

interface SearchParams {
  name?: string;
  status?: string;
}

const BasicTable: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TableItem[]>([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // 获取表格数据
  const fetchData = async (params: SearchParams = {}) => {
    try {
      setLoading(true);
      const res = await tableApi.getTableData({
        current: pagination.current,
        pageSize: pagination.pageSize,
        ...params,
      });
      if (res.success) {
        setData(res.data.list);
        setPagination({
          ...pagination,
          current: res.data.pagination.current,
          total: res.data.pagination.total || 0,
        });
      }
    } catch (error) {
      console.error("获取表格数据失败:", error);
      message.error("获取表格数据失败");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 处理表格分页变化
  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPagination(pagination as any);
    fetchData();
  };

  // 处理搜索
  const handleSearch = (values: SearchParams) => {
    setPagination({ ...pagination, current: 1 });
    fetchData(values);
  };

  // 处理重置
  const handleReset = () => {
    form.resetFields();
    setPagination({ ...pagination, current: 1 });
    fetchData();
  };

  // 处理删除
  const handleDelete = async (id: string) => {
    try {
      // 模拟删除操作
      setTimeout(() => {
        message.success("删除成功");
        // 从当前数据中移除被删除的项
        setData(data.filter((item) => item.id !== id));
      }, 500);
    } catch (error) {
      console.error("删除失败:", error);
      message.error("删除失败");
    }
  };

  // 表格列定义
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      sorter: (a: TableItem, b: TableItem) => a.age - b.age,
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "default";
        let text = "未知";

        switch (status) {
          case "active":
            color = "success";
            text = "活跃";
            break;
          case "inactive":
            color = "default";
            text = "不活跃";
            break;
          case "pending":
            color = "processing";
            text = "待处理";
            break;
          case "error":
            color = "error";
            text = "错误";
            break;
        }

        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a: TableItem, b: TableItem) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "操作",
      key: "action",
      render: (_: unknown, record: TableItem) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => message.info(`编辑 ID: ${record.id}`)}
          >
            编辑
          </Button>
          <Popconfirm
            title="确定要删除此项吗?"
            onConfirm={() => handleDelete(record.id)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="text" danger icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card title="基础表格">
      <Form
        form={form}
        layout="inline"
        onFinish={handleSearch}
        style={{ marginBottom: "24px" }}
      >
        <Form.Item name="name">
          <Input placeholder="搜索名称" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="status">
          <Select placeholder="选择状态" style={{ width: 120 }} allowClear>
            <Option value="active">活跃</Option>
            <Option value="inactive">不活跃</Option>
            <Option value="pending">待处理</Option>
            <Option value="error">错误</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button onClick={handleReset}>重置</Button>
            <Button icon={<ReloadOutlined />} onClick={() => fetchData()}>
              刷新
            </Button>
          </Space>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        rowKey="id"
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </Card>
  );
};

export default BasicTable;
