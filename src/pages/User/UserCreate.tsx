import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Select,
  message,
  Space,
  Divider,
} from "antd";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../services";
import { UserRole } from "../../types";

const { Option } = Select;

interface UserFormValues {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

const UserCreate: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // 提交表单
  const onFinish = async (values: UserFormValues) => {
    // 检查密码是否一致
    if (values.password !== values.confirmPassword) {
      message.error("两次输入的密码不一致");
      return;
    }

    try {
      setLoading(true);
      const { confirmPassword, ...userData } = values;
      const res = await userApi.createUser(userData);
      if (res.success) {
        message.success("创建用户成功");
        navigate("/user/list");
      } else {
        message.error(res.message || "创建用户失败");
      }
    } catch (error) {
      console.error("创建用户失败:", error);
      message.error("创建用户失败");
    } finally {
      setLoading(false);
    }
  };

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
          <span>创建用户</span>
        </Space>
      }
    >
      <Form
        form={form}
        name="user_create"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: "请输入用户名" },
            { min: 3, message: "用户名至少3个字符" },
            { max: 20, message: "用户名最多20个字符" },
          ]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: "请输入邮箱" },
            { type: "email", message: "请输入有效的邮箱地址" },
          ]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            { min: 6, message: "密码至少6个字符" },
          ]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          rules={[
            { required: true, message: "请确认密码" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次输入的密码不一致"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="请确认密码" />
        </Form.Item>

        <Form.Item
          label="角色"
          name="role"
          rules={[{ required: true, message: "请选择角色" }]}
        >
          <Select placeholder="请选择角色">
            <Option value="admin">管理员</Option>
            <Option value="editor">编辑者</Option>
            <Option value="guest">访客</Option>
          </Select>
        </Form.Item>

        <Divider />

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              loading={loading}
            >
              创建
            </Button>
            <Button onClick={() => navigate("/user/list")}>取消</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UserCreate;
