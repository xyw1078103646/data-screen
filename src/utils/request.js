/*
 * @Author: xyw
 * @Date: 2022-05-11 10:30:48
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-11 10:35:52
 * @Description:
 */
import axios from "axios";
import { Message } from "element-ui";

axios.defaults.headers["Content-type"] = "application/json;charset=utf-8";
const Service = axios.create({
  baseURL: "/api",
  timeout: 15000,
});
//请求拦截器
Service.interceptors.request.use((config) => {
  return config;
});
//响应拦截器
Service.interceptors.response.use(
  (res) => {
    if (res.data.code === 10000) {
      Message.error(res.data.message);
      return Promise.reject(res.data.message || "Error");
    } else if (res.data.code < 0) {
      Message.error(res.data.message);
      return Promise.reject(res.data.message || "Error");
    } else {
      return res.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Service;
