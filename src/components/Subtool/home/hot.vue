<script setup lang="ts">

import {onMounted, ref} from "vue";
import Card from "@/components/Subtool/course/card.vue";

const data1 = ref<any[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/assets/data/api.json');
    const json = await res.json();
    data1.value = json.data.hotCourses || [];
  } catch (error) {
    console.error("未能获取热门课程", error);
  }
})
</script>

<template>
  <n-flex vertical class="hot">
    <div class="hot__header">
      <span class="hot__title">热门课程</span>
    </div>
    <div class="hot__list">
      <card
        v-for="item in data1"
        :key="item.id"
        :tag="item.lecturer"
        :description="item.title"
        :imageUrl="item.coverImg.startsWith('http') ? item.coverImg : 'https://www.tukedu.com' + item.coverImg"
        :price="item.price"
        showBorder
      />
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