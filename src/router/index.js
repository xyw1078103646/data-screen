/*
 * @Author: xyw
 * @Date: 2022-05-10 23:12:01
 * @LastEditors: xiaoyiwen yyxiao@gongsibao.com
 * @LastEditTime: 2022-05-22 23:45:24
 * @Description:
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: "/sc",
    routes: [
        //首页大屏
        {
            path: "/",
            name: "home",
            component: () =>
                import ("@/views/index.vue"),
        },
        //设备列表
        {
            path: "/list",
            name: "list",
            component: () =>
                import ("@/views/list.vue"),
        },
        //运营统计
        {
            path: "/operation",
            name: "operation",
            component: () =>
                import ("@/views/operation.vue"),
        },
        //巡查管理
        {
            path: "/patrol",
            name: "patrol",
            component: () =>
                import ("@/views/patrol.vue"),
        },
        //故障设备 与 离线设备
        {
            path: "/device/:type", //1故障2离线
            name: "device",
            component: () =>
                import ("@/views/device.vue"),
        },
    ],
});