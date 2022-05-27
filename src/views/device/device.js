/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xiaoyiwen
 * @LastEditTime: 2022-05-22 23:51:17
 * @Description:
 */

import Panel from "../list/components/panel.vue";
import TablePanel from "../list/components/tablePanel.vue";
import { getError, getOff } from "@/api/deviceApi.js";

export default {
  name: "list",
  components: {
    Panel,
    TablePanel,
  },
  data() {
    return {
      loading: false,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: "", //单位名称
        address: "", //	安装位置
        kind: undefined, //设备类型
        networkAddr: "", //设备通讯地址
      },
      tableData: [],
      total: 0,
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
    };
  },
  mounted() {
    this.getList();
  },
  computed: {
    typeName() {
      if (this.$route.params.type == 1) {
        return "故障设备";
      } else {
        return "离线设备";
      }
    },
  },
  methods: {
    handleChange(pageNum) {
      this.queryParams.pageNum = pageNum;
      this.getList();
    },
    search() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    reset() {
      this.queryParams = {
        pageNum: 1,
        pageSize: 10,
        name: "", //单位名称
        address: "", //	安装位置
        kind: undefined, //设备类型
        networkAddr: "", //设备通讯地址
      };
      this.getList();
    },
    async getList() {
      this.loading = true;
      let res;
      if (this.$route.params.type == 1) {
        //1故障2离线
        res = await getError(this.queryParams);
      } else {
        res = await getOff(this.queryParams);
      }

      this.loading = false;
      this.tableData = res.data.list;
      this.total = res.data.total;
    },
  },
};
