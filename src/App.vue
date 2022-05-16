<!--
 * @Author: xyw
 * @Date: 2022-05-10 23:12:01
 * @LastEditors: xyw
 * @LastEditTime: 2022-05-16 09:18:10
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
}
</style>
