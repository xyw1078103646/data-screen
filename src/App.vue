<!--
 * @Author: xyw
 * @Date: 2022-05-10 23:12:01
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-16 15:16:50
 * @Description: 
-->
<template>
  <div id="app">
    <el-scrollbar class="h-100">
      <router-view />
    </el-scrollbar>
  </div>
</template>

<style lang="less" scoped>
#app {
  /deep/.el-scrollbar__wrap {
    overflow-x: hidden;
  }
  /deep/.el-scrollbar__view {
    height: 100%;
  }
}
</style>
