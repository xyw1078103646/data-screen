/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-16 11:07:44
 * @Description:
 */

import Panel from "./components/panel.vue";

export default {
  name: "list",
  components: {
    Panel,
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {},
  },
};
