/*
 * @Author: xyw
 * @Date: 2022-05-16 15:01:25
 * @LastEditors: xiaoyiwen
 * @LastEditTime: 2022-05-22 23:41:01
 * @Description:
 */
import request from "@/utils/request";

//故障设备列表
export function getError(data) {
  return request({
    url: "/device/error/page",
    method: "POST",
    data,
  });
}
//离线设备列表
export function getOff(data) {
  return request({
    url: "/device/off/page",
    method: "POST",
    data,
  });
}
