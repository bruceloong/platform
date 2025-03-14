import React from "react";
import {
  Card,
  Form,
  Switch,
  Select,
  Button,
  Divider,
  Radio,
  Space,
  message,
  List,
  Typography,
} from "antd";
import {
  GlobalOutlined,
  BgColorsOutlined,
  SettingOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  CloudOutlined,
} from "@ant-design/icons";
import { useSettingsStore } from "../store";

const { Option } = Select;
const { Title, Paragraph } = Typography;

const Settings: React.FC = () => {
  const { theme, locale, colorPrimary, setTheme, setLocale, setColorPrimary } =
    useSettingsStore();

  // 保存设置
  const handleSave = () => {
    message.success("设置已保存");
  };

  // 重置设置
  const handleReset = () => {
    setTheme("light");
    setLocale("zh-CN");
    setColorPrimary("#1890ff");
    message.success("设置已重置");
  };

  return (
    <Card title="系统设置">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <section style={{ marginBottom: "24px" }}>
          <Title level={4}>
            <BgColorsOutlined /> 外观设置
          </Title>
          <Divider />
          <Form layout="vertical">
            <Form.Item label="主题模式">
              <Radio.Group
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                <Radio.Button value="light">浅色</Radio.Button>
                <Radio.Button value="dark">深色</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="主题色">
              <Select
                value={colorPrimary}
                onChange={setColorPrimary}
                style={{ width: "200px" }}
              >
                <Option value="#1890ff">默认蓝</Option>
                <Option value="#52c41a">清新绿</Option>
                <Option value="#fa8c16">活力橙</Option>
                <Option value="#f5222d">热情红</Option>
                <Option value="#722ed1">高贵紫</Option>
              </Select>
            </Form.Item>
          </Form>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <Title level={4}>
            <GlobalOutlined /> 语言设置
          </Title>
          <Divider />
          <Form layout="vertical">
            <Form.Item label="系统语言">
              <Select
                value={locale}
                onChange={setLocale}
                style={{ width: "200px" }}
              >
                <Option value="zh-CN">简体中文</Option>
                <Option value="en-US">English</Option>
              </Select>
            </Form.Item>
          </Form>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <Title level={4}>
            <SettingOutlined /> 系统设置
          </Title>
          <Divider />
          <List>
            <List.Item actions={[<Switch defaultChecked />]}>
              <List.Item.Meta
                title="自动更新"
                description="允许系统自动检查并安装更新"
              />
            </List.Item>
            <List.Item actions={[<Switch defaultChecked />]}>
              <List.Item.Meta
                title="错误报告"
                description="自动发送匿名错误报告以帮助改进系统"
              />
            </List.Item>
            <List.Item actions={[<Switch />]}>
              <List.Item.Meta
                title="开发者模式"
                description="启用开发者工具和调试功能"
              />
            </List.Item>
          </List>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <Title level={4}>
            <DatabaseOutlined /> 数据管理
          </Title>
          <Divider />
          <List>
            <List.Item
              actions={[
                <Button type="primary" danger>
                  清除缓存
                </Button>,
              ]}
            >
              <List.Item.Meta
                title="清除本地缓存"
                description="清除浏览器中存储的临时数据和缓存"
              />
            </List.Item>
            <List.Item actions={[<Button>导出数据</Button>]}>
              <List.Item.Meta
                title="导出数据"
                description="将系统数据导出为 JSON 或 CSV 格式"
              />
            </List.Item>
          </List>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <Title level={4}>
            <SafetyOutlined /> 安全设置
          </Title>
          <Divider />
          <List>
            <List.Item actions={[<Switch defaultChecked />]}>
              <List.Item.Meta
                title="双因素认证"
                description="启用双因素认证以增强账户安全性"
              />
            </List.Item>
            <List.Item actions={[<Switch defaultChecked />]}>
              <List.Item.Meta
                title="登录通知"
                description="当账户在新设备上登录时发送通知"
              />
            </List.Item>
          </List>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <Title level={4}>
            <CloudOutlined /> 高级设置
          </Title>
          <Divider />
          <Paragraph>
            这些设置可能会影响系统性能和稳定性，请谨慎修改。
          </Paragraph>
          <List>
            <List.Item actions={[<Switch />]}>
              <List.Item.Meta
                title="实验性功能"
                description="启用尚未正式发布的实验性功能"
              />
            </List.Item>
            <List.Item actions={[<Switch />]}>
              <List.Item.Meta
                title="性能模式"
                description="优化系统性能，可能会增加资源消耗"
              />
            </List.Item>
          </List>
        </section>

        <Divider />

        <div style={{ textAlign: "center" }}>
          <Space>
            <Button type="primary" onClick={handleSave}>
              保存设置
            </Button>
            <Button onClick={handleReset}>恢复默认</Button>
          </Space>
        </div>
      </div>
    </Card>
  );
};

export default Settings;
