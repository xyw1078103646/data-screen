<!--
 * @Author: xyw
 * @Date: 2022-05-16 11:01:18
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-16 11:08:36
 * @Description: 
-->
<template>
  <div class="bg">
    <div class="container h-100">
      <div class="titleBox">
        <div class="title"></div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bg {
  min-height: 100%;
  background-image: url("../../../assets/images/home/bg.png");
  background-size: 100% 100%;
  .container {
    width: 1920px;
    margin: 0 auto;
    .titleBox {
      width: 100%;
      height: 85px;
      background-image: url("../../../assets/images/home/titlebg.png");
      background-size: 100% 100%;
      position: relative;

      .title {
        width: 424px;
        height: 35px;
        background-image: url("../../../assets/images/home/title.png");
        background-size: 100% 100%;
        position: absolute;
        top: 22px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    .content {
      padding: 0 20px 15px 20px;
    }
  }
}
</style>
