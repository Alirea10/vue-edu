<script setup lang="ts">

import TopList from "@/components/Subtool/home/top/topList.vue";
</script>

<template>
  <n-flex vertical class="top">
    <div class="header">
      <span class="header__title">排行榜</span>
    </div>
    <div class="top__list">
      <TopList title="热门排行"></TopList>
      <TopList title="新课排行"></TopList>
      <TopList title="五星排行"></TopList>
    </div>
  </n-flex>
</template>

<style scoped lang="scss">
.top{
  width: 80%;
  display: flex;
  margin: 10px auto 0 auto;

  &__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

}
.header{
  display: flex;
  margin-bottom: 15px;

  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }
}
</style>