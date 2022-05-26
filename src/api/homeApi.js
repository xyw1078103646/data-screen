/*
 * @Author: xyw
 * @Date: 2022-05-13 11:04:10
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-26 10:57:13
 * @Description:
 */
import request from "@/utils/request";

export function getDsData(data) {
  return request({
    url: "/device/analyse",
    method: "POST",
    data,
  });
}

export function dispose(data) {
  return request({
    url: "/device/dispose/create",
    method: "POST",
    data,
  });
}
