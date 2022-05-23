/*
 * @Author: xyw
 * @Date: 2022-05-23 11:01:01
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-23 11:01:40
 * @Description:
 */
import request from "@/utils/request";

//智慧用电详情接口
export function electroInfo(data) {
  return request({
    url: "/device/electroInfo",
    method: "POST",
    data,
  });
}
//用电历史记录分页接口
export function electroHistoryPage(data) {
  return request({
    url: "/device/electroHistoryPage",
    method: "POST",
    data,
  });
}
