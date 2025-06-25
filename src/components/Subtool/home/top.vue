<script setup lang="ts">
import { ref, onMounted } from "vue";
import TopList from "@/components/Subtool/home/top/topList.vue";

const hotRank = ref([]);
const newRank = ref([]);
const starRank = ref([]);

onMounted(async () => {
  const res = await fetch("/assets/data/api.json");
  const json = await res.json();
  // 取前5项并格式化为TopList需要的结构
  hotRank.value = (json.data.hotCourses || []).slice(0, 5).map(item => ({
    image: item.coverImg.startsWith('http') ? item.coverImg : 'https://www.tukedu.com' + item.coverImg,
    title: item.title,
    description: item.lecturer,
    price: item.price
  }));
  newRank.value = (json.data.newCourses || []).slice(0, 5).map(item => ({
    image: item.coverImg.startsWith('http') ? item.coverImg : 'https://www.tukedu.com' + item.coverImg,
    title: item.title,
    description: item.lecturer,
    price: item.price
  }));
  starRank.value = (json.data.starCourses || []).slice(0, 5).map(item => ({
    image: item.coverImg.startsWith('http') ? item.coverImg : 'https://www.tukedu.com' + item.coverImg,
    title: item.title,
    description: item.lecturer,
    price: item.price
  }));
});
</script>

<template>
  <n-flex vertical class="top">
    <div class="header">
      <span class="header__title">排行榜</span>
    </div>
    <div class="top__list">
      <TopList title="热门排行"
        v-if="hotRank.length"
        :t1="hotRank[0]" :t2="hotRank[1]" :t3="hotRank[2]" :t4="hotRank[3]" :t5="hotRank[4]"
      />
      <TopList title="新课排行"
        v-if="newRank.length"
        :t1="newRank[0]" :t2="newRank[1]" :t3="newRank[2]" :t4="newRank[3]" :t5="newRank[4]"
      />
      <TopList title="五星排行"
        v-if="starRank.length"
        :t1="starRank[0]" :t2="starRank[1]" :t3="starRank[2]" :t4="starRank[3]" :t5="starRank[4]"
      />
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