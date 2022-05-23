<!--
 * @Author: xiaoyiwen yyxiao@gongsibao.com
 * @Date: 2022-05-13 21:42:19
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-23 10:24:21
 * @FilePath: \data-screen\src\views\home\components\info.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div class="head sc-flex sc-ai-center sc-jc-center">
      <div class="tag sc-mr-6 sc-cursor" @click="$router.push('/device/1')">
        <!-- <div class="top blue">在线设备</div> -->
        <div class="top blue">故障设备</div>
        <div class="bottom sc-flex sc-ai-center sc-jc-center blue">
          <!-- {{ list.runStatusCount[0].count }} -->
          {{ list.error }}
          <span class="sc-fs-xl">个</span>
        </div>
      </div>
      <div class="tag sc-cursor">
        <div class="top orange" @click="$router.push('/device/2')">
          离线设备
        </div>
        <div class="bottom sc-flex sc-ai-center sc-jc-center orange">
          {{ list.runStatusCount[1].count }}<span class="sc-fs-xl">个</span>
        </div>
      </div>
    </div>
    <div class="content" ref="content"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { fontChart } from "@/utils/echartPxToRem.js"; //echart屏幕适配
export default {
  props: {
    list: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const e = echarts.init(this.$refs.content);
      let data = this.list.stateCount.map((n) => {
        return {
          name: n.stateName + n.count + "次",
          value: n.count,
        };
      });
      let option = {
        color: [
          "#E7C913",
          "#02BCFC",
          "#19DC7C",
          "#34A6FE",
          "#EF3C4F",
          "#ee8131",
        ],
        series: [
          {
            type: "pie",
            radius: [fontChart(17), fontChart(21)],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#809DF5",
                  },
                },
                tooltip: {
                  show: false,
                },
              },
            ],
          },
          {
            type: "pie",
            radius: [fontChart(69), fontChart(70)],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
              },
            },
            name: "",
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#084984",
                  },
                },
                tooltip: {
                  show: false,
                },
              },
            ],
          },
          {
            type: "pie",
            radius: [fontChart(79), fontChart(80)],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
              },
            },
            name: "",
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#084984",
                  },
                },
                tooltip: {
                  show: false,
                },
              },
            ],
          },
          {
            type: "pie",
            radius: [fontChart(89), fontChart(90)],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
              },
            },
            name: "",
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#084984",
                  },
                },
                tooltip: {
                  show: false,
                },
              },
            ],
          },
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [fontChart(30), fontChart(70)],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 1,
            },
            data: data,
            labelLine: {
              normal: {
                length: fontChart(30),
                length2: fontChart(15),
                lineStyle: {
                  color: "#fff",
                },
              },
            },
            label: {
              color: "#fff",
            },
          },
        ],
        axisPointer: [
          {
            lineStyle: {
              color: "#fff",
            },
          },
        ],
      };
      e.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  .head {
    height: 115px;
    .tag {
      .top {
        width: 150px;
        height: 37px;
        line-height: 37px;
        background-size: 100% 100%;
        color: #fff;
        font-size: 22px;
        text-align: center;
        &.blue {
          background-image: url("../../../assets/images/home/blue.png");
        }
        &.orange {
          background-image: url("../../../assets/images/home/orange.png");
        }
      }
      .bottom {
        height: 37px;
        font-size: 22px;
        border-radius: 1px;
        &.blue {
          background: rgba(1, 200, 214, 0.15);
          border: 2px solid #0b6bb6;
          color: #01c8d6;
        }
        &.orange {
          background: rgba(231, 201, 19, 0.15);
          border: 2px solid #8e7d33;
          color: #e7c913;
        }
      }
    }
  }
  .content {
    width: 450px;
    height: 220px;
    margin: 0 auto;
    background: rgba(15, 13, 80, 0.5);
    border: 1px solid #185c90;
    border-radius: 6px;
  }
}
</style>
