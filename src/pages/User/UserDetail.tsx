import React, { useState, useEffect } from "react";
import {
  Card,
  Descriptions,
  Button,
  Spin,
  message,
  Avatar,
  Tag,
  Divider,
  Space,
} from "antd";
import {
  UserOutlined,
  EditOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import { userApi } from "../../services";
import { UserInfo } from "../../types";
import { getRoleName, getRoleColor } from "../../utils";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    fetchUserDetail();
  }, [id]);

  // 获取用户详情
  const fetchUserDetail = async () => {
    if (!id) return;

    try {
      setLoading(true);
      const res = await userApi.getUser(id);
      if (res.success) {
        setUser(res.data);
      } else {
        message.error("获取用户详情失败");
      }
    } catch (error) {
      console.error("获取用户详情失败:", error);
      message.error("获取用户详情失败");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <Spin size="large" tip="加载中..." />
      </div>
    );
  }

  if (!user) {
    return (
      <Card>
        <div style={{ textAlign: "center", padding: "30px 0" }}>
          <p>未找到用户信息</p>
          <Button type="primary" onClick={() => navigate("/user/list")}>
            返回用户列表
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card
      title={
        <Space>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/user/list")}
          >
            返回
          </Button>
          <span>用户详情</span>
        </Space>
      }
      extra={
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => navigate(`/user/edit/${id}`)}
        >
          编辑
        </Button>
      }
    >
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <Avatar
          size={80}
          src={user.avatar}
          icon={!user.avatar && <UserOutlined />}
        />
        <h2 style={{ marginTop: "16px", marginBottom: "4px" }}>{user.name}</h2>
        <Tag color={getRoleColor(user.role)}>{getRoleName(user.role)}</Tag>
      </div>

      <Divider />

      <Descriptions bordered column={2}>
        <Descriptions.Item label="用户ID">{user.id}</Descriptions.Item>
        <Descriptions.Item label="用户名">{user.username}</Descriptions.Item>
        <Descriptions.Item label="邮箱">{user.email}</Descriptions.Item>
        <Descriptions.Item label="角色">
          <Tag color={getRoleColor(user.role)}>{getRoleName(user.role)}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="权限" span={2}>
          {user.permissions && user.permissions.length > 0 ? (
            <div>
              {user.permissions.map((permission) => (
                <Tag key={permission} style={{ margin: "2px" }}>
                  {permission}
                </Tag>
              ))}
            </div>
          ) : (
            <span>无特殊权限</span>
          )}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default UserDetail;
