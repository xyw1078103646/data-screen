/*
 * @Author: xyw
 * @Date: 2022-05-10 23:12:01
 * @LastEditors: lz
 * @LastEditTime: 2022-05-23 12:24:02
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icons"; // svg
import "@/assets/less/style.less"; // 全局样式
// import "lib-flexible/flexible"; //这个库只适配了移动端
import "@/utils/flexible"; //根据宽度动态设置根字体大小
import countTo from "vue-count-to";

Vue.component("a-count-to", countTo);
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
