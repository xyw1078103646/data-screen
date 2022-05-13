<!--
 * @Author: xyw
 * @Date: 2022-05-11 11:16:35
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-13 09:52:44
 * @Description: 
-->

<template>
  <div class="w-100 h-100" ref="chart"></div>
</template>

<script>
import { fontChart } from "@/utils/echartPxToRem";
let option = {
  dataset: [
    {
      dimensions: ["name", "age", "profession", "score", "date"],
      source: [
        ["Hannah Krause", 41, "Engineer", 314, "2011-02-12"],
        ["Zhao Qian", 20, "Teacher", 351, "2011-03-01"],
        ["Jasmin Krause ", 52, "Musician", 287, "2011-02-14"],
        ["Li Lei", 37, "Teacher", 219, "2011-02-18"],
        ["Karle Neumann", 25, "Engineer", 253, "2011-04-02"],
        ["Adrian Groß", 19, "Teacher", "-", "2011-01-16"],
        ["Mia Neumann", 71, "Engineer", 165, "2011-03-19"],
        ["Böhm Fuchs", 36, "Musician", 318, "2011-02-24"],
        ["Han Meimei", 67, "Engineer", 366, "2011-03-12"],
      ],
    },
    {
      transform: {
        type: "sort",
        config: { dimension: "score", order: "desc" },
      },
    },
  ],
  xAxis: {
    type: "category",
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: "bar",
    encode: { x: "name", y: "score" },
    datasetIndex: 1,
  },
};
import * as echarts from "echarts";
export default {
  name: "ChartDemo1",
  data() {
    return {
      option: option,
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const e = echarts.init(this.$refs.chart);
      e.setOption(this.option);
    },
  },
};
</script>
