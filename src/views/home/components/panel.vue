<!--
 * @Author: xyw
 * @Date: 2022-05-11 11:16:35
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-13 16:56:44
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
  name: "Panel",
  props: {
    height: {
      type: Number,
      default: 0,
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
};
</script>

<style lang="less" scoped>
.panel-container {
  width: 100%;
  height: 3.375rem;
  background: rgba(0, 114, 247, 0.07);
  box-shadow: inset 0px 1px 14px 0px rgba(2, 132, 213, 0.4);
  border: 1px solid rgba(4, 164, 180, 0.17);
  position: relative;
  padding: 0 0.125rem 0.125rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.1375rem;
    height: 0.1375rem;
    border-top: 0.025rem solid #04a4b4;
    border-left: 0.025rem solid #04a4b4;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0.1375rem;
    height: 0.1375rem;
    border-top: 0.025rem solid #04a4b4;
    border-right: 0.025rem solid #04a4b4;
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
      width: 0.1375rem;
      height: 0.1375rem;
      border-left: 0.025rem solid #04a4b4;
      border-bottom: 0.025rem solid #04a4b4;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0.1375rem;
      height: 0.1375rem;
      border-right: 0.025rem solid #04a4b4;
      border-bottom: 0.025rem solid #04a4b4;
    }
  }
}
</style>
