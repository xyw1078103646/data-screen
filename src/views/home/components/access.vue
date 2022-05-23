<!--
 * @Author: xiaoyiwen yyxiao@gongsibao.com
 * @Date: 2022-05-13 21:42:19
 * @LastEditors: lz
 * @LastEditTime: 2022-05-23 15:41:55
 * @FilePath: \data-screen\src\views\home\components\info.vue
 * @Description: 物联接入
-->
<template>
  <div class="box">
    <div class="head sc-flex sc-jc-center sc-ai-center sc-text-white sc-mb-1">
      <svg-icon icon-class="access"></svg-icon>
      <div class="sc-ml-1 sc-fs-xxl" @click="$router.push('/list')">
        设备接入数
        <a-count-to
          class="num sc-cursor"
          :startVal="0"
          :endVal="list.total"
          :duration="3000"
        ></a-count-to>
        <!-- <span class="num sc-cursor">{{ list.total }}</span> -->
      </div>
    </div>
    <el-carousel height="0.94rem" v-if="carousel.length > 1">
      <el-carousel-item
        v-for="(item, index) in carousel"
        :key="'access' + index"
      >
        <div class="itemBox sc-flex sc-flex-wrap sc-px-1">
          <div
            class="item w-50 sc-flex sc-ai-center sc-cursor"
            v-for="child in item"
            :key="child.kindName"
            @click="$router.push(`/list?kind=${child.kind}`)"
          >
            <!-- <svg-icon :icon-class="child.kindName"></svg-icon>   -->
            <svg-icon :icon-class="'access' + child.kind"></svg-icon>
            <div class="sc-ml-1">
              <div class="sc-fs-md sc-text-white">
                <span class="sc-mr-1">{{ child.kindName }}</span>
                {{ child.count }}
              </div>
              <div class="proBox sc-flex sc-ai-center">
                <div
                  class="pro"
                  v-for="pro in child.count"
                  :key="'pro' + pro"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div v-else style="height:0.94rem">
      <div class="itemBox sc-flex sc-flex-wrap sc-px-1">
        <div
          class="item w-50 sc-flex sc-ai-center sc-cursor"
          v-for="child in carousel[0]"
          :key="child.kindName"
          @click="$router.push(`/list?kind=${child.kind}`)"
        >
          <!-- <svg-icon :icon-class="child.kindName"></svg-icon>   -->
          <svg-icon :icon-class="'access' + child.kind"></svg-icon>
          <div class="sc-ml-1">
            <div class="sc-fs-md sc-text-white">
              <span class="sc-mr-1">{{ child.kindName }}</span>
              {{ child.count }}
            </div>
            <div class="proBox sc-flex sc-ai-center">
              <div
                class="pro"
                v-for="pro in child.count"
                :key="'pro' + pro"
              ></div>
            </div>
          </div>
        </div>
      </div>
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
      }
    }
  },
  computed: {
    carousel() {
      let listCopy = JSON.parse(JSON.stringify(this.list.kindCount));
      let arr = [];
      let i = 0;
      while (listCopy.length > 0) {
        arr[i] = listCopy.splice(0, 6);
      }
      return arr;
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  .head {
    height: 65px;
    .svg-icon {
      // width: 58px;
      // height: 54px;
      font-size: 54px;
    }
    .num {
      font-size: 28px;
    }
  }
  /deep/.el-carousel__arrow {
    display: none;
  }
  /deep/.el-carousel__indicator--horizontal {
    .el-carousel__button {
      width: 10px;
      height: 10px;
      background: #4cd1ff;
      opacity: 0.3;
      border-radius: 50%;
    }
    &.is-active {
      .el-carousel__button {
        opacity: 1;
      }
    }
  }

  /deep/.el-carousel__item {
    .itemBox {
      .item {
        margin-bottom: 15px;
        .svg-icon {
          // width: 32px;
          // height: 32px;
          font-size: 32px;
        }
        .proBox {
          width: 160px;
          height: 16px;
          margin-top: 5px;
          border: 1px solid #162c85;
          border-radius: 2px;
          overflow: hidden;
          .pro {
            width: 4px;
            min-width: 4px;
            height: 10px;
            background: #23e9ce;
            border-radius: 1px;
            margin-left: 4px;
          }
        }
      }
    }
  }

  .itemBox {
    .item {
      margin-bottom: 15px;
      .svg-icon {
        // width: 32px;
        // height: 32px;
        font-size: 32px;
      }
      .proBox {
        width: 160px;
        height: 16px;
        margin-top: 5px;
        border: 1px solid #162c85;
        border-radius: 2px;
        overflow: hidden;
        .pro {
          width: 4px;
          min-width: 4px;
          height: 10px;
          background: #23e9ce;
          border-radius: 1px;
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
