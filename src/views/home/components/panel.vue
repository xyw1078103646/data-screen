<!--
 * @Author: xyw
 * @Date: 2022-05-11 11:16:35
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-16 10:57:36
 * @Description: 
-->
<template>
  <div class="panel-container" :style="styleObj">
    <div class="title sc-flex sc-jc-between sc-ai-center">
      <span>{{ title }}</span>
      <svg-icon icon-class="arrow" @click="goPage"></svg-icon>
    </div>
    <slot />
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: {
    height: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    toUrl: {
      type: String,
      default: "",
    },
  },
  computed: {
    styleObj() {
      if (this.height) {
        let height = this.height / 80;
        return {
          height: height + "rem",
        };
      }
      return {};
    },
  },
  methods: {
    goPage() {
      this.$router.push(this.toUrl);
    },
  },
};
</script>

<style lang="less" scoped>
.panel-container {
  width: 100%;
  height: 100%;
  background: rgba(41, 85, 252, 0.1);
  border: 1px solid #1a3f72;
  position: relative;
  // padding: 0 10px;
  .title {
    height: 40px;
    padding: 0 20px 0 28px;
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 500;
    color: #ffffff;
    background: linear-gradient(90deg, #151e5b 0%, #142765 50%, #15205f 100%);
    .svg-icon {
      cursor: pointer;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 23px;
    height: 23px;
    border-top: 3px solid #3680e4;
    border-left: 3px solid #3680e4;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 23px;
    height: 23px;
    border-top: 3px solid #3680e4;
    border-right: 3px solid #3680e4;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 23px;
      height: 23px;
      border-left: 3px solid #3680e4;
      border-bottom: 3px solid #3680e4;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 23px;
      height: 23px;
      border-right: 3px solid #3680e4;
      border-bottom: 3px solid #3680e4;
    }
  }
}
</style>
