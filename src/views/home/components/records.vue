<!--
 * @Author: xiaoyiwen  
 * @Date: 2022-05-13 21:42:19
 * @LastEditors: xyw1078103646 1078103646@qq.com
 * @LastEditTime: 2022-05-31 09:10:57
 * @FilePath: \data-screen\src\views\home\components\info.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <el-scrollbar class="h-100">
      <div
        class="itemBox"
        ref="itemBox"
        :style="{
          animationDuration: getDuration,
        }"
        @mouseover="stop"
        @mouseout="animation"
      >
        <div
          class="item sc-flex sc-ai-center sc-cursor"
          v-for="item in list"
          :key="item.id"
          @click="goDetail(item)"
        >
          <svg-icon icon-class="records"></svg-icon>
          <div class="sc-fs-ellipsis sc-text-white">{{ item.stateName }}</div>
          <div class="sc-text-white sc-mr-2">{{ item.showTime }}</div>
          <div class="sc-text-white">{{ item.typeName }}</div>
          <template v-if="item.handle == 1">
            <div
              class="tag sc-flex sc-ai-center type1 sc-cursor"
              @click.stop="setRecord(item, '误报')"
            >
              误报
            </div>
            <div
              class="tag sc-flex sc-ai-center type2 sc-cursor"
              @click.stop="setRecord(item, '已处理')"
            >
              未处理
            </div>
            <div
              class="tag sc-flex sc-ai-center type3 sc-cursor"
              @click.stop="setRecord(item, '需救援')"
            >
              需救援
            </div>
          </template>
          <template v-else>
            <div class="sc-text-white sc-ml-2">{{ item.context }}</div>
          </template>
        </div>
      </div>
    </el-scrollbar>
    <!-- 报警详情 -->
    <el-dialog
      title="报警详情"
      :visible.sync="detailFlag"
      :fullscreen="false"
      :before-close="closeDialog"
    >
      <template v-if="detailData">
        <el-descriptions title="设备信息" :column="2">
          <el-descriptions-item label="安装位置">{{
            detailData.address
          }}</el-descriptions-item>
          <el-descriptions-item label="设备类型">{{
            detailData.kindName
          }}</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="报警信息" :column="2" class="sc-mt-3">
          <el-descriptions-item label="设备状态">{{
            detailData.typeName
          }}</el-descriptions-item>
          <el-descriptions-item label="报警明细">{{
            detailData.stateName
          }}</el-descriptions-item>
          <el-descriptions-item label="报警时间">{{
            detailData.createTime
          }}</el-descriptions-item>
          <el-descriptions-item label="通知次数">{{
            detailData.count || 0
          }}</el-descriptions-item>
        </el-descriptions>
        <el-descriptions
          title="处理信息"
          :column="2"
          class="sc-mt-3"
          v-if="detailData.handle == 2"
        >
          <el-descriptions-item label="处理方式">{{
            detailData.modeName
          }}</el-descriptions-item>
          <el-descriptions-item label="处理时间">{{
            detailData.updateTime
          }}</el-descriptions-item>
          <el-descriptions-item label="处理照片">
            <div class="sc-p-1">
              <el-image
                v-for="item in detailData.images"
                :key="item"
                style="width: 0.5208rem; height: 0.5208rem"
                :src="item"
                :fit="fit"
              ></el-image>
            </div>
          </el-descriptions-item>
        </el-descriptions>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { getDetail } from "@/api/operationApi.js";
import { dispose } from "@/api/homeApi.js";
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      detailFlag: false,
      detailData: null,
      timer:null
    };
  },
  computed: {
    getDuration() {
      return this.list.length * 2 + "s";
    },
  },
  mounted(){
    this.animation()
  },
  beforeDestroy(){
    this.stop()
  },
  methods: {
    stop(){
      clearInterval(this.timer)
      this.timer = null
    },
    //模拟动画
    animation(){
      if(!this.timer){
        let h = this.$refs.itemBox.clientHeight
        let pHeight = this.$refs.itemBox.parentNode.clientHeight
        //  console.log(777,h,pHeight,this.$refs.itemBox.parentNode.parentNode.scrollTop)
        this.timer = setInterval(() => {   
          if((this.$refs.itemBox.parentNode.parentNode.scrollTop + pHeight) == h) {
            this.$refs.itemBox.parentNode.parentNode.scrollTop = 0
          }else{
            this.$refs.itemBox.parentNode.parentNode.scrollTop++
          }         
        },50)
      }
    },
    //打开详情弹框
    async goDetail(row) {
      const res = await getDetail({
        handle: row.handle,
        state: row.state,
        deviceId: row.deviceId,
        timestamp: row.timestamp,
      });
      this.detailData = res.data;
      this.detailData = Object.assign(this.detailData, { handle: row.handle });
      this.detailFlag = true;
    },
    //关闭弹框
    closeDialog() {
      this.detailData = null;
      this.detailFlag = false;
    },
    //处理报警
    async setRecord(item, context) {
      await dispose({
        state: item.state,
        timestamp: item.timestamp,
        deviceId: item.deviceId,
        ownerId: item.ownerId,
        context: context,
      });
      item.handle = 2;
      item.context = context;
    },
  },
};
</script>

<style lang="less" scoped>
// @keyframes myScroll {
//   0% {
//     transform: translateY(0%);
//   }
//   100% {
//     transform: translateY(-100%);
//   }
// }
.box {
  padding: 22px 15px;
  height: 350px;
  overflow: hidden;
  /deep/.el-scrollbar__wrap {
    overflow-x: hidden;
    // transition:all 3s;
  }
  .itemBox {
    animation: myScroll linear infinite;
    &:hover {
      animation-play-state: paused;
    }
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
