<!--
 * @Author: xyw
 * @Date: 2022-05-11 11:16:49
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-12 19:39:25
 * @Description: 
-->

<template>
  <div class="w-100 h-100" ref="chart"></div>
</template>

<script>
import { fontChart } from "@/utils/echartPxToRem";
let option = {
  legend: {
    type: "plain", // 普通图例
    orient: "horizontal", // 水平
    icon: "circle",
    left: " 30% ", // 左距离
    // right:0,
    // width:500,
    top: 30, // 上距离
    bottom: 20, // 下距离
    itemGap: 20, // 间隔
    itemWidth: 8, // 图形宽度。
    itemHeight: 8, // 图形高度。
    formatter(name) {
      let than = option.series[0].data; //获取series中的data
      let total = 0;
      let tarValue;
      for (let i = 0, l = than.length; i < l; i++) {
        total += than[i].value;
        if (than[i].name == name) {
          tarValue = than[i].value;
        }
      }
      let p = (tarValue / total) * 100;
      return ["{a|" + name + " }", "{b|" + p.toFixed(2) + "%}"].join("");
    },
    textStyle: {
      rich: {
        a: {
          width: 150,
          align: "left",
        },
        b: {
          width: 90,
          align: "left",
        },
      },
    },
  },
  series: [
    {
      type: "pie",
      radius: ["40%", "70%"],
      center: ["12%", "50%"], // 左右距离
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
        emphasis: {
          show: true,
        },
      },
      color: ["#5B8FF9", "#657798", "#1E9493", "#E7674A", "#F6B915", "#63DAAB"], //设置颜色
      data: [
        { value: 335, name: "商标已注册" },
        { value: 135, name: "商标注册申请受理通知书" },
        { value: 310, name: "商标驳回通知书" },
        { value: 154, name: "商标无效" },
        { value: 234, name: "驳回待复审" },
        { value: 158, name: "其它" },
      ],
    },
  ],
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
