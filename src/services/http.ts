import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { message } from "antd";
import { useAuthStore } from "../store";
import { ApiResponse } from "../types";

// 创建axios实例
const http = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    const res = response.data;

    // 如果返回的状态码不是200，说明接口请求有问题，直接抛出错误
    if (res.code !== 200) {
      message.error(res.message || "请求失败");

      // 401: 未登录或token过期
      if (res.code === 401) {
        // 清除用户信息并跳转到登录页
        useAuthStore.getState().logout();
        window.location.href = "/login";
      }

      return Promise.reject(new Error(res.message || "请求失败"));
    }

    return res as any;
  },
  (error: AxiosError<ApiResponse>) => {
    const { response } = error;

    if (response) {
      // 处理HTTP状态码错误
      const { status, data } = response;

      // 处理401未授权错误
      if (status === 401) {
        message.error("登录已过期，请重新登录");
        useAuthStore.getState().logout();
        window.location.href = "/login";
      } else {
        message.error(data?.message || `请求错误 (${status})`);
      }
    } else if (error.request) {
      // 请求已发出但没有收到响应
      message.error("网络错误，请检查您的网络连接");
    } else {
      // 请求配置出错
      message.error("请求配置错误");
    }

    return Promise.reject(error);
  }
);

// 封装GET请求
export const get = <T = any>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  return http.get(url, { params, ...config });
};

// 封装POST请求
export const post = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  return http.post(url, data, config);
};

// 封装PUT请求
export const put = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  return http.put(url, data, config);
};

// 封装DELETE请求
export const del = <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  return http.delete(url, config);
};

export default http;
