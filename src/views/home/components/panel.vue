<!--
 * @Author: xyw
 * @Date: 2022-05-11 11:16:35
 * @LastEditors: xiaoyiwen yyxiao@gongsibao.com
 * @LastEditTime: 2022-05-13 23:31:23
 * @Description: 
-->
<template>
  <div class="panel-container" :style="styleObj">
    <div class="title sc-flex sc-jc-between sc-ai-center">
      <span>{{title}}</span>
      <svg-icon icon-class="arrow"></svg-icon>
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
    title:{
      type:String,
      default:''
    }
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
  height: 100%;
  background: rgba(41,85,252,.1);
  border: 1px solid #1A3F72;
  position: relative;
  // padding: 0 10px;
  .title {
    height: 40px;
    padding: 0 20px 0 28px;
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 500;
    color: #FFFFFF;
    background: linear-gradient(90deg, #151E5B 0%, #142765 50%, #15205F 100%);
    .svg-icon {
      cursor: pointer;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width:23px;
      height: 23px;
    border-top: 3px solid #3680E4;
    border-left: 3px solid #3680E4;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width:23px;
      height: 23px;
    border-top: 3px solid #3680E4;
    border-right:3px solid #3680E4;
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
      width:23px;
      height: 23px;
      border-left: 3px solid #3680E4;
      border-bottom: 3px solid #3680E4;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width:23px;
      height: 23px;
      border-right: 3px solid #3680E4;
      border-bottom: 3px solid #3680E4;
    }
  }
}
</style>
