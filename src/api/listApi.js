/*
 * @Author: xyw
 * @Date: 2022-05-16 15:01:25
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-24 17:03:03
 * @Description:
 */
import request from "@/utils/request";

//设备分页查询列表
export function getEquipment(data) {
  return request({
    url: "/device/page",
    method: "POST",
    data,
  });
}
//物联接入
export function getActive(data) {
  return request({
    url: "/device/access",
    method: "POST",
    data,
  });
}
