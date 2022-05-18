<!--
 * @Author: xiaoyiwen yyxiao@gongsibao.com
 * @Date: 2022-05-13 21:42:19
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-18 10:59:06
 * @FilePath: \data-screen\src\views\home\components\info.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div class="head">
      <div class="row sc-fs-xl sc-text-white sc-mb-2">
        <span class="text">消防责任人：</span
        >{{ list.corporation + " " + list.corporationMobile || "--" }}
      </div>
      <div class="row sc-fs-xl sc-text-white sc-mb-2">
        <span class="text">消防管理人：</span
        >{{ list.proFireManagerName + " " + list.proFireManagerMobile || "--" }}
      </div>
      <div class="row sc-fs-xl sc-text-white sc-mb-2">
        <span class="text">消防室联系人：</span
        >{{ list.fireRoomManager + " " + list.fireRoomManagerMobile || "--" }}
      </div>
    </div>
    <div class="t1 sc-mt-2 sc-text-white sc-mb-2 sc-fs-xxl">报警通知人员</div>
    <div class="itemBox">
      <!-- <el-scrollbar class="h-100"> -->
      <div>
        <div
          class="item sc-px-1 sc-fs-xl sc-flex sc-ai-center"
          v-for="item in list.noticePeople.slice(0, 3)"
          :key="item.manager"
        >
          <div class="sc-mr-2 manager">{{ item.manager }}</div>
          <div class="sc-mr-2 telephone">{{ item.telephone }}</div>
          <div>负责{{ item.builds.join(",") }}</div>
        </div>
      </div>
      <!-- </el-scrollbar> -->
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
  padding: 20px 10px 0 10px;
  /deep/.el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .head {
    height: 120px;
    border: 1px solid #23e9ce;
    background: rgba(35, 233, 206, 0.1);
    border-radius: 4px;
    padding: 15px 15px 25px 30px;

    .row {
      position: relative;
      .text {
        width: 112px;
        display: inline-block;
      }
      &::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #02bcfc;
        position: absolute;
        top: 50%;
        left: -20px;
        transform: translate(0, -50%);
      }
    }
  }
  .itemBox {
    height: 140px;
    .item {
      color: #bfbfbf;
      height: 36px;
      background: #21297b;
      border-radius: 3px;
      margin-bottom: 16px;
      .manager {
        width: 48px;
      }
      .telephone {
        width: 120px;
      }
    }
  }
}
</style>
