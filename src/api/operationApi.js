/*
 * @Author: xyw
 * @Date: 2022-05-16 15:01:25
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-16 15:30:43
 * @Description:
 */
import request from "@/utils/request";

//设备分页查询列表
export function getOperation(data) {
  return request({
    url: "/device/alarm/record/page",
    method: "POST",
    data,
  });
}
