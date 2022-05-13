/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-13 15:45:20
 * @Description:
 */
import { getDsData } from "@/api/homeApi";

export default {
  name: "home",
  components: {},
  data() {
    return {
      access: {}, //物联接入
      alarm: {}, //运营统计
      manager: {}, //人员管理
      position: {}, //重点部位（巡逻点）巡查管理
      runStatus: {}, //本月运维状态
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const res = await getDsData({});
      this.access = res.data.access;
      this.alarm = res.data.alarm;
      this.manager = res.data.manager;
      this.position = res.data.position;
      this.runStatus = res.data.runStatus;
    },
  },
};
