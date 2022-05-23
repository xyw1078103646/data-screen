/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-20 14:44:51
 * @Description:
 */

import Panel from "../list/components/panel.vue";
import TablePanel from "../list/components/tablePanel.vue";
import { getPatrol } from "@/api/patrolApi.js";

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
        name: "", //设备名称
        address: "", //安装地址
        status: undefined, //巡查状态
      },
      tableData: [],
      total: 0,
    };
  },
  mounted() {
    this.getList();
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
        name: "", //设备名称
        address: "", //安装地址
        status: undefined, //巡查状态
      };
      this.getList();
    },
    async getList() {
      this.loading = true;
      const res = await getPatrol(this.queryParams);
      this.loading = false;
      this.tableData = res.data.list;
      this.total = res.data.total;
    },
  },
};
