/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-23 11:06:38
 * @Description:
 */

import Panel from "../list/components/panel.vue";
import TablePanel from "../list/components/tablePanel.vue";
import { electroInfo, electroHistoryPage } from "@/api/detailApi.js";

export default {
  name: "detail",
  components: {
    Panel,
    TablePanel,
  },
  data() {
    return {
      loading: false,
      tableData: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      this.loading = true;
      const res = await electroInfo({
        id: this.$route.query.id,
      });
      this.loading = false;
      this.tableData = res.data;
    },
  },
};
