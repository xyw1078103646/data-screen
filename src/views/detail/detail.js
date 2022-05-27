/*
 * @Author: xyw
 * @Date: 2022-05-13 15:42:57
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-27 16:10:20
 * @Description:
 */

import Panel from "../list/components/panel.vue";
import TablePanel from "../list/components/tablePanel.vue";
import { electroInfo, electroHistoryPage } from "@/api/detailApi.js";
import * as echarts from "echarts";
import { fontChart } from "@/utils/echartPxToRem.js"; //echart屏幕适配

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
      type: 1,
      queryParams: {
        startTime: undefined,
        endTime: undefined,
        pageNum: 1,
        pageSize: 10,
      },
      hisTotal: 0,
      hisData: [],
      hisFlag: false,
      dateArr: [],
      hisType: 1,
      pickerOptions: {
        disabledDate: this.disabledDate,
      },
    };
  },
  mounted() {
    this.type = this.$route.params.type;
    if (this.$route.params.type == 4) {
      this.type = 1;
    }
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
      this.$nextTick(() => {
        this.initChart();
      });
    },
    changeType(val) {
      this.type = val;
    },
    initChart() {
      this.tableData.map((n, i) => {
        let e = echarts.init(this.$refs["chart" + i][0]);
        let option = {
          xAxis: {
            type: "category",
            data: n.value.dataPushMap.x,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              lineStyle: {
                color: "#22297C",
              },
            },
          },
          series: [
            {
              data: n.value.dataPushMap.y1,
              type: "line",
            },
            {
              data: n.value.dataPushMap.y2,
              type: "line",
            },
            {
              data: n.value.dataPushMap.y3,
              type: "line",
            },
          ],
          color: ["#FD5A78", "#02BCFC", "#19DC7C"],
          grid: {
            top: fontChart(30),
            left: fontChart(70),
            right: fontChart(65),
            bottom: fontChart(30),
          },
        };
        e.setOption(option);
      });
    },
    showHis(type) {
      //1电流2温度
      this.hisType = type;
      this.getHis();
    },
    async getHis() {
      const res = await electroHistoryPage({
        ...this.queryParams,
        id: this.$route.query.id,
        type: this.hisType,
      });
      this.hisData = res.data.list || [];
      this.hisTotal = res.data.total;
      this.hisFlag = true;
    },
    closeHis() {
      this.hisFlag = false;
      this.hisData = [];
      this.hisTotal = 0;
      this.queryParams = {
        startTime: undefined,
        endTime: undefined,
        pageNum: 1,
        pageSize: 10,
      };
    },
    handleChange(pageNum) {
      this.queryParams.pageNum = pageNum;
      this.getHis();
    },
    changeDate(v) {
      this.queryParams.startTime = v[0] + " 00:00:00";
      this.queryParams.endTime = v[1] + " 23:00:00";
      this.getHis();
    },
    disabledDate(val) {
      console.log(888, Date.now(), val, val.getTime());
      return (
        Date.now() - 3600 * 1000 * 24 > val.getTime() ||
        val.getTime() > Date.now() + 3600 * 1000 * 24 * 30
      );
    },
    back() {
      this.$router.push({
        path: "/list",
        query: {
          kind: this.$route.params.type == 4 ? 11 : 3,
        },
      });
    },
  },
};
