/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-18 17:43:34
 * @Description:
 */

import Panel from "./components/panel.vue";
import { getEquipment } from "@/api/listApi.js";

export default {
  name: "list",
  components: {
    Panel,
  },
  data() {
    return {
      loading: false,
      tabList: [
        {
          code: 2,
          label: "智能烟感",
        },
        {
          code: 10,
          label: "智能温感",
        },
        {
          code: 3,
          label: "智慧用电",
        },
        {
          code: 5,
          label: "监控摄像头",
        },
        {
          code: 99,
          label: "水浸设备",
        },
        {
          code: 14,
          label: "可燃气体探测器",
        },
        {
          code: 4,
          label: "室外消火栓",
        },
        {
          code: 9,
          label: "室内消火栓",
        },
        {
          code: 11,
          label: "智能充电桩",
        },
        {
          code: 6,
          label: "用户传输装置",
        },
        {
          code: 8,
          label: "火焰识别摄像头",
        },
        {
          code: 1,
          label: "消防主机",
        },
        {
          code: 12,
          label: "物联网主机",
        },
      ],
      active: 2,
      pageNum: 1,
      pageSize: 10,
      tableData: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      this.loading = true;
      const res = await getEquipment({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        kind: this.active,
      });
      this.loading = false;
      this.tableData = res.data.list;
    },
    //判断该行是否展示
    isShow(prop) {
      let enumObj = {
        2: ["name", "installationAddr", "networkAddr", "runStatus"],
      };
      if (enumObj[this.active].includes(prop)) {
        return true;
      } else {
        return false;
      }
    },
    changeActive(code) {
      this.active = code;
    },
  },
};
