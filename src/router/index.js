/*
 * @Author: xyw
 * @Date: 2022-05-10 23:12:01
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-19 17:58:05
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
        import(/* webpackChunkName: "about" */ "@/views/index.vue"),
    },
    //设备列表
    {
      path: "/list",
      name: "list",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/list.vue"),
    },
    //运营统计
    {
      path: "/operation",
      name: "operation",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/operation.vue"),
    },
  ],
});
