import React, { useState } from "react";
import {
  Card,
  Avatar,
  Tabs,
  Form,
  Input,
  Button,
  Divider,
  message,
  Upload,
  List,
  Tag,
  Switch,
  Space,
  Typography,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  BellOutlined,
  SafetyOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useAuth } from "../hooks";
import { getRoleName, getRoleColor } from "../utils";

const { TabPane } = Tabs;
const { Title } = Typography;

// 定义表单值类型
interface ProfileFormValues {
  name: string;
  email: string;
  phone?: string;
  bio?: string;
}

interface PasswordFormValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [passwordForm] = Form.useForm();
  const [profileForm] = Form.useForm();

  // 更新个人信息
  const handleUpdateProfile = async (_values: ProfileFormValues) => {
    try {
      setLoading(true);
      // 模拟API调用
      setTimeout(() => {
        message.success("个人信息更新成功");
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("更新个人信息失败:", error);
      message.error("更新个人信息失败");
      setLoading(false);
    }
  };

  // 修改密码
  const handleChangePassword = async (_values: PasswordFormValues) => {
    try {
      setLoading(true);
      // 模拟API调用
      setTimeout(() => {
        message.success("密码修改成功");
        passwordForm.resetFields();
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("修改密码失败:", error);
      message.error("修改密码失败");
      setLoading(false);
    }
  };

  // 个人信息表单
  const renderProfileForm = () => {
    return (
      <Form
        form={profileForm}
        layout="vertical"
        initialValues={{
          name: user?.name,
          email: user?.email,
        }}
        onFinish={handleUpdateProfile}
      >
        <Form.Item label="头像">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="/api/upload/avatar"
            beforeUpload={(file) => {
              const isJpgOrPng =
                file.type === "image/jpeg" || file.type === "image/png";
              if (!isJpgOrPng) {
                message.error("只能上传 JPG/PNG 格式的图片!");
              }
              const isLt2M = file.size / 1024 / 1024 < 2;
              if (!isLt2M) {
                message.error("图片大小不能超过 2MB!");
              }
              return isJpgOrPng && isLt2M;
            }}
          >
            {user?.avatar ? (
              <img src={user.avatar} alt="avatar" style={{ width: "100%" }} />
            ) : (
              <div>
                <UploadOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="请输入姓名" />
        </Form.Item>

        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            { required: true, message: "请输入邮箱" },
            { type: "email", message: "请输入有效的邮箱地址" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="请输入邮箱" />
        </Form.Item>

        <Form.Item name="phone" label="电话">
          <Input placeholder="请输入电话" />
        </Form.Item>

        <Form.Item name="bio" label="个人简介">
          <Input.TextArea rows={4} placeholder="请输入个人简介" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  };

  // 安全设置表单
  const renderSecurityForm = () => {
    return (
      <Form
        form={passwordForm}
        layout="vertical"
        onFinish={handleChangePassword}
      >
        <Form.Item
          name="oldPassword"
          label="当前密码"
          rules={[{ required: true, message: "请输入当前密码" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="请输入当前密码"
          />
        </Form.Item>

        <Form.Item
          name="newPassword"
          label="新密码"
          rules={[
            { required: true, message: "请输入新密码" },
            { min: 6, message: "密码长度不能少于6个字符" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="请输入新密码"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="确认新密码"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "请确认新密码" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次输入的密码不一致"));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="请确认新密码"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            修改密码
          </Button>
        </Form.Item>
      </Form>
    );
  };

  // 通知设置
  const renderNotificationSettings = () => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={[
          {
            title: "系统通知",
            description: "接收系统更新和维护通知",
            defaultChecked: true,
          },
          {
            title: "任务提醒",
            description: "接收任务分配和截止日期提醒",
            defaultChecked: true,
          },
          {
            title: "消息通知",
            description: "接收新消息和评论通知",
            defaultChecked: false,
          },
          {
            title: "邮件通知",
            description: "通过邮件接收重要通知",
            defaultChecked: true,
          },
        ]}
        renderItem={(item) => (
          <List.Item
            actions={[<Switch defaultChecked={item.defaultChecked} />]}
          >
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    );
  };

  // 账户信息
  const renderAccountInfo = () => {
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Avatar
            size={80}
            src={user?.avatar}
            icon={!user?.avatar && <UserOutlined />}
          />
          <Title level={4} style={{ marginTop: "16px", marginBottom: "4px" }}>
            {user?.name}
          </Title>
          {user?.role && (
            <Tag color={getRoleColor(user.role)}>{getRoleName(user.role)}</Tag>
          )}
        </div>

        <Divider />

        <List>
          <List.Item>
            <List.Item.Meta title="用户名" description={user?.username} />
          </List.Item>
          <List.Item>
            <List.Item.Meta title="邮箱" description={user?.email} />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              title="角色"
              description={user?.role ? getRoleName(user.role) : "未知"}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              title="权限"
              description={
                <Space wrap>
                  {user?.permissions && user.permissions.length > 0 ? (
                    user.permissions.map((permission) => (
                      <Tag key={permission}>{permission}</Tag>
                    ))
                  ) : (
                    <span>无特殊权限</span>
                  )}
                </Space>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta title="注册时间" description="2023-01-01" />
          </List.Item>
          <List.Item>
            <List.Item.Meta title="最后登录" description="2023-06-15" />
          </List.Item>
        </List>
      </div>
    );
  };

  return (
    <Card title="个人中心">
      <Tabs defaultActiveKey="profile">
        <TabPane
          tab={
            <span>
              <UserOutlined />
              个人信息
            </span>
          }
          key="profile"
        >
          {renderProfileForm()}
        </TabPane>
        <TabPane
          tab={
            <span>
              <SafetyOutlined />
              安全设置
            </span>
          }
          key="security"
        >
          {renderSecurityForm()}
        </TabPane>
        <TabPane
          tab={
            <span>
              <BellOutlined />
              通知设置
            </span>
          }
          key="notification"
        >
          {renderNotificationSettings()}
        </TabPane>
        <TabPane
          tab={
            <span>
              <UserOutlined />
              账户信息
            </span>
          }
          key="account"
        >
          {renderAccountInfo()}
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default Profile;
