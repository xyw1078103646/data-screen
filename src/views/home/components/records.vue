<!--
 * @Author: xiaoyiwen yyxiao@gongsibao.com
 * @Date: 2022-05-13 21:42:19
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-16 09:23:38
 * @FilePath: \data-screen\src\views\home\components\info.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <el-scrollbar class="h-100">
      <div class="itemBox">
        <div
          class="item sc-flex sc-ai-center"
          v-for="item in list"
          :key="item.id"
          @click="handleClick(item.id)"
        >
          <svg-icon icon-class="records"></svg-icon>
          <div class="sc-fs-ellipsis sc-text-white">{{ item.stateName }}</div>
          <div class="sc-text-white sc-mr-2">{{ item.showTime }}</div>
          <div class="sc-text-white">{{ item.typeName }}</div>
          <template v-if="item.handle == 1">
            <div class="tag sc-flex sc-ai-center type1">误报</div>
            <div class="tag sc-flex sc-ai-center type2">未处理</div>
            <div class="tag sc-flex sc-ai-center type3">需救援</div>
          </template>
          <template v-else>
            <div class="sc-text-white sc-ml-2">已处理</div>
          </template>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    //处理报警
    handleClick() {},
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 22px 15px;
  height: 350px;
  overflow: hidden;
  /deep/.el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .itemBox {
    .item {
      height: 28px;
      margin-bottom: 16px;
      background: rgba(43, 53, 136, 0.5);
      padding: 0 8px;
      white-space: nowrap;
      .svg-icon {
        width: 22px;
        height: 22px;
        margin-right: 12px;
      }
      .sc-fs-ellipsis {
        width: 160px;
        margin-right: 15px;
      }
      .tag {
        height: 20px;
        padding: 6px 7px;
        border-radius: 4px;
        font-size: 12px;
        margin-left: 4px;
        &.type1 {
          background: rgba(2, 188, 252, 0.2);
          color: rgba(2, 188, 252, 1);
        }
        &.type2 {
          background: rgba(35, 233, 206, 0.2);
          color: rgba(35, 233, 206, 1);
        }
        &.type3 {
          background: rgba(253, 222, 20, 0.2);
          color: rgba(253, 222, 20, 1);
        }
      }
    }
  }
}
</style>
