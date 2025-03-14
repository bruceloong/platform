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
  TablePaginationConfig,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../services";
import { UserInfo, UserRole } from "../../types";
import { getRoleName, getRoleColor } from "../../utils";

const UserList: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserInfo[]>([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [searchText, setSearchText] = useState("");

  // 获取用户列表
  const fetchUsers = async (
    page = pagination.current,
    pageSize = pagination.pageSize
  ) => {
    try {
      setLoading(true);
      const res = await userApi.getUsers({ current: page, pageSize });
      if (res.success) {
        setData(res.data.list);
        setPagination({
          ...pagination,
          current: res.data.pagination.current,
          total: res.data.pagination.total || 0,
        });
      }
    } catch (error) {
      console.error("获取用户列表失败:", error);
      message.error("获取用户列表失败");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 处理表格分页变化
  const handleTableChange = (pagination: TablePaginationConfig) => {
    fetchUsers(pagination.current, pagination.pageSize);
  };

  // 处理搜索
  const handleSearch = () => {
    fetchUsers(1);
  };

  // 处理删除用户
  const handleDelete = async (id: string) => {
    try {
      const res = await userApi.deleteUser(id);
      if (res.success) {
        message.success("删除成功");
        fetchUsers();
      }
    } catch (error) {
      console.error("删除用户失败:", error);
      message.error("删除用户失败");
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
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      render: (role: UserRole) => (
        <Tag color={getRoleColor(role)}>{getRoleName(role)}</Tag>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_: unknown, record: UserInfo) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => navigate(`/user/detail/${record.id}`)}
          >
            查看
          </Button>
          <Popconfirm
            title="确定要删除此用户吗?"
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
    <Card
      title="用户列表"
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/user/create")}
        >
          新建用户
        </Button>
      }
    >
      <div style={{ marginBottom: 16 }}>
        <Input
          placeholder="搜索用户名或邮箱"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onPressEnter={handleSearch}
          style={{ width: 300, marginRight: 8 }}
          prefix={<SearchOutlined />}
        />
        <Button type="primary" onClick={handleSearch}>
          搜索
        </Button>
      </div>

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

export default UserList;
