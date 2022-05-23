<!--
 * @Author: xiaoyiwen yyxiao@gongsibao.com
 * @Date: 2022-05-13 21:42:19
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-23 10:56:44
 * @FilePath: \data-screen\src\views\home\components\info.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div class="head sc-flex sc-ai-center sc-jc-center sc-text-white">
      <!-- <svg-icon icon-class="position"></svg-icon> -->
      <img src="../../../assets/images/home/position.png" alt="" />
      <div class="sc-ml-3">
        <div class="num sc-mb-1 sc-cursor" @click="$router.push('/patrol')">
          {{ list.total }}
        </div>
        <div class="text">需巡查重点部位</div>
      </div>
    </div>
    <div class="sc-text-white sc-fs-xl sc-mt-3">
      已巡查重点部位{{ ` ${list.count}/${list.total}` }}
    </div>
    <div class="process sc-mt-2">
      <div
        class="active w-100 h-100"
        :style="{ width: (list.count / list.total) * 100 + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 0 20px;
  .head {
    padding-top: 20px;
    .svg-icon,
    img {
      width: 100px;
      height: 100px;
    }
    .num {
      font-size: 44px;
    }
    .text {
      font-size: 20px;
    }
  }
  .process {
    height: 14px;
    background: rgba(76, 209, 255, 0.2);
    border-radius: 7px;
    overflow: hidden;
    .active {
      border-radius: 7px;
      background: rgba(76, 209, 255, 1);
    }
  }
}
</style>
