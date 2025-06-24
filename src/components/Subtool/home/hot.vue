<script setup lang="ts">

import {onMounted, ref} from "vue";
import Card from "@/components/Subtool/course/card.vue";

const data1 = ref<{ id: string; school1: string }[]>([])

onMounted(async () => {
  try {
    const school1 = await fetch('/assets/data/data1.json');
    data1.value = await school1.json()
  } catch (error) {
    console.error("未能获取学校列表", error);
  }
})
</script>

<template>
  <n-flex vertical class="hot">
    <div class="hot__header">
      <span class="hot__title">热门课程</span>
      <span class="hot__school" v-for="item in data1" :key="item.id">{{ item.school1 }}</span>
    </div>

    <div class="hot__list">
      <card v-for="n in 6" :key="n" tag="铃兰" description="铃兰小姐是我们的光" imageUrl="/assets/images/img.jpg"
            price="144" showBorder></card>
    </div>
  </n-flex>
</template>

<style scoped lang="scss">
.hot {

  margin: 10px auto 0 auto;
  width: 80%;

  &__header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }

  &__school {
    margin-right: 10px;
    cursor: pointer;

    &:hover {
      color: #1890ff;
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: Arial, sans-serif;
    border: 15px;
    border-radius: 5px;
    margin: 10px auto 0 auto;
  }
}
</style>