import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Radio,
  Checkbox,
  Card,
  message,
  Space,
  Divider,
} from "antd";
import { formApi } from "../../services";
import { Dayjs } from "dayjs";

const { Option } = Select;
const { TextArea } = Input;

interface FormValues {
  name: string;
  email: string;
  age: number;
  gender: string;
  department: string;
  birthday: Dayjs | null;
  introduction: string;
  skills: string[];
  agreement: boolean;
}

const BasicForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // 提交表单
  const onFinish = async (values: FormValues) => {
    try {
      setLoading(true);
      // 创建一个新对象用于提交
      const submitData = { ...values };

      // 格式化日期
      if (submitData.birthday) {
        submitData.birthday = submitData.birthday.format("YYYY-MM-DD") as any;
      }

      const res = await formApi.submitForm("basic", submitData);
      if (res.success) {
        message.success("提交成功");
        form.resetFields();
      }
    } catch (error) {
      console.error("提交表单失败:", error);
      message.error("提交表单失败");
    } finally {
      setLoading(false);
    }
  };

  // 重置表单
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Card title="基础表单">
      <Form
        form={form}
        name="basic_form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ gender: "male", agreement: false }}
        onFinish={onFinish}
        autoComplete="off"
      >
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
          label="年龄"
          name="age"
          rules={[{ required: true, message: "请输入年龄" }]}
        >
          <InputNumber
            min={1}
            max={120}
            style={{ width: "100%" }}
            placeholder="请输入年龄"
          />
        </Form.Item>

        <Form.Item
          label="性别"
          name="gender"
          rules={[{ required: true, message: "请选择性别" }]}
        >
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
            <Radio value="other">其他</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="部门"
          name="department"
          rules={[{ required: true, message: "请选择部门" }]}
        >
          <Select placeholder="请选择部门">
            <Option value="technology">技术部</Option>
            <Option value="product">产品部</Option>
            <Option value="marketing">市场部</Option>
            <Option value="operation">运营部</Option>
            <Option value="hr">人力资源部</Option>
          </Select>
        </Form.Item>

        <Form.Item label="生日" name="birthday">
          <DatePicker style={{ width: "100%" }} placeholder="请选择生日" />
        </Form.Item>

        <Form.Item label="技能" name="skills">
          <Checkbox.Group>
            <Checkbox value="react">React</Checkbox>
            <Checkbox value="vue">Vue</Checkbox>
            <Checkbox value="angular">Angular</Checkbox>
            <Checkbox value="node">Node.js</Checkbox>
            <Checkbox value="python">Python</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item label="个人介绍" name="introduction">
          <TextArea rows={4} placeholder="请输入个人介绍" />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          wrapperCol={{ offset: 4, span: 16 }}
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("请同意协议")),
            },
          ]}
        >
          <Checkbox>
            我已阅读并同意<a href="#">服务协议</a>和<a href="#">隐私政策</a>
          </Checkbox>
        </Form.Item>

        <Divider />

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              提交
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BasicForm;
