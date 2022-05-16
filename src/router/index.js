/*
 * @Author: xyw
 * @Date: 2022-05-10 23:12:01
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-16 11:07:22
 * @Description:
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/sc",
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/index.vue"),
    },
    {
      path: "/list",
      name: "list",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/list.vue"),
    },
  ],
});
