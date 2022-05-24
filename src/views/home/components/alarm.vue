<!--
 * @Author: xiaoyiwen yyxiao@gongsibao.com
 * @Date: 2022-05-13 21:42:19
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-24 17:52:21
 * @FilePath: \data-screen\src\views\home\components\info.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div class="head sc-flex sc-ai-end sc-jc-between sc-text-white">
      <div class="left">
        <svg-icon class="sc-mr-1" icon-class="alarm"></svg-icon>
        <span class="sc-fs-xl">报警总数</span>
        <span class="num sc-cursor" @click="$router.push('/operation')">
          <!-- {{ list.total }} -->
          <a-count-to
            :startVal="0"
            :endVal="list.total"
            :duration="3000"
          ></a-count-to>
        </span>
      </div>
      <div class="right">
        <svg-icon class="sc-mr-1" icon-class="sanjiao"></svg-icon>
        <span
          >比上月
          <template v-if="list.diff > 0">增长</template>
          <template v-else>下跌</template>
          <span>{{ diff }}</span
          >%
        </span>
      </div>
    </div>
    <div class="title sc-flex sc-ai-center sc-jc-between">
      <div class="left sc-flex sc-ai-center">
        <div class="line sc-ml-1"></div>
        <div class="t sc-fs-xl">报警发生趋势图</div>
      </div>
      <div class="right sc-flex sc-ai-center">
        <svg-icon icon-class="line"></svg-icon>
        <div class="sc-text-white sc-ml-1 sc-fs-xl">报警数</div>
      </div>
    </div>
    <div class="chart" ref="chart"></div>
    <div class="sc-flex sc-ai-center sc-mt-4">
      <div class="line sc-ml-1"></div>
      <div class="t sc-fs-xl">报警高发设备排名TOP10</div>
    </div>
    <el-carousel height="1.55rem">
      <el-carousel-item
        v-for="(item, index) in carousel"
        :key="'access' + index"
      >
        <div class="itemBox sc-px-1">
          <div
            class="item sc-flex sc-ai-center sc-mt-2 sc-pl-1"
            v-for="child in item"
            :key="child.name"
          >
            <div class="point" :class="{ 'is-top': child.index < 4 }">
              {{ child.index }}
            </div>
            <div class="sc-text-white sc-fs-xl">{{ child.name }}</div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
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
  computed: {
    diff() {
      return (Math.abs(this.list.diff) / 100).toFixed(2);
    },
    carousel() {
      let arr = [];
      this.list.highPoint = this.list.highPoint.map((n, i) => {
        n.index = i + 1;
        return n;
      });
      arr[0] = this.list.highPoint.slice(0, 5);
      arr[1] = this.list.highPoint.slice(5);
      return arr;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const e = echarts.init(this.$refs.chart);
      let option = {
        xAxis: {
          type: "category",
          data: this.list.times,
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
            data: this.list.counts,
            type: "line",
          },
        ],
        color: ["#FD5A78"],
        grid: {
          top: fontChart(10),
          left: fontChart(30),
          right: fontChart(10),
          bottom: fontChart(30),
        },
      };
      e.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 0 10px;
  /deep/.el-carousel__arrow {
    display: none;
  }
  /deep/.el-carousel__indicator--horizontal {
    .el-carousel__button {
      width: 10px;
      height: 10px;
      background: #4cd1ff;
      opacity: 0.3;
      border-radius: 50%;
    }
    &.is-active {
      .el-carousel__button {
        opacity: 1;
      }
    }
  }
  .head {
    height: 48px;
    padding-top: 13px;
    .left {
      .svg-icon {
        width: 34px;
        height: 34px;
      }
      .num {
        font-size: 26px;
      }
    }
  }
  .title {
    height: 66px;
  }
  .line {
    width: 3px;
    height: 16px;
    background: #02bcfc;
    margin-right: 7px;
  }
  .t {
    color: #02bcfc;
  }
  .chart {
    height: 170px;
  }
  .itemBox {
    .item {
      height: 32px;
      background: #21297b;
      .point {
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        background: #999999;
        border-radius: 50%;
        margin-right: 8px;
        color: #fff;
        &.is-top {
          background: #cd3b60;
        }
      }
    }
  }
}
</style>
