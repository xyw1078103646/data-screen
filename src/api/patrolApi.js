/*
 * @Author: xyw
 * @Date: 2022-05-16 15:01:25
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-20 14:31:52
 * @Description:
 */
import request from "@/utils/request";

//巡查管理列表
export function getPatrol(data) {
  return request({
    url: "/device/position/page",
    method: "POST",
    data,
  });
}
