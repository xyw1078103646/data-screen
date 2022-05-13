/*
 * @Author: xyw
 * @Date: 2022-05-13 11:04:10
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-13 11:08:37
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
