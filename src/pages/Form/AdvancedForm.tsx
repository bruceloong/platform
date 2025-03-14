import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Steps,
  Select,
  DatePicker,
  Checkbox,
  message,
  Row,
  Col,
  Typography,
  Upload,
} from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  PlusOutlined,
  MinusCircleOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { formApi } from "../../services";
import { Dayjs } from "dayjs";

const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;
const { Dragger } = Upload;

interface StepFormValues {
  basicInfo?: {
    name: string;
    email: string;
    phone: string;
  };
  projectInfo?: {
    projectName: string;
    projectType: string;
    startDate: Dayjs;
    endDate: Dayjs;
    description: string;
  };
  teamInfo?: {
    teamMembers: Array<{
      name: string;
      role: string;
    }>;
    attachments: any[];
    agreement: boolean;
  };
}

const AdvancedForm: React.FC = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState<StepFormValues>({});
  const [loading, setLoading] = useState(false);

  // 处理下一步
  const handleNext = async () => {
    try {
      const values = await form.validateFields();
      setFormValues({ ...formValues, ...values });

      if (currentStep === 2) {
        message.success("表单提交成功");
        setCurrentStep(0);
        form.resetFields();
      } else {
        setCurrentStep(currentStep + 1);
      }
    } catch (error) {
      console.error("表单验证失败:", error);
    }
  };

  // 处理上一步
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  // 渲染步骤条
  const renderSteps = () => {
    return (
      <Steps current={currentStep}>
        <Step title="基本信息" icon={<UserOutlined />} />
        <Step title="项目信息" icon={<SolutionOutlined />} />
        <Step
          title="团队信息"
          icon={loading ? <LoadingOutlined /> : <SmileOutlined />}
        />
      </Steps>
    );
  };

  // 渲染表单内容
  const renderContent = () => {
    if (currentStep === 0) {
      return (
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              { required: true, message: "请输入邮箱" },
              { type: "email", message: "请输入有效的邮箱地址" },
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="电话"
            rules={[{ required: true, message: "请输入电话" }]}
          >
            <Input placeholder="请输入电话" />
          </Form.Item>
        </Form>
      );
    } else if (currentStep === 1) {
      return (
        <Form form={form} layout="vertical">
          <Form.Item
            name="projectName"
            label="项目名称"
            rules={[{ required: true, message: "请输入项目名称" }]}
          >
            <Input placeholder="请输入项目名称" />
          </Form.Item>
          <Form.Item
            name="projectType"
            label="项目类型"
            rules={[{ required: true, message: "请选择项目类型" }]}
          >
            <Select placeholder="请选择项目类型">
              <Option value="web">Web 应用</Option>
              <Option value="mobile">移动应用</Option>
              <Option value="desktop">桌面应用</Option>
            </Select>
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="startDate"
                label="开始日期"
                rules={[{ required: true, message: "请选择开始日期" }]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="endDate"
                label="结束日期"
                rules={[{ required: true, message: "请选择结束日期" }]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="description"
            label="项目描述"
            rules={[{ required: true, message: "请输入项目描述" }]}
          >
            <TextArea rows={4} placeholder="请输入项目描述" />
          </Form.Item>
        </Form>
      );
    } else {
      return (
        <Form form={form} layout="vertical">
          <Form.List name="teamMembers" initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Row key={field.key} gutter={16}>
                    <Col span={10}>
                      <Form.Item
                        {...field}
                        name={[field.name, "name"]}
                        label="成员姓名"
                        rules={[{ required: true, message: "请输入成员姓名" }]}
                      >
                        <Input placeholder="请输入成员姓名" />
                      </Form.Item>
                    </Col>
                    <Col span={10}>
                      <Form.Item
                        {...field}
                        name={[field.name, "role"]}
                        label="角色"
                        rules={[{ required: true, message: "请输入角色" }]}
                      >
                        <Input placeholder="请输入角色" />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Button
                        type="link"
                        danger
                        icon={<MinusCircleOutlined />}
                        onClick={() => remove(field.name)}
                        style={{ marginTop: "30px" }}
                      >
                        删除
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    添加团队成员
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("请同意协议")),
              },
            ]}
          >
            <Checkbox>我已阅读并同意服务协议</Checkbox>
          </Form.Item>
        </Form>
      );
    }
  };

  // 渲染按钮
  const renderButtons = () => {
    return (
      <div style={{ marginTop: "24px", textAlign: "right" }}>
        {currentStep > 0 && (
          <Button style={{ marginRight: "8px" }} onClick={handlePrev}>
            上一步
          </Button>
        )}
        <Button type="primary" onClick={handleNext} loading={loading}>
          {currentStep === 2 ? "提交" : "下一步"}
        </Button>
      </div>
    );
  };

  return (
    <Card title="高级表单">
      {renderSteps()}
      <div style={{ marginTop: "24px" }}>{renderContent()}</div>
      {renderButtons()}
    </Card>
  );
};

export default AdvancedForm;
