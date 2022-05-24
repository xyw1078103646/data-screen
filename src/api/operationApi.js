/*
 * @Author: xyw
 * @Date: 2022-05-16 15:01:25
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-24 11:00:31
 * @Description:
 */
import request from "@/utils/request";

//运营统计询列表
export function getOperation(data) {
  return request({
    url: "/device/alarm/record/page",
    method: "POST",
    data,
  });
}

//查询已处理、未处理报警详情
export function getDetail(data) {
  return request({
    url: "/device/state/record/detail",
    method: "POST",
    data,
  });
}

//运营统计-分页查询未处理报警通知次数
export function getMsgCount(data) {
  return request({
    url: "/device/alarm/notice/page",
    method: "POST",
    data,
  });
}
//查询未处理、已处理报警数
export function getCount(data) {
  return request({
    url: "/device/alarm/handle/total",
    method: "POST",
    data,
  });
}
