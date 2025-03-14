import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from "../hooks";
import { LoginParams } from "../types";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: LoginParams) => {
    try {
      setLoading(true);
      const success = await login(values);
      if (!success) {
        message.error("登录失败，请检查用户名和密码");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      size="large"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="用户名: admin / editor / guest"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="密码: 与用户名相同"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <a style={{ float: "right" }} href="#">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          登录
        </Button>
      </Form.Item>

      <div style={{ textAlign: "center" }}>
        <p>测试账号：</p>
        <p>管理员：admin / admin</p>
        <p>编辑者：editor / editor</p>
        <p>访客：guest / guest</p>
      </div>
    </Form>
  );
};

export default Login;
