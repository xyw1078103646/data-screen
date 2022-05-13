/*
 * @Author: xyw
 * @Date: 2022-05-11 10:30:48
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-13 17:48:51
 * @Description:
 */
import axios from "axios";
import { Message } from "element-ui";

axios.defaults.headers["Content-type"] = "application/json;charset=utf-8";
const Service = axios.create({
  baseURL: "https://project.develop.lanchengiot.cn/project_device/v1",
  timeout: 150000,
});
//请求拦截器
Service.interceptors.request.use((config) => {
  config["Authorization"] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNjYzNDk1OTY3MjI1OTc4ODgiLCJraW5kIjo0LCJpc3MiOiIzNjYzNDk1OTY0ODc5ODcyMDAiLCJleHAiOjcwNzEwOTkwOTZ9.BB1q7fkR0KNB65FWLnFjmu0BBgzO5Shbw504AKlH7TE";
  return config;
});
//响应拦截器
Service.interceptors.response.use(
  (res) => {
    if (res.data.code === "200") {
      return res.data;
    } else {
      Message.error(res.data.errorMsg);
      return Promise.reject(res.data.errorMsg || "Error");
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Service;
