<!--
 * @Author: xiaoyiwen yyxiao@gongsibao.com
 * @Date: 2022-05-13 21:42:19
 * @LastEditors: xiaoyiwen yyxiao@gongsibao.com
 * @LastEditTime: 2022-05-14 15:12:19
 * @FilePath: \data-screen\src\views\home\components\info.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div class="head">
      <div class="row sc-fs-xl sc-text-white sc-mb-2">消防责任人：{{list.corporation + ' ' + list.corporationMobile || '--'}}</div>
      <div class="row sc-fs-xl sc-text-white sc-mb-2">消防管理人：{{list.proFireManagerName + ' ' + list.proFireManagerMobile || '--'}}</div>
      <div class="row sc-fs-xl sc-text-white sc-mb-2">消防室联系人：{{list.fireRoomManager + ' ' + list.fireRoomManagerMobile || '--'}}</div>
    </div>
    <div class="t1 sc-mt-2 sc-text-white sc-mb-2 sc-fs-xxl">报警通知人员</div>
    <div class="itemBox">
      <!-- <el-scrollbar class="h-100"> -->
        <div>
          <div class="item sc-px-1 sc-fs-xl sc-flex sc-ai-center" v-for="item in list.noticePeople.slice(0,3)" :key="item.manager">
            <div class="sc-mr-2">{{item.manager}}</div>
            <div class="sc-mr-2">{{item.telephone}}</div>
            <div>负责{{item.builds.join(',')}}</div>
          </div>
        </div>
      <!-- </el-scrollbar> -->
    </div>
  </div>
</template>

<script>
export default {
  props:{
    list:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding: 20px 10px 0 10px;
  /deep/.el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .head {
    height: 120px;
    border: 1px solid #23E9CE;
    background: rgba(35, 233, 206, .1);
    border-radius: 4px;
    padding:15px 15px 25px 30px;
    
    .row {
      position: relative;
      &::before {
        content:'';
        width:8px;
        height:8px;
        border-radius: 50%;
        background: #02BCFC;
        position:absolute;
        top: 50%;
        left:-20px;
        transform: translate(0,-50%);
      }
    }
  }
  .itemBox {
    height:140px;
    .item {
      color:#bfbfbf;
      height: 36px;
      background: #21297B;
      border-radius: 3px;
      margin-bottom: 16px;
    }
  }
}
</style>