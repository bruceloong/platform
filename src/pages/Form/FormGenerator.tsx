import React, { useState } from "react";
import {
  Card,
  Form,
  InputNumber,
  Button,
  Alert,
  Spin,
  Divider,
  message,
  Collapse,
  Typography,
} from "antd";
import { formApi } from "../../services";
import { FormConfig, FormField } from "../../types";

const { Panel } = Collapse;
const { Title, Paragraph, Text } = Typography;

interface OptionType {
  label: string;
  value: string | number | boolean;
}

const FormGenerator: React.FC = () => {
  const [form] = Form.useForm();
  const [generating, setGenerating] = useState(false);
  const [generatedForms, setGeneratedForms] = useState<FormConfig[]>([]);

  // 生成表单配置
  const handleGenerate = async (values: { count: number }) => {
    try {
      setGenerating(true);
      const res = await formApi.generateFormConfig(values.count);
      if (res.success) {
        setGeneratedForms(res.data);
        message.success(`成功生成 ${res.data.length} 个表单配置`);
      }
    } catch (error) {
      console.error("生成表单配置失败:", error);
      message.error("生成表单配置失败");
    } finally {
      setGenerating(false);
    }
  };

  // 渲染表单字段
  const renderFormField = (field: FormField) => {
    return (
      <div
        key={field.name}
        style={{
          marginBottom: "8px",
          padding: "8px",
          border: "1px dashed #d9d9d9",
          borderRadius: "4px",
        }}
      >
        <div>
          <Text strong>字段名称:</Text> {field.name}
        </div>
        <div>
          <Text strong>标签:</Text> {field.label}
        </div>
        <div>
          <Text strong>类型:</Text> {field.type}
        </div>
        <div>
          <Text strong>是否必填:</Text> {field.required ? "是" : "否"}
        </div>
        {field.placeholder && (
          <div>
            <Text strong>占位符:</Text> {field.placeholder}
          </div>
        )}
        {field.defaultValue !== undefined && (
          <div>
            <Text strong>默认值:</Text>{" "}
            {typeof field.defaultValue === "object"
              ? JSON.stringify(field.defaultValue)
              : String(field.defaultValue)}
          </div>
        )}
        {field.options && (
          <div>
            <Text strong>选项:</Text>
            <ul style={{ margin: "4px 0", paddingLeft: "20px" }}>
              {field.options.map((option: OptionType, index: number) => (
                <li key={index}>
                  {option.label} ({option.value})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Card title="表单生成器">
        <Alert
          message="表单生成器"
          description="这个工具可以帮助你生成多种表单组合，用于测试和开发。你可以指定要生成的表单数量，最多可以生成1000个不同的表单配置。"
          type="info"
          showIcon
          style={{ marginBottom: "24px" }}
        />

        <Form
          form={form}
          onFinish={handleGenerate}
          initialValues={{ count: 10 }}
          layout="inline"
        >
          <Form.Item
            name="count"
            label="生成数量"
            rules={[
              { required: true, message: "请输入要生成的表单数量" },
              {
                type: "number",
                min: 1,
                max: 1000,
                message: "数量必须在1-1000之间",
              },
            ]}
          >
            <InputNumber min={1} max={1000} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={generating}>
              生成表单
            </Button>
          </Form.Item>
        </Form>

        <Divider />

        {generating ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <Spin size="large" tip="正在生成表单配置..." />
          </div>
        ) : generatedForms.length > 0 ? (
          <div>
            <Title level={4}>已生成 {generatedForms.length} 个表单配置</Title>
            <Paragraph>
              以下是生成的表单配置，你可以点击展开查看详情。每个表单都有不同的字段组合和验证规则。
            </Paragraph>

            <Collapse>
              {generatedForms.map((formConfig, index) => (
                <Panel
                  header={`表单 ${index + 1}: ${formConfig.name}`}
                  key={index}
                >
                  <div>
                    <Title level={5}>表单名称: {formConfig.name}</Title>
                    <Paragraph>字段数量: {formConfig.fields.length}</Paragraph>

                    <div style={{ marginTop: "16px" }}>
                      <Text strong>表单字段:</Text>
                      <div style={{ marginTop: "8px" }}>
                        {formConfig.fields.map((field) =>
                          renderFormField(field)
                        )}
                      </div>
                    </div>
                  </div>
                </Panel>
              ))}
            </Collapse>
          </div>
        ) : (
          <div
            style={{ textAlign: "center", padding: "40px 0", color: "#999" }}
          >
            <p>点击"生成表单"按钮开始生成表单配置</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default FormGenerator;
