<!--
 * @Author: xyw
 * @Date: 2022-05-11 11:16:35
 * @LastEditors: xiaoyiwen  
 * @LastEditTime: 2022-05-18 22:48:44
 * @Description: 
-->
<template>
  <div class="panel-container" :style="styleObj">
    <slot />
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "TablePanel",
  props: {
    height: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    styleObj() {
      if (this.height) {
        let height = this.height / 192;
        return {
          height: height + "rem",
        };
      }
      return {};
    },
  },
};
</script>

<style lang="less" scoped>
.panel-container {
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 23px;
    height: 23px;
    border-top: 3px solid rgba(54, 128, 228, 1);
    border-left: 3px solid rgba(54, 128, 228, 1);
    z-index: 99;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 23px;
    height: 23px;
    border-top: 3px solid rgba(54, 128, 228, 1);
    border-right: 3px solid rgba(54, 128, 228, 1);
    z-index: 99;
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
      border-left: 3px solid rgba(54, 128, 228, 1);
      border-bottom: 3px solid rgba(54, 128, 228, 1);
      z-index: 99;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 23px;
      height: 23px;
      border-right: 3px solid rgba(54, 128, 228, 1);
      border-bottom: 3px solid rgba(54, 128, 228, 1);
      z-index: 99;
    }
  }
}
</style>
