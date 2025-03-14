import Mock from "mockjs";
import { faker } from "@faker-js/faker/locale/zh_CN";
import { FormConfig, FormField } from "../types";

// 生成随机表单字段
const generateFormField = (): FormField => {
  const fieldTypes = [
    "input",
    "textarea",
    "select",
    "radio",
    "checkbox",
    "date",
    "number",
  ];
  const type = faker.helpers.arrayElement(fieldTypes) as FormField["type"];

  const field: FormField = {
    name: faker.lorem.word(),
    label: faker.lorem.words(2),
    type,
    required: faker.datatype.boolean(),
    placeholder: faker.lorem.words(3),
  };

  // 为选择类型的字段添加选项
  if (["select", "radio", "checkbox"].includes(type)) {
    const optionCount = faker.number.int({ min: 2, max: 5 });
    field.options = Array.from({ length: optionCount }).map((_, index) => ({
      label: faker.lorem.word(),
      value: index,
    }));
  }

  // 添加验证规则
  if (field.required) {
    field.rules = [{ required: true, message: `请输入${field.label}` }];
  }

  // 添加默认值
  if (faker.datatype.boolean()) {
    switch (type) {
      case "input":
      case "textarea":
        field.defaultValue = faker.lorem.words(2);
        break;
      case "select":
      case "radio":
        field.defaultValue = field.options ? field.options[0].value : null;
        break;
      case "checkbox":
        field.defaultValue = field.options ? [field.options[0].value] : [];
        break;
      case "date":
        field.defaultValue = faker.date.recent().toISOString().split("T")[0];
        break;
      case "number":
        field.defaultValue = faker.number.int({ min: 1, max: 100 });
        break;
    }
  }

  return field;
};

// 生成随机表单配置
const generateFormConfig = (): FormConfig => {
  const fieldCount = faker.number.int({ min: 3, max: 10 });

  return {
    name: faker.lorem.words(2),
    fields: Array.from({ length: fieldCount }).map(() => generateFormField()),
  };
};

// 预生成的表单配置
const formConfigs: FormConfig[] = Array.from({ length: 10 }).map(() =>
  generateFormConfig()
);

// 获取表单配置列表接口
Mock.mock("/api/forms/configs", "get", () => {
  return {
    code: 200,
    success: true,
    message: "获取成功",
    data: formConfigs,
  };
});

// 获取表单配置详情接口
Mock.mock(/\/api\/forms\/configs\/\d+$/, "get", (options: any) => {
  const id = options.url.match(/\/api\/forms\/configs\/(\d+)$/)[1];
  const index = parseInt(id) - 1;

  if (index >= 0 && index < formConfigs.length) {
    return {
      code: 200,
      success: true,
      message: "获取成功",
      data: formConfigs[index],
    };
  } else {
    return {
      code: 404,
      success: false,
      message: "表单配置不存在",
      data: null,
    };
  }
});

// 提交表单数据接口
Mock.mock(/\/api\/forms\/submit\/\d+$/, "post", (options: any) => {
  return {
    code: 200,
    success: true,
    message: "提交成功",
    data: JSON.parse(options.body),
  };
});

// 生成表单配置接口
Mock.mock("/api/forms/generate", "post", (options: any) => {
  const { count = 10 } = JSON.parse(options.body);
  const generatedForms = Array.from({ length: Math.min(count, 1000) }).map(() =>
    generateFormConfig()
  );

  return {
    code: 200,
    success: true,
    message: "生成成功",
    data: generatedForms,
  };
});
